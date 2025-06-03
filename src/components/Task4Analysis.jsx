import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const Task4Analysis = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalResponses, setTotalResponses] = useState(0);

  useEffect(() => {
    const processData = () => {
      try {
        // Task 4 responses from the CSV data
        const task4Responses = [
          'Trip 1 - Rec. System OFF', 'Trip 2 - Rec. System ON', 'Trip 2 - Rec. System ON', 'Trip 2 - Rec. System ON', 'Trip 2 - Rec. System ON', 'Trip 2 - Rec. System ON', 'Trip 2 - Rec. System ON', 
          'Trip 2 - Rec. System ON', 'Trip 2 - Rec. System ON', 'Trip 2 - Rec. System ON', 'Trip 2 - Rec. System ON', 'Trip 2 - Rec. System ON', 'Trip 2 - Rec. System ON', 'Trip 2 - Rec. System ON', 
          'Trip 1 - Rec. System OFF', 'Trip 2 - Rec. System ON', 'Trip 1 - Rec. System OFF', 'Trip 1 - Rec. System OFF', 'Trip 2 - Rec. System ON', 'Trip 2 - Rec. System ON'
        ];

        // Count occurrences
        const tripCounts = task4Responses.reduce((acc, trip) => {
          acc[trip] = (acc[trip] || 0) + 1;
          return acc;
        }, {});

        const total = task4Responses.length;
        
        // Prepare data for pie chart
        const pieData = Object.entries(tripCounts).map(([trip, count]) => ({
          name: trip,
          value: count,
          percentage: ((count / total) * 100).toFixed(1)
        }));

        setData(pieData);
        setTotalResponses(total);
        setLoading(false);
      } catch (error) {
        console.error('Error processing Task 4 data:', error);
        setLoading(false);
      }
    };

    processData();
  }, []);

  // Colors for the pie chart
  const COLORS = ['#3B82F6', '#10B981'];

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const data = payload[0];
      return (
        <div className="bg-white p-3 border border-gray-300 rounded shadow-lg">
          <p className="font-semibold">{`${data.payload.name}: ${data.value} responses`}</p>
          <p className="text-sm text-gray-600">{`${data.payload.percentage}% of total`}</p>
        </div>
      );
    }
    return null;
  };

  const CustomLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percentage }) => {
    const RADIAN = Math.PI / 180;
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
        className="font-semibold text-sm"
      >
        {`${percentage}%`}
      </text>
    );
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-lg">Loading Task 4 analysis...</div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto p-6 pt-2 bg-white rounded-lg shadow-lg">
      <div className="">
        <h2 className="text-xl font-bold text-gray-800 mb-2">Task 4: Recommendation System Results</h2>
        <p className="text-gray-600">
          Participants chose between two different trips to the same destination. 
          One generated with the recommendation system, one without.
          They were not told which trip was which. They were then asked to choose the trip was best tailored to their preferences.
        </p>
        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mt-4">
          <p className="text-sm text-gray-700">
            <strong>Total Responses:</strong> {totalResponses} participants
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="h-96">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={CustomLabel}
                outerRadius={120}
                fill="#8884d8"
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
              <Legend 
                verticalAlign="bottom" 
                height={36}
                formatter={(value, entry) => (
                  <span style={{ color: entry.color, fontWeight: 'semibold' }}>
                    {value}
                  </span>
                )}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Detailed Results</h3>
          
          {data.map((item, index) => (
            <div key={index} className="bg-gray-50 p-4 rounded-lg border-l-4" 
                 style={{ borderLeftColor: COLORS[index] }}>
              <div className="flex justify-between items-center mb-2">
                <h5 className="font-semibold text-gray-800 text-lg">{item.name}</h5>
                <span className="text-2xl font-bold" style={{ color: COLORS[index] }}>
                  {item.percentage}%
                </span>
              </div>
              <p className="text-sm text-gray-600">
                {item.value} out of {totalResponses} participants chose this option
              </p>
            </div>
          ))}

          <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg mt-6">
            <h4 className="font-semibold text-yellow-800 mb-2">Conclusion</h4>
            <p className="text-sm text-yellow-700">
                The results show that 80% of the participants preferred the trip generated with the recommendation system, 
                validating our system's value.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Task4Analysis;