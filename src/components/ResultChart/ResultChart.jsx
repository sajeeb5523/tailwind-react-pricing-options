import React from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';

const ResultData = [
    {
        "id": 1,
        "name": "Arefin",
        "physics": 85,
        "chemistry": 78,
        "math": 92
    },
    {
        "id": 2,
        "name": "Borsha",
        "physics": 74,
        "chemistry": 82,
        "math": 79
    },
    {
        "id": 3,
        "name": "Chowdhury",
        "physics": 91,
        "chemistry": 89,
        "math": 95
    },
    {
        "id": 4,
        "name": "Dipa",
        "physics": 67,
        "chemistry": 73,
        "math": 70
    },
    {
        "id": 5,
        "name": "Ehsan",
        "physics": 88,
        "chemistry": 84,
        "math": 90
    },
    {
        "id": 6,
        "name": "Farzana",
        "physics": 92,
        "chemistry": 91,
        "math": 94
    },
    {
        "id": 7,
        "name": "Gias",
        "physics": 76,
        "chemistry": 69,
        "math": 80
    },
    {
        "id": 8,
        "name": "Hasan",
        "physics": 65,
        "chemistry": 71,
        "math": 68
    },
    {
        "id": 9,
        "name": "Ishrat",
        "physics": 89,
        "chemistry": 90,
        "math": 93
    },
    {
        "id": 10,
        "name": "Jamal",
        "physics": 73,
        "chemistry": 75,
        "math": 77
    }
]


const ResultChart = () => {
    return (
        <div>
            <LineChart width={800} height={500} data={ResultData}>
                <XAxis dataKey={"name"}></XAxis>
                <YAxis></YAxis>
                <Line dataKey="math"></Line>
                <Line dataKey="chemistry" stroke='red'></Line>
            </LineChart>
        </div>
    );
};

export default ResultChart;