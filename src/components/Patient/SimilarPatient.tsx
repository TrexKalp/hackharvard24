import React from 'react';

const SimilarPatient: React.FC = () => {
  return (
    <article className="rounded-xl bg-white dark:bg-gray-800 p-4 ring ring-indigo-50 dark:ring-gray-700 sm:p-6 lg:p-8">
      <div className="flex items-start sm:gap-8">
        <div
          className="hidden sm:grid sm:size-20 sm:shrink-0 sm:place-content-center sm:rounded-full sm:border-2 sm:border-indigo-500 dark:sm:border-indigo-400"
          aria-hidden="true"
        >
          <div className="flex items-center gap-1">
            <span className="h-8 w-0.5 rounded-full bg-indigo-500 dark:bg-indigo-400"></span>
            <span className="h-6 w-0.5 rounded-full bg-indigo-500 dark:bg-indigo-400"></span>
            <span className="h-4 w-0.5 rounded-full bg-indigo-500 dark:bg-indigo-400"></span>
            <span className="h-6 w-0.5 rounded-full bg-indigo-500 dark:bg-indigo-400"></span>
            <span className="h-8 w-0.5 rounded-full bg-indigo-500 dark:bg-indigo-400"></span>
          </div>
        </div>

        <div>
          <strong className="rounded border border-indigo-500 dark:border-indigo-400 bg-indigo-500 dark:bg-indigo-400 px-3 py-1.5 text-[10px] font-medium text-white">
            Patient ID: 00123
          </strong>

          <h3 className="mt-4 text-lg font-medium sm:text-xl">
            <a href="#" className="hover:underline text-indigo-600 dark:text-indigo-400">
              John Doe - Age 58, Male
            </a>
          </h3>

          <p className="mt-1 text-sm text-gray-700 dark:text-gray-300">
            Similar patients have shown improvements in managing Type 2 Diabetes with a combination of metformin and lifestyle changes. John Doe has been undergoing this treatment for the past 12 months with a marked improvement in blood sugar levels.
          </p>

          <div className="mt-4 sm:flex sm:items-center sm:gap-2">
            <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
              <svg
                className="size-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>

              <p className="text-xs font-medium">Last Appointment: 2 days ago</p>
            </div>

            <span className="hidden sm:block" aria-hidden="true">&middot;</span>

            <p className="mt-2 text-xs font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
              Treatments: Metformin, Insulin
            </p>
          </div>

          <div className="mt-4 sm:flex sm:items-center sm:gap-2">
            <p className="text-xs font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
              BMI: <span className="font-bold text-indigo-600 dark:text-indigo-400">29.4</span> (Overweight)
            </p>

            <span className="hidden sm:block" aria-hidden="true">&middot;</span>

            <p className="text-xs font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
              Blood Pressure: <span className="font-bold text-indigo-600 dark:text-indigo-400">140/90 mmHg</span>
            </p>
          </div>

          <div className="mt-4 sm:flex sm:items-center sm:gap-2">
            <p className="text-xs font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
              Cholesterol: <span className="font-bold text-indigo-600 dark:text-indigo-400">200 mg/dL</span> (Normal)
            </p>

            <span className="hidden sm:block" aria-hidden="true">&middot;</span>

            <p className="text-xs font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
              HbA1c: <span className="font-bold text-indigo-600 dark:text-indigo-400">7.1%</span> (Under Control)
            </p>
          </div>

          <div className="mt-4 sm:flex sm:items-center sm:gap-2">
            <button className="bg-indigo-600 dark:bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-700 dark:hover:bg-indigo-400">
              Chat with Dr. Sarah Johnson
            </button>
          </div>

          <div className="mt-6">
            <h4 className="text-sm font-medium text-gray-600 dark:text-gray-300">Comments:</h4>
            <ul className="mt-2 space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li>"The treatment has been going really well for John, he has made great progress!" - Dr. Sarah Johnson</li>
              <li>"After switching to a more plant-based diet, I've seen an improvement in my energy levels." - John Doe</li>
              <li>"Continuing with regular check-ups has been key to managing his condition." - Nurse Smith</li>
            </ul>
          </div>

          <div className="mt-6">
            <h4 className="text-sm font-medium text-gray-600 dark:text-gray-300">Patient Health History:</h4>
            <ul className="mt-2 space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li>2019: Diagnosed with Type 2 Diabetes</li>
              <li>2020: Started on Metformin</li>
              <li>2021: Switched to a combined treatment of Metformin and Insulin</li>
              <li>2022: HbA1c levels reduced to 7.1%</li>
              <li>2023: Improved lifestyle with diet and exercise</li>
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
};

export default SimilarPatient;
