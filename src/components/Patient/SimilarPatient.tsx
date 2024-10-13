import React from "react";

interface SimilarPatientProps {
  patientId: number;
  admissionType: string;
  admissionLocation: string;
  dischargeLocation: string;
  insurance: string;
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
  religion,
  maritalStatus,
  race,
  diagnosis,
  similarityScore,
}) => {
  return (
    <article className="rounded-xl bg-white dark:bg-gray-800 p-4 ring ring-indigo-50 dark:ring-gray-700 sm:p-6 lg:p-8">
      <div className="flex items-start sm:gap-8">
        <div>
          <strong className="rounded border border-indigo-500 dark:border-indigo-400 bg-indigo-500 dark:bg-indigo-400 px-3 py-1.5 text-[10px] font-medium text-white">
            Patient ID: {patientId}
          </strong>

          <h3 className="mt-4 text-lg font-medium sm:text-xl">
            <a href="#" className="hover:underline text-indigo-600 dark:text-indigo-400">
              {`Admission Type: ${admissionType}`}
            </a>
          </h3>

          <p className="mt-1 text-sm text-gray-700 dark:text-gray-300">
            <strong>Admission Location:</strong> {admissionLocation}
          </p>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            <strong>Discharge Location:</strong> {dischargeLocation}
          </p>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            <strong>Insurance:</strong> {insurance}
          </p>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            <strong>Religion:</strong> {religion}
          </p>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            <strong>Marital Status:</strong> {maritalStatus}
          </p>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            <strong>Race:</strong> {race}
          </p>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            <strong>Diagnosis:</strong> {diagnosis}
          </p>

          <div className="mt-4">
            <p className="text-xs font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
              Similarity Score: <span className="font-bold text-indigo-600 dark:text-indigo-400">{similarityScore.toFixed(4)}</span>
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default SimilarPatient;
