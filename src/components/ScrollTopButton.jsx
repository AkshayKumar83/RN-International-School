import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

function ScrollTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    visible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 left-6 bg-blue-700 hover:bg-blue-800 
        text-white p-3 rounded-full shadow-lg 
        transition-all duration-300 hover:scale-110 z-50"
      >
        <ArrowUp size={22} />
      </button>
    )
  );
}

export default ScrollTopButton;