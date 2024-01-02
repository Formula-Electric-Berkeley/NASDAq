import React from 'react';
import GaugeComponent from 'react-gauge-component'

const Gauge = ({ units, value }) => {
    return (
        <div className='w-full h-full flex justify-center items-center'>
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
        </div>
    );
};

export default Gauge;
