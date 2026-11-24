"use client";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoghnutChart = () => {
  const data = {
    labels: ["LV-ABC", "LV-DEF", "LV-GHI"],
    datasets: [
      {
        label: "Horas de vuelo",
        data: [103, 210, 52],
        backgroundColor: ["#c19250", "#627e84", " #aeb6ad"],
        borderColor: ["#c19250", "#627e84", " #aeb6ad"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintanAspectRatio: false,
    plugins: {
      title: {
        display: false,
      },
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="w-[145px] h-[145px] ">
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default DoghnutChart;
