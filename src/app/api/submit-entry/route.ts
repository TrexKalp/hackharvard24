const connectToDatabase = require("@/lib/mongodb");

export async function POST(req, res) {
  try {
    // Parse the request body to JSON
    const body = await req.json();

    // Connect to the database
    const { db } = await connectToDatabase();

    // Define the data you want to insert (based on the request body)
    const data = {
      subject_id: body.subject_id,
      admittance_time: body.admittance_time,
      dispatch_time: body.dispatch_time,
      admit_date: body.admit_date,
      dispatch_date: body.dispatch_date,
      admission_type: body.admission_type,
      admission_location: body.admission_location,
      discharge_location: body.discharge_location,
      insurance: body.insurance,
      language: body.language,
      ethnicity: body.ethnicity,
      diagnosis: body.diagnosis,
      report: body.report,
      createdAt: new Date(),
    };

    // Insert data into a collection called 'entries'
    const result = await db.collection("entries").insertOne(data);

    // Return the result of the insertion
    return new Response(JSON.stringify({ success: true, result }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
