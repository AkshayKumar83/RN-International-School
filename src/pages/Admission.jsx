

// function Admission() {

//   return (

//     <section className="py-20 bg-gray-100">

//       <div className="max-w-6xl mx-auto px-6">

//         <h2 className="text-3xl font-bold text-center mb-10 text-blue-600">
//           Admissions Open 2026-2027
//         </h2>

//         <div className="flex justify-center">

//          <img
//           src="/images/admission-banner.png"
//           alt="Admission Banner"
//           className="rounded-xl shadow-lg"
//         />

//         </div>

//       </div>

//     </section>

//   );

// }

// export default Admission;

import React, { useState } from "react";
import { CircleHelp, Send } from "lucide-react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const Admissions = () => {

   const [loading, setLoading] = useState(false);
   const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    student_name: "",
    parent_name: "",
    email: "",
    phone: "",
    grade: "",
    previous_school: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    setLoading(true);

    const result = await emailjs.send(
      "service_pcjveul",
      "template_kackeng",
      {
        form_type: "Admission Inquiry",
        name: formData.student_name,
        email: formData.email,
        phone: formData.phone,
        message: `
Student Name: ${formData.student_name}
Parent Name: ${formData.parent_name}
Grade: ${formData.grade}
Previous School: ${formData.previous_school}

Additional Message:
${formData.message}
`
      },
      "0jB7h_xsOMEqFZtlu"
    );

    if (result.text === "OK") {
      toast.success("Admission inquiry submitted successfully!");

      setSubmitted(true);

      setFormData({
        student_name: "",
        parent_name: "",
        email: "",
        phone: "",
        grade: "",
        previous_school: "",
        message: ""
      });
    }

  } catch (error) {
    toast.error("Failed to send inquiry");
  } finally {
    setLoading(false);
  }
};

  const faqs = [
    {
      q: "What is the admission age criteria?",
      a: "For Nursery: 3 years as on March 31st. For other classes, age criteria follows CBSE guidelines."
    },
    {
      q: "Is there any admission test?",
      a: "For classes 2 and above, a simple assessment test is conducted."
    },
    {
      q: "What documents are required?",
      a: "Birth certificate, Transfer certificate, report card, Aadhar card and passport photos."
    },
    {
      q: "Are siblings given preference?",
      a: "Yes, siblings of current students are given preference."
    },
    {
      q: "Is transportation available?",
      a: "Yes, safe transportation is available across major areas."
    }
  ];

  return (
    <div className="admissions-page">

      {/* HEADER */}

      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">

        <div className="container mx-auto px-4">

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Admissions 2026-27
          </h1>

          <p className="text-xl text-gray-100">
            Join our family of excellence
          </p>

          <div className="bg-yellow-400 text-blue-900 inline-block px-6 py-3 rounded-lg mt-6 font-bold text-lg">
            🎓 Admissions Open | Admission Fees FREE!
          </div>

        </div>

      </section>


      {/* ADMISSION PROCESS */}

      <section className="py-16">

        <div className="container mx-auto px-4">

          <div className="text-center mb-12">

            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Admission Process
            </h2>

            <p className="text-gray-600">
              Simple and transparent admission procedure
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {[
              {
                title: "Submit Inquiry Form",
                desc: "Fill out the admission inquiry form with details"
              },
              {
                title: "School Visit",
                desc: "Visit campus and meet our admission counselor"
              },
              {
                title: "Document Submission",
                desc: "Submit birth certificate and required documents"
              },
              {
                title: "Admission Confirmation",
                desc: "Complete fee payment and confirm admission"
              }
            ].map((step, i) => (

              <div key={i} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition">

                <div className="w-12 h-12 bg-blue-700 text-white rounded-full flex items-center justify-center font-bold mb-4">
                  {i + 1}
                </div>

                <h3 className="text-lg font-bold text-blue-900 mb-2">
                  {step.title}
                </h3>

                <p className="text-gray-600 text-sm">
                  {step.desc}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* FEE TABLE */}

     <section className="py-16 bg-gray-50">

  <div className="container mx-auto px-4">

    <div className="text-center mb-12">

      <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
        Fee Structure
      </h2>

      <p className="text-gray-600 text-lg">
        Affordable and transparent fee structure
      </p>

    </div>


    <div className="max-w-5xl mx-auto">

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead className="bg-blue-900 text-white">

              <tr>

                <th className="px-6 py-4 text-left">
                  Grade
                </th>

                <th className="px-6 py-4 text-left">
                  Admission Fee
                </th>

                <th className="px-6 py-4 text-left">
                  Annual Fee
                </th>

                <th className="px-6 py-4 text-left">
                  Includes
                </th>

              </tr>

            </thead>


            <tbody>

              {[
                [
                  "Nursery - UKG",
                  "₹50,000",
                  "Includes books and uniform"
                ],
                [
                  "Class 1 - 5",
                  "₹60,000",
                  "Includes books and activities"
                ],
                [
                  "Class 6 - 8",
                  "₹70,000",
                  "Includes books and lab fees"
                ],
                // [
                //   "Class 9 - 10",
                //   "₹80,000",
                //   "Includes books and exam fees"
                // ],
                // [
                //   "Class 11 - 12",
                //   "₹90,000",
                //   "Includes books and coaching"
                // ]
              ].map((row, i) => (

                <tr
                  key={i}
                  className="border-b hover:bg-blue-50"
                >

                  <td className="px-6 py-4 font-semibold text-gray-800">
                    {row[0]}
                  </td>

                  <td className="px-6 py-4 text-green-600 font-bold">
                    FREE
                  </td>

                  <td className="px-6 py-4 font-semibold text-blue-700">
                    {row[1]}
                  </td>

                  <td className="px-6 py-4 text-gray-600 text-sm">
                    {row[2]}
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>


      <p className="text-center text-gray-600 mt-4 text-sm">
        * Fee structure subject to revision. Transportation charges extra.
      </p>

    </div>

  </div>

</section>


      {/* ADMISSION FORM */}

     <section className="py-16">

  <div className="container mx-auto px-4 max-w-3xl">

    <div className="text-center mb-8">

      <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-2">
        Admission Inquiry Form
      </h2>

      <p className="text-gray-600">
        Fill out the form below and we'll get back to you soon
      </p>

    </div>

    <div className="bg-white p-8 rounded-lg shadow-lg">

      <form onSubmit={handleSubmit}>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Student Name */}

          <div>
            <label className="block text-gray-700 font-semibold ">
              Student Name *
            </label>

            <input
              type="text"
              name="student_name"
              value={formData?.student_name}
              required
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>


          {/* Parent Name */}

          <div>
            <label className="block text-gray-700 font-semibold">
              Parent/Guardian Name *
            </label>

            <input
              type="text"
              name="parent_name"
              value={formData?.parent_name}
              required
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>


          {/* Email */}

          <div>
            <label className="block text-gray-700 font-semibold">
              Email Address *
            </label>

            <input
              type="email"
              name="email"
              value={formData?.email}
              required
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>


          {/* Phone */}

          <div>
            <label className="block text-gray-700 font-semibold">
              Phone Number *
            </label>

            <input
              type="tel"
              name="phone"
              value={formData?.phone}
              required
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>


          {/* Grade */}

          <div>
            <label className="block text-gray-700 font-semibold">
              Grade Applying For *
            </label>

            <select
              name="grade"
              value={formData?.grade}
              required
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >

              <option value="">Select Grade</option>
              <option>Nursery</option>
              <option>LKG</option>
              <option>UKG</option>
              <option>Class 1</option>
              <option>Class 2</option>
              <option>Class 3</option>
              <option>Class 4</option>
              <option>Class 5</option>
              <option>Class 6</option>
              <option>Class 7</option>
              <option>Class 8</option>
              {/* <option>Class 9</option>
              <option>Class 10</option>
              <option>Class 11</option>
              <option>Class 12</option> */}

            </select>
          </div>


          {/* Previous School */}

          <div>
            <label className="block text-gray-700 font-semibold">
              Previous School (if any)
            </label>

            <input
              type="text"
              name="previous_school"
              value={formData?.previous_school}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

        </div>


        {/* Message */}

        <div className="mt-6">

          <label className="block text-gray-700 font-semibold">
            Additional Message
          </label>

          <textarea
            name="message"
            rows="4"
            value={formData?.message}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

        </div>


        {/* Submit */}

        <div className="mt-6">

          {/* <button
            type="submit"
            className="w-full bg-blue-700 text-white px-6 py-4 rounded-lg font-bold text-lg hover:bg-blue-800 transition"
          >
            Submit Inquiry
          </button> */}
           <button
  type="submit"
   disabled={loading || submitted}
  className="w-full bg-blue-700 text-white px-6 py-4 rounded-lg font-bold text-lg hover:bg-blue-800 transition flex items-center justify-center"
>
  {loading ? (
    <span className="flex items-center">
      <svg
        className="animate-spin h-5 w-5 mr-2 text-white"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8v8H4z"
        />
      </svg>
      Sending...
    </span>
  ) : (
    <>
      <Send className="w-5 h-5 mr-2" />
     Submit Inquiry
    </>
  )}
</button>

        </div>

      </form>

    </div>

  </div>

</section>


      {/* FAQ */}

      <section className="py-16 bg-gray-50">

        <div className="container mx-auto px-4 max-w-3xl">

          <h2 className="text-3xl font-bold text-blue-900 text-center mb-8">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">

            {faqs.map((faq, i) => (

              <div key={i} className="bg-white p-6 rounded-lg shadow-md">

                <div className="flex items-start">

                  <CircleHelp className="text-blue-700 mr-3 mt-1" />

                  <div>

                    <h3 className="font-bold text-blue-900 mb-2">
                      {faq.q}
                    </h3>

                    <p className="text-gray-600">
                      {faq.a}
                    </p>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

    </div>
  );
};

export default Admissions;