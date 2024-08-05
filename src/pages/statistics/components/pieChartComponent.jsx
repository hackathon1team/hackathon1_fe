import React from 'react';
import { PieChart, Pie, Cell } from 'recharts';

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
        index,
    }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN) - 10;
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text
                x={x}
                y={y}
                fill="white"
                textAnchor={x > cx ? 'start' : 'end'}
                dominantBaseline="central"
            >
                {data[index].name} [{data[index].value}H]
            </text>
        );
    };

    return (
        <>
            <div>
                {/* <h1>Favorite Beverages - technostuf.com</h1> */}
                {/* <hr /> */}
                <div className="col-md-8">
                    <PieChart width={300} height={300}>
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
                </div>
            </div>
        </>
    );
}
export default PieChartComponent;
