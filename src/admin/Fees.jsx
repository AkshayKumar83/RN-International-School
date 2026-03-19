import { useState } from "react";
import { IndianRupee, User, Calendar } from "lucide-react";
import StudentSearch from "./StudentSearch";
import { NavLink, useNavigate } from "react-router-dom";
import AdminLayout from "../components/AdminLayout";

function Fees() {

  const [form, setForm] = useState({
    studentName: "",
    fatherName: "",
    class: "",
    feeType: "",
    month: "",
    amount: "",
    date: new Date().toISOString().split("T")[0] // ✅ default current date
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log(form);
    alert("Payment Saved ✅");
  };



return (
  <AdminLayout
  title="Fees"
  rightContent={
    <button
      onClick={() => window.print()}
      className="bg-blue-700 text-white px-4 py-2 rounded-xl"
    >
      Print
    </button>
  }
>
     {/* Form Card */}
   <div className="flex justify-center items-center mt-2 bg-gray-100">
  
  <div className="w-full max-w-4xl bg-white p-4 rounded-2xl shadow-lg">

    <h1 className="text-4xl font-semibold mb-6 text-blue-900 text-center">
      Fees Structure
    </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">

        {/* Student Name */}
        <div>
          <label className="block text-gray-700 font-semibold mb-1">
            Student Name
          </label>
          <div className="relative">
            {/* <User className="absolute left-3 top-3 text-gray-400" /> */}
            <input
              name="studentName"
              className="w-full px-4 p-1 border border-gray-300 rounded-lg "
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Father Name */}
        <div>
          <label className="block text-gray-700 font-semibold mb-1">
            Father Name
          </label>
          <input
            name="fatherName"
            className="w-full border p-1 rounded-lg"
            onChange={handleChange}
          />
        </div>

        {/* Class */}
        <div>
          <label className="block text-gray-700 font-semibold mb-1">
            Class
          </label>
          <select
            name="class"
            className="w-full border  p-1 rounded-lg"
            onChange={handleChange}
          >
            <option>Select Class</option>
            <option>Nursery</option>
            <option>LKG</option>
            <option>UKG</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
          </select>
        </div>

        {/* Fee Type */}
        <div>
          <label className="block text-gray-700 font-semibold mb-1">
            Fee Type
          </label>
          <select
            name="feeType"
            className="w-full border p-1 rounded-lg"
            onChange={handleChange}
          >
            <option>Select Fee Type</option>
            <option>Monthly</option>
            <option>Admission</option>
            <option>Exam</option>
            <option>Activity</option>
          </select>
        </div>

        {/* Month */}
        <div>
          <label className="block text-gray-700 font-semibold mb-1">
            Month
          </label>
          <input
            name="month"
            className="w-full border p-1 rounded-lg"
            onChange={handleChange}
          />
        </div>

        {/* Amount */}
        <div>
          <label className="block text-gray-700 font-semibold mb-1">
            Amount
          </label>
          <div className="relative">
            <input
              name="amount"
              type="number"
              className="w-full border  pr-10 p-1 rounded-lg text-right appearance-none"
              onChange={handleChange}
            />
            <IndianRupee className="absolute right-3 top-1 text-gray-400" />
          </div>
        </div>

        {/* Date */}
        <div>
          <label className="block text-gray-700 font-semibold mb-1">
            Date
          </label>
          <div className="relative">
            {/* <Calendar className="absolute left-3 top-3 text-gray-400" /> */}
            <input
              name="date"
              type="date"
              value={form.date}
              className="w-full border pl-10 p-1 rounded-lg"
              onChange={handleChange}
            />
          </div>
        </div>

      </div>

      {/* Button */}
      {/* <button
        onClick={handleSubmit}
        className="w-full mt-8 bg-gradient-to-r from-blue-800 to-blue-600 text-white py-3 rounded-xl font-semibold text-lg shadow hover:scale-[1.02] transition"
      >
        Submit Payment
      </button> */}

<div className="flex justify-end mt-4">
  <button
    onClick={handleSubmit}
    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl"
  >
    Submit Payment
  </button>
</div>
    </div>
    </div>
  </AdminLayout>
);




}

export default Fees;