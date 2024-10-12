import pandas as pd
import openai
from dotenv import load_dotenv
import os
import time

def read_csv_to_list(file_path):
    df = pd.read_csv(file_path)
    df = df.iloc[:, 3:]  # Exclude the first 3 columns
    rows = df.values.tolist()
    concatenated_rows = [','.join(map(str, row)) for row in rows]
    return concatenated_rows

file_path = 'ADMISSIONS.csv'
rows = read_csv_to_list(file_path)

# Save the concatenated rows to a new CSV file
output_file_path = 'concatenated_ADMISSIONS.csv'
with open(output_file_path, 'w') as f:
    for row in rows:
        f.write(row + '\n')

# # Print the concatenated rows to verify
# for row in rows:
#     print(row)

#print(rows[0])

PROCEDE = True

if PROCEDE:
    load_dotenv('.env.local')
    openai.api_key = os.getenv('OPENAI_API_KEY')
    openai.organization = os.getenv('OPENAI_ORG_ID')

    def get_embeddings(text_list):
        embeddings = []
        response = openai.embeddings.create(
            input=text_list,
            model="text-embedding-ada-002"
        )
        embeddings = [item.embedding for item in response.data]
        print(embeddings)
        return embeddings

    embeddings = get_embeddings(rows)
    
    # Save the embeddings to a new CSV file
    embeddings_output_file_path = 'embeddings_ADMISSIONS.csv'
    pd.DataFrame(embeddings).to_csv(embeddings_output_file_path, index=False)
    
    print(embeddings[0])