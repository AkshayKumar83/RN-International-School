// function Events() { 
//     return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold mb-6">Events</h1>
     
//       <p className="text-lg text-gray-700 mb-4">
//         We offer a wide range of courses in core subjects such as English, Mathematics, Science, and Social Studies, as well as electives in areas like Art, Music, Physical Education, and Foreign Languages. Our dedicated faculty members are passionate about teaching and are committed to helping each student reach their full potential.
//       </p>  
//       </div>
//   )}

//   export default Events


import React from "react";
import { Calendar,Newspaper } from "lucide-react";

const events = [
  {
    date: "1 April 2026",
    title: "School Inauguration Ceremony",
    desc: "Official opening ceremony of RN International School with guests and parents."
  },
  {
    date: "5 April 2026",
    title: "Orientation Program",
    desc: "Introduction session for parents and students about school policies and academics."
  },
  {
    date: "10 April 2026",
    title: "Welcome Assembly",
    desc: "Special welcome assembly to greet students and begin the academic session."
  },
  {
    date: "15 May 2026",
    title: "Parent Teacher Meeting",
    desc: "Interaction between teachers and parents to discuss student progress."
  },
  {
    date: "15 August 2026",
    title: "Independence Day Celebration",
    desc: "Cultural performances and flag hoisting ceremony."
  },
  {
    date: "November 2026",
    title: "Annual Cultural Program",
    desc: "Dance, music, drama and various student performances."
  }
];



const news = [
  {
    title: "Admissions Open for Session 2026-27",
    date: "March 2026",
    desc: "Admissions are now open for Nursery to Class 8 for the academic session 2026-27."
  },
  {
    title: "School Inauguration Ceremony",
    date: "1 April 2026",
    desc: "RN International School will officially open with a special inauguration ceremony."
  },
  {
    title: "New Smart Classrooms Setup",
    date: "April 2026",
    desc: "Our school is equipped with modern smart classrooms to enhance learning."
  }
];

const Events = () => {
  return (
    <div>

      {/* HEADER */}

      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">

        <div className="container mx-auto px-4">

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            School Events
          </h1>

          <p className="text-xl text-gray-100">
            Stay updated with our school activities
          </p>

        </div>

      </section>


      {/* EVENTS */}

      <section className="py-16 bg-gray-50">

        <div className="container mx-auto px-4">

          <div className="text-center mb-12">

            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
              Upcoming Events 2026-27
            </h2>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {events.map((e, i) => (

              <div
                key={i}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition"
              >

                <div className="flex items-center text-blue-700 mb-4">

                  <Calendar className="mr-2" size={20} />

                  <span className="font-semibold">
                    {e.date}
                  </span>

                </div>

                <h3 className="text-xl font-bold text-blue-900 mb-2">
                  {e.title}
                </h3>

                <p className="text-gray-600">
                  {e.desc}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      <section className="py-16">

  <div className="container mx-auto px-4">

    <div className="text-center mb-12">

      <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
        Latest News & Announcements
      </h2>

      <p className="text-gray-600 text-lg">
        Stay informed about the latest updates from our school
      </p>

    </div>


    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

      {news.map((item, i) => (

        <div
          key={i}
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition"
        >

          <div className="flex items-center text-blue-700 mb-3">

            <Newspaper size={20} className="mr-2" />

            <span className="text-sm font-semibold">
              {item.date}
            </span>

          </div>

          <h3 className="text-xl font-bold text-blue-900 mb-2">
            {item.title}
          </h3>

          <p className="text-gray-600">
            {item.desc}
          </p>

        </div>

      ))}

    </div>

  </div>

</section>

    </div>
  );
};

export default Events;