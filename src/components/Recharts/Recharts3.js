import React, { useContext } from 'react';
import { Area, Pie, PieChart, Tooltip, XAxis } from 'recharts';
import { ChartsContext } from '../Dashboard/Dashboard';

const Recharts3 = () => {
    const data = useContext(ChartsContext)

    return (
        <PieChart width={730} height={250}>
            <Pie data={data} dataKey="sell" nameKey="month" cx="50%" cy="50%" outerRadius={50} fill="#8884d8" />

            <Pie data={data} dataKey="revenue" nameKey="month" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
            <Tooltip/>
        </PieChart>
    );
};

export default Recharts3;