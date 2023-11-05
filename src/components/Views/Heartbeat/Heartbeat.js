import React from 'react';
import GraphLine from '../../Lib/GraphLine/GraphLine';

const Heartbeat = () => {
    return (
        <div className="flex justify-around w-full grow">
            <div className="p-5 w-1/2 h-1/2">
                <GraphLine colorHex={"#0aefff"} />
                <GraphLine colorHex={"#deff0a"} />
            </div>
            <div className="p-5 w-1/2 h-1/2">
                <GraphLine colorHex={"#89fc00"} />
                <GraphLine colorHex={"#ff0000"} />
            </div>
        </div>
    );
};

export default Heartbeat;