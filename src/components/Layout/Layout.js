import React from 'react';
import GraphLine from '../GraphLine/GraphLine';

const Layout = () => {
    return (
        <div className="flex flex-col w-full h-screen">
            <div className='flex justify-center py-7'>
                <img width={200} src={"./FEBLOGO_NASDAQ.png"} alt="FEBLOGO_NASDAQ" />
            </div>

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
        </div>
    );
};

export default Layout;