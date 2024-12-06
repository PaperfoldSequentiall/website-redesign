import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import Home from "./pages/home/Home";
import AboutUs from "./pages/aboutUs/AboutUs";
import Blog from "./pages/blog/Blog";
import Portfolio from "./pages/portfolio/Portfolio";
import Services from "./pages/services/Services";
import PrivacyPolicy from "./pages/privacyPolicy/PrivacyPolicy";
import Terms from "./pages/terms/Terms";
import Career from "./pages/career/Career";
import ContactUs from "./pages/contactUs/ContactUs";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/services" element={<Services />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/career" element={<Career />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="*" element={<div>Page Not Found</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
