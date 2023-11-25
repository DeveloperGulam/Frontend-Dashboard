// "use client";
// import { Button } from "keep-react";
import React, { useEffect, useState } from 'react'
import Charts from '../Charts';
import CollegeTable from '../Tables/CollegeTable';
import { getColleges } from '../../utils/api';
import DotsLoader from '../Loader/DotsLoader';

const HomePage = () => {
  const [loading, setLoading] = useState(true);
  const [collegeData, setCollegeData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const colleges = await getColleges();

        setCollegeData(colleges.data);
      } catch (error) {
        console.error('Error fetching college data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return loading ? (
    <DotsLoader />
  ) : (
    <div className="min-h-screen flex">
      <div className="w-full flex flex-col items-center px-10 lg:px-10 md:px-10 xs:px-2">
        <div className="w-full flex justify-center items-center mb-16">
            <Charts collegeData={collegeData} />
        </div>
        <CollegeTable collegeData={collegeData} />
      </div>
    </div>
  )
}

export default HomePage
