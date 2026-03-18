import { NavLink } from "react-router-dom";

function AdminSidebar({ logout }) {
  return (
  <div className="w-64 h-screen fixed left-0 top-0 bg-gradient-to-b from-blue-900 to-blue-700 text-white p-6 shadow-lg flex flex-col">

      {/* Top */}
      <div>
        <h2 className="text-2xl font-bold mb-8">Admin Panel</h2>

        <ul className="space-y-3 text-sm">
          <NavLink to="/admin/dashboard" className={({ isActive }) =>
            `block p-2 rounded ${
              isActive ? "bg-white/20 text-yellow-300" : "hover:bg-white/10"
            }`}>
            Dashboard
          </NavLink>

          <NavLink to="/admin/admissionform" className={({ isActive }) =>
            `block p-2 rounded ${
              isActive ? "bg-white/20 text-yellow-300" : "hover:bg-white/10"
            }`}>
            Admission
          </NavLink>
          

          <NavLink to="/admin/fees" className={({ isActive }) =>
            `block p-2 rounded ${
              isActive ? "bg-white/20 text-yellow-300" : "hover:bg-white/10"
            }`}>
            Fees
          </NavLink>
        </ul>
      </div>

      {/* Bottom Logout */}
      <div className="mt-auto">
        <button
          onClick={logout}
          className="w-full bg-red-500 py-2 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>

    </div>
  );
}

export default AdminSidebar;