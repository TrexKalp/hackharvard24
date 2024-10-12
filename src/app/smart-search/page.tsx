import DefaultLayout from "@/components/Layouts/DefaultLaout";
import React from "react";
import HorizontalBarChart from "@/components/SmartSearch";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

const SmartSearchPage: React.FC = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Smart Search For Patient 21341324" />
      <HorizontalBarChart />
    </DefaultLayout>
  );
};

export default SmartSearchPage;
