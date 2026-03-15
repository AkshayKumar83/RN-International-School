// // function Teachers() {

// //   const teachers = [
// //     {
// //       name: "Ravi Sharma",
// //       subject: "Mathematics",
// //       image: "https://randomuser.me/api/portraits/men/32.jpg"
// //     },
// //     {
// //       name: "Priya Singh",
// //       subject: "English",
// //       image: "https://randomuser.me/api/portraits/women/44.jpg"
// //     },
// //     {
// //       name: "Amit Kumar",
// //       subject: "Science",
// //       image: "https://randomuser.me/api/portraits/men/45.jpg"
// //     }
// //   ];

// //   return (

// //     <section style={{padding:"80px"}}>

// //       <h2 style={{textAlign:"center"}}>Our Teachers</h2>

// //       <div
// //         style={{
// //           display:"grid",
// //           gridTemplateColumns:"repeat(3,1fr)",
// //           gap:"30px",
// //           marginTop:"40px"
// //         }}
// //       >

// //         {teachers.map((teacher,index)=>(
// //           <div
// //             key={index}
// //             style={{
// //               background:"white",
// //               padding:"30px",
// //               textAlign:"center",
// //               borderRadius:"10px",
// //               boxShadow:"0 2px 10px rgba(0,0,0,0.1)"
// //             }}
// //           >

// //             <img
// //               src={teacher.image}
// //               style={{
// //                 width:"120px",
// //                 height:"120px",
// //                 borderRadius:"50%",
// //                 objectFit:"cover"
// //               }}
// //             />

// //             <h3 style={{marginTop:"15px"}}>{teacher.name}</h3>

// //             <p>{teacher.subject}</p>

// //           </div>
// //         ))}

// //       </div>

// //     </section>

// //   )

// // }

// // export default Teachers


// import React from "react";
// import { GraduationCap, Award, BookOpen, Users } from "lucide-react";

// const qualities = [
//   {
//     icon: <GraduationCap size={48} />,
//     title: "Highly Qualified",
//     text: "All teachers hold relevant degrees and certifications",
//   },
//   {
//     icon: <Award size={48} />,
//     title: "Experienced",
//     text: "Average teaching experience of 12+ years",
//   },
//   {
//     icon: <BookOpen size={48} />,
//     title: "Continuous Training",
//     text: "Regular workshops and professional development programs",
//   },
//   {
//     icon: <Users size={48} />,
//     title: "Student-Centric",
//     text: "Dedicated to individual attention and student growth",
//   },
// ];

// // const departments = [
// //   {
// //     dept: "English Department",
// //     name: "Mrs. Priya Sharma",
// //     qual: "M.A. English, B.Ed",
// //     exp: "15 years",
// //   },
// //   {
// //     dept: "Mathematics Department",
// //     name: "Mr. Rajesh Kumar",
// //     qual: "M.Sc. Mathematics, B.Ed",
// //     exp: "12 years",
// //   },
// //   {
// //     dept: "Science Department",
// //     name: "Dr. Anjali Verma",
// //     qual: "Ph.D. Physics, M.Sc., B.Ed",
// //     exp: "18 years",
// //   },
// //   {
// //     dept: "Social Studies Department",
// //     name: "Mr. Vikram Singh",
// //     qual: "M.A. History, B.Ed",
// //     exp: "14 years",
// //   },
// //   {
// //     dept: "Hindi Department",
// //     name: "Mrs. Sunita Gupta",
// //     qual: "M.A. Hindi, B.Ed",
// //     exp: "16 years",
// //   },
// //   {
// //     dept: "Computer Science",
// //     name: "Mr. Amit Patel",
// //     qual: "M.Tech Computer Science",
// //     exp: "10 years",
// //   },
// // ];

// const departments = [
//   {
//     dept: "English Department",
//     name: "Mrs. Priya Sharma",
//     qual: "M.A. English, B.Ed",
//     exp: "15 years",
//     img: "https://randomuser.me/api/portraits/women/44.jpg"
//   },
//   {
//     dept: "Mathematics Department",
//     name: "Mr. Rajesh Kumar",
//     qual: "M.Sc. Mathematics, B.Ed",
//     exp: "12 years",
//     img: "https://randomuser.me/api/portraits/men/32.jpg"
//   },
//   {
//     dept: "Science Department",
//     name: "Dr. Anjali Verma",
//     qual: "Ph.D. Physics",
//     exp: "18 years",
//     img: "https://randomuser.me/api/portraits/women/65.jpg"
//   },
//   {
//     dept: "Social Studies",
//     name: "Mr. Vikram Singh",
//     qual: "M.A. History, B.Ed",
//     exp: "14 years",
//     img: "https://randomuser.me/api/portraits/men/51.jpg"
//   },
//   {
//     dept: "Hindi Department",
//     name: "Mrs. Sunita Gupta",
//     qual: "M.A. Hindi, B.Ed",
//     exp: "16 years",
//     img: "https://randomuser.me/api/portraits/women/70.jpg"
//   },
//   {
//     dept: "Computer Science",
//     name: "Mr. Amit Patel",
//     qual: "M.Tech Computer Science",
//     exp: "10 years",
//     img: "https://randomuser.me/api/portraits/men/45.jpg"
//   }
// ];


// const teachers = [
//   ["Mrs. Meera Joshi", "Primary Teacher", "B.Ed"],
//   ["Mr. Suresh Reddy", "Physical Education", "B.P.Ed, M.P.Ed"],
//   ["Ms. Kavita Nair", "Art & Craft", "B.F.A"],
//   ["Mrs. Deepa Khanna", "Music Teacher", "B.A. Music"],
//   ["Mr. Ramesh Yadav", "Mathematics", "M.Sc., B.Ed"],
//   ["Ms. Pooja Mishra", "English", "M.A., B.Ed"],
//   ["Mr. Ashok Kumar", "Science", "M.Sc., B.Ed"],
//   ["Mrs. Ritu Agarwal", "Social Studies", "M.A., B.Ed"],
// ];

// const Faculty = () => {
//   return (
//     <div>

//       {/* HEADER */}

//       <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
//         <div className="container mx-auto px-4">

//           <h1 className="text-4xl md:text-5xl font-bold mb-4">
//             Our Faculty
//           </h1>

//           <p className="text-xl text-gray-100">
//             Meet our dedicated team of educators
//           </p>

//         </div>
//       </section>


//       {/* INTRO */}

//       <section className="py-16">

//         <div className="container mx-auto px-4 max-w-4xl text-center">

//           <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
//             Excellence in Teaching
//           </h2>

//           <p className="text-lg text-gray-700 mb-6">
//             Our faculty is our greatest strength. We have highly qualified,
//             experienced and passionate teachers dedicated to nurturing
//             every student’s potential.
//           </p>

//           <p className="text-lg text-gray-700">
//             Teachers regularly attend training programs and workshops to stay
//             updated with modern teaching methodologies.
//           </p>

//         </div>

//       </section>


//       {/* FACULTY QUALITIES */}

//       <section className="py-16 bg-gray-50">

//         <div className="container mx-auto px-4">

//           <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-12">
//             What Makes Our Faculty Special
//           </h2>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

//             {qualities.map((q, i) => (
//               <div
//                 key={i}
//                 className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition text-center"
//               >

//                 <div className="text-blue-700 flex justify-center mb-4">
//                   {q.icon}
//                 </div>

//                 <h3 className="text-xl font-bold text-blue-900 mb-2">
//                   {q.title}
//                 </h3>

//                 <p className="text-gray-600">
//                   {q.text}
//                 </p>

//               </div>
//             ))}

//           </div>

//         </div>

//       </section>


//       {/* DEPARTMENT HEADS */}

//       {/* <section className="py-16">

//         <div className="container mx-auto px-4">

//           <div className="text-center mb-12">

//             <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
//               Department Heads
//             </h2>

//             <p className="text-gray-600">
//               Leading experts in their fields
//             </p>

//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

//             {departments.map((d, i) => (

//               <div
//                 key={i}
//                 className="bg-white rounded-lg shadow-md hover:shadow-xl transition overflow-hidden"
//               >

//                 <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">

//                   <GraduationCap size={80} className="text-blue-700" />

//                 </div>

//                 <div className="p-6">

//                   <h3 className="text-xl font-bold text-blue-900 mb-2">
//                     {d.dept}
//                   </h3>

//                   <p className="text-lg font-semibold text-gray-800">
//                     {d.name}
//                   </p>

//                   <p className="text-gray-600 text-sm">
//                     {d.qual}
//                   </p>

//                   <p className="text-blue-700 font-semibold text-sm">
//                     Experience: {d.exp}
//                   </p>

//                 </div>

//               </div>

//             ))}

//           </div>

//         </div>

//       </section> */}
// <section className="py-16 bg-blue-50">
//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

//   {departments.map((d, i) => (

//     <div
//       key={i}
//       className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden"
//     >

//       {/* IMAGE */}

//       <div className="h-56 overflow-hidden">

//         <img
//           src={d.img}
//           alt={d.name}
//           className="w-full h-full object-cover hover:scale-110 transition duration-500"
//         />

//       </div>

//       {/* CONTENT */}

//       <div className="p-6">

//         <h3 className="text-lg text-blue-700 font-semibold mb-1">
//           {d.dept}
//         </h3>

//         <h2 className="text-xl font-bold text-gray-800">
//           {d.name}
//         </h2>

//         <p className="text-gray-600 text-sm mt-1">
//           {d.qual}
//         </p>

//         <span className="inline-block mt-3 bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full">
//           Experience: {d.exp}
//         </span>

//       </div>

//     </div>

//   ))}

//         </div>
//  </section> 

//       {/* TEACHERS TABLE */}

//       {/* <section className="py-16 bg-blue-50">

//         <div className="container mx-auto px-4 max-w-5xl">

//           <div className="text-center mb-10">

//             <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
//               Our Teaching Staff
//             </h2>

//           </div>

//           <div className="bg-white rounded-lg shadow-lg overflow-hidden">

//             <table className="w-full">

//               <thead className="bg-blue-900 text-white">

//                 <tr>
//                   <th className="px-6 py-4 text-left">Name</th>
//                   <th className="px-6 py-4 text-left">Subject</th>
//                   <th className="px-6 py-4 text-left">Qualification</th>
//                 </tr>

//               </thead>

//               <tbody>

//                 {teachers.map((t, i) => (

//                   <tr key={i} className="border-b hover:bg-blue-50">

//                     <td className="px-6 py-4 font-semibold text-gray-800">
//                       {t[0]}
//                     </td>

//                     <td className="px-6 py-4 text-blue-700">
//                       {t[1]}
//                     </td>

//                     <td className="px-6 py-4 text-gray-600">
//                       {t[2]}
//                     </td>

//                   </tr>

//                 ))}

//               </tbody>

//             </table>

//           </div>

//         </div>

//       </section> */}

// <section className="py-16 bg-blue-50">
//       <div className="overflow-x-auto">

// <table className="w-full text-sm">

// <thead className="bg-blue-900 text-white">

// <tr>
// <th className="px-6 py-4 text-left">Name</th>
// <th className="px-6 py-4 text-left">Subject</th>
// <th className="px-6 py-4 text-left">Qualification</th>
// </tr>

// </thead>

// <tbody>

// {teachers.map((t, i) => (

// <tr
// key={i}
// className="border-b hover:bg-blue-50 transition"
// >

// <td className="px-6 py-4 font-semibold text-gray-800">
// {t[0]}
// </td>

// <td className="px-6 py-4 text-blue-700 font-medium">
// {t[1]}
// </td>

// <td className="px-6 py-4 text-gray-600">
// {t[2]}
// </td>

// </tr>

// ))}

// </tbody>

// </table>

//       </div>
//  </section> 

//       {/* SUPPORT STAFF */}

//       <section className="py-16">

//         <div className="container mx-auto px-4 max-w-4xl">

//           <div className="text-center mb-8">

//             <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
//               Support Staff
//             </h2>

//           </div>

//           <div className="grid md:grid-cols-2 gap-6">

//             {[
//               ["Administrative Staff", [
//                 "Principal's Office",
//                 "Admission Counselors",
//                 "Administrative Assistants",
//                 "Accounts Department"
//               ]],
//               ["Support Services", [
//                 "Library Staff",
//                 "Lab Assistants",
//                 "Medical Staff",
//                 "Security Personnel"
//               ]],
//               ["Maintenance Team", [
//                 "Housekeeping Staff",
//                 "IT Support",
//                 "Transport Coordinators",
//                 "Facilities Management"
//               ]],
//               ["Student Support", [
//                 "Counselors",
//                 "Special Educators",
//                 "Activity Coordinators",
//                 "Sports Coaches"
//               ]]
//             ].map(([title, items], i) => (

//               <div key={i} className="bg-white p-6 rounded-lg shadow-md">

//                 <h3 className="text-lg font-bold text-blue-900 mb-3">
//                   {title}
//                 </h3>

//                 <ul className="space-y-2 text-gray-700">

//                   {items.map((item, j) => (
//                     <li key={j}>• {item}</li>
//                   ))}

//                 </ul>

//               </div>

//             ))}

//           </div>

//         </div>

//       </section>

//     </div>
//   );
// };

// export default Faculty;



// function Teachers() {

//   const teachers = [
//     {
//       name: "Ravi Sharma",
//       subject: "Mathematics",
//       image: "https://randomuser.me/api/portraits/men/32.jpg"
//     },
//     {
//       name: "Priya Singh",
//       subject: "English",
//       image: "https://randomuser.me/api/portraits/women/44.jpg"
//     },
//     {
//       name: "Amit Kumar",
//       subject: "Science",
//       image: "https://randomuser.me/api/portraits/men/45.jpg"
//     }
//   ];

//   return (

//     <section style={{padding:"80px"}}>

//       <h2 style={{textAlign:"center"}}>Our Teachers</h2>

//       <div
//         style={{
//           display:"grid",
//           gridTemplateColumns:"repeat(3,1fr)",
//           gap:"30px",
//           marginTop:"40px"
//         }}
//       >

//         {teachers.map((teacher,index)=>(
//           <div
//             key={index}
//             style={{
//               background:"white",
//               padding:"30px",
//               textAlign:"center",
//               borderRadius:"10px",
//               boxShadow:"0 2px 10px rgba(0,0,0,0.1)"
//             }}
//           >

//             <img
//               src={teacher.image}
//               style={{
//                 width:"120px",
//                 height:"120px",
//                 borderRadius:"50%",
//                 objectFit:"cover"
//               }}
//             />

//             <h3 style={{marginTop:"15px"}}>{teacher.name}</h3>

//             <p>{teacher.subject}</p>

//           </div>
//         ))}

//       </div>

//     </section>

//   )

// }

// export default Teachers


import React from "react";
import { GraduationCap, Award, BookOpen, Users } from "lucide-react";

const qualities = [
  {
    icon: <GraduationCap size={48} />,
    title: "Highly Qualified",
    text: "All teachers hold relevant degrees and certifications",
  },
  {
    icon: <Award size={48} />,
    title: "Experienced",
    text: "Average teaching experience of 12+ years",
  },
  {
    icon: <BookOpen size={48} />,
    title: "Continuous Training",
    text: "Regular workshops and professional development programs",
  },
  {
    icon: <Users size={48} />,
    title: "Student-Centric",
    text: "Dedicated to individual attention and student growth",
  },
];

const departments = [
  {
    dept: "English Department",
    name: "Mrs. Priya Sharma",
    qual: "M.A. English, B.Ed",
    exp: "15 years",
  },
  {
    dept: "Mathematics Department",
    name: "Mr. Rajesh Kumar",
    qual: "M.Sc. Mathematics, B.Ed",
    exp: "12 years",
  },
  {
    dept: "Science Department",
    name: "Dr. Anjali Verma",
    qual: "Ph.D. Physics, M.Sc., B.Ed",
    exp: "18 years",
  },
  {
    dept: "Social Studies Department",
    name: "Mr. Vikram Singh",
    qual: "M.A. History, B.Ed",
    exp: "14 years",
  },
  {
    dept: "Hindi Department",
    name: "Mrs. Sunita Gupta",
    qual: "M.A. Hindi, B.Ed",
    exp: "16 years",
  },
  {
    dept: "Computer Science",
    name: "Mr. Amit Patel",
    qual: "M.Tech Computer Science",
    exp: "10 years",
  },
];

const teachers = [
  ["Mrs. Meera Joshi", "Primary Teacher", "B.Ed"],
  ["Mr. Suresh Reddy", "Physical Education", "B.P.Ed, M.P.Ed"],
  ["Ms. Kavita Nair", "Art & Craft", "B.F.A"],
  ["Mrs. Deepa Khanna", "Music Teacher", "B.A. Music"],
  ["Mr. Ramesh Yadav", "Mathematics", "M.Sc., B.Ed"],
  ["Ms. Pooja Mishra", "English", "M.A., B.Ed"],
  ["Mr. Ashok Kumar", "Science", "M.Sc., B.Ed"],
  ["Mrs. Ritu Agarwal", "Social Studies", "M.A., B.Ed"],
];

const Faculty = () => {
  return (
    <div>

      {/* HEADER */}

      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our Faculty
          </h1>

          <p className="text-xl text-gray-100">
            Meet our dedicated team of educators
          </p>

        </div>
      </section>


      {/* INTRO */}

      <section className="py-16">

        <div className="container mx-auto px-4 max-w-4xl text-center">

          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
            Excellence in Teaching
          </h2>

          <p className="text-lg text-gray-700 mb-6">
            At RN International School, our faculty is our greatest strength. We have a team of highly qualified, experienced,
             and dedicated teachers who are passionate about education and committed to nurturing every student's potential.
          </p>

          <p className="text-lg text-gray-700">
            Our teachers regularly participate in training programs and workshops to stay 
            updated with the latest teaching methodologies and educational trends.
          </p>

        </div>

      </section>


      {/* FACULTY QUALITIES */}

      <section className="py-16 bg-gray-50">

        <div className="container mx-auto px-4">

          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-12">
            What Makes Our Faculty Special
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {qualities.map((q, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition text-center"
              >

                <div className="text-blue-700 flex justify-center mb-4">
                  {q.icon}
                </div>

                <h3 className="text-xl font-bold text-blue-900 mb-2">
                  {q.title}
                </h3>

                <p className="text-gray-600">
                  {q.text}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>


      {/* DEPARTMENT HEADS */}

      <section className="py-16">

        <div className="container mx-auto px-4">

          <div className="text-center mb-12">

            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Department Heads
            </h2>

            <p className="text-gray-600">
              Leading experts in their fields
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {departments.map((d, i) => (

              <div
                key={i}
                className="bg-white rounded-lg shadow-md hover:shadow-xl transition overflow-hidden"
              >

                <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">

                  <GraduationCap size={80} className="text-blue-700" />

                </div>

                <div className="p-6">

                  <h3 className="text-xl font-bold text-blue-900 mb-2">
                    {d.dept}
                  </h3>

                  <p className="text-lg font-semibold text-gray-800">
                    {d.name}
                  </p>

                  <p className="text-gray-600 text-sm">
                    {d.qual}
                  </p>

                  <p className="text-blue-700 font-semibold text-sm">
                    Experience: {d.exp}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* TEACHERS TABLE */}

      <section className="py-16 bg-blue-50">

        <div className="container mx-auto px-4 max-w-5xl">

          <div className="text-center mb-10">

            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Our Teaching Staff
            </h2>

          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">

            <table className="w-full">

              <thead className="bg-blue-900 text-white">

                <tr>
                  <th className="px-6 py-4 text-left">Name</th>
                  <th className="px-6 py-4 text-left">Subject</th>
                  <th className="px-6 py-4 text-left">Qualification</th>
                </tr>

              </thead>

              <tbody>

                {teachers.map((t, i) => (

                  <tr key={i} className="border-b hover:bg-blue-50">

                    <td className="px-6 py-4 font-semibold text-gray-800">
                      {t[0]}
                    </td>

                    <td className="px-6 py-4 text-blue-700">
                      {t[1]}
                    </td>

                    <td className="px-6 py-4 text-gray-600">
                      {t[2]}
                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>

      </section>


      {/* SUPPORT STAFF */}

      <section className="py-16">

        <div className="container mx-auto px-4 max-w-4xl">

          <div className="text-center mb-8">

            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Support Staff
            </h2>

          </div>

          <div className="grid md:grid-cols-2 gap-6">

            {[
              ["Administrative Staff", [
                "Principal's Office",
                "Admission Counselors",
                "Administrative Assistants",
                "Accounts Department"
              ]],
              ["Support Services", [
                "Library Staff",
                "Lab Assistants",
                "Medical Staff",
                "Security Personnel"
              ]],
              ["Maintenance Team", [
                "Housekeeping Staff",
                "IT Support",
                "Transport Coordinators",
                "Facilities Management"
              ]],
              ["Student Support", [
                "Counselors",
                "Special Educators",
                "Activity Coordinators",
                "Sports Coaches"
              ]]
            ].map(([title, items], i) => (

              <div key={i} className="bg-white p-6 rounded-lg shadow-md">

                <h3 className="text-lg font-bold text-blue-900 mb-3">
                  {title}
                </h3>

                <ul className="space-y-2 text-gray-700">

                  {items.map((item, j) => (
                    <li key={j}>• {item}</li>
                  ))}

                </ul>

              </div>

            ))}

          </div>

        </div>

      </section>

    </div>
  );
};

export default Faculty;