import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface Patient {
  subject_id: string;
  admittance_time: string;
  dispatch_time: string;
  admit_date: string;
  dispatch_date: string;
  admission_type: string;
  admission_location: string;
  discharge_location: string;
  insurance: string;
  language: string;
  ethnicity: string;
  diagnosis: string;
  report: string;
}

const PatientCard: React.FC<{ patient: Patient }> = ({ patient }) => {
  const router = useRouter();

  // Build a query string for similar patients based on certain fields
  const {
    admission_type,
    admission_location,
    discharge_location,
    insurance,
    language,
    ethnicity,
    diagnosis,
    report,
  } = patient;

  const formattedString = [
    admission_type || "NaN",
    admission_location || "NaN",
    discharge_location || "NaN",
    insurance || "NaN",
    language || "NaN",
    ethnicity || "NaN",
    diagnosis || "NaN",
    report || "NaN",
  ].join(";");

  const handleExploreSimilarPatients = async () => {
    try {
      // Make the API call
      const response = await fetch(
        `http://localhost:8000/?new_text=${encodeURIComponent(formattedString)}`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch data from the API.");
      }

      const apiResult = await response.json();

      // Build the URL with query parameters
      const queryParams = new URLSearchParams({
        result: JSON.stringify(apiResult),
      });

      // Redirect to result page with query
      router.push(`/smart-search?${queryParams.toString()}`);
    } catch (error) {
      console.error("Error fetching similar patients:", error);
      alert("Error during API call");
    }
  };

  return (
    <a
      href="#"
      className="relative block overflow-hidden rounded-lg border border-gray-100 dark:border-gray-700 p-4 sm:p-6 lg:p-8 bg-white dark:bg-gray-800"
    >
      <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>

      <div className="sm:flex sm:justify-between sm:gap-4">
        <div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white sm:text-xl">
            Subject ID: {patient.subject_id || "N/A"}
          </h3>

          <p className="mt-1 text-xs font-medium text-gray-600 dark:text-gray-400">
            Diagnosis: {patient.diagnosis || "N/A"}
          </p>
        </div>

        <div className="hidden sm:block sm:shrink-0">
          <img
            alt="Patient"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
            className="size-16 rounded-lg object-cover shadow-sm"
          />
        </div>
      </div>

      <div className="mt-4">
        <p className="text-sm text-gray-500 dark:text-gray-300">
          Admission Type: {patient.admission_type || "N/A"}
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-300">
          Admission Location: {patient.admission_location || "N/A"}
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-300">
          Discharge Location: {patient.discharge_location || "N/A"}
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-300">
          Report: {patient.report || "N/A"}
        </p>
      </div>

      <dl className="mt-6 flex gap-4 sm:gap-6">
        <div className="flex flex-col-reverse">
          <dt className="text-sm font-medium text-gray-600 dark:text-gray-400">
            Admit Date
          </dt>
          <dd className="text-xs text-gray-500 dark:text-gray-300">
            {patient.admit_date || "N/A"}
          </dd>
        </div>

        <div className="flex flex-col-reverse">
          <dt className="text-sm font-medium text-gray-600 dark:text-gray-400">
            Dispatch Date
          </dt>
          <dd className="text-xs text-gray-500 dark:text-gray-300">
            {patient.dispatch_date || "N/A"}
          </dd>
        </div>

        <div className="flex flex-col-reverse">
          <dt className="text-sm font-medium text-gray-600 dark:text-gray-400">
            Insurance
          </dt>
          <dd className="text-xs text-gray-500 dark:text-gray-300">
            {patient.insurance || "N/A"}
          </dd>
        </div>

        <div className="flex flex-col-reverse">
          <dt className="text-sm font-medium text-gray-600 dark:text-gray-400">
            Language
          </dt>
          <dd className="text-xs text-gray-500 dark:text-gray-300">
            {patient.language || "N/A"}
          </dd>
        </div>

        <div className="flex flex-col-reverse">
          <dt className="text-sm font-medium text-gray-600 dark:text-gray-400">
            Ethnicity
          </dt>
          <dd className="text-xs text-gray-500 dark:text-gray-300">
            {patient.ethnicity || "N/A"}
          </dd>
        </div>
      </dl>

      <div className="flex gap-4">
        <div className="mt-10 mb-4">
          <Link
            href="/chat"
            className="inline-block px-6 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring"
          >
            Chat with Specialist
          </Link>
        </div>
        <div className="mt-10 mb-4">
          <button
            onClick={handleExploreSimilarPatients}
            className="inline-block px-6 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring"
          >
            Explore Similar Patients
          </button>
        </div>
      </div>
    </a>
  );
};

export default PatientCard;
