import { FaWhatsapp } from "react-icons/fa";

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919870989575?text=Hello%20I%20want%20to%20know%20about%20RN%20International%20School"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 flex items-center 
      bg-white rounded-full shadow-lg 
      pl-4 pr-2 py-2 
      hover:shadow-xl transition-all duration-300 
      z-50"
    >
      {/* Desktop text */}
      <span className="hidden md:block text-green-800 font-semibold mr-2">
        Chat with us
      </span>

      {/* WhatsApp icon circle */}
      <div className="relative flex items-center justify-center">
        
        {/* Pulse animation */}
        <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></span>

        <div className="relative bg-green-500 hover:bg-green-600 
        text-white p-3 rounded-full flex items-center justify-center">
        <FaWhatsapp size={22} />
        </div>

      </div>
    </a>
  );
}

export default WhatsAppButton;