// function Academics() {
//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold mb-6">Academics</h1>
//       <p className="text-lg text-gray-700 mb-4">
//         At RN International School, we are committed to providing a rigorous and comprehensive academic program that fosters critical thinking, creativity, and a lifelong love of learning. Our curriculum is designed to meet the needs of all students, from those who excel academically to those who require additional support.
//       </p>
//       <p className="text-lg text-gray-700 mb-4">
//         We offer a wide range of courses in core subjects such as English, Mathematics, Science, and Social Studies, as well as electives in areas like Art, Music, Physical Education, and Foreign Languages. Our dedicated faculty members are passionate about teaching and are committed to helping each student reach their full potential.
//       </p>  
//       </div>
//   )}

//   export default Academics


import React from "react";
import {
  BookOpen,
  Target,
  Lightbulb,
  Users,
  Award,
  Globe
} from "lucide-react";

const grades = [
  {
    title: "Pre-Primary",
    subtitle: "Nursery, LKG, UKG",
    desc: "Foundation years with play-based learning and early childhood development",
  },
  {
    title: "Primary",
    subtitle: "Class 1 to 5",
    desc: "Building strong fundamentals in core subjects with interactive learning",
  },
  {
    title: "Middle School",
    subtitle: "Class 6 to 8",
    desc: "Comprehensive curriculum with emphasis on critical thinking and analysis",
  },
  // {
  //   title: "Secondary",
  //   subtitle: "Class 9 to 10",
  //   desc: "CBSE board preparation with focus on academic excellence",
  // },
  // {
  //   title: "Senior Secondary",
  //   subtitle: "Class 11 to 12",
  //   desc: "Stream selection (Science, Commerce, Arts) and career guidance",
  // },
];

const subjects = [
  { name: "English", icon: <BookOpen /> },
  { name: "Mathematics", icon: <Target /> },
  { name: "Science", icon: <Lightbulb /> },
  { name: "Social Studies", icon: <Globe /> },
  { name: "Hindi", icon: <BookOpen /> },
  { name: "Computer Science", icon: <BookOpen /> },
  { name: "Physical Education", icon: <Users /> },
  { name: "Art & Craft", icon: <Award /> },
];

const methodology = [
  {
    title: "Interactive Learning",
    desc: "Engaging classroom sessions with hands-on activities and group discussions",
    icon: <Users size={40} />,
  },
  {
    title: "Technology Integration",
    desc: "Smart classrooms with digital learning tools and educational software",
    icon: <Lightbulb size={40} />,
  },
  {
    title: "Project-Based Learning",
    desc: "Real-world projects that encourage creativity and problem-solving skills",
    icon: <Target size={40} />,
  },
  {
    title: "Continuous Assessment",
    desc: "Regular evaluation and feedback to track student progress effectively",
    icon: <Award size={40} />,
  },
];

const Academics = () => {
  return (
    <div className="academics-page">

      {/* HEADER */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4 ">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Academics
          </h1>
          <p className="text-lg text-gray-200">
            Comprehensive education for holistic development
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
            Our Academic Excellence
          </h2>

          <p className="text-lg text-gray-700">
            At RN International School we follow the CBSE curriculum with a
            strong focus on holistic education, balancing academic excellence
            with co-curricular activities.
          </p>
        </div>
      </section>

      {/* GRADE STRUCTURE */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">

          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Grade Structure
            </h2>
            <p className="text-gray-600">From Nursery to Class 8</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {grades.map((grade, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition"
              >

                <BookOpen className="text-blue-700 mb-4" size={40} />

                <h3 className="text-xl font-bold text-blue-900 mb-1">
                  {grade.title}
                </h3>

                <p className="text-yellow-600 font-semibold mb-3">
                  {grade.subtitle}
                </p>

                <p className="text-gray-600">{grade.desc}</p>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* SUBJECTS */}
      <section className="py-20">

        <div className="container mx-auto px-4">

          <div className="text-center mb-12">

            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Subjects Offered
            </h2>

            <p className="text-gray-600">
              Comprehensive curriculum covering essential areas
            </p>

          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

            {subjects.map((subject, i) => (
              <div
                key={i}
                className="bg-blue-50 p-6 rounded-lg text-center hover:bg-blue-100 transition"
              >

                <div className="text-blue-700 flex justify-center mb-3">
                  {subject.icon}
                </div>

                <p className="font-semibold text-gray-800">
                  {subject.name}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* METHODOLOGY */}

      <section className="py-20 bg-blue-50">

        <div className="container mx-auto px-4">

          <div className="text-center mb-12">

            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Teaching Methodology
            </h2>

            <p className="text-gray-600">
              Modern approaches for effective learning
            </p>

          </div>

          <div className="grid md:grid-cols-2 gap-8">

            {methodology.map((item, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-xl shadow-md flex gap-6"
              >

                <div className="text-blue-700">
                  {item.icon}
                </div>

                <div>

                  <h3 className="text-xl font-bold text-blue-900 mb-2">
                    {item.title}
                  </h3>

                  <p className="text-gray-600">{item.desc}</p>

                </div>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* BEYOND ACADEMICS */}

      <section className="py-20">

        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">

          <div>

            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
              Beyond Academics
            </h2>

            <ul className="space-y-4 text-gray-700">

              <li>⚽ Sports & Athletics – Football, Cricket, Basketball</li>
              <li>🎨 Arts & Culture – Music, Dance, Drama</li>
              <li>🔬 Clubs – Science Club, Literary Club</li>
              <li>🎤 Life Skills – Leadership & Personality Development</li>
              <li>🏆 Competitions – Olympiads & Inter-School events</li>

            </ul>

          </div>

          <img
            src="https://images.unsplash.com/photo-1577896851231-70ef18881754"
            alt="students"
            className="rounded-xl shadow-xl"
          />

        </div>

      </section>

      {/* ACADEMIC CALENDAR */}

      <section className="py-20 bg-gray-50">

        <div className="container mx-auto px-4 max-w-4xl">

          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-10 text-center">
            Academic Calendar 2025-26
          </h2>

          <div className="bg-white rounded-xl shadow-md p-8 space-y-4">

            <div className="flex justify-between border-b pb-3">
              <span className="font-semibold">Session Starts</span>
              <span className="text-blue-700">April 1, 2025</span>
            </div>

            <div className="flex justify-between border-b pb-3">
              <span className="font-semibold">First Term Exam</span>
              <span className="text-blue-700">September 2025</span>
            </div>

            <div className="flex justify-between border-b pb-3">
              <span className="font-semibold">Winter Break</span>
              <span className="text-blue-700">Dec 20 – Jan 5</span>
            </div>

            <div className="flex justify-between border-b pb-3">
              <span className="font-semibold">Second Term Exam</span>
              <span className="text-blue-700">March 2026</span>
            </div>

            <div className="flex justify-between">
              <span className="font-semibold">Session Ends</span>
              <span className="text-blue-700">March 31, 2026</span>
            </div>

          </div>

        </div>

      </section>

    </div>
  );
};

export default Academics;