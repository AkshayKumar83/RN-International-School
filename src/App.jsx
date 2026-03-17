import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
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
import "react-toastify/dist/ReactToastify.css";
import WhatsAppButton from "./components/WhatsAppButton";
import ScrollToTop from "./components/ScrollToTop";
import ScrollTopButton from "./components/ScrollTopButton";
import AdmissionRibbon from "./components/dmissionRibbon";
import ApplyNowButton from "./components/ApplyNowButton";
import PageLoader from "./components/PageLoader";


function App() {
  return (
    <BrowserRouter>
     <ToastContainer position="top-right" autoClose={3000} />


      <Navbar />
        {/* <PageLoader /> */}
        <ScrollToTop />

      <Routes>

        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/admissions" element={<Admission />} />
        <Route path="/faculty" element={<Teachers />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" />} />

      </Routes>
        {/* <AdmissionRibbon /> */}
        <ApplyNowButton />
        <WhatsAppButton />
        <ScrollTopButton />

      <Footer/>

    </BrowserRouter>
  );
}

export default App;