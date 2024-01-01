import React from 'react';
import GaugeChart from 'react-gauge-chart'

const Gauge = ({ units, percent }) => {
    return (
        <div className='w-full h-full flex justify-center items-center'>
            <GaugeChart id="gauge-chart1"
                nrOfLevels={20}
                percent={percent}
                formatTextValue={value => value + ' ' + units}
            />
        </div>
    );
};

export default Gauge;
