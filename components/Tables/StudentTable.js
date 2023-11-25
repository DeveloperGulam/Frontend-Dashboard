import React from "react";
import Button from "../Button/Button";

const StudentTable = ({ studentData }) => {
  return (
    <div className="w-full overflow-x-auto">
      <section className="w-full flex justify-between  items-start">
        <div>
          <h2 className="text-black text-x font-semibold ">Students</h2>
        </div>
        <div className="flex flex-row gap-4">
          <Button className="bg-[#5B2C89] text-white py-2">+ Add New</Button>
        </div>
      </section>
      <table className="w-full">
        <thead className=" border-b border-b-[#5B2C89]">
          <tr>
            <th className="w-32 px-1 py-4 text-sm font-bold lg:px-3 text-[#5B2C89] capitalized">
              #
            </th>
            <th className="w-32 px-1 py-4 text-sm font-bold lg:px-3 text-[#5B2C89] capitalized">
              Student
            </th>
            <th className="w-32 px-1 py-4 text-sm font-bold lg:px-3 text-[#5B2C89] capitalized">
              Course
            </th>
            <th className="w-32 px-1 py-4 text-sm font-bold lg:px-3 text-[#5B2C89] capitalized">
              Batch
            </th>
          </tr>
        </thead>
        <tbody>
          {studentData.length > 0 &&
            studentData.map((student, index) => {
              return (
                <tr className="border-b-2" key={index + 1}>
                  <td className="w-8 px-2 py-4 text-center capitalize font-semibol">
                    {index + 1}
                  </td>
                  <td className="w-8 px-2 py-4 text-center capitalize font-semibol">
                    {student.name}
                  </td>
                  <td className="w-8 px-2 py-4 text-center capitalize font-semibol">
                    {student.course}
                  </td>
                  <td className="w-8 px-2 py-4 text-center capitalize font-semibol">
                    {student.year_of_batch}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default StudentTable;
