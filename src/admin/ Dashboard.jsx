import { Link, useNavigate } from "react-router-dom";
import { Users, IndianRupee, AlertCircle, LogOut } from "lucide-react";

function Dashboard() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("admin");
    navigate("/admin/login");
  };

  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* Sidebar */}
      <div className="w-64 bg-blue-900 text-white p-5">
        <h2 className="text-xl font-bold mb-6">Admin Panel</h2>

        <ul className="space-y-4">
          <li>
            <Link to="/admin/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/admin/fees">Fees</Link>
          </li>
        </ul>

        <button
          onClick={logout}
          className="mt-10 bg-red-500 px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">

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

        {/* Quick Actions */}
        <div className="mt-10">
          <h2 className="text-lg font-bold mb-4">Quick Actions</h2>

          <div className="flex gap-4">
            <Link to="/admin/fees">
              <button className="bg-blue-700 text-white px-5 py-3 rounded-lg">
                Add Payment
              </button>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;