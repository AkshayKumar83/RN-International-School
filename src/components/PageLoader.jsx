import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function PageLoader() {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, [location]);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 bg-white flex flex-col items-center justify-center z-[9999] transition-opacity duration-500">

      {/* School Name */}
      <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6 animate-pulse">
        RN International School
      </h1>

      {/* Spinner */}
      <div className="w-12 h-12 border-4 border-blue-700 border-t-transparent rounded-full animate-spin"></div>

      {/* Loading text */}
      <p className="text-gray-500 mt-4 text-lg">
        Loading...
      </p>

      {/* Progress Bar */}
      <div className="w-56 h-1 bg-gray-200 mt-6 rounded-full overflow-hidden">
        <div className="h-full bg-blue-700 animate-[loadingBar_1s_linear_infinite]"></div>
      </div>

      <style>
        {`
          @keyframes loadingBar {
            0% { width: 0% }
            50% { width: 70% }
            100% { width: 100% }
          }
        `}
      </style>

    </div>
  );
}

export default PageLoader;