"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);

const HorizontalBarChart = () => {
  const data = {
    labels: [
      "San Nicolas",
      "Lobos",
      "Capitán Sarmiento",
      "San Pedro",
      "Pergamino",
    ],
    datasets: [
      {
        data: [2, 3, 4, 4, 5],
        backgroundColor: ["#c19250", "#627e84", "#aeb6ad"],
        borderColor: ["#c19250", "#627e84", "#aeb6ad"],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    indexAxis: "y" as const,
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
    <div className="h-[220px] border-b border-[#dedbd4] flex items-end justify-around gap-[15px] mt-[29px] py-0 px-5 bg-[repeating-linear-gradient(to_top,_transparent,_transparent_43px,#efede8_44px)]">
      <Bar data={data} options={options} />
    </div>
  );
};

export default HorizontalBarChart;
