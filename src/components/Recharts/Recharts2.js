import React, { useContext } from 'react';
import { Area, Bar, CartesianGrid, ComposedChart, Legend, Line, Tooltip, XAxis, YAxis } from 'recharts';
import { ChartsContext } from '../Dashboard/Dashboard';

const Recharts2 = () => {
const data = useContext(ChartsContext)
    return (
        <ComposedChart width={730} height={250} data={data}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <CartesianGrid stroke="#f5f5f5" />
            <Bar dataKey="investment" barSize={20} fill="#413ea0" />
            <Area type="monotone" dataKey="sell" fill="#8884d8" stroke="#8884d8" />
            <Line type="monotone" dataKey="revenue" stroke="#ff7300" />
        </ComposedChart>
    );
};

export default Recharts2;