function About() {
  return (

    <section id="about" className="py-20 bg-white">

      <div className="max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-12 items-center">

        {/* Left Image */}

        <div>

          <img
            src="https://images.unsplash.com/photo-1588072432836-e10032774350"
            alt="School"
            className="rounded-xl shadow-lg"
          />

        </div>


        {/* Right Content */}

        <div>

          <h2 className="text-3xl font-bold text-blue-600 mb-4">
            About Our School
          </h2>

          <p className="text-gray-600 leading-relaxed mb-4">
            RN International School is committed to providing quality education
            and building a strong foundation for students. Our mission is to
            create a safe and inspiring environment where students can learn,
            grow and achieve their dreams.
          </p>

          <p className="text-gray-600 leading-relaxed mb-6">
            We focus on academic excellence, modern learning methods and
            overall personality development of students.
          </p>


          {/* Features */}

          <div className="grid grid-cols-2 gap-4 text-gray-700">

            <p>✔ Smart Classrooms</p>
            <p>✔ Qualified Teachers</p>
            <p>✔ Safe Campus</p>
            <p>✔ Sports Activities</p>

          </div>

        </div>

      </div>

    </section>

  )
}

export default About