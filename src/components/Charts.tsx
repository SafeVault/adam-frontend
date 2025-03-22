import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Legend, Filler, TooltipItem } from "chart.js";

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Legend, Filler);



const Charts = () => {
    const data = {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        datasets: [
            {
                label: ' ',
                data: [10000, 30000, 15000, 28000, 25000, 50000, 35000],
                borderColor: "#800080",
                borderWidth: 3,
                fill: (context: any) => {
                    const chart = context.chart;
                    const { ctx, chartArea } = chart;

                    if (!chartArea) return false;

                    const gradient = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);
                    gradient.addColorStop(0, '#800080'); 
                    gradient.addColorStop(1, 'rgba(26, 0, 26, 0)'); 

                    return {
                        target: 'origin',
                        above: gradient, 
                        below: 'transparent',
                    };
                },
                pointStyle: false, 
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            x: {
                type: "category", 
                grid: { display: false },
                ticks: {
                    color: "#8d8585",
                    padding: 10,
                    font: {
                        size: 13,
                        weight: "bold", 
                        family: "Mansfield, sans-serif", 
                    },
                },
                border: { display: true, color: "#8d8585", width: 2 },
            },
            y: {
                type: "linear", 
                grid: { display: false },
                border: { display: true, color: "#8d8585", width: 2 },
                min: 5000,
                max: 50000,
                ticks: {
                    color: "#8d8585",
                    font: {
                        size: 13,
                        weight: "bold", 
                        family: "Mansfield, sans-serif",
                    },
                    stepSize: 15000,
                    callback: (value: number) => `$${value / 1000}K`,
                },
            },
        },
        layout: {
            padding: { left: 20, right: 20 },
        },
        plugins: {
            legend: { display: false },
            tooltip: {
                callbacks: {
                    label: (tooltipItem: TooltipItem<"line">) => {
                        const value = tooltipItem.raw as number; 
                        return `$${value.toLocaleString()}`;
                    },
                },
            },
            filler: { propagate: true },
        },
    };


    return (
        <div className="h-full w-full">
            {/* @ts-ignore - Chart.js expects a specific fill type, but dynamic gradients cause TS type conflicts */}
            <Line data={data} options={options} />
        </div>
    );
};

export default Charts;
