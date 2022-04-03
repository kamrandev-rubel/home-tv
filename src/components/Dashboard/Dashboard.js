import React, { createContext } from 'react';
import Recharts1 from '../Recharts/Recharts1';
import Recharts2 from '../Recharts/Recharts2';
import Recharts3 from '../Recharts/Recharts3';
import Recharts4 from '../Recharts/Recharts4';

export const  ChartsContext = createContext('')
const Dashboard = () => {
    const data = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ]
    return (
        <ChartsContext.Provider value={data} >
            <div className='grid grid-cols-2 gap-10 w-[90%] mx-auto mt-5'>
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