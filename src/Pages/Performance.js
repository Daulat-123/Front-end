import React from 'react';
import './Performance.css';

const PerformanceReport = () => {
  const data = [
    { name: 'Daulat Yahya Haji', score: 99, date: '2024-05-01' },
    { name: 'Abdul-majid Simai Kombo', score: 98, date: '2024-05-15' },
    { name: 'Kassimu Alhaji Yusuph', score: 90, date: '2024-05-17' },
    { name: 'Dalia Abdallah Nyoni', score: 72, date: '2024-05-20' },
    { name: 'Omar Khamis Omar', score: 83, date: '2024-05-23' },
  ];

  return (
    <div className="performance-report">
      <h1>Performance Reports</h1>
      <table>
        <thead>
          <tr>
            <th> Employee Name</th>
            <th>Performance Score</th>
            <th>Review Date</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.score}</td>
              <td>{item.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PerformanceReport;
