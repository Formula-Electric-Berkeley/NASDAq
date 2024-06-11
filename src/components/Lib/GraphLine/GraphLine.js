import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';

import Chart from 'chart.js/auto';

import sendAsync from '../../../IPC-controller/renderer';

const { app } = window.require('@electron/remote');

const GraphLine = ({colorHex, dataSource}) => {
    const [graphData, setGraphData] = useState({
        labels: [],
        datasets: [
            {
                label: 'Live Data',
                borderColor: colorHex,
                data: [],
            },
        ],
    });

    useEffect(() => {
        const intervalID = setInterval(() =>  {
            if (dataSource === "TEMP") {
                sendAsync('TDATA').then((result) => 
                    {
                    console.log("setting TEMP for " + dataSource + " with data " + result);
                        setGraphData({
                    labels: result,
                    datasets: [
                        {
                            label: 'Live Temperature Data',
                            borderColor: colorHex,
                            data: result,
                        },
                    ],
                })});
            } else if (dataSource === "VOLTAGE") {
                sendAsync('VDATA').then((result) => {
                    console.log("setting VOLTAGE for " + dataSource + " with data " + result);
                    setGraphData({
                    labels: result,
                    datasets: [
                        {
                            label: 'Live Voltage Data',
                            borderColor: colorHex,
                            data: result,
                        },
                    ],
                })});
            }
        }, 250);
        
        return () => clearInterval(intervalID);
    });

    const [data, setData] = useState({
        labels: [],
        datasets: [
            {
                label: 'Live Data',
                // borderColor: 'rgb(75, 192, 192)',
                borderColor: colorHex,
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

//    useEffect(() => {
//        sendAsync('reqData').then((result) => 
//            setData((prevData) => {
//                const newDataPoints = result;
//
//                return {
//                    labels: [0,1,2,3,4,5,6,7,8,9],
//                    datasets: [
//                        {
//                            label: 'Live Data',
//                            borderColor: 'rgb(75, 192, 192)',
//                            data: newDataPoints,
//                        },
//                    ],
//                };
//            })
//        );
//    });

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
                            //borderColor: '#fed100',
                            borderColor: colorHex,
                            //borderColor: 'rgb(75, 192, 192)',
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
            <Line data={graphData} options={options} />
        </div>
    );
};

export default GraphLine;

