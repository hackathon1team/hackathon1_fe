import React, { useState } from 'react';
import {
    PieChart,
    Pie,
    Legend,
    Sector,
    Cell,
    ResponsiveContainer,
} from 'recharts';

function PieChartComponent({ apiData }) {
    let data = [];

    apiData.map((el) =>
        data.push({ name: el.category, value: Number(el.hours) }),
    );

    const COLORS = ['#F9D6FF', '#E2BBE9', '#9B86BD', '#7776B3', '#5A639C'];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({
        cx,
        cy,
        midAngle,
        innerRadius,
        outerRadius,
        percent,
        index,
    }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text
                x={x}
                y={y}
                fill="white"
                textAnchor={x > cx ? 'start' : 'end'}
                dominantBaseline="central"
            >
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

    return (
        <>
            <div>
                {/* <h1>Favorite Beverages - technostuf.com</h1> */}
                {/* <hr /> */}
                <div className="col-md-8">
                    <ResponsiveContainer
                        width={300}
                        height={300}
                        className="text-center"
                    >
                        <PieChart width={200} height={200}>
                            <Legend
                                layout="vertical"
                                verticalAlign="top"
                                align="top"
                            />
                            <Pie
                                data={data}
                                cx="50%"
                                cy="40%"
                                labelLine={false}
                                label={renderCustomizedLabel}
                                outerRadius={100}
                                fill="#8884d8"
                                dataKey="value"
                            >
                                {data.map((entry, index) => (
                                    <Cell
                                        key={`cell-${index}`}
                                        fill={COLORS[index % COLORS.length]}
                                    />
                                ))}
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </>
    );
}
export default PieChartComponent;
