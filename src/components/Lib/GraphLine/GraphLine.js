import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';

import Chart from 'chart.js/auto';

const GraphLine = () => {
    const [data, setData] = useState({
        labels: [],
        datasets: [
            {
                label: 'Live Data',
                borderColor: 'rgb(75, 192, 192)',
                data: [],
            },
        ],
    });

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        animation: {
            duration: 0,
            //easing: 'linear',
        },
    };

    useEffect(() => {
        const maxDataPoints = 20;

        const interval = setInterval(() => {
            const newLabel = new Date().toLocaleTimeString();
            const newData = Math.floor(Math.random() * 100);

            setData((prevData) => {
                const newLabels = [...prevData.labels, newLabel].slice(-maxDataPoints);
                const newDataPoints = [...prevData.datasets[0].data, newData].slice(-maxDataPoints);

                return {
                    labels: newLabels,
                    datasets: [
                        {
                            label: 'Live Data',
                            borderColor: 'rgb(75, 192, 192)',
                            data: newDataPoints,
                        },
                    ],
                };
            });
        }, 500);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className='w-full h-full p-5'>
            <Line data={data} options={options} />
        </div>
    );
};

export default GraphLine;

