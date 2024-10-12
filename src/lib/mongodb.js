const { MongoClient } = require('mongodb');

const uri = process.env.MONGODB_URI; // Add this to your .env.local file

let client;
let clientPromise;

if (!process.env.MONGODB_URI) {
  throw new Error("Please add your MongoDB URI to .env.local");
}

if (process.env.NODE_ENV === 'development') {
  // In development, use a global variable to maintain the connection and avoid connection pooling issues
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // In production, avoid using global variables
  client = new MongoClient(uri);
  clientPromise = client.connect();
}

async function connectToDatabase() {
  const client = await clientPromise;
  const db = client.db('searches'); // Replace 'goals' with your database name
  return { db };
}

module.exports = connectToDatabase;
