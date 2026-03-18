


import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Academics from "./pages/Academics";
import Admission from "./pages/Admission";
import Teachers from "./pages/Teachers";
import Gallery from "./pages/Gallery";
import Events from "./pages/Events";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import Navbar from "./components/Navbar";
import { ToastContainer } from "react-toastify";
import WhatsAppButton from "./components/WhatsAppButton";
import ScrollToTop from "./components/ScrollToTop";
import ScrollTopButton from "./components/ScrollTopButton";
import ApplyNowButton from "./components/ApplyNowButton";

// 🔥 ADMIN IMPORTS
import Login from "./admin/Login";
import Fees from "./admin/Fees";
import ProtectedRoute from "./admin/ProtectedRoute";
import Dashboard from "./admin/Dashboard";
import AdmissionForm from "./admin/AdmissionForm";

function Layout() {
  const location = useLocation();

  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <ScrollToTop />

      {/*  Admin me navbar hide */}
      {!isAdminRoute && <Navbar />}

      <Routes>
        {/* Public */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/admissions" element={<Admission />} />
        <Route path="/faculty" element={<Teachers />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />

        {/*  Admin */}
        <Route path="/admin/login" element={<Login />} />

        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/admissionform"
          element={
            <ProtectedRoute>
              <AdmissionForm />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/fees"
          element={
            <ProtectedRoute>
              <Fees />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      {/* ❌ Admin me footer hide */}
      {!isAdminRoute && (
        <>
          <ApplyNowButton />
          <WhatsAppButton />
          <ScrollTopButton />
          <Footer />
        </>
      )}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;