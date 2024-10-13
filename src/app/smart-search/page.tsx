"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import HorizontalBarChart from "@/components/SmartSearch";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import PatientCard from "@/components/Patient/PatientCard";
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

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Smart Search" />
      <div>
        {apiResult ? (
          <>
            <HorizontalBarChart data={apiResult} /> {/* Pass the apiResult to the chart */}
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <SimilarPatient />
    </DefaultLayout>
  );
};

export default SmartSearchPage;
