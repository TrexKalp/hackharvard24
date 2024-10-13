"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import DefaultLayout from "@/components/Layouts/DefaultLaout";

const ResultPage = () => {
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
      <div>
        {apiResult ? (
          <pre>{JSON.stringify(apiResult, null, 2)}</pre> // Displaying the JSON result
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </DefaultLayout>
  );
};

export default ResultPage;
