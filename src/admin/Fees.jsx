import { useState } from "react";
import { IndianRupee, User, Calendar } from "lucide-react";
import StudentSearch from "./StudentSearch";

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
    <div className="flex min-h-screen bg-gray-100">

  {/* Sidebar */}
  <div className="w-64 bg-gradient-to-b from-blue-900 to-blue-700 text-white p-6 shadow-lg">

    <h2 className="text-2xl font-bold mb-8">Admin Panel</h2>

    <ul className="space-y-4 text-sm">
      <li className="hover:bg-white/10 p-2 rounded cursor-pointer transition">
        Dashboard
      </li>

      <li className="bg-white/20 p-2 rounded font-semibold text-yellow-300">
        Fees
      </li>
    </ul>

  </div>

  {/* Main */}
  <div className="flex-1 bg-gray-200  flex flex-col items-center">

    {/* Header */}
  <div className="w-full bg-white  shadow-md px-8 py-4 mb-6 flex justify-between items-center">

  <div className="flex items-center gap-4">
    <img
      src="/images/logo.png"
      alt="logo"
      className="w-12 h-12 object-contain"
    />
    <div>
      <h2 className="font-bold text-xl text-blue-900">
        RN International School
      </h2>
      {/* <p className="text-sm text-gray-500">Fee Management System</p> */}
    </div>
  </div>

  <button
    onClick={() => window.print()}
    className="bg-blue-700 text-white px-5 py-2 rounded-lg hover:bg-blue-800"
  >
    🖨️ Print
  </button>

</div>

    {/* Form Card */}
    <div className="w-full max-w-4xl bg-white p-8 rounded-2xl shadow-lg">

      <h1 className="text-4xl font-semibold mb-6 text-blue-900 text-center">
        Fees Structure
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Student Name */}
        <div>
          <label className="text-sm font-medium mb-1 block">
            Student Name
          </label>
          <div className="relative">
            <User className="absolute left-3 top-3 text-gray-400" />
            <input
              name="studentName"
              className="w-full border focus:ring-2 focus:ring-blue-400 pl-10 p-3 rounded-lg"
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Father Name */}
        <div>
          <label className="text-sm font-medium mb-1 block">
            Father Name
          </label>
          <input
            name="fatherName"
            className="w-full border focus:ring-2 focus:ring-blue-400 p-3 rounded-lg"
            onChange={handleChange}
          />
        </div>

        {/* Class */}
        <div>
          <label className="text-sm font-medium mb-1 block">
            Class
          </label>
          <select
            name="class"
            className="w-full border focus:ring-2 focus:ring-blue-400 p-3 rounded-lg"
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
          <label className="text-sm font-medium mb-1 block">
            Fee Type
          </label>
          <select
            name="feeType"
            className="w-full border focus:ring-2 focus:ring-blue-400 p-3 rounded-lg"
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
          <label className="text-sm font-medium mb-1 block">
            Month
          </label>
          <input
            name="month"
            className="w-full border focus:ring-2 focus:ring-blue-400 p-3 rounded-lg"
            onChange={handleChange}
          />
        </div>

        {/* Amount */}
        <div>
          <label className="text-sm font-medium mb-1 block">
            Amount
          </label>
          <div className="relative">
            <input
              name="amount"
              type="number"
              className="w-full border focus:ring-2 focus:ring-blue-400 pr-10 p-3 rounded-lg text-right appearance-none"
              onChange={handleChange}
            />
            <IndianRupee className="absolute right-3 top-3 text-gray-400" />
          </div>
        </div>

        {/* Date */}
        <div>
          <label className="text-sm font-medium mb-1 block">
            Date
          </label>
          <div className="relative">
            <Calendar className="absolute left-3 top-3 text-gray-400" />
            <input
              name="date"
              type="date"
              value={form.date}
              className="w-full border focus:ring-2 focus:ring-blue-400 pl-10 p-3 rounded-lg"
              onChange={handleChange}
            />
          </div>
        </div>

      </div>

      {/* Button */}
      <button
        onClick={handleSubmit}
        className="w-full mt-8 bg-gradient-to-r from-blue-800 to-blue-600 text-white py-3 rounded-xl font-semibold text-lg shadow hover:scale-[1.02] transition"
      >
        Submit Payment
      </button>

    </div>

  </div>
</div>
  );
}

export default Fees;