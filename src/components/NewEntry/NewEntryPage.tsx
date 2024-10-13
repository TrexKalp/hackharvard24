"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import flatpickr from "flatpickr";
import ButtonDefault from "../Buttons/ButtonDefault";

const NewEntryPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    subject_id: "",
    admittance_time: "",
    dispatch_time: "",
    admit_date: "",
    dispatch_date: "",
    admission_type: "",
    admission_location: "",
    discharge_location: "",
    insurance: "",
    language: "",
    ethnicity: "",
    diagnosis: "",
    report: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    // Flatpickr for admit_date
    flatpickr("#admit_date", {
      mode: "single",
      dateFormat: "M j, Y",
      onChange: (selectedDates) => {
        setFormData((prevData) => ({
          ...prevData,
          admit_date: selectedDates[0].toISOString().split("T")[0], // save as YYYY-MM-DD
        }));
      },
    });

    // Flatpickr for dispatch_date
    flatpickr("#dispatch_date", {
      mode: "single",
      dateFormat: "M j, Y",
      onChange: (selectedDates) => {
        setFormData((prevData) => ({
          ...prevData,
          dispatch_date: selectedDates[0].toISOString().split("T")[0], // save as YYYY-MM-DD
        }));
      },
    });
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/submit-entry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Data submitted successfully");
        router.push("/"); // Redirect to the success page
      } else {
        alert("Failed to submit data");
      }
    } catch (error) {
      console.error("Error submitting form data:", error);
      alert("Error submitting data");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 gap-9">
        <div className="flex flex-col gap-9">
          {/* Input Fields */}
          <div className="rounded-[10px] border border-stroke bg-white shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card">
            <div className="border-b border-stroke px-6.5 py-4 dark:border-dark-3">
              <h3 className="font-medium text-dark dark:text-white">
                Date and Time
              </h3>
            </div>
            <div className="flex flex-col gap-5.5 p-6.5">
              <div>
                <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white">
                  Subject ID
                </label>
                <input
                  type="text"
                  name="subject_id"
                  value={formData.subject_id}
                  onChange={handleChange}
                  placeholder="Subject ID"
                  className="w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5.5 py-3 text-dark outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Admittance time:
                </label>
                <input
                  type="time"
                  name="admittance_time"
                  value={formData.admittance_time}
                  onChange={handleChange}
                  className="border leading-none border-gray-300 px-5 text-body-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-dark-3 dark:bg-dark-2 dark:focus:border-primary"
                />
              </div>
              <div>
                <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white">
                  Admittance Date
                </label>
                <div className="relative">
                  <input
                    id="admit_date"
                    className="form-datepicker w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal outline-none transition focus:border-primary active:border-primary dark:border-dark-3 dark:bg-dark-2 dark:focus:border-primary"
                    placeholder="mm/dd/yyyy"
                    name="admit_date"
                  />
                </div>
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Dispatch time:
                </label>
                <input
                  type="time"
                  name="dispatch_time"
                  value={formData.dispatch_time}
                  onChange={handleChange}
                  className="border leading-none border-gray-300 px-5 text-body-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-dark-3 dark:bg-dark-2 dark:focus:border-primary"
                />
              </div>
              <div>
                <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white">
                  Dispatch Date
                </label>
                <div className="relative">
                  <input
                    id="dispatch_date"
                    className="form-datepicker w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal outline-none transition focus:border-primary active:border-primary dark:border-dark-3 dark:bg-dark-2 dark:focus:border-primary"
                    placeholder="mm/dd/yyyy"
                    name="dispatch_date"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="rounded-[10px] border border-stroke bg-white shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card">
            <div className="border-b border-stroke px-6.5 py-4 dark:border-dark-3">
              <h3 className="font-medium text-dark dark:text-white">
                Additional Information
              </h3>
            </div>
            <div className="flex flex-col gap-5.5 p-6.5">
              <label className="block text-body-sm font-medium text-dark dark:text-white">
                Admission Type
              </label>
              <input
                type="text"
                name="admission_location"
                value={formData.admission_location}
                onChange={handleChange}
                placeholder="Admission Type"
                className="w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5.5 py-3 text-dark outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
              />
              <div>
                <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white">
                  Admission Location
                </label>
                <input
                  type="text"
                  name="admission_location"
                  value={formData.admission_location}
                  onChange={handleChange}
                  placeholder="Admission Location"
                  className="w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5.5 py-3 text-dark outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
                />
              </div>
              <div>
                <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white">
                  Discharge Location
                </label>
                <input
                  type="text"
                  name="discharge_location"
                  value={formData.discharge_location}
                  onChange={handleChange}
                  placeholder="Discharge Location"
                  className="w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5.5 py-3 text-dark outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
                />
              </div>
            </div>
          </div>

          {/* Personal Information */}
          <div className="rounded-[10px] border border-stroke bg-white shadow-1 dark:border-dark-3 dark:bg-gray-dark dark:shadow-card">
            <div className="border-b border-stroke px-6.5 py-4 dark:border-dark-3">
              <h3 className="font-medium text-dark dark:text-white">
                Personal Information
              </h3>
            </div>
            <div className="flex flex-col gap-5.5 p-6.5">
              <div>
                <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white">
                  Insurance
                </label>
                <input
                  type="text"
                  name="insurance"
                  value={formData.insurance}
                  onChange={handleChange}
                  placeholder="Insurance"
                  className="w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5.5 py-3 text-dark outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
                />
              </div>
              <div>
                <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white">
                  Language
                </label>
                <input
                  type="text"
                  name="language"
                  value={formData.language}
                  onChange={handleChange}
                  placeholder="Language"
                  className="w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5.5 py-3 text-dark outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
                />
              </div>
              <div>
                <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white">
                  Ethnicity
                </label>
                <input
                  type="text"
                  name="ethnicity"
                  value={formData.ethnicity}
                  onChange={handleChange}
                  placeholder="Ethnicity"
                  className="w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5.5 py-3 text-dark outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
                />
              </div>
              <div>
                <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white">
                  Diagnosis
                </label>
                <input
                  type="text"
                  name="diagnosis"
                  value={formData.diagnosis}
                  onChange={handleChange}
                  placeholder="Diagnosis"
                  className="w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5.5 py-3 text-dark outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
                />
              </div>
              <div>
                <label className="mb-3 block text-body-sm font-medium text-dark dark:text-white">
                  Report
                </label>
                <textarea
                  name="report"
                  rows={6}
                  value={formData.report}
                  onChange={handleChange}
                  placeholder="Report"
                  className="w-full rounded-[7px] border-[1.5px] border-stroke bg-transparent px-5.5 py-3 text-dark outline-none transition focus:border-primary active:border-primary disabled:cursor-default disabled:bg-gray-2 dark:border-dark-3 dark:bg-dark-2 dark:text-white dark:focus:border-primary"
                ></textarea>
              </div>
              <label className="block text-body-sm font-medium text-dark dark:text-white">
                Attach file
              </label>
              <input
                type="file"
                className="w-full cursor-pointer rounded-[7px] border-[1.5px] border-stroke bg-transparent outline-none transition file:mr-5 file:border-collapse file:cursor-pointer file:border-0 file:border-r file:border-solid file:border-stroke file:bg-[#E2E8F0] file:px-6.5 file:py-[13px] file:text-body-sm file:font-medium file:text-dark-5 file:hover:bg-primary file:hover:bg-opacity-10 focus:border-primary active:border-primary disabled:cursor-default disabled:bg-dark dark:border-dark-3 dark:bg-dark-2 dark:file:border-dark-3 dark:file:bg-white/30 dark:file:text-white dark:focus:border-primary"
              />
            </div>
          </div>
        </div>
        <ButtonDefault
          label="Submit"
          customClasses="max-w-1/2 bg-primary text-white px-10 py-3.5 lg:px-8 xl:px-10"
          // type="submit"
        />
      </div>
    </form>
  );
};

export default NewEntryPage;
