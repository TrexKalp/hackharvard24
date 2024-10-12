# main.py

from fastapi import FastAPI
import pandas as pd
import openai
from dotenv import load_dotenv
import os
import numpy as np

load_dotenv(".env.local")
openai.api_key = os.getenv("OPENAI_API_KEY")
openai.organization = os.getenv("OPENAI_ORG_ID")


def read_csv_to_list(file_path):
    df = pd.read_csv(file_path)
    rows = df.values.tolist()
    concatenated_rows = [",".join(map(str, row)) for row in rows]
    return concatenated_rows


def get_single_embedding(text):
    response = openai.embeddings.create(input=text, model="text-embedding-ada-002")
    return response.data[0].embedding  # Return the embedding for the single input


def cosine_similarity(a, b):
    dot_product = np.dot(a, b)
    norm_a = np.linalg.norm(a)
    norm_b = np.linalg.norm(b)
    return dot_product / (norm_a * norm_b)


def find_top_n_similar_embeddings(new_text, existing_embeddings, n=10):
    new_embedding = get_single_embedding(new_text)
    similarities = [
        cosine_similarity(new_embedding, existing_embedding)
        for existing_embedding in existing_embeddings
    ]
    top_n_indices = np.argsort(similarities)[-n:][
        ::-1
    ]  # Get indices of the top n similarities in descending order
    top_n_embeddings = [existing_embeddings[i] for i in top_n_indices]
    top_n_scores = [similarities[i] for i in top_n_indices]
    return (
        top_n_embeddings,
        top_n_indices,
        top_n_scores,
    )  # Return top n embeddings, indices, and scores


# Load the existing embeddings from the CSV
embeddings_output_file_path = "embeddings_ADMISSIONS.csv"
existing_embeddings = pd.read_csv(
    embeddings_output_file_path
).values.tolist()  # Load embeddings

# # Example: Finding closest embedding for a new entry
# new_text_entry = "EMERGENCY;EMERGENCY ROOM ADMIT;SNF;Medicare;nan;CATHOLIC;DIVORCED;WHITE;HUMERAL FRACTURE;0;1"
# closest_embeddings, indexes, similarity_scores = find_top_n_similar_embeddings(new_text_entry, existing_embeddings)

# #print(f"Closest Embedding: {closest_embeddings}")
# print(f"Index of Closest Match: {indexes}")
# print(f"Cosine Similarity Score: {similarity_scores}")
# Load the concatenated rows from the CSV
concatenated_rows_file_path = "concatenated_ADMISSIONS.csv"
concatenated_rows = read_csv_to_list(concatenated_rows_file_path)

# # Print the top 10 closest rows using the indexes
# top_10_closest_rows = [concatenated_rows[i-1] for i in indexes]
# print("Top 10 Closest Rows:")
# for row in top_10_closest_rows:
#     print(row)


from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def get_top_10_closest(new_text: str):
    closest_embeddings, indexes, similarity_scores = find_top_n_similar_embeddings(
        new_text, existing_embeddings
    )
    top_10_closest_rows = [concatenated_rows[i - 1] for i in indexes]
    result = [
        {"row": row, "similarity_score": score}
        for row, score in zip(top_10_closest_rows, similarity_scores)
    ]
    return {"top_10_closest": result}
