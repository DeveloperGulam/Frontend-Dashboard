import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import DotsLoader from '../Loader/DotsLoader';
import AnalysticsCard from '../Cards/AnalysticsCard';
import Person from '../Svgs/Person';
import Location from '../Svgs/Location';
import Teacher from '../Svgs/Teacher';
import { getStudentByCollege } from '../../utils/api';
import StudentTable from '../Tables/StudentTable';

const CollegeDetails = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
//   const [guestClicks, setGuestClicks] = useState(0);
  const [totalLocations, setTotalLocations] = useState(0);
  const [totalStudents, setTotalStudents] = useState(0);
  const [studentData, setStudentData] = useState([]);
  
  useEffect(() => {
    getStudentData();
  }, []);

  const getStudentData = async () => {
    const id = router.query.id;

    if (!id) {
      return;
    }
    const response = await getStudentByCollege(id);

    if (response && response.length > 0) {
      setTotalStudents(response.length);
      setStudentData(response)
    }
    setLoading(false);
  };

return loading ? (
    <DotsLoader />
  ) : (
    <>
      <button
        onClick={() => router.back()}
        className="inline text-[#5B2C89] px-8 py-2 rounded-md bg-white cursor-pointer shadow my-5"
        role="button"
      >
        {' '}
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          version="1.2"
          baseProfile="tiny"
          viewBox="0 0 24 24"
          className="inline"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 9.059v-2.559c0-.256-.098-.512-.293-.708-.195-.195-.451-.292-.707-.292s-.512.097-.707.292l-6.293 6.208 6.293 6.207c.195.195.451.293.707.293s.512-.098.707-.293.293-.452.293-.707v-2.489c2.75.068 5.755.566 8 3.989v-1c0-4.633-3.5-8.443-8-8.941z"></path>
        </svg>{' '}
        <span className="px-4">Back</span>{' '}
      </button>
      {studentData.length === 0 ? (
        <div className="bg-light h-32 flex justify-center items-center text-center my-10">
          <p className=" text-2xl gradient-text"> No User Data Found</p>
        </div>
      ) : (
        <div className="my-5 mr-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <AnalysticsCard
              key="Total No. Of Students"
              title="Total No. Of Students"
              numbers={totalStudents}
              loading={false}
            >
              <Person />
            </AnalysticsCard>
            <AnalysticsCard
              key="Total No. Of Locations"
              title="Total No. Of Locations"
              numbers={totalLocations}
              loading={false}
            >
              <Location />
            </AnalysticsCard>
            <AnalysticsCard
              key="Total No. Of Teachers"
              title="Total No. Of Teachers"
              numbers={3}
              loading={false}
            >
              <Teacher />
            </AnalysticsCard>
          </div>
          <div className=" my-5 bg-light">
            <div className="overflow-x-auto">
              <StudentTable studentData={studentData} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default CollegeDetails
