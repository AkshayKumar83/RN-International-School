// function Home() {

//   return (

//   <section
//     className="h-screen flex flex-col justify-center items-center text-center bg-cover bg-center pt-20"
//       style={{
//         backgroundImage:
//           "url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1')",
//       }}
//     >

//       <div className="bg-black/50 p-10 rounded-xl">

//         <h1 className="text-5xl md:text-6xl font-bold text-white">
//           RN International School
//         </h1>

//         <p className="text-white mt-4 text-lg">
//           Building Bright Futures Through Education
//         </p>

//         <button className="mt-6 bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300">
//           Apply For Admission
//         </button>

//       </div>

//     </section>

//   )

// }

// export default Home

import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BookOpen,
  Shield,
  Users,
  Award,
  Calendar,
  CircleCheck
} from "lucide-react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="homepage">

      {/* HERO SECTION */}

      <section
        className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20 md:py-32"
        style={{
          backgroundImage:
            "linear-gradient(rgba(30,64,175,0.9), rgba(30,64,175,0.9)), url(https://images.pexels.com/photos/5212687/pexels-photo-5212687.jpeg)",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >

        <div className="container mx-auto px-4">

          <div className="max-w-3xl">

            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Welcome to RN International School
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-gray-100">
              Empowering Young Minds for a Brighter Future
            </p>

            <div className="bg-yellow-400 text-blue-900 inline-block px-6 py-3 rounded-lg mb-8 font-bold text-lg">
              🎓 Admissions Open for 2026-2027 | Admission Fees FREE!
            </div>

            <div className="flex flex-wrap gap-4">

              <Link to="/admissions">
                <button className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition flex items-center">
                  Enroll Now <ArrowRight className="ml-2" />
                </button>
              </Link>

              <Link to="/about">
                <button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition">
                  Learn More
                </button>
              </Link>

            </div>

          </div>

        </div>

      </section>

     {/* ANIMATION SECTION */}

      {/* <section
  className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20 md:py-32 overflow-hidden"
  style={{
    backgroundImage:
      "linear-gradient(rgba(30,64,175,0.9), rgba(30,64,175,0.9)), url(https://images.pexels.com/photos/5212687/pexels-photo-5212687.jpeg)",
    backgroundSize: "cover",
    backgroundPosition: "center"
  }}
>
  <div className="container mx-auto px-4">
    <div className="max-w-3xl">

      
      <motion.h1
        className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        RN International School
      </motion.h1>

  
      <motion.p
        className="text-xl md:text-2xl mb-8 text-gray-100"
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
      >
        Empowering Young Minds for a Brighter Future 🚀
      </motion.p>

      
      <motion.div
        className="bg-yellow-400 text-blue-900 inline-block px-6 py-3 rounded-lg mb-8 font-bold text-lg"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6 }}
      >
        🎓 Admissions Open | Limited Seats!
      </motion.div>

  
      <motion.div
        className="flex flex-wrap gap-4"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
      >
        <Link to="/admissions">
          <button className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition flex items-center">
            Enroll Now <ArrowRight className="ml-2" />
          </button>
        </Link>

        <Link to="/about">
          <button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition">
            Learn More
          </button>
        </Link>
      </motion.div>

    </div>
  </div>


 <motion.img
  src="https://png.pngtree.com/png-clipart/20240713/original/pngtree-yellow-school-bus-with-red-stop-sign-isolated-on-white-png-image_15547582.png"
  alt="bus"
  className="absolute bottom-5 left-0 w-28 md:w-36"
  initial={{ x: "-100%" }}
  animate={{ x: "100vw" }}
  transition={{
    duration: 8,
    repeat: Infinity,
    ease: "linear"
  }}
/>

</section> */}

      {/* FEATURES */}

      <section className="py-16 bg-gray-50">

        <div className="container mx-auto px-4">

          <div className="text-center mb-12">

            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Why Choose RN International School?
            </h2>

            <p className="text-gray-600 text-lg">
              Excellence in every aspect of education
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            <Feature
              icon={<BookOpen size={48} />}
              title="Modern Curriculum"
              text="Comprehensive education following latest teaching methodologies"
            />

            <Feature
              icon={<Shield size={48} />}
              title="Safe & Secure Campus"
              text="State-of-the-art security systems for student safety"
            />

            <Feature
              icon={<Users size={48} />}
              title="Expert Faculty"
              text="Highly qualified and dedicated teachers"
            />

            <Feature
              icon={<Award size={48} />}
              title="Excellence in Education"
              text="Focus on academic success and holistic development"
            />

          </div>

        </div>

      </section>

      {/* STATS */}

      <section className="py-16 bg-blue-900 text-white">

        <div className="container mx-auto px-4">

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">

            <Stat number="500+" label="Students" />
            <Stat number="50+" label="Faculty Members" />
            <Stat number="15+" label="Subjects" />
            <Stat number="100%" label="Student Satisfaction" />

          </div>

        </div>

      </section>

      {/* ABOUT PREVIEW */}

      <section className="py-16">

        <div className="container mx-auto px-4">

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            <img
              src="https://images.pexels.com/photos/8618019/pexels-photo-8618019.jpeg"
              alt="Students learning"
              className="rounded-lg shadow-xl"
            />

            <div>

              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
                About RN International School
              </h2>

              <p className="text-gray-700 text-lg mb-6">
                RN International School is dedicated to providing quality
                education that nurtures young minds and prepares them for
                future success.
              </p>

              <ul className="space-y-3 mb-6">

                <ListItem text="Modern classrooms with latest technology" />
                <ListItem text="Comprehensive CBSE curriculum" />
                <ListItem text="Focus on holistic development" />
                <ListItem text="Safe and secure campus" />

              </ul>

              <Link to="/about">
                <button className="bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800">
                  Learn More About Us
                </button>
              </Link>

            </div>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="py-16 bg-gradient-to-r from-blue-700 to-blue-900 text-white">

        <div className="container mx-auto px-4 text-center">

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Join RN International School?
          </h2>

          <p className="text-xl mb-8 text-gray-100">
            Give your child the best education with modern facilities
          </p>

          <div className="flex justify-center gap-4">

            <Link to="/admissions">
              <button className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg font-bold hover:bg-yellow-300">
                Apply for Admission
              </button>
            </Link>

            <Link to="/contact">
              <button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-bold hover:bg-gray-100">
                Contact Us
              </button>
            </Link>

          </div>

        </div>

      </section>

    </div>
  );
};

export default Home;



/* COMPONENTS */

const Feature = ({ icon, title, text }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition text-center">
    <div className="text-blue-700 flex justify-center mb-4">{icon}</div>
    <h3 className="text-xl font-bold text-blue-900 mb-3">{title}</h3>
    <p className="text-gray-600">{text}</p>
  </div>
);

const Stat = ({ number, label }) => (
  <div>
    <div className="text-4xl md:text-5xl font-bold text-yellow-400 mb-2">
      {number}
    </div>
    <div className="text-lg text-gray-300">{label}</div>
  </div>
);

const ListItem = ({ text }) => (
  <li className="flex items-start">
    <CircleCheck className="text-green-600 mr-3 mt-1" />
    <span className="text-gray-700">{text}</span>
  </li>
);