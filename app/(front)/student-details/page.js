import Connect from "@/app/db/Connect";
import NewSession from "@/app/models/NewSession";
import { redirect } from "next/navigation"; 
import React from "react";
import Sidebar from "../components/Sidebar";

const Callingdata = async () => {
  await Connect();

 
  const CallingRecords = await NewSession.find();

  const handleDelete = async (formData) => {
    "use server";
    let id = formData.get("recordId");
    console.log(form)

    await NewSession.findByIdAndDelete(id); 
    redirect("/"); 
  };

  return (
    <div className="flex flex-col items-center  px-5">
      <h1 className="text-3xl font-bold my-10 text-[#195758] mb-5">Student Records</h1>
     <div className="flex gap-10">
     <div className="w-3/12"><Sidebar/></div>
      <table className="table-auto border-collapse border-2 border-[#195758] w-full max-w-screen-lg shadow-lg rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-[#37babd] text-white text-lg">
            <th className="border p-3 text-center">No.</th>
            <th className="border p-3 text-center">Student Name</th>
            <th className="border p-3 text-center">Father's Name</th>
            <th className="border p-3 text-center">Address</th>
            <th className="border p-3 text-center">Pin Code</th>
            <th className="border p-3 text-center">Mobile No.</th>
            <th className="border p-3 text-center">Email Id</th>
            <th className="border p-3 text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          {CallingRecords.map((record, index) => (
            <tr
              key={record._id}
              className="hover:bg-[#f4f4f4] transition-colors duration-300 ease-in-out"
            >
              <td className="border p-4 text-center">{index + 1}</td>
              <td className="border p-4 text-center">{record.studentName}</td>
              <td className="border p-4 text-center">{record.fatherName}</td>
              <td className="border p-4 text-center">{record.add}</td>
              <td className="border p-4 text-center">{record.pin}</td>
              <td className="border p-4 text-center">{record.mobile}</td>
              <td className="border p-4 text-center">{record.email}</td>
              <td className="border p-4 text-center">
                {/* <form action={handleDelete} method="POST" className="mt-5">
                  <input type="hidden" name="recordId" value={record.id} />
                  <input
                    type="submit"
                    className="bg-red-500 text-white px-3 py-2 rounded hover:bg-red-600 transition duration-300"
                    value="Delete"
                  />
                </form> */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
     </div>
    </div>
  );
};

export default Callingdata;
