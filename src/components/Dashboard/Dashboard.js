import React from 'react';
import Recharts1 from '../Recharts/Recharts1';

const Dashboard = () => {
    return (
        <div className='grid grid-cols-2 gap-10 w-[90%] mx-auto mt-5'>
            <div>
                <Recharts1 />
            </div>
            <div>
                <Recharts1 />
            </div>
        </div>
    );
};

export default Dashboard;