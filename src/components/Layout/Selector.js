import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartLine, faGaugeHigh, faHashtag, faBell } from '@fortawesome/free-solid-svg-icons'
import './Selector.css'

const Selector = () => {

    const handleSelctorClick = (e) => {
        console.log(e.target.id)
    }

    return (
        <div className='w-full h-full flex justify-center items-center'>
            <div className='max-w-lg m-auto p-10 
                bg-zinc-800 rounded-3xl'>
                <div className='h-full flex flex-col'>
                    <div className='w-full h-full flex justify-around items-center'>
                        <FontAwesomeIcon
                            className='pr-5 pb-5 selector-icon'
                            icon={faChartLine}
                            size="3x"
                            id="graph"
                            onClick={handleSelctorClick}
                        />
                        <FontAwesomeIcon
                            className='pl-5 pb-5 selector-icon'
                            icon={faGaugeHigh}
                            size="3x"
                            id="gauge"
                            onClick={handleSelctorClick}
                        />
                    </div>
                    <div className='w-full h-full flex justify-around items-center'>
                        <FontAwesomeIcon
                            className='pr-5 pt-5 selector-icon'
                            icon={faHashtag}
                            size="3x"
                            id="number"
                            onClick={handleSelctorClick}
                        />
                        <FontAwesomeIcon
                            className='pl-5 pt-5 selector-icon'
                            icon={faBell}
                            size="3x"
                            id="indicator"
                            onClick={handleSelctorClick}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Selector;
