import React from "react";
import { useRouter } from "next/navigation"; // Assuming you're using Next.js for navigation

interface SimilarPatientProps {
  patientId: number;
  admissionType: string;
  admissionLocation: string;
  dischargeLocation: string;
  insurance: string;
  language: string;
  religion: string;
  maritalStatus: string;
  race: string;
  diagnosis: string;
  similarityScore: number;
}

const SimilarPatient: React.FC<SimilarPatientProps> = ({
  patientId,
  admissionType,
  admissionLocation,
  dischargeLocation,
  insurance,
  language,
  religion,
  maritalStatus,
  race,
  diagnosis,
  similarityScore,
}) => {
  const router = useRouter();

  const handleChatClick = () => {
    router.push(`/chat?patientId=${patientId}`);
  };

  return (
    <article className="rounded-2xl bg-white dark:bg-gray-900 shadow-lg ring-1 ring-gray-200 dark:ring-gray-700 p-6 transition-transform transform hover:scale-105 hover:shadow-2xl">
      <div className="flex flex-col sm:flex-row sm:items-start sm:gap-6">
        <div className="flex-1">
          <span className="inline-block rounded-full bg-indigo-500 dark:bg-indigo-400 text-white text-xs px-3 py-1">
            Patient ID: {patientId}
          </span>

          <h3 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
            Admission Type: {admissionType}
          </h3>

          <div className="mt-3 space-y-2">
            <p className="text-sm text-gray-600 dark:text-gray-300">
              <strong className="font-semibold">Admission Location:</strong>{" "}
              {admissionLocation}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              <strong className="font-semibold">Discharge Location:</strong>{" "}
              {dischargeLocation}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              <strong className="font-semibold">Insurance:</strong> {insurance}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              <strong className="font-semibold">Language:</strong> {language}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              <strong className="font-semibold">Religion:</strong> {religion}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              <strong className="font-semibold">Marital Status:</strong>{" "}
              {maritalStatus}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              <strong className="font-semibold">Race:</strong> {race}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              <strong className="font-semibold">Diagnosis:</strong> {diagnosis}
            </p>
          </div>
          <div className="flex gap-8 items-center">
            <div className="mt-5">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                Similarity Score:{" "}
                <span className="text-lg font-bold text-indigo-600 dark:text-indigo-400">
                  {similarityScore.toFixed(4)}
                </span>
              </p>
            </div>

            <div className="mt-6">
              <button
                onClick={handleChatClick}
                className="inline-block px-6 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-50"
              >
                Chat with Specialist
              </button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default SimilarPatient;
