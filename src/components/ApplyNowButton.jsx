import { GraduationCap } from "lucide-react";
import { useNavigate } from "react-router-dom";

function ApplyNowButton() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/admissions");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-24 right-6 flex items-center gap-2
      bg-blue-700 hover:bg-blue-800 text-white
      p-3 md:px-4 md:py-3 rounded-full shadow-lg
      transition-all duration-300 hover:scale-105
      z-50"
    >
      <GraduationCap size={22} />

      {/* Desktop text */}
      <span className="hidden md:block font-semibold">
        Apply Now
      </span>
    </button>
  );
}

export default ApplyNowButton;