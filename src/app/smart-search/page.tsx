"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import HorizontalBarChart from "@/components/SmartSearch";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import SimilarPatient from "@/components/Patient/SimilarPatient";

const SmartSearchPage: React.FC = () => {
  const searchParams = useSearchParams();
  const [apiResult, setApiResult] = useState<any>(null);
  const [targetPatientData, setTargetPatientData] = useState<any>(null);

  useEffect(() => {
    const result = searchParams.get("result");
    if (result) {
      // Decode and parse the result from the search parameters
      const parsedResult = JSON.parse(decodeURIComponent(result));
      setApiResult(parsedResult);

      // Set target patient data if available
      if (parsedResult.target_patient && parsedResult.target_patient.row) {
        const data = splitPatientData(parsedResult.target_patient.row);
        setTargetPatientData(data);
      }
    }
  }, [searchParams]);

  const splitPatientData = (row: string) => {
    const data = row.split(";"); // Split the data string by semicolons
    return {
      admissionType: data[0] || "N/A",
      admissionLocation: data[1] || "N/A",
      dischargeLocation: data[2] || "N/A",
      insurance: data[3] === "nan" ? "N/A" : data[3], // Replace "nan" with "N/A"
      language: data[4] === "nan" ? "N/A" : data[4],
      religion: data[5] === "nan" ? "N/A" : data[5],
      maritalStatus: data[6] === "nan" ? "N/A" : data[6],
      race: data[7] === "nan" ? "N/A" : data[7],
      diagnosis: data[8] === "nan" ? "N/A" : data[8],
      similarityScore: data[9] || "N/A",
    };
  };

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Smart Search" />
      <div>
        {apiResult ? (
          <>
            <HorizontalBarChart data={apiResult} /> {/* Pass the apiResult to the chart */}
            
            {targetPatientData ? (
              <SimilarPatient
                patientId={"Target"}
                admissionType={targetPatientData.admissionType}
                admissionLocation={targetPatientData.admissionLocation}
                dischargeLocation={targetPatientData.dischargeLocation}
                insurance={targetPatientData.insurance}
                language={targetPatientData.language}
                religion={targetPatientData.religion}
                maritalStatus={targetPatientData.maritalStatus}
                race={targetPatientData.race}
                diagnosis={targetPatientData.diagnosis}
                similarityScore={"N/A"} // No similarity score for the target patient
              />
            ) : (
              <p>Loading target patient...</p>
            )}

            {/* Cards for the similar patients */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              {apiResult.top_10_closest.map((patient: any, index: number) => {
                const patientData = splitPatientData(patient.row);
                return (
                  <SimilarPatient
                    key={index}
                    patientId={index + 1}
                    admissionType={patientData.admissionType}
                    admissionLocation={patientData.admissionLocation}
                    dischargeLocation={patientData.dischargeLocation}
                    insurance={patientData.insurance}
                    language={patientData.language}
                    religion={patientData.religion}
                    maritalStatus={patientData.maritalStatus}
                    race={patientData.race}
                    diagnosis={patientData.diagnosis}
                    similarityScore={patient.similarity_score}
                  />
                );
              })}
            </div>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </DefaultLayout>
  );
};

export default SmartSearchPage;
