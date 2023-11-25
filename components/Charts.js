// components/Charts.js
import React, { useState, useEffect } from 'react';
import DoughnutChart from './charts/DoughnutChart';

const Charts = ({ collegeData }) => {
  const [stateDistribution, setStateDistribution] = useState({});
  const [coursesDistribution, setCoursesDistribution] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const formattedColleges = collegeData.map(college => college.attributes);

        // Calculating city distribution
        const stateDistributionData = formattedColleges.reduce((acc, college) => {
          const state = college.city;
          acc[state] = (acc[state] || 0) + 1;
          return acc;
        }, {});
        setStateDistribution(stateDistributionData);

        // Calculating courses distribution
        const coursesDistributionData = formattedColleges.reduce((acc, college) => {
          college.courses.split(', ').forEach(course => {
            acc[course] = (acc[course] || 0) + 1;
          });
          return acc;
        }, {});
        setCoursesDistribution(coursesDistributionData);
      } catch (error) {
        console.error('Error fetching college data:', error);
      }
    };

    fetchData();
  }, []);

  const stateChartData = {
    labels: Object.keys(stateDistribution),
    datasets: [
      {
        data: Object.values(stateDistribution),
        backgroundColor: [
          'rgb(91,44,137)',
          'rgb(233, 10, 99)',
          'rgb(137, 44, 100)',
          'rgb(137, 49, 44',
          'rgb(54, 162, 235)',
          'rgb(54, 162, 235)',
          'rgb(255, 206, 86)',
        ],
      },
    ],
  };

  const coursesChartData = {
    labels: Object.keys(coursesDistribution),
    datasets: [
      {
        data: Object.values(coursesDistribution),
        backgroundColor: [
          'rgb(91,44,137)',
          'rgb(233, 10, 99)',
          'rgb(137, 44, 100)',
          'rgb(137, 49, 44',
          'rgb(54, 162, 235)',
          'rgb(54, 162, 235)',
          'rgb(255, 206, 86)',
        ],
      },
    ],
  };

  const Pieoptions = {
    maintainAspectRatio: false,

    plugins: {
      legend: {
        position: 'right',
        // boxWidth: 200,
        usePointStyle: true,
        pointStyle: 'circle',
        labels: {
          usePointStyle: true,
        },
      },
    },
  };

  return (
    <div className='flex flex-col md:flex-row justify-between w-full rounded-md gap-10 items-center'>
      <div className='flex gap-10 items-center bg-[#F3F3FF] py-5 px-2 sm:px-5 rounded-md w-full'>
        <DoughnutChart
          title={'Presence in Cities'}
          data={stateChartData}
          options={Pieoptions}
          height={180}
          width={285}
        />
      </div>
      <div className='flex gap-10 items-center bg-[#F3F3FF] py-5 px-2 sm:px-5 rounded-md w-full'>
        <DoughnutChart
          title={'Our Courses'}
          data={coursesChartData}
          options={Pieoptions}
          height={180}
          width={285}
        />
      </div>
    </div>
  );
};

export default Charts;