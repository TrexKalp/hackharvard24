"use client";
import PatientCard from "./PatientCard";

const PatientSearch = () => {
  return (
    <>
    <div className="grid grid-cols-2 gap-5">
      <PatientCard />
      <PatientCard />
      <PatientCard />
      <PatientCard />
      <PatientCard />
      <PatientCard />
    </div>
    </>
  );
};

export default PatientSearch;
