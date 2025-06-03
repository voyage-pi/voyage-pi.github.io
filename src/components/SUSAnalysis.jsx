import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const SUSAnalysis = () => {
  const [data, setData] = useState([]);
  const [susScore, setSusScore] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const processData = () => {
      try {
        // Your CSV data hardcoded for MDX compatibility
        const csvData = [
          { q1: 5, q2: 2, q3: 5, q4: 2, q5: 5, q6: 1, q7: 5, q8: 1, q9: 5, q10: 2 },
          { q1: 5, q2: 1, q3: 5, q4: 1, q5: 5, q6: 1, q7: 4, q8: 1, q9: 5, q10: 1 },
          { q1: 5, q2: 2, q3: 5, q4: 1, q5: 5, q6: 1, q7: 5, q8: 1, q9: 5, q10: 1 },
          { q1: 5, q2: 2, q3: 4, q4: 1, q5: 5, q6: 1, q7: 5, q8: 1, q9: 5, q10: 1 },
          { q1: 4, q2: 1, q3: 5, q4: 1, q5: 5, q6: 2, q7: 4, q8: 1, q9: 4, q10: 2 },
          { q1: 4, q2: 1, q3: 5, q4: 2, q5: 4, q6: 1, q7: 4, q8: 1, q9: 4, q10: 1 },
          { q1: 4, q2: 1, q3: 4, q4: 1, q5: 4, q6: 1, q7: 4, q8: 1, q9: 4, q10: 2 },
          { q1: 5, q2: 1, q3: 5, q4: 1, q5: 5, q6: 1, q7: 4, q8: 1, q9: 4, q10: 1 },
          { q1: 4, q2: 2, q3: 4, q4: 1, q5: 4, q6: 1, q7: 4, q8: 1, q9: 4, q10: 2 },
          { q1: 5, q2: 1, q3: 5, q4: 1, q5: 5, q6: 1, q7: 5, q8: 1, q9: 5, q10: 1 },
          { q1: 5, q2: 2, q3: 4, q4: 1, q5: 5, q6: 1, q7: 5, q8: 1, q9: 5, q10: 1 },
          { q1: 3, q2: 1, q3: 4, q4: 2, q5: 4, q6: 1, q7: 4, q8: 1, q9: 4, q10: 1 },
          { q1: 5, q2: 1, q3: 5, q4: 1, q5: 4, q6: 1, q7: 5, q8: 1, q9: 5, q10: 1 },
          { q1: 3, q2: 1, q3: 4, q4: 1, q5: 4, q6: 1, q7: 4, q8: 1, q9: 4, q10: 3 },
          { q1: 4, q2: 1, q3: 5, q4: 1, q5: 4, q6: 1, q7: 4, q8: 1, q9: 5, q10: 1 },
          { q1: 3, q2: 2, q3: 5, q4: 1, q5: 5, q6: 1, q7: 5, q8: 1, q9: 4, q10: 1 },
          { q1: 5, q2: 1, q3: 5, q4: 1, q5: 4, q6: 1, q7: 5, q8: 1, q9: 5, q10: 1 },
          { q1: 4, q2: 2, q3: 5, q4: 1, q5: 5, q6: 1, q7: 4, q8: 1, q9: 3, q10: 1 },
          { q1: 5, q2: 2, q3: 5, q4: 1, q5: 4, q6: 2, q7: 4, q8: 2, q9: 4, q10: 2 },
          { q1: 5, q2: 1, q3: 5, q4: 1, q5: 5, q6: 1, q7: 4, q8: 1, q9: 5, q10: 1 }
        ];

        const susQuestions = [
          'I would like to use this system frequently',
          'I found the system unnecessarily complex',
          'I thought the system was easy to use',
          'I would need technical support to use this system',
          'Most people would learn to use this system quickly',
          'I thought there was too much inconsistency',
          'I felt very confident using the system',
          'I found the system very complicated to use',
          'I think it is likely I would use this system again',
          'I needed to learn a lot of things before I could get going'
        ];

        // Calculate averages for each question
        const averages = susQuestions.map((question, index) => {
          const questionKey = `q${index + 1}`;
          const values = csvData.map(row => row[questionKey]);
          const average = values.reduce((sum, val) => sum + val, 0) / values.length;
          
          return {
            question: `Q${index + 1}`,
            questionText: question,
            average: parseFloat(average.toFixed(2)),
            isPositive: (index + 1) % 2 === 1
          };
        });

        // Calculate SUS Score using proper formula
        let totalScore = 0;
        csvData.forEach(row => {
          let oddSum = row.q1 + row.q3 + row.q5 + row.q7 + row.q9;
          let evenSum = row.q2 + row.q4 + row.q6 + row.q8 + row.q10;
          
          const x = oddSum - 5;
          const y = 25 - evenSum;
          const individualScore = (x + y) * 2.5;
          
          totalScore += individualScore;
        });
        
        const finalSusScore = totalScore / csvData.length;

        setData(averages);
        setSusScore(parseFloat(finalSusScore.toFixed(1)));
        setLoading(false);
      } catch (error) {
        console.error('Error processing data:', error);
        setLoading(false);
      }
    };

    processData();
  }, []);

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-white p-4 border border-gray-300 rounded shadow-lg max-w-xs">
          <p className="font-semibold">{`${label}: ${payload[0].value}`}</p>
          <p className="text-sm text-gray-600 mt-1">{data.questionText}</p>
        </div>
      );
    }
    return null;
  };

  const getSusInterpretation = (score) => {
    if (score >= 80) return { text: "Excellent", color: "text-green-600" };
    if (score >= 68) return { text: "Good", color: "text-blue-600" };
    if (score >= 50) return { text: "OK", color: "text-yellow-600" };
    return { text: "Poor", color: "text-red-600" };
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="text-lg">Loading SUS analysis...</div>
      </div>
    );
  }

  const interpretation = getSusInterpretation(susScore);

  return (
    <div className="w-full max-w-6xl mx-auto p-6 bg-white rounded-lg shadow-lg my-4 pt-2">
      <div className="mb-8">
        <h2 className="text-xl font-bold text-gray-800 mb-2">SUS Score Results</h2>
        <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-blue-800 mr-4">
              SUS Score: {susScore}/100
            </div>
            <div className={`text-lg font-semibold ${interpretation.color}`}>
              ({interpretation.text})
            </div>
          </div>
          <p className="text-sm text-gray-600 mt-2">
            Based on 20 participant responses
          </p>
        </div>
      </div>

      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-700 mb-4">Average Scores by Question</h3>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="question" />
            <YAxis domain={[0, 5]} />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Bar 
              dataKey="average" 
              fill="#3B82F6" 
              name="Average Score"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-green-50 p-4 rounded-lg">
          <h4 className="font-semibold text-green-800 mb-2">Positive Indicators (Odd Questions)</h4>
          <ul className="text-sm space-y-1">
            {data.filter(item => item.isPositive).map((item, index) => (
              <li key={index} className="flex justify-between">
                <span>{item.question}:</span>
                <span className="font-medium">{item.average}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="bg-red-50 p-4 rounded-lg">
          <h4 className="font-semibold text-red-800">Negative Indicators (Even Questions)</h4>
          <ul className="text-sm space-y-1">
            {data.filter(item => !item.isPositive).map((item, index) => (
              <li key={index} className="flex justify-between">
                <span>{item.question}:</span>
                <span className="font-medium">{item.average}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SUSAnalysis;