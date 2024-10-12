'use client'
import React, { useEffect, useState } from 'react';
import ApexCharts from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';
import SimilarPatient from '../Patient/SimilarPatient';

const HorizontalBarChart: React.FC = () => {
  const [options, setOptions] = useState<ApexOptions>({
    chart: {
      type: 'bar',
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
        name: 'Sales',
        data: [23000, 44000, 55000, 57000, 56000, 61000, 58000, 63000, 60000, 66000, 34000, 78000],
      },
    ],
    plotOptions: {
      bar: {
        horizontal: true,
        columnWidth: '16px',
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
      colors: ['transparent'],
    },
    xaxis: {
      categories: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ],
      labels: {
        style: {
          colors: '#9ca3af',
          fontSize: '13px',
          fontFamily: 'Inter, ui-sans-serif',
          fontWeight: 400,
        },
        offsetX: -2,
        formatter: (value) => (value >= 1000 ? `${value / 1000}k` : value),
      },
    },
    yaxis: {
      labels: {
        align: 'left',
        style: {
          colors: '#9ca3af',
          fontSize: '13px',
          fontFamily: 'Inter, ui-sans-serif',
          fontWeight: 400,
        },
        offsetX: -10,
        formatter: (title) => (typeof title === 'string' ? title.slice(0, 3) : title),
      },
    },
    tooltip: {
      y: {
        formatter: (value) => `$${value >= 1000 ? `${value / 1000}k` : value}`,
      },
    },
  });

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Adjust options for dark mode
    const darkModeOptions = {
      colors: ['#3b82f6'],
      xaxis: {
        labels: {
          style: {
            colors: darkMode ? '#a3a3a3' : '#9ca3af',
          },
        },
      },
      yaxis: {
        labels: {
          style: {
            colors: darkMode ? '#a3a3a3' : '#9ca3af',
          },
        },
      },
      grid: {
        borderColor: darkMode ? '#404040' : '#e5e7eb',
      },
    };

    setOptions((prev) => ({
      ...prev,
      ...darkModeOptions,
    }));
  }, [darkMode]);

  return (
    <div>
      <ApexCharts
        options={options}
        series={options.series}
        type="bar"
        height={300}
      />
      <SimilarPatient />
    </div>
  );
};

export default HorizontalBarChart;
