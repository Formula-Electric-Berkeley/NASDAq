import { React, useState, useEffect } from 'react';
import GaugeComponent from 'react-gauge-component';

import sendAsync from '../../../IPC-controller/renderer';

const { app } = window.require('@electron/remote');

const Gauge = ({ units, value }) => {
    const [currentValueDemo, setCurrentValueDemo] = useState(50);

    useEffect(() => {
        sendAsync('SELECT * FROM serial_data').then((result) => console.log(result));
        //sendAsync("INSERT INTO serial_data (data) VALUES ('asdf')").then((result) => console.log(result));

        const timer = setTimeout(() => {
            setCurrentValueDemo(Math.random() * 100);
        }, 1000);

        return () => {
            clearTimeout(timer);
        };
    });

    return (
        <div className='w-full h-full flex justify-center items-center'>

            <GaugeComponent
                id="gauge-component-radial3"
                value={currentValueDemo}
                type="grafana"
                arc={{
                    colorArray: ['#1EFF00', '#CE1F1F'],
                    nbSubArcs: 80,
                    padding: 0.02,
                    width: 0.3
                }}
                labels={{
                    valueLabel: { matchColorWithArc: true },
                }}
                pointer={{ animationDelay: 0 }}
            />
            {/*
            <GaugeComponent
                arc={{
                    subArcs: [
                        {
                            limit: 20,
                            color: '#EA4228',
                            showTick: true
                        },
                        {
                            limit: 40,
                            color: '#F58B19',
                            showTick: true
                        },
                        {
                            limit: 60,
                            color: '#F5CD19',
                            showTick: true
                        },
                        {
                            limit: 100,
                            color: '#5BE12C',
                            showTick: true
                        },
                    ]
                }}
                value={value}
            />
            */}
        </div>
    );
};

export default Gauge;
