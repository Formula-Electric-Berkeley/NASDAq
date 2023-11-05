import React from 'react';
import Heartbeat from '../Views/Heartbeat/Heartbeat';
import SerialMonitor from '../Views/SerialMonitor/SerialMonitor';

const Layout = () => {
    return (
        <div className="flex flex-col w-full h-screen">
            <div className='flex justify-center py-7'>
                <img width={200} src={"./FEBLOGO_NASDAQ.png"} alt="FEBLOGO_NASDAQ" />
            </div>

            {/* <Heartbeat/> */}
            <SerialMonitor/>
        </div>
    );
};

export default Layout;