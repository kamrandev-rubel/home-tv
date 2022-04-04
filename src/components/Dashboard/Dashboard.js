import React, { createContext, useEffect, useState } from 'react';
import Recharts1 from '../Recharts/Recharts1';
import Recharts2 from '../Recharts/Recharts2';
import Recharts3 from '../Recharts/Recharts3';
import Recharts4 from '../Recharts/Recharts4';

export const  ChartsContext = createContext('')
const Dashboard = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    return (
        <ChartsContext.Provider value={data} >
            <div className='grid grid-cols-2 grid-rows-2 gap-10  w-[90%] mx-auto mt-5'>
                <div>
                    <Recharts1 />
                </div>
                <div>
                    <Recharts2/>
                </div>
                <div>
                    <Recharts3/>
                </div>
                <div>
                    <Recharts4/>
                </div>
            </div>
        </ChartsContext.Provider>
    );
};

export default Dashboard;