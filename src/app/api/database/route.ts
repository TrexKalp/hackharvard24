import { join } from 'path';
import Database from 'better-sqlite3';

// Open the database
const dbPath = join(process.cwd(), 'src/data.db');
const db = new Database(dbPath);

export async function GET(req) {
  try {
    // Query to select all data from the random_data table
    const rows = db.prepare('SELECT * FROM medical_supplies').all();

    // Respond with the data as JSON
    return new Response(JSON.stringify({ data: rows }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Database error:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch data from the database' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
