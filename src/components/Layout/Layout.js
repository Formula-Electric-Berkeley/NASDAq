import React from 'react';
import GraphLine from '../GraphLine/GraphLine';

const Layout = () => {
    return (
        <div className="flex w-full">
            <div>
                <GraphLine colorHex={"#0aefff"} />
                <GraphLine colorHex={"#deff0a"} />
            </div>
            <div>
                <GraphLine colorHex={"#89fc00"} />
                <GraphLine colorHex={"#ff0000"} />
            </div>
        </div>
    );
};

export default Layout;