function Hero() {

  return (

  <section
    className="h-screen flex flex-col justify-center items-center text-center bg-cover bg-center pt-20"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1')",
      }}
    >

      <div className="bg-black/50 p-10 rounded-xl">

        <h1 className="text-5xl md:text-6xl font-bold text-white">
          RN International School
        </h1>

        <p className="text-white mt-4 text-lg">
          Building Bright Futures Through Education
        </p>

        <button className="mt-6 bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300">
          Apply For Admission
        </button>

      </div>

    </section>

  )

}

export default Hero