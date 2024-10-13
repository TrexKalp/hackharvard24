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

  useEffect(() => {
    const result = searchParams.get("result");
    if (result) {
      // Decode and parse the result from the search parameters
      setApiResult(JSON.parse(decodeURIComponent(result)));
    }
  }, [searchParams]);

  const splitPatientData = (row: string) => {
    const data = row.split(";"); // Split the data string by semicolons
    return {
      admissionType: data[0],
      admissionLocation: data[1],
      dischargeLocation: data[2],
      insurance: data[3] === "nan" ? "N/A" : data[3], // Replace "nan" with "N/A"
      religion: data[4] === "nan" ? "N/A" : data[4],
      maritalStatus: data[5] === "nan" ? "N/A" : data[5],
      race: data[6] === "nan" ? "N/A" : data[6],
      diagnosis: data[7] === "nan" ? "N/A" : data[7],
      similarityScore: data[8],
    };
  };

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Smart Search" />
      <div>
        {apiResult ? (
          <>
            <HorizontalBarChart data={apiResult} /> {/* Pass the apiResult to the chart */}
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
