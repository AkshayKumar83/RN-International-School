// function About() {
//   return (

//     <section id="about" className="py-20 bg-white">

//       <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-12 items-center">

//         {/* Left Image */}

//         <div>

//           <img
//             src="https://images.unsplash.com/photo-1588072432836-e10032774350"
//             alt="School"
//             className="rounded-xl shadow-lg"
//           />

//         </div>


//         {/* Right Content */}

//         <div>

//           <h2 className="text-3xl font-bold text-blue-600 mb-4">
//             About Our School
//           </h2>

//           <p className="text-gray-600 leading-relaxed mb-4">
//             RN International School is committed to providing quality education
//             and building a strong foundation for students. Our mission is to
//             create a safe and inspiring environment where students can learn,
//             grow and achieve their dreams.
//           </p>

//           <p className="text-gray-600 leading-relaxed mb-6">
//             We focus on academic excellence, modern learning methods and
//             overall personality development of students.
//           </p>


//           {/* Features */}

//           <div className="grid grid-cols-2 gap-4 text-gray-700">

//             <p>✔ Smart Classrooms</p>
//             <p>✔ Qualified Teachers</p>
//             <p>✔ Safe Campus</p>
//             <p>✔ Sports Activities</p>

//           </div>

//         </div>

//       </div>

//     </section>

//   )
// }

// export default About


import React from "react";
import {
  Target,
  Award,
  Heart,
  Users,
  Book,
  Building,
  ShieldCheck, GraduationCap, MonitorSmartphone ,  School, BookOpen, Trophy ,
} from "lucide-react";

const values = [
  {
    icon: <Target size={40} />,
    title: "Excellence",
    desc: "Striving for the highest standards in education and character development",
  },
  {
    icon: <Heart size={40} />,
    title: "Integrity",
    desc: "Building strong moral values and ethical principles in every student",
  },
  {
    icon: <Users size={40} />,
    title: "Community",
    desc: "Fostering a supportive and inclusive learning environment",
  },
  {
    icon: <Book size={40} />,
    title: "Innovation",
    desc: "Embracing modern teaching methods and technology",
  },
];

const facilities = [
  "Modern Smart Classrooms",
  "Well-Equipped Science Labs",
  "Computer Lab with Latest Technology",
  "Spacious Library",
  "Sports Facilities",
  "Art & Music Rooms",
  "Safe Transportation",
  "Medical Room",
  "Playground & Activity Areas",
  "Cafeteria",
];

const About = () => {
  return (
    <div className="about-page">

      {/* HEADER */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4 ">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About Us
          </h1>
          <p className="text-lg text-gray-200 max-w-2xl">
            Learn more about our mission, vision and commitment to academic
            excellence.
          </p>
        </div>
      </section>

      {/* INTRO */}
<section className="py-20">
  <div className="container mx-auto px-4">

    <div className="max-w-4xl mx-auto text-center">

      <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
        Welcome to RN International School
      </h2>

      <p className="text-lg text-gray-700 mb-6">
        RN International School is a modern educational institution dedicated
        to nurturing young minds and providing a strong foundation for lifelong
        learning. Starting from April 2026, our school aims to create a
        supportive and inspiring environment where students can discover their
        talents and develop essential skills for the future.
      </p>

      <p className="text-lg text-gray-700">
        Our goal is to provide quality education that encourages curiosity,
        creativity, and confidence. Through a balanced approach to academics,
        co-curricular activities, and character development, we strive to help
        every student grow into a responsible and successful individual.
      </p>

    </div>

  </div>
</section>

      {/* MISSION VISION */}
      <section className="py-20 bg-gray-50">

        <div className="container mx-auto px-4">

          <div className="grid md:grid-cols-2 gap-10">

            {/* Mission */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition">

              <Target className="text-blue-700 mb-4" size={60} />

              <h3 className="text-2xl font-bold text-blue-900 mb-4">
                Our Mission
              </h3>

              <p className="text-gray-700">
                To provide quality education that empowers students with knowledge, skills, 
                and values necessary for success in an ever-changing world. We are committed to fostering 
                intellectual curiosity, creativity, and social responsibility in every student.
              </p>

            </div>

            {/* Vision */}
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition">

              <Award className="text-blue-700 mb-4" size={60} />

              <h3 className="text-2xl font-bold text-blue-900 mb-4">
                Our Vision
              </h3>

              <p className="text-gray-700">
                To be a leading educational institution recognized for academic excellence, innovative teaching practices, 
                and comprehensive student development. We envision creating global citizens who are confident, 
                compassionate, and capable of making positive contributions to society.
              </p>

            </div>

          </div>

        </div>

      </section>

       {/* why choose us */}

  <section className="py-20 bg-gray-50">

    <div className="container mx-auto px-4">

      <div className="text-center mb-14">

        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
          Why Choose RN International School
        </h2>

        <p className="text-gray-600 text-lg">
          We are committed to providing a safe, inspiring and future-focused learning environment.
        </p>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

        {/* Card 1 */}

        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition text-center">

          <div className="flex justify-center text-blue-700 mb-4">
            <GraduationCap size={42} />
          </div>

          <h3 className="text-xl font-bold text-blue-900 mb-2">
            Quality Education
          </h3>

          <p className="text-gray-600">
            A strong academic foundation with modern teaching methods and CBSE curriculum.
          </p>

        </div>


        {/* Card 2 */}

        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition text-center">

          <div className="flex justify-center text-blue-700 mb-4">
            <MonitorSmartphone size={42} />
          </div>

          <h3 className="text-xl font-bold text-blue-900 mb-2">
            Smart Classrooms
          </h3>

          <p className="text-gray-600">
            Technology-enabled learning through smart boards and digital resources.
          </p>

        </div>


        {/* Card 3 */}

        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition text-center">

          <div className="flex justify-center text-blue-700 mb-4">
            <Users size={42} />
          </div>

          <h3 className="text-xl font-bold text-blue-900 mb-2">
            Holistic Development
          </h3>

          <p className="text-gray-600">
            Focus on academics, sports, arts and personality development.
          </p>

        </div>


        {/* Card 4 */}

        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition text-center">

          <div className="flex justify-center text-blue-700 mb-4">
            <ShieldCheck size={42} />
          </div>

          <h3 className="text-xl font-bold text-blue-900 mb-2">
            Safe Campus
          </h3>

          <p className="text-gray-600">
            A secure campus environment ensuring safety and well-being of students.
          </p>

        </div>

      </div>

    </div>

    </section>

  

<section className="py-20 bg-blue-900 text-white">

  <div className="container mx-auto px-4">

    <div className="text-center mb-14">

      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Our School at a Glance
      </h2>

      <p className="text-blue-200 text-lg">
        Building a strong foundation for future generations
      </p>

    </div>

    <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">

      {/* Classrooms */}

      <div>

        <div className="flex justify-center mb-4">
          <School size={42} />
        </div>

        <h3 className="text-3xl text-yellow-400 font-bold mb-2">25+</h3>

        <p className="text-blue-200">
          Modern Classrooms
        </p>

      </div>


      {/* Subjects */}

      <div>

        <div className="flex justify-center mb-4">
          <BookOpen size={42} />
        </div>

        <h3 className="text-3xl text-yellow-400 font-bold mb-2">15+</h3>

        <p className="text-blue-200">
          Subjects Offered
        </p>

      </div>


      {/* Students */}

      <div>

        <div className="flex justify-center mb-4">
          <Users size={42} />
        </div>

        <h3 className="text-3xl text-yellow-400 font-bold mb-2">500+</h3>

        <p className="text-blue-200">
          Student Capacity
        </p>

      </div>


      {/* Activities */}

      <div>

        <div className="flex justify-center mb-4">
          <Trophy size={42} />
        </div>

        <h3 className="text-3xl text-yellow-400 font-bold mb-2">50+</h3>

        <p className="text-blue-200">
          Co-Curricular Activities
        </p>

      </div>

    </div>

  </div>

</section>

      {/* CORE VALUES */}

      <section className="py-20">

        <div className="container mx-auto px-4">

          <div className="text-center mb-12">

            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Our Core Values
            </h2>

            <p className="text-gray-600">
              The principles that guide everything we do
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {values.map((value, i) => (
              <div
                key={i}
                className="text-center p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition"
              >
                <div className="flex justify-center text-blue-700 mb-4">
                  {value.icon}
                </div>

                <h3 className="text-xl font-bold text-blue-900 mb-2">
                  {value.title}
                </h3>

                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}

          </div>

        </div>

      </section>
 


      {/* PRINCIPAL MESSAGE */}

      <section className="py-20 bg-blue-50">

        <div className="container mx-auto px-4">

          <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-10">

            <div className="flex flex-col md:flex-row  gap-8">

              <img
                src="https://images.unsplash.com/photo-1544776193-352d25ca82cd"
                alt="Principal"
                className="w-48 h-48 rounded-full object-cover"
              />

              <div>

                <h3 className="text-2xl font-bold text-blue-900 mb-2">
                  Principal's Message
                </h3>

                <p className="text-gray-700 mb-4 italic">
                  A warm welcome from our Principal
                </p>

                <p className="text-gray-700 mb-4">
                  Dear Parents and Students,
                </p>

                <p className="text-gray-700 mb-4">
                  It gives me immense pleasure to welcome you to RN International School. 
                  Our school stands as a beacon of quality education, 
                  where we believe that every child is unique and possesses unlimited potential.
                </p>

                <p className="text-gray-700 mb-4">
                 We are committed to providing an environment that encourages academic excellence, creativity, 
                 and character development. Our experienced faculty, modern facilities, 
                 and comprehensive curriculum ensure that students receive the best possible education.
                </p>
                
                <p className="text-gray-700 mb-4">
                 Together, let us shape a brighter future for our children.
                </p>

                <p className="text-gray-700 font-semibold mt-6">
                  Warm Regards,
                  <br />
                  Principal, RN International School
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* FACILITIES */}

      <section className="py-20">

        <div className="container mx-auto px-4">

          <div className="text-center mb-12">

            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Our Facilities
            </h2>

            <p className="text-gray-600">
              State-of-the-art infrastructure for holistic learning
            </p>

          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">

            <img
              src="https://images.unsplash.com/photo-1580582932707-520aed937b7b"
              alt="school classroom"
              className="rounded-xl shadow-lg"
            />

            <div className="grid sm:grid-cols-2 gap-4">

              {facilities.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center bg-blue-50 p-4 rounded-lg"
                >
                  <Building className="text-blue-700 mr-3" size={22} />
                  <span className="text-gray-700 font-medium">
                    {item}
                  </span>
                </div>
              ))}

            </div>

          </div>

        </div>

      </section>

    </div>
  );
};

export default About;