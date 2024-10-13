"use client";
import { useState, useEffect } from "react";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import PatientCard from "@/components/Patient/PatientCard";

const NewEntry = () => {
  const [patients, setPatients] = useState([]);

  // Fetch patients from API on component mount
  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const res = await fetch("/api/patients");

        if (!res.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await res.json();
        setPatients(data.patients || []); // Set patients in the state
      } catch (error) {
        console.error("Failed to fetch patients:", error);
      }
    };

    fetchPatients();
  }, []);

  return (
    <DefaultLayout>
      <div className="mx-auto w-full">
        <Breadcrumb pageName="Past Searches" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {patients.map((patient) => (
            <PatientCard
              key={patient.subject_id}
              patient={patient} // Pass the whole patient object as a prop
            />
          ))}
        </div>
      </div>
    </DefaultLayout>
  );
};

export default NewEntry;
