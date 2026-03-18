import { useState } from "react";
import AdminLayout from "../components/AdminLayout";
import { useNavigate } from "react-router-dom";

export default function AdmissionForm() {
  const navigate = useNavigate();

  // 🔥 FORM STATE
  const [form, setForm] = useState({
    name: "",
    fatherName: "",
    motherName: "",
    class: "",
    dob: "",
    gender: "",
    mobile: "",
    alternateMobile: "",
    address: "",
    fee: "",
    paymentStatus: "paid",
    paymentMode: "cash",
  });

  // 🔥 DOCUMENT STATE
  const [documents, setDocuments] = useState({
    photo: false,
    birthCert: false,
    aadhar: false,
    tc: false,
  });

  // 🔥 INPUT CHANGE
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // 🔥 CHECKBOX CHANGE
  const handleDocChange = (e) => {
    setDocuments({
      ...documents,
      [e.target.name]: e.target.checked,
    });
  };

  // 🔥 SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();

    const finalData = {
      ...form,
      documents,
    };

    console.log("FINAL DATA 👉", finalData);

    // 👉 API call yaha karega
  };

  // 🔥 LOGOUT
  const logout = () => {
    localStorage.removeItem("admin");
    navigate("/admin/login");
  };

  return (
    <AdminLayout title="Admission Form" logout={logout}>
      <h1 className="text-2xl font-bold mb-6">Add Admission</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-2xl shadow space-y-8"
      >
        {/* STUDENT DETAILS */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Student Details</h2>

          <div className="grid md:grid-cols-3 gap-4">
            <Input label="Student Name *" name="name" onChange={handleChange} />
            <Input label="Father Name *" name="fatherName" onChange={handleChange} />
            <Input label="Mother Name" name="motherName" onChange={handleChange} />

            <Input type="date" label="Date of Birth *" name="dob" onChange={handleChange} />

            <Select
              label="Gender *"
              name="gender"
              onChange={handleChange}
              options={["Male", "Female"]}
            />

            <Select
              label="Class *"
              name="class"
              onChange={handleChange}
              options={["Nursery", "LKG", "UKG", "1", "2", "3", "4", "5", "6", "7", "8"]}
            />

            <Input label="Mobile Number *" name="mobile" onChange={handleChange} />
            <Input
              label="Alternate Mobile Number"
              name="alternateMobile"
              onChange={handleChange}
            />
          </div>

          <div className="mt-4">
            <label className="label">Address *</label>
            <textarea
              name="address"
              onChange={handleChange}
              className="input w-full"
            />
          </div>
        </div>

        {/* DOCUMENTS */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Documents</h2>

          <div className="grid md:grid-cols-2 gap-4">
            <Checkbox label="Student Photo" name="photo" onChange={handleDocChange} />
            <Checkbox label="Birth Certificate" name="birthCert" onChange={handleDocChange} />
            <Checkbox label="Aadhar Card" name="aadhar" onChange={handleDocChange} />
            <Checkbox label="Transfer Certificate (TC)" name="tc" onChange={handleDocChange} />
          </div>
        </div>

        {/* FEE SECTION */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Admission Fee</h2>

          <div className="grid md:grid-cols-3 gap-4">
            <Input label="Fee Amount *" name="fee" onChange={handleChange} />

            <Select
              label="Payment Status"
              name="paymentStatus"
              onChange={handleChange}
              options={["paid", "unpaid"]}
            />

            {form.paymentStatus === "paid" && (
              <Select
                label="Payment Mode"
                name="paymentMode"
                onChange={handleChange}
                options={["cash", "upi"]}
              />
            )}
          </div>
        </div>

        {/* SUBMIT */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl"
          >
            Save Admission
          </button>
        </div>
      </form>
    </AdminLayout>
  );
}

/* 🔥 COMPONENTS */

function Input({ label, ...props }) {
  return (
    <div>
      <label className="label">{label}</label>
      <input {...props} className="input" />
    </div>
  );
}

function Select({ label, options, ...props }) {
  return (
    <div>
      <label className="label">{label}</label>
      <select {...props} className="input">
        <option value="">Select</option>
        {options.map((opt, i) => (
          <option key={i} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}

function Checkbox({ label, name, onChange }) {
  return (
    <label className="flex items-center gap-3 border p-3 rounded-lg cursor-pointer hover:bg-gray-50">
      <input type="checkbox" name={name} onChange={onChange} className="w-4 h-4" />
      <span className="text-sm font-medium">{label}</span>
    </label>
  );
}