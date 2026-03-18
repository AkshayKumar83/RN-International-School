



import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { User, Lock, Eye, EyeOff } from "lucide-react";
import { toast } from "react-toastify";

function Login() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    if (username === "admin" && password === "1234") {
      localStorage.setItem("admin", "true");
      navigate("/admin/dashboard");
    } else {
      toast.error("Incorrect username or password");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url(https://images.pexels.com/photos/5212687/pexels-photo-5212687.jpeg)"
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-900/80"></div>

      {/* Card */}
      <div className="relative bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl p-10 w-full max-w-lg">

        <h2 className="text-4xl font-bold text-center text-blue-900 mb-8">
          Admin Login 🔐
        </h2>

        <div className="space-y-6">

          {/* Username */}
          <div className="relative">
            <User className="absolute left-3 top-3 text-gray-400" size={22} />
            <input
              type="text"
              placeholder="Username"
              className="w-full border pl-11 pr-3 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          {/* Password */}
          <div className="relative">
            <Lock className="absolute left-3 top-3 text-gray-400" size={22} />

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full border pl-11 pr-11 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={(e) => setPassword(e.target.value)}
            />

            <span
              className="absolute right-3 top-3 cursor-pointer text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={22} /> : <Eye size={22} />}
            </span>
          </div>

          {/* Button */}
          <button
            onClick={handleLogin}
            className="w-full bg-blue-700 text-white py-3 rounded-lg font-bold text-lg hover:bg-blue-800 transition"
          >
            Login
          </button>

        </div>

        <p className="text-center text-sm text-gray-600 mt-6">
          RN International School Admin Panel
        </p>

      </div>
    </div>
  );
}

export default Login;