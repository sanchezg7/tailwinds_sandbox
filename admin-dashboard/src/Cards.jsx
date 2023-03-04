import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    PointElement,
    LineElement
} from 'chart.js';
import { Line, Bar  } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    PointElement,
    LineElement
);

export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Chart.js Bar Chart',
        },
    },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
    labels,
    datasets: [
        {
            label: 'Number of sales votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        }
    ],
};

// overflow-hidden: prevent image to overflow the layout of the card

const items = [
    {
        title: "super plus",
        subtitle: "sales",
        asset: "src/assets/wallet.png",
        dollarAmt: "$25,647",
        pctIncrease: "+58%",
        chart: "Bar"
    },
    {
        title: "super pro",
        subtitle: "sales",
        asset: "src/assets/wallet.png",
        pctIncrease: "+19%", // should add functionality to make red, eventually
        chart: "Line"
    }
]

const Card = ({ title, subtitle, asset, dollarAmt, pctIncrease, chart }) => {
  return (
      <div className="card w-1/2 bg-white p-4 m">
          <div><img className="w-10 h-10" src={asset} alt=""/></div>
          <div className="font-bold text-xl text-gray-700">{title}</div>
          <div className="uppercase">{subtitle}</div>
          <span className="font-bold text-3xl">{dollarAmt}</span>
          {/*badge component*/}
          <span className="bg-green-500 rounded-full text-white text-sm font-bold p-1 align-text-top">{pctIncrease}</span>
          {chart && chart === "Bar" && <Bar options={options} data={data} />};
          {chart && chart === "Line" && <Line datasetIdKey='asdf' options={options} data={data} />};
      </div>
  );
};

const Cards = () => {
    return (
        <div className="card-container flex m-7 space-x-6">
            {items.map(item => <Card {...item} />)}
        </div>
    );
}

export default Cards;