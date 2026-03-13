

import { Facebook, Twitter, Instagram, Youtube, Phone, Mail, MapPin } from "lucide-react";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-blue-900 text-white">

      <div className="container mx-auto px-4 py-12">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* School Info */}

        <div>
  {/* Logo + School Name */}
  <div className="flex items-center gap-3 mb-4">
    
    <img
      src="/images/logo.png"
      alt="RN International School"
      className="w-14 h-14 object-contain"
    />

    <div>
      <h3 className="text-2xl font-bold leading-tight">
        RN
      </h3>
      <h3 className="text-2xl font-bold leading-tight">
        INTERNATIONAL SCHOOL
      </h3>
    </div>

  </div>

  <p className="text-gray-300 text-sm mb-4">
    Providing quality education with a focus on holistic development,
    modern teaching methods, and a safe learning environment.
  </p>

  <div className="flex space-x-4 mt-4">

    <a href="#" className="bg-white text-blue-900 p-2 rounded-full hover:bg-yellow-400 transition">
      <Facebook size={18} />
    </a>

    <a href="#" className="bg-white text-blue-900 p-2 rounded-full hover:bg-yellow-400 transition">
      <Twitter size={18} />
    </a>

    <a href="#" className="bg-white text-blue-900 p-2 rounded-full hover:bg-yellow-400 transition">
      <Instagram size={18} />
    </a>

    <a href="#" className="bg-white text-blue-900 p-2 rounded-full hover:bg-yellow-400 transition">
      <Youtube size={18} />
    </a>

  </div>
</div>

          {/* Quick Links */}

          <div>
            <h3 className="text-xl font-bold mb-4 text-yellow-400">
              Quick Links
            </h3>

            <ul className="space-y-2 text-sm">

              <li>
                <NavLink to="/about" className="hover:text-yellow-400 transition">
                  About Us
                </NavLink>
              </li>

              <li>
                <NavLink to="/academics" className="hover:text-yellow-400 transition">
                  Academics
                </NavLink>
              </li>

              <li>
                <NavLink to="/admissions" className="hover:text-yellow-400 transition">
                  Admissions
                </NavLink>
              </li>

              <li>
                <NavLink to="/faculty" className="hover:text-yellow-400 transition">
                  Faculty
                </NavLink>
              </li>

              <li>
                <NavLink to="/gallery" className="hover:text-yellow-400 transition">
                  Gallery
                </NavLink>
              </li>

              <li>
                <NavLink to="/events" className="hover:text-yellow-400 transition">
                  Events
                </NavLink>
              </li>

            </ul>
          </div>


          {/* Contact */}

          <div>

            <h3 className="text-xl font-bold mb-4 text-yellow-400">
              Contact Us
            </h3>

            <ul className="space-y-3 text-sm">

              <li className="flex items-start">

                <Phone className="w-5 h-5 mr-2 mt-0.5" />

                <div>
                  {/* <a href="tel:+919870989575" className="hover:text-yellow-400 block">
                    +91 98709 89575
                  </a> */}
                 
                  {/* <a href="tel:+916398383992" className="hover:text-yellow-400 block">
                    +91 63983 83992
                  </a> */}
                   <a href className="hover:text-yellow-400 block">
                    +91 98709 89575
                  </a>

                  <a href className="hover:text-yellow-400 block">
                    +91 63983 83992
                  </a>
                  
                </div>

              </li>


              <li className="flex items-start">

                <Mail className="w-5 h-5 mr-2 mt-0.5" />

                <a href="mailto:rninternationalschool96@gmail.com" className="hover:text-yellow-400">
                  rninternationalschool96@gmail.com
                </a>

              </li>


              <li className="flex items-start">

                <MapPin className="w-5 h-5 mr-2 mt-0.5" />

                <span>
                  RN International School 
                </span>

              </li>

            </ul>

          </div>


          {/* Admission Box */}

          <div>

            <h3 className="text-xl font-bold mb-4 text-yellow-400">
              Admissions 2026-27
            </h3>

            <div className="bg-yellow-400 text-blue-900 p-4 rounded-lg">

              <p className="font-bold text-lg mb-2">
                Now Open!
              </p>

              <p className="text-sm mb-3">
                ✓ Modern Classrooms <br />
                ✓ Safe & Secure Campus <br />
                ✓ Admission Fees Free
              </p>

              <NavLink to="/admissions">
                <button className="bg-blue-900 text-white px-4 py-2 rounded-md w-full font-semibold hover:bg-blue-800 transition">
                  Enroll Now
                </button>
              </NavLink>

            </div>

          </div>

        </div>


        {/* Bottom */}

        <div className="border-t border-blue-800 mt-8 pt-8 text-center text-sm text-gray-300">

          <p>
            © 2026 RN International School. All rights reserved.
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;