import React, { useContext } from 'react';
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { ChartsContext } from '../Dashboard/Dashboard';

const Recharts4 = () => {
    const data = useContext(ChartsContext)

    return (
        <ResponsiveContainer width={650} height={300}>
            <AreaChart
                width={500}
                height={400}
                data={data}
                margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="investment" stackId="1" stroke="#8884d8" fill="#8884d8" />
                <Area type="monotone" dataKey="sell" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                <Area type="monotone" dataKey="revenue" stackId="1" stroke="#green" fill="#ffc658" />
            </AreaChart>
        </ResponsiveContainer>
    );
};

export default Recharts4;