const connectToDatabase = require('@/lib/mongodb');

export async function POST(req, res) {
  try {
    // Connect to the database
    const { db } = await connectToDatabase();

    // Define the data you want to insert
    const data = {
      name: 'John Doe',
      email: 'john.doe@example.com',
      age: 30,
      createdAt: new Date(),
    };

    // Insert data into a collection called 'testCollection'
    const result = await db.collection('testCollection').insertOne(data);

    // Return the result of the insertion
    return new Response(JSON.stringify({ success: true, result }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
