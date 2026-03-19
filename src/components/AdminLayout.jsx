import AdminSidebar from "./AdminSidebar";

function AdminLayout({ children, rightContent, logout }) {

  
  return (
   <div className="bg-gray-100 min-h-screen">

      {/* Sidebar */}
      <AdminSidebar logout={logout} />

      {/* Right Side Wrapper */}
      <div className="ml-64">

        {/* Header */}
        <div className="fixed top-0 left-64 right-0 bg-white shadow px-8 py-4 flex justify-between items-center z-10">
          <div className="flex items-center gap-3">
            <img src="/images/logo.png" className="w-10 h-10" />
            <h2 className="font-bold text-blue-900">
              RN International School
            </h2>
          </div>

          <div>{rightContent}</div>
        </div>

        {/* Content */}
        <div className="pt-24 p-8 min-h-screen bg-gray-100">
      {children}
    </div>
      </div>
    </div>
  );
}

export default AdminLayout;