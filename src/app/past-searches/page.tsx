import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import ProfileBox from "@/components/ProfileBox";
import NewEntryPage from "@/components/NewEntry/NewEntryPage";
import PatientCard from "@/components/Patient/PatientCard";
import PatientSearch from "@/components/Patient/PatientSearch";

export const metadata: Metadata = {
  title: "Next.js Profile Page | NextAdmin - Next.js Dashboard Kit",
  description: "This is Next.js Profile page for NextAdmin Dashboard Kit",
};

const NewEntry = () => {
  return (
    <DefaultLayout>
      <div className="mx-auto w-full">
        <Breadcrumb pageName="Past Searches" />
        <PatientSearch />
      </div>
    </DefaultLayout>
  );
};

export default NewEntry;
