import React from 'react';
import GaugeChart from 'react-gauge-chart'

const Gauge = ({units, percent}) => {
    return (
        <div>
            <GaugeChart id="gauge-chart1" percent={percent} formatTextValue={value => value + ' ' + units} />
        </div>
    );
};

export default Gauge;