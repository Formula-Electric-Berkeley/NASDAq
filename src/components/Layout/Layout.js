import React from 'react';
import GraphLine from '../GraphLine/GraphLine';

const Layout = () => {
    return (
        <div>
            <GraphLine colorHex={"#0aefff"} />
            <GraphLine colorHex={"#deff0a"} />
            <GraphLine colorHex={"#89fc00"} />
            <GraphLine colorHex={"#ff0000"} />
        </div>
    );
};

export default Layout;