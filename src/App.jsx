import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';

import Home from './pages/home/Home';
import AboutUs from './pages/aboutUs/AboutUs';
import Blog from './pages/blog/Blog';
import Portfolio from './pages/portfolio/Portfolio';
import Services from './pages/services/Services';
import PrivacyPolicy from './pages/privacyPolicy/PrivacyPolicy';
import Terms from './pages/terms/Terms';
import Career from './pages/career/Career';
import ContactUs from './pages/contactUs/ContactUs';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import GetInTouch from './components/getInTouch/GetInTouch';
import Landing from './pages/landing/Landing';

function AppWrapper() {
  const location = useLocation();

  const isLandingPage = location.pathname === '/landing';

  return (
    <>
      {!isLandingPage && <Header />}
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/services' element={<Services />} />
          <Route path='/privacy' element={<PrivacyPolicy />} />
          <Route path='/terms' element={<Terms />} />
          <Route path='/career' element={<Career />} />
          <Route path='/contact' element={<ContactUs />} />
          <Route path='/landing' element={<Landing />} />
          <Route path='*' element={<div>Page Not Found</div>} />
        </Routes>
      </div>
      {!isLandingPage && <GetInTouch />}
      {/* {!isLandingPage && <Footer />} */}
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <AppWrapper />
    </Router>
  );
}

export default App;
