import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, ReferenceLine } from 'recharts';

const GraphLine = ({ colorHex }) => {
    let data = [{ timestamp: '0', value: 100 }, { timestamp: '1', value: 200 }, { timestamp: '2', value: 400 }, { timestamp: '3', value: -200 }, { timestamp: '4', value: 300 }, { timestamp: '5', value: 100 }, { timestamp: '6', value: 500 },];

    return (
        <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke='gray' />
                <Line type="monotone" dataKey="value" stroke={colorHex} />
                <XAxis dataKey="timestamp" />
                <YAxis />
                <Tooltip />
                <ReferenceLine
                    x={0}
                    stroke="gray"
                    strokeWidth={1.5}
                    strokeOpacity={0.65}
                />
            </LineChart>
        </ResponsiveContainer>
    );
};

export default GraphLine;