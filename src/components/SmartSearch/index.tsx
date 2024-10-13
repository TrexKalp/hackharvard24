import React, { useEffect, useState } from "react";
import ApexCharts from "react-apexcharts";
import { ApexOptions } from "apexcharts";

interface HorizontalBarChartProps {
  data: any;
}

const HorizontalBarChart: React.FC<HorizontalBarChartProps> = ({ data }) => {
  const [options, setOptions] = useState<ApexOptions>({
    chart: {
      type: "bar",
      height: 300,
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    series: [
      {
        name: "Similarity Score",
        data: [], // This will be set dynamically
      },
    ],
    plotOptions: {
      bar: {
        horizontal: true,
        columnWidth: "16px",
        borderRadius: 0,
      },
    },
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      min: 0.85,
    //   max: 1,
      categories: [], // This will be set dynamically
      labels: {
        style: {
          colors: "#9ca3af",
          fontSize: "13px",
          fontFamily: "Inter, ui-sans-serif",
          fontWeight: 400,
        },
        // offsetX: -2,
      },
    },
    yaxis: {
      labels: {
        align: "left",
        style: {
          colors: "#9ca3af",
          fontSize: "13px",
          fontFamily: "Inter, ui-sans-serif",
          fontWeight: 400,
        },
        offsetX: -10,
      },
    },
    tooltip: {
      y: {
        formatter: (value) => `${(value * 100).toFixed(2)}%`, // Display as percentage
      },
    },
  });

  useEffect(() => {
    if (data && data.top_10_closest) {
      const categories = data.top_10_closest.map(
        (_, index) => `Patient ${index + 1}`
      );
      const similarityScores = data.top_10_closest.map(
        (patient: any) => patient.similarity_score
      );

      // Update the chart options dynamically
      setOptions((prevOptions) => ({
        ...prevOptions,
        xaxis: {
          ...prevOptions.xaxis,
          categories,
        },
        series: [
          {
            name: "Similarity Score",
            data: similarityScores,
          },
        ],
      }));
    }
  }, [data]);

  return (
    <div>
      <ApexCharts
        options={options}
        series={options.series}
        type="bar"
        height={300}
      />
    </div>
  );
};

export default HorizontalBarChart;
