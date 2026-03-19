

// import { useState } from "react";
// import AdminLayout from "../components/AdminLayout";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";

// export default function AdmissionForm() {
//   const navigate = useNavigate();

//   const initialState = {
//   admissionDate: new Date().toISOString().split("T")[0],
//   name: "",
//   fatherName: "",
//   motherName: "",
//   class: "",
//   dob: "",
//   gender: "",
//   mobile: "",
//   alternateMobile: "",
//   address: "",
//   fee: "",
//   paymentStatus: "paid",
//   paymentMode: "cash",
//    photo: false,
//     birthCert: false,
//     aadhar: false,
//     tc: false,
// };


// const [form, setForm] = useState(initialState);



//  const handleChange = (e) => {
//   const { name, value, type, checked } = e.target;

//   setForm({
//     ...form,
//     [name]: type === "checkbox" ? checked : value,
//   });
// };

// const handleSubmit = async (e) => {
//   e.preventDefault();

//   const finalData = {
//     ...form,
//      documents: {
//       photo: form.photo,
//       birthCert: form.birthCert,
//       aadhar: form.aadhar,
//       tc: form.tc,
//     },

//   };

//   try {
//     const res = await fetch("http://localhost:5001/api/students/add", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(finalData),
//     });

//     const data = await res.json();

//     if (res.ok) {
//       toast.success("Admission Saved Successfully ");

//       console.log("SUCCESS 👉", data);

//       // 🔥 OPTIONAL: form reset
//        setForm({...initialState});
//     } else {
//       toast.error(data.error || "Something went wrong ");
//     }

//   } catch (error) {
//     console.error(error);
//     toast.error("Server Error ");
//   }
// };

//   const logout = () => {
//     localStorage.removeItem("admin");
//     navigate("/admin/login");
//   };

//   return (
//     <AdminLayout title="Admission Form" logout={logout}>
//       <h1 className="text-2xl font-bold mb-6">Add Admission</h1>

//       <form
//         onSubmit={handleSubmit}
//         className="bg-white p-3 rounded-2xl shadow space-y-8"
//       >

      
    

//         {/* STUDENT DETAILS */}
//         <div>
//           <h2 className="text-lg font-semibold mb-4">Student Details</h2>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//             <Input label="Student Name *" name="name" value={form.name} onChange={handleChange} />
//             <Input label="Father Name *" name="fatherName" value={form.fatherName} onChange={handleChange} />
//             <Input label="Mother Name *" name="motherName" value={form.motherName} onChange={handleChange} />

//             <Input type="date" label="Date of Birth *" name="dob" value={form.dob} onChange={handleChange} />

//             <Select
//               label="Gender *"
//               name="gender"
//               value={form.gender}
//               onChange={handleChange}
//               options={["Male", "Female"]}
//             />

//             <Select
//               label="Class *"
//               name="class"
//               value={form.class}
//               onChange={handleChange}
//               options={["Nursery", "LKG", "UKG", "1", "2", "3", "4", "5", "6", "7", "8"]}
//             />

//             <Input type='number' label="Mobile Number *" name="mobile" value={form.mobile} onChange={handleChange} />
//             <Input
//               type='number'
//               label="Alternate Mobile Number"
//               name="alternateMobile"
//               value={form.alternateMobile}
//               onChange={handleChange}
//             />
//             <Input
//               type="date"
//               label="Admission Date *"
//               name="admissionDate"
//               value={form.admissionDate}
//               onChange={handleChange}
//             />
//           </div>
          

//           <div className="mt-4">
//             <label className="label">Address *</label>
//             <textarea
//               name="address"
//               value={form.address}
//               onChange={handleChange}
//               className="input w-full"
//             />
//           </div>
//         </div>

//         {/* DOCUMENTS */}
//         <div>
//           <h2 className="text-lg font-semibold mb-4">Documents</h2>

//           <div className="grid md:grid-cols-2 gap-4">
//             <Checkbox label="Student Photo" name="photo" checked={form.photo} onChange={handleChange} />
//             <Checkbox label="Birth Certificate" name="birthCert" checked={form.birthCert} onChange={handleChange} />
//             <Checkbox label="Aadhar Card" name="aadhar" checked={form.aadhar} onChange={handleChange} />
//             <Checkbox label="Transfer Certificate (TC)" name="tc" checked={form.tc} onChange={handleChange} />
//           </div>
//         </div>

//         {/* ADMISSION FEE */}
//         <div>
//           <h2 className="text-lg font-semibold mb-4">Admission Fee</h2>

//           <div className="grid md:grid-cols-3 gap-4">
//             {/* <Input label="Fee Amount" name="fee" onChange={handleChange} /> */}

//             <Select
//               label="Payment Status"
//               name="paymentStatus"
//               value={form.paymentStatus}
//               onChange={handleChange}
//               options={["paid", "unpaid"]}
//             />

//        {form.paymentStatus === "paid" && (
//               // <Input type='number' label="Fee Amount" name="fee" value={form.fee} onChange={handleChange} />
//               <Input
//               type='number'
//   label="Fee Amount"
//   name="fee"
//   value={form.fee}
//   className="text-right"
//   onChange={(e) => {
//     const value = e.target.value;

//     // only positive numbers allowed
//     if (/^\d*$/.test(value)) {
//       setForm({ ...form, fee: value });
//     }
//   }}
// />
//             )}

//             {form.paymentStatus === "paid" && (
//               <Select
//                 label="Payment Mode"
//                 name="paymentMode"
//                 value={form.paymentMode}
//                 onChange={handleChange}
//                 options={["cash", "upi"]}
//               />
//             )}
            
//           </div>
//         </div>

//         {/* SUBMIT */}
//         <div className="flex justify-end gap-3">
//   <button
//     type="button"
//     onClick={() => setForm(initialState)}
//     className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-xl"
//   >
//     Cancel
//   </button>

//   <button
//     type="submit"
//     className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-xl"
//   >
//     Save Admission
//   </button>
// </div>
//       </form>
//     </AdminLayout>
//   );
// }

import { useState, useEffect } from "react";
import AdminLayout from "../components/AdminLayout";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function AdmissionForm() {
  const navigate = useNavigate();

  const initialState = {
    admissionDate: new Date().toISOString().split("T")[0],
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
    photo: false,
    birthCert: false,
    aadhar: false,
    tc: false,
  };

  const [form, setForm] = useState(initialState);
  const [search, setSearch] = useState("");
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [errors, setErrors] = useState({});

  // 🔍 SEARCH API
  useEffect(() => {
    if (search.length > 1) {
      fetch(`http://localhost:5001/api/students/search?q=${search}`)
        .then(res => res.json())
        .then(data => setStudents(data));
    } else {
      setStudents([]);
    }
  }, [search]);

  // 🔥 INPUT CHANGE
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

const validateForm = () => {
  const newErrors = {};

  if (!form.name.trim()) newErrors.name = "Required";
  if (!form.fatherName.trim()) newErrors.fatherName = "Required";
  if (!form.class) newErrors.class = "Required";
  if (!form.dob) newErrors.dob = "Required";
  if (!form.gender) newErrors.gender = "Required";
  if (!form.mobile) newErrors.mobile = "Required";
  if (form.mobile && form.mobile.length !== 10)
    newErrors.mobile = "Must be 10 digits";

  if (!form.address.trim()) newErrors.address = "Required";

  if (form.paymentStatus === "paid" && !form.fee) {
    newErrors.fee = "Required";
  }

  setErrors(newErrors);

  return newErrors;
};

  //  SUBMIT (ADD + UPDATE)
  const handleSubmit = async (e) => {
    e.preventDefault();

  const validationErrors = validateForm();

  if (Object.keys(validationErrors).length > 0) {
    // 🔥 first error field focus
    const firstField = Object.keys(validationErrors)[0];
    document.querySelector(`[name="${firstField}"]`)?.focus();
    return;
  }

    const url = selectedStudent
      ? `http://localhost:5001/api/students/${selectedStudent._id}`
      : "http://localhost:5001/api/students/add";

    const method = selectedStudent ? "PUT" : "POST";

    const finalData = {
      ...form,
      documents: {
        photo: form.photo,
        birthCert: form.birthCert,
        aadhar: form.aadhar,
        tc: form.tc,
      },
    };

    try {
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(finalData),
      });

      const data = await res.json();

      if (res.ok) {
        toast.success(selectedStudent ? "Updated ✅" : "Saved ✅");
        setForm(initialState);
        setSelectedStudent(null);
        setSearch("");
      } else {
        toast.error(data.error || "Something went wrong");
      }
    } catch (error) {
      toast.error("Server Error");
    }
  };

  const logout = () => {
    localStorage.removeItem("admin");
    navigate("/admin/login");
  };

  return (
    <AdminLayout title="Admission Form" logout={logout}>
      <h1 className="text-2xl font-bold mb-4">Add / Update Admission</h1>

      {/* 🔍 SEARCH BOX */}
      <input
        placeholder="Search student by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="input mb-2 w-full"
      />

      {/* 🔽 SEARCH RESULTS */}
      {students.length > 0 && (
        <div className="bg-white border rounded mb-4 max-h-40 overflow-y-auto">
          {students.map((s) => (
            <div
              key={s._id}
              className="p-2 hover:bg-gray-100 cursor-pointer"
              onClick={() => {
  setForm({
    ...s,

    dob: s.dob ? s.dob.split("T")[0] : "",
    admissionDate: s.admissionDate
      ? s.admissionDate.split("T")[0]
      : "",

    paymentStatus: s.admissionFeeStatus || "unpaid",
fee: s.admissionFeeAmount || "",
paymentMode: s.paymentMode || "cash",
    fee: s.admissionFeeAmount,
    ...s.documents,
  });

  setSelectedStudent(s);
  setStudents([]);
  setSearch("");
}}
            >
              {s.admissionNumber} - {s.name} ({s.class}) - {s.mobile}
            </div>
          ))}
        </div>
      )}

      <form onSubmit={handleSubmit} className="bg-white p-3 rounded-2xl shadow space-y-8">

        {/* STUDENT DETAILS */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Student Details</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Input label="Student Name *" name="name" value={form.name}  error={errors.name} onChange={handleChange} />
            <Input label="Father Name *" name="fatherName" value={form.fatherName}  error={errors.fatherName} onChange={handleChange} />
            <Input label="Mother Name *" name="motherName" value={form.motherName}  error={errors.motherName} onChange={handleChange} />
            <Input type="date" label="Date of Birth *" name="dob" value={form.dob}  error={errors.dob} onChange={handleChange} />

            <Select label="Gender *" name="gender" value={form.gender}   className={`input ${errors.gender ? "border-red-500" : ""}`} onChange={handleChange} options={["Male", "Female"]} />
            <Select label="Class *" name="class" value={form.class}   className={`input ${errors.class ? "border-red-500" : ""}`}onChange={handleChange} options={["Nursery","LKG","UKG","1","2","3","4","5","6","7","8"]} />

            <Input type="number" label="Mobile Number *" name="mobile" value={form.mobile}  error={errors.mobile} onChange={handleChange} />
            <Input type="number" label="Alternate Mobile" name="alternateMobile" value={form.alternateMobile}   onChange={handleChange} />
            <Input type="date" label="Admission Date *" name="admissionDate" value={form.admissionDate}  error={errors.admissionDate} onChange={handleChange} />
          </div>

          <div className="mt-4">
            <label className="label">Address *</label>
            <textarea name="address" value={form.address} className={`input ${errors.address ? "border-red-500" : ""}`} onChange={handleChange}/>
          </div>
        </div>

        {/* DOCUMENTS */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Documents</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Checkbox label="Student Photo" name="photo" checked={form.photo} onChange={handleChange} />
            <Checkbox label="Birth Certificate" name="birthCert" checked={form.birthCert} onChange={handleChange} />
            <Checkbox label="Aadhar Card" name="aadhar" checked={form.aadhar} onChange={handleChange} />
            <Checkbox label="TC" name="tc" checked={form.tc} onChange={handleChange} />
          </div>
        </div>

        {/* FEE */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Admission Fee</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Select label="Payment Status" name="paymentStatus" value={form.paymentStatus} onChange={handleChange} options={["paid","unpaid"]} />

            {form.paymentStatus === "paid" && (
              <Input type="number" label="Fee Amount" name="fee" value={form.fee} onChange={handleChange} />
            )}

            {form.paymentStatus === "paid" && (
              <Select label="Payment Mode" name="paymentMode" value={form.paymentMode} onChange={handleChange} options={["cash","upi"]} />
            )}
          </div>
        </div>

        {/* BUTTONS */}
        <div className="flex justify-end gap-3">
          <button type="button" onClick={() => {
            setForm(initialState);
            setSelectedStudent(null);
            setErrors({});
          }} className="bg-red-600 text-white px-6 py-2 rounded-xl">
            Cancel
          </button>

          <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-xl">
            {selectedStudent ? "Update Admission" : "Save Admission"}
          </button>
        </div>

      </form>
    </AdminLayout>
  );
}

/* COMPONENTS */

function Input({ label, type, error, ...props }) {
  return (
    <div>
      <label className="label">{label}</label>

      <input
        type={type}
        {...props}
        className={`input ${type === "number" ? "text-right" : ""} ${error ? "border-red-500" : ""}`}
      />

      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
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

function Checkbox({ label, name, checked, onChange }) {
  return (
    <label className="flex items-center gap-3 border p-3 rounded-lg cursor-pointer hover:bg-gray-50">
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
        className="w-4 h-4"
      />
      <span className="text-sm font-medium">{label}</span>
    </label>
  );
}