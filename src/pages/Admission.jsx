import banner from "../assets/admission-banner.png";

function Admission() {

  return (

    <section className="py-20 bg-gray-100">

      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center mb-10 text-blue-600">
          Admissions Open 2026-2027
        </h2>

        <div className="flex justify-center">

          <img
            src={banner}
            alt="Admission Banner"
            className="rounded-xl shadow-lg"
          />

        </div>

      </div>

    </section>

  );

}

export default Admission;