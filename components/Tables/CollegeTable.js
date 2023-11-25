import React from "react" 
import Button from "../Button/Button"
import { LuExternalLink } from "react-icons/lu";
import Link from "next/link";
 
const CollegeTable = ({ collegeData }) => {
    console.log(collegeData)
  return (
    <div className="w-full overflow-x-auto">
        <section className="w-full flex justify-between  items-start">
            <div>
            <h2 className="text-black text-x font-semibold ">College List</h2>
            </div>
            <div className="flex flex-row gap-4">
                <Button className="bg-[#5B2C89] text-white py-2">+ Add New</Button>
            </div>
        </section>
        <table className="w-full text-left border-collapse rounded w-overflow-x-auto " cellSpacing="0">
            <thead>
                <tr className="border-b border-[#5B2C89]">
                    <th scope="col" className="h-12 text-sm font-bold stroke-[#5B2C89] text-[#5B2C89] ">#</th>
                    <th scope="col" className="h-12 px-6 text-sm font-bold stroke-[#5B2C89] text-[#5B2C89] ">Name</th>
                    <th scope="col" className="h-12 px-6 text-sm font-bold stroke-[#5B2C89] text-[#5B2C89] ">Year Founded</th>
                    <th scope="col" className="h-12 px-6 text-sm font-bold stroke-[#5B2C89] text-[#5B2C89] ">City</th>
                    <th scope="col" className="h-12 px-6 text-sm font-bold stroke-[#5B2C89] text-[#5B2C89] ">Rating</th>
                    <th scope="col" className="h-12 px-6 text-sm font-bold stroke-[#5B2C89] text-[#5B2C89] ">Courses</th>
                    <th scope="col" className="h-12 px-6 text-sm font-bold stroke-[#5B2C89] text-[#5B2C89] ">Actions</th>
                </tr>
            </thead>
            <tbody>
            {collegeData.length > 0 ? (
              collegeData.map((college, index) => (
                <tr className="border-b border-slate-200" key={college.id}>
                    <td className="h-12 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">{index + 1}</td>
                    <td className="h-12 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">{college.attributes.name}</td>
                    <td className="h-12 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">{college.attributes.year_founded}</td>
                    <td className="h-12 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">{college.attributes.city}</td>
                    <td className="h-12 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">{college.attributes.rating}</td>
                    <td className="h-12 px-6 text-sm transition duration-300 border-slate-200 stroke-slate-500 text-slate-500 ">{college.attributes.courses}</td>
                    <td className="w-8 px-2 py-4 text-center font-semibold cursor-pointer">
                      <Link
                        href={`/college/${college.id}`}
                        className="flex justify-center items-center text-[#5B2C89]"
                      >
                        <p className="mx-3"> view</p>
                        <LuExternalLink />
                      </Link>
                    </td>
                </tr>
              ))
            ) : (
                <div className="flex justify-center items-center bg-light h-40">
                  No Data Found
                </div>
              )}
            </tbody>
        </table>
    </div>
)}

export default CollegeTable