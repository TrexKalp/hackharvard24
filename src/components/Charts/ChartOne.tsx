import { ApexOptions } from "apexcharts";
import React from "react";
import ReactApexChart from "react-apexcharts";
import DefaultSelectOption from "@/components/SelectOption/DefaultSelectOption";
import { useEffect, useState } from "react";

const ChartOne: React.FC = () => {
  const [chartData, setChartData] = useState<{ labels: string[]; series: number[][] } | null>(null);
  const [selectedOption, setSelectedOption] = useState<string>('defibrillator');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);


  // Function to fetch data from the API
  const fetchData = async (option: string) => {
    try {
      const res = await fetch('/api/database');
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await res.json();

      // Process data into a format that ApexCharts can use
      const labels = result.data.map((item: { timestamp: string }) => item.timestamp);
      const values = result.data.map((item: { [key: string]: number }) => item[option]);

      const data = {
        labels,
        series: [values],
      };

      setChartData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    // Fetch data for the first time
    fetchData(selectedOption);

    // Set an interval to fetch data every 5 seconds (5000 ms)
    const intervalId = setInterval(() => fetchData(selectedOption), 2000);

    // Cleanup function to clear the interval
    return () => clearInterval(intervalId);
  }, [selectedOption]);

  const handleDropdownChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(e.target.value);
    setIsDropdownOpen(false); // Close the dropdown after selection
  };

  interface Option {
    value: string;
    label: string;
  }

  interface DefaultSelectOptionProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    options: Option[];
  }

  const DefaultSelectOption: React.FC<DefaultSelectOptionProps> = ({ value, onChange, options }) => {
    return (
      <select value={value} onChange={onChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    );
  };

  const series = chartData ? [{ name: "Received Amount", data: chartData.series[0] }] : [{ name: "Received Amount", data: [] }];

  const options: ApexOptions = {
    // ApexCharts options remain the same
    legend: {
      show: false,
      position: "top",
      horizontalAlign: "left",
    },
    colors: ["#5750F1"],
    chart: {
      fontFamily: "Satoshi, sans-serif",
      height: 310,
      type: "area",
      toolbar: {
        show: false,
      },
    },
    fill: {
      gradient: {
        opacityFrom: 0.55,
        opacityTo: 0,
      },
    },
    responsive: [
      {
        breakpoint: 1024,
        options: {
          chart: {
            height: 300,
          },
        },
      },
      {
        breakpoint: 1366,
        options: {
          chart: {
            height: 320,
          },
        },
      },
    ],
    stroke: {
      curve: "smooth",
    },
    markers: {
      size: 0,
    },
    grid: {
      strokeDashArray: 5,
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
    dataLabels: {
      enabled: false,
    },
    tooltip: {
      fixed: {
        enabled: false,
      },
      x: {
        show: false,
      },
      y: {
        title: {
          formatter: function () {
            return "";
          },
        },
      },
      marker: {
        show: false,
      },
    },
    xaxis: {
      type: "category",
      categories: chartData ? chartData.labels : [],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      tickAmount: 10,
    },
    yaxis: {
      title: {
        style: {
          fontSize: "0px",
        },
      },
    },
  };

  return (
    <div className="col-span-12 rounded-[10px] bg-white px-7.5 pb-6 pt-7.5 shadow-1 dark:bg-gray-dark dark:shadow-card xl:col-span-7">
      <div className="mb-3.5 flex flex-col gap-2.5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h4 className="text-body-2xlg font-bold text-dark dark:text-white">
            Crash Cart Supplies
          </h4>
        </div>
        <div className="flex items-center gap-2.5">
          <p className="font-medium uppercase text-dark dark:text-dark-6">
            Supply:
          </p>
          <DefaultSelectOption 
            value={selectedOption} 
            onChange={handleDropdownChange}
            options={[
              { value: 'defibrillator', label: 'Defibrillator' },
              { value: 'oxygen_tank', label: 'Oxygen Tank' },
              { value: 'suction_device', label: 'Suction Device' },
              { value: 'iv_fluid', label: 'Iv Fluid' },
              { value: 'medication_drawer', label: 'Medication Drawer' },
              { value: 'intubation_kit', label: 'Intubation Kit' },
              { value: 'syringe', label: 'Syringe' },
              { value: 'bandages', label: 'Bandages' },
              { value: 'gloves', label: 'Gloves' },
              { value: 'stethoscope', label: 'Stethoscope' }
            ]} 
          />
        </div>
      </div>
      <div>
        <div className="-ml-4 -mr-5">
          <ReactApexChart
            options={options}
            series={series}
            type="area"
            height={310}
          />
        </div>
      </div>

      <div className="flex flex-col gap-2 text-center xsm:flex-row xsm:gap-0">
        <div className="border-stroke dark:border-dark-3 xsm:w-1/2 xsm:border-r">
          <p className="font-medium">Crash Carts Available</p>
          <h4 className="mt-1 text-xl font-bold text-dark dark:text-white">
            19 carts
          </h4>
        </div>
        <div className="xsm:w-1/2">
          <p className="font-medium">Crash Carts in Storage</p>
          <h4 className="mt-1 text-xl font-bold text-dark dark:text-white">
            12 carts
          </h4>
        </div>
      </div>
    </div>
  );
};

export default ChartOne;
