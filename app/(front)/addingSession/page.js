  import Connect from "@/app/db/Connect";
  import NewSession from "@/app/models/NewSession";
  import Link from "next/link";
  import { redirect } from "next/navigation";
  import React from "react";
import Sidebar from "../components/Sidebar";

  const page = () => {
   

    const handleInsert = async (formData) => {
      "use server";
      let studentName = formData.get("studentName");
      let fatherName = formData.get("fatherName");
      let add = formData.get("add");
      let pin = formData.get("pin");
      let mobile = formData.get("mobile");
      let email = formData.get("email");

      console.log("rama")
      console.log(formData)

      //  Connect();

      // let newData = await newSession.create({
      //   studentName: studentName,
      //   fatherName: fatherName,
      //   add: add,
      //   pin: pin,
      //   mobile: mobile,
      //   email: email,

      // });
      // console.log("rama011")
      // console.log(formData)
      try {
        // Connect to the database
        Connect();
  
        // Insert data into MongoDB using the newSession model
        await NewSession.create({
          studentName,
          fatherName,
          add,
          pin,
          mobile,
          email,
        });
  
        // Redirect after successful insertion
        redirect("/student-details");
      } catch (error) {
        console.error("Error inserting adding data", error);
      }
  

      redirect("/student-details") 
      
    };
    return (
      <div className="flex flex-1 flex-row">
      <div className="w-3/12"> <Sidebar/></div>
      <div className="flex flex-1 w-9/12 flex-col mt-5 items-center ">

       
        <div className="flex text-2xl font-sans px-10 rounded font-semibold w-fit  bg-[#4A628A] text-[#DFF2Eb] shadow-b-xl justify-center py-2 ">
          Add Session
        </div>

        <form action={handleInsert} className="flex justify-center bg-[#B9E5E6] mt-5 rounded shadow-xl p-5 flex-col gap-5 ">
          <div className="flex w-full justify-start gap-5 ">
            <label htmlFor="studentName" className="text-xl w-fit  font-semibold font-sans ">
              Student Name:
            </label>
            <input
              id="studentName"
              name="studentName"
              className="p-1 w-[70vh] ml-8 rounded hover:border-[#4A628A] border  outline-none"
              required
            />
          </div>
          <div className="flex w-full justify-start gap-5 ">
            <label htmlFor="fatherName" className="text-xl w-fit  font-semibold font-sans ">
              Father's Name:
            </label>
            <input
              id="fatherName"
              name="fatherName"
              className="p-1 w-[70vh] rounded ml-9  hover:border-[#4A628A] border  outline-none"
              required
            />
          </div>
          <div className="flex w-full justify-start gap-5 ">
            <label htmlFor="add" className="text-xl w-fit  font-semibold font-sans ">
              Add:
            </label>
            <input
              id="add"
              name="add"
              className="p-1 w-[70vh] rounded ml-32 hover:border-[#4A628A] border  outline-none"
              required
            />
          </div>
          <div className="flex w-full justify-start gap-5 ">
            <label htmlFor="pin" className="text-xl w-fit  font-semibold font-sans ">
              Pin code :
            </label>
            <input
              id="pin"
              name="pin"
              type="Number"
              className="p-1 w-[70vh] rounded ml-20 hover:border-[#4A628A] border  outline-none"
              required
            />
          </div>
          <div className="flex w-full justify-start gap-5 ">
            <label htmlFor="mobile" className="text-xl w-fit  font-semibold font-sans ">
              Mobile :
            </label>
            <input
              id="mobile"
              name="mobile"
              type="Number"
              className="p-1 w-[70vh] rounded ml-24 hover:border-[#4A628A] border  outline-none"
              required
            />
          </div>
          <div className="flex w-full justify-start gap-5 ">
            <label htmlFor="email" className="text-xl w-fit  font-semibold font-sans ">
              Email :
            </label>
            <input
              id="email"
              name="email"
              placeholder="your@gmail.com"
              className=" text-gray-300 p-1 w-[70vh] ml-28 rounded hover:border-[#4A628A] border  outline-none"
              required
            />
          </div>
          <div className="flex  justify-center w-full gap-5 mt-5 ">
            <input
              type="submit"
              value="Create Account"
              className="p-2 text-[#DFF2Eb] text-2xl font-semibold font-sans w-[95vh] bg-[#4A628A] rounded  hover:border-[#4A628A]  border  outline-none"
            />
          </div>
        </form>
        <div className="flex pt-2 gap-1">
          <p className="font-sans font-semibold text-gray-500 ">
            Already have an account?
          </p>
          <Link href="/login" className="text-blue-600 font-sans">
            {" "}
            Login here
          </Link>
        </div>
      </div>
      </div>
    );
  };

  export default page;
