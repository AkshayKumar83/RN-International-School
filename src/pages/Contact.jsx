

import { MapPin, Phone, Mail, Clock,Send } from "lucide-react";

function Contact() {

  return (

    <>

      {/* Blue Banner */}

      <section class="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16" data-testid="page-header">
        <div class="container mx-auto px-4">
          <h1 class="text-4xl md:text-5xl font-bold mb-4" data-testid="page-title">Contact Us</h1>
          <p class="text-xl text-gray-100">We'd love to hear from you. Get in touch with us!</p>
        </div>
      </section>



      {/* Info Cards */}
      <section class="py-16" data-testid="contact-info-section">
        <div class="container mx-auto px-4">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

            <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition text-center" data-testid="contact-info-card-0">
              <div class="text-blue-700 flex justify-center mb-4">
                 <MapPin className="mx-auto text-blue-600 mb-1" size={32}/>
              </div>
              <h3 class="text-xl font-bold text-blue-900 mb-3">Address</h3>
              <p class="text-gray-600 text-sm mb-1">RN International School,</p>
              <p class="text-gray-600 text-sm mb-1">Near Uttam Sugar Mill</p>
              <p class="text-gray-600 text-sm mb-1">Barkatpur, Bijnor Uttar Pradesh (246732)</p>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition text-center" data-testid="contact-info-card-1">
              <div class="text-blue-700 flex justify-center mb-4">
               <Phone className="mx-auto text-blue-600 mb-1" size={32}/>
                  </div>
                  <h3 class="text-xl font-bold text-blue-900 mb-3">Phone</h3>
              <p class="text-gray-600 text-sm mb-1">+91 98709 89575</p>
              <p class="text-gray-600 text-sm mb-1">+91 63983 83992</p>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition text-center" data-testid="contact-info-card-2">
              <div class="text-blue-700 flex justify-center mb-4">
                <Mail className="mx-auto text-blue-600 mb-1" size={32}/>
              </div>
              <h3 class="text-xl font-bold text-blue-900 mb-3">Email</h3>
              <p class="text-gray-600 text-sm mb-1">rninternationalschool96@gmail.com</p>
              </div>

              <div class="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition text-center" data-testid="contact-info-card-3">
                <div class="text-blue-700 flex justify-center mb-4">
                  <Clock className="mx-auto text-blue-600 mb-1" size={32}/>
                  </div>
                  <h3 class="text-xl font-bold text-blue-900 mb-3">Working Hours</h3>
                  <p class="text-gray-600 text-sm mb-1">Monday - Saturday: 8:00 AM - 2:00 PM</p>
                  <p class="text-gray-600 text-sm mb-1">Sunday: Closed</p>
                  </div>

                  </div>
                  </div>

                  </section>



      {/* Tumhara existing contact section */}

      <section id="contact" className="py-1 bg-gray-50">

       <div className="container mx-auto px-4">

          <div className="grid md:grid-cols-2 gap-10 mt-10">


            <div>

              <h2 class="text-3xl font-bold text-blue-900 mb-6">Send Us a Message</h2>

     

<form className="bg-white p-8 rounded-lg shadow-md">
  

  {/* Name */}

  <div className="mb-6">
    <label className="block text-gray-700 font-semibold mb-2">
      Your Name *
    </label>

    <input
      type="text"
      required
      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      placeholder="Enter your name"
    />
  </div>


  {/* Email */}

  <div className="mb-6">
    <label className="block text-gray-700 font-semibold mb-2">
      Email Address *
    </label>

    <input
      type="email"
      required
      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      placeholder="Enter your email"
    />
  </div>


  {/* Phone */}

  <div className="mb-6">
    <label className="block text-gray-700 font-semibold mb-2">
      Phone Number *
    </label>

    <input
      type="tel"
      required
      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      placeholder="Enter phone number"
    />
  </div>


  {/* Subject */}
{/* 
  <div className="mb-6">
    <label className="block text-gray-700 font-semibold mb-2">
      Subject *
    </label>

    <input
      type="text"
      required
      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      placeholder="Enter subject"
    />
  </div> */}


  {/* Message */}

  <div className="mb-6">
    <label className="block text-gray-700 font-semibold mb-2">
      Message *
    </label>

    <textarea
      rows="5"
      required
      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      placeholder="Write your message"
    ></textarea>
  </div>


  {/* Submit Button */}

  <button
    type="submit"
    className="w-full bg-blue-700 text-white px-6 py-4 rounded-lg font-bold text-lg hover:bg-blue-800 transition flex items-center justify-center"
  >
    <Send className="w-5 h-5 mr-2" />
    Send Message
  </button>

</form>

            </div>



            {/* Right Side */}

            <div className="py-16">

              {/* Google Map */}

              <div className="w-full h-[350px] rounded-lg overflow-hidden shadow">

                <iframe
                  src="https://www.google.com/maps?q=Barkatpur+Bijnor&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>

              </div>


              {/* Buttons */}

              <div className="flex gap-4 mt-16 justify-center">

                <a
                  href="https://wa.me/919870989575"
                  target="_blank"
                  className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                >
                  WhatsApp
                </a>


                <a
                  href="https://www.google.com/maps?q=Barkatpur+Bijnor"
                  target="_blank"
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  Get Directions
                </a>

              </div>

            </div>


          </div>

        </div>

      </section>

       <section className="py-16 bg-gradient-to-r from-blue-700 to-blue-900 text-white">

      <div className="container mx-auto px-4 text-center">

        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Have Questions About Admissions?
        </h2>

        <p className="text-xl mb-8 text-gray-100">
          Our admission counselors are ready to help you
        </p>


        <div className="flex flex-wrap justify-center gap-6">


          {/* Call Button */}

          {/* <a href="tel:+919870989575"> */}

            <button className="bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-300 transition flex items-center">

              <Phone className="w-5 h-5 mr-2" />

              Call Now: +91 98709 89575

            </button>

          {/* </a> */}


          {/* Email Button */}

          <a href="mailto:rninternationalschool96@gmail.com">

            <button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition flex items-center">

              <Mail className="w-5 h-5 mr-2" />

              Email Us

            </button>

          </a>


        </div>

      </div>

    </section>

    </>
  )

}

export default Contact