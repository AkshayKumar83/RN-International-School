import { Link, useNavigate } from "react-router-dom";
import { Users, IndianRupee, AlertCircle, LogOut } from "lucide-react";
import { NavLink } from "react-router-dom";
import AdminLayout from "../components/AdminLayout";

function Dashboard() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("admin");
    navigate("/admin/login");
  };

  return (

<AdminLayout title="Dashboard" logout={logout}>
  {/* dashboard content */}

       <div className="p-6">
        <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

          <div className="bg-white p-5 rounded-xl shadow flex items-center gap-4">
            <Users className="text-blue-600" />
            <div>
              <p className="text-gray-500">Students</p>
              <h2 className="text-xl font-bold">500</h2>
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl shadow flex items-center gap-4">
            <IndianRupee className="text-green-600" />
            <div>
              <p className="text-gray-500">Total Collection</p>
              <h2 className="text-xl font-bold">₹2,50,000</h2>
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl shadow flex items-center gap-4">
            <AlertCircle className="text-red-600" />
            <div>
              <p className="text-gray-500">Pending Fees</p>
              <h2 className="text-xl font-bold">₹50,000</h2>
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl shadow flex items-center gap-4">
            <IndianRupee className="text-purple-600" />
            <div>
              <p className="text-gray-500">Today</p>
              <h2 className="text-xl font-bold">₹10,000</h2>
            </div>
          </div>

        </div>
        </div>

</AdminLayout>





  );
}

export default Dashboard;