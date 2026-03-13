



import { useState } from "react";
import { MapPin, Menu, Phone, X ,Mail} from "lucide-react";
import { NavLink } from "react-router-dom";

function Navbar() {

const [open, setOpen] = useState(false);

  return (
    <>

     {/* Top Bar */}

   {/* this is the top bar with contact info, which is currently commented out. It can be uncommented if needed in the future. 
   The phone numbers are displayed as text for better accessibility, while the email remains a clickable link. */}

      {/* <div className="bg-blue-900 text-white py-2" data-testid="top-bar">
        <div class="container mx-auto px-4 flex flex-wrap justify-between items-center text-sm">
          <div class="flex items-center space-x-4">
            <a href="tel:+919870989575" class="flex items-center hover:text-yellow-400 transition" data-testid="phone-link-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone w-4 h-4 mr-1" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>+91 98709 89575</a>
              <a href="tel:+916398383992" class="hidden sm:flex items-center hover:text-yellow-400 transition" data-testid="phone-link-2"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone w-4 h-4 mr-1" aria-hidden="true">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>+91 63983 83992</a>
              </div>
              <a href="mailto:rninternationalschool96@gmail.com" class="flex items-center hover:text-yellow-400 transition" data-testid="email-link"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail w-4 h-4 mr-1" aria-hidden="true">
              <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7">
                </path>
                <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                </svg>rninternationalschool96@gmail.com</a>
                </div>
                </div> */}

<div className="bg-blue-900 text-white py-2">
  <div className="container mx-auto px-4 flex flex-wrap justify-between items-center text-sm">

    {/* Left Side */}

    <div className="flex items-center space-x-6">

    <a
  href="https://www.google.com/maps/search/Barkatpur+Bijnor"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-2 hover:text-yellow-400 transition"
>
  <MapPin size={16} />
  Barkatpur, Bijnor
</a>
      <span className="flex items-center gap-2 hover:text-yellow-400 transition cursor-default">
        <Phone size={16} />
        +91 98709 89575
      </span>

      <span className="hidden sm:flex items-center gap-2 hover:text-yellow-400 transition cursor-default">
        <Phone size={16} />
        +91 63983 83992
      </span>

    </div>


    {/* Right Side Email */}

    <a
      href="mailto:rninternationalschool96@gmail.com"
      className="flex items-center gap-2 hover:text-yellow-400 transition"
    >
      <Mail size={16} />
      rninternationalschool96@gmail.com
    </a>

  </div>
</div>

   {/* menu bar */}

      <nav className="bg-white shadow-lg sticky top-0 z-50">

        <div className="container mx-auto px-4">

          <div className="flex justify-between items-center py-4">

            {/* Logo */}

            <a className="flex items-center space-x-3" href="/">
              
              <img
                src="/images/logo.png"
                alt="RN International School"
                className="w-12 h-12 object-contain"
              />

              <div>
                <h1 className="text-xl font-bold text-blue-900">
                  RN International School
                </h1>
                <p className="text-xs text-gray-600">
                  Excellence in Education
                </p>
              </div>

            </a>


            {/* Desktop Menu */}

            <div className="hidden lg:flex space-x-1">

<NavLink
to="/"
className={({isActive}) =>
`px-4 py-2 rounded-md font-medium transition ${
isActive
? "bg-blue-700 text-white"
: "text-gray-700 hover:bg-blue-100 hover:text-blue-700"
}`
}
>
Home
</NavLink>

<NavLink
to="/about"
className={({isActive}) =>
`px-4 py-2 rounded-md font-medium transition ${
isActive
? "bg-blue-700 text-white"
: "text-gray-700 hover:bg-blue-100 hover:text-blue-700"
}`
}
>
About
</NavLink>

<NavLink
to="/academics"
className={({isActive}) =>
`px-4 py-2 rounded-md font-medium transition ${
isActive
? "bg-blue-700 text-white"
: "text-gray-700 hover:bg-blue-100 hover:text-blue-700"
}`
}
>
Academics
</NavLink>

<NavLink
to="/admissions"
className={({isActive}) =>
`px-4 py-2 rounded-md font-medium transition ${
isActive
? "bg-blue-700 text-white"
: "text-gray-700 hover:bg-blue-100 hover:text-blue-700"
}`
}
>
Admissions
</NavLink>

<NavLink
to="/faculty"
className={({isActive}) =>
`px-4 py-2 rounded-md font-medium transition ${
isActive
? "bg-blue-700 text-white"
: "text-gray-700 hover:bg-blue-100 hover:text-blue-700"
}`
}
>
Faculty
</NavLink>

<NavLink
to="/gallery"
className={({isActive}) =>
`px-4 py-2 rounded-md font-medium transition ${
isActive
? "bg-blue-700 text-white"
: "text-gray-700 hover:bg-blue-100 hover:text-blue-700"
}`
}
>
Gallery
</NavLink>

<NavLink
to="/events"
className={({isActive}) =>
`px-4 py-2 rounded-md font-medium transition ${
isActive
? "bg-blue-700 text-white"
: "text-gray-700 hover:bg-blue-100 hover:text-blue-700"
}`
}
>
Events
</NavLink>

<NavLink
to="/contact"
className={({isActive}) =>
`px-4 py-2 rounded-md font-medium transition ${
isActive
? "bg-blue-700 text-white"
: "text-gray-700 hover:bg-blue-100 hover:text-blue-700"
}`
}
>
Contact
</NavLink>

</div>


            {/* Mobile Button */}

            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden p-2 rounded-md hover:bg-gray-100"
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>

          </div>

        </div>

      </nav>


      {/* Mobile Menu */}

     {open && (

<div className="hidden lg:flex space-x-1">

<NavLink
to="/"
className={({isActive}) =>
`px-4 py-2 rounded-md font-medium transition ${
isActive
? "bg-blue-700 text-white"
: "text-gray-700 hover:bg-blue-100 hover:text-blue-700"
}`
}
>
Home
</NavLink>

<NavLink
to="/about"
className={({isActive}) =>
`px-4 py-2 rounded-md font-medium transition ${
isActive
? "bg-blue-700 text-white"
: "text-gray-700 hover:bg-blue-100 hover:text-blue-700"
}`
}
>
About
</NavLink>

<NavLink
to="/academics"
className={({isActive}) =>
`px-4 py-2 rounded-md font-medium transition ${
isActive
? "bg-blue-700 text-white"
: "text-gray-700 hover:bg-blue-100 hover:text-blue-700"
}`
}
>
Academics
</NavLink>

<NavLink
to="/admissions"
className={({isActive}) =>
`px-4 py-2 rounded-md font-medium transition ${
isActive
? "bg-blue-700 text-white"
: "text-gray-700 hover:bg-blue-100 hover:text-blue-700"
}`
}
>
Admissions
</NavLink>

<NavLink
to="/faculty"
className={({isActive}) =>
`px-4 py-2 rounded-md font-medium transition ${
isActive
? "bg-blue-700 text-white"
: "text-gray-700 hover:bg-blue-100 hover:text-blue-700"
}`
}
>
Faculty
</NavLink>

<NavLink
to="/gallery"
className={({isActive}) =>
`px-4 py-2 rounded-md font-medium transition ${
isActive
? "bg-blue-700 text-white"
: "text-gray-700 hover:bg-blue-100 hover:text-blue-700"
}`
}
>
Gallery
</NavLink>

<NavLink
to="/events"
className={({isActive}) =>
`px-4 py-2 rounded-md font-medium transition ${
isActive
? "bg-blue-700 text-white"
: "text-gray-700 hover:bg-blue-100 hover:text-blue-700"
}`
}
>
Events
</NavLink>

<NavLink
to="/contact"
className={({isActive}) =>
`px-4 py-2 rounded-md font-medium transition ${
isActive
? "bg-blue-700 text-white"
: "text-gray-700 hover:bg-blue-100 hover:text-blue-700"
}`
}
>
Contact
</NavLink>

</div>

)}

    </>
  );
}

export default Navbar;