import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';


const GraphLine = ({colorHex}) => {
    let data = [{ timestamp: '0', value: 100 }, { timestamp: '1', value: 200 }, { timestamp: '2', value: 400 }, { timestamp: '3', value: 200 }, { timestamp: '4', value: 300 }, { timestamp: '5', value: 100 }, { timestamp: '6', value: 500 },];
    
    return (
        <LineChart width={600} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
            <Line type="monotone" dataKey="value" stroke={colorHex} />
            <XAxis dataKey="timestamp" />
            <YAxis />
            <Tooltip />
        </LineChart>
    );
};

export default GraphLine;