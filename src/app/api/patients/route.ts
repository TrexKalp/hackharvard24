const connectToDatabase = require('@/lib/mongodb');

export async function GET(req) {
  try {
    const { db } = await connectToDatabase();

    // Fetch data from 'entries' collection
    const patients = await db.collection('entries').find({}).toArray();

    // Return the fetched data as JSON
    return new Response(JSON.stringify({ success: true, patients }), {
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
