const connectToDatabase = require('@/lib/mongodb');

export async function GET(req, res) {
  try {
    const { db } = await connectToDatabase();

    // Fetch something from your collection (for example, from a 'users' collection)
    const users = await db.collection('users').find({}).toArray();

    // Return the fetched data as JSON
    return new Response(JSON.stringify({ success: true, users }), {
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
