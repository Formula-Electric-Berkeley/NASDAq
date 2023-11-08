import React from 'react';
import GraphLine from '../../Lib/GraphLine/GraphLine';
import Gauge from '../../Lib/Gauge/Gauge'

const Heartbeat = () => {
    return (
        <div className="flex justify-around w-full grow">
            <div className="p-5 w-1/2 h-1/2">
                <GraphLine colorHex={"#0aefff"} />
                <GraphLine colorHex={"#ff0000"} />
            </div>
            <div className="p-5 w-1/2 h-1/2">
                <GraphLine colorHex={"#89fc00"} />
                <div className='flex h-full items-center justify-center'>
                    <Gauge percent={0.85} units={"MPH"} />
                    <Gauge units={"°C"} />
                </div>
                {/* <GraphLine colorHex={"#deff0a"} /> */}
            </div>
        </div>
    );
};

export default Heartbeat;