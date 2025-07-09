import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Service from './components/Service';
import Faq from './components/Faq';
import Login from './components/Login';
import Register from './components/Register';

// Client Dashboard Components
import ClientDashboard from './components/client/dashboard/Dashboard';
import Project from './components/client/dashboard/Project';
import ClientSidebar from './components/client/dashboard/Sidebar';
import Freelancer from './components/client/dashboard/Freelancer';
import Payment from './components/client/dashboard/Payment';
import Profile from './components/client/dashboard/Profile';
import Help from './components/client/dashboard/Help';
import Setting from './components/client/dashboard/Setting';

// Freelancer Dashboard Components
import FreelancerDashboard from './components/freelancer/dashboard/Dashboard';
import FreelancerSidebar from './components/freelancer/dashboard/Sidebar';
import BrowseProjects from './components/freelancer/dashboard/BrowseProjects';
import MyBids from './components/freelancer/dashboard/MyBids';
import MyEarnings from './components/freelancer/dashboard/MyEarnings';
import FreelancerProfile from './components/freelancer/dashboard/Profile';
import FreelancerHelp from './components/freelancer/dashboard/Help';
import FreelancerSetting from './components/freelancer/dashboard/Setting';

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();

  const isDashboardRoute =
    location.pathname.startsWith('/client/dashboard') ||
    location.pathname.startsWith('/freelancer/dashboard');

  return (
    <div className="App">
      {!isDashboardRoute && <Navbar />}
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Client Dashboard Routes */}
        <Route path="/client/dashboard" element={<ClientSidebar />}>
          <Route index element={<ClientDashboard />} />
          <Route path="project" element={<Project />} />
          <Route path="freelancer" element={<Freelancer />} />
          <Route path="payment" element={<Payment />} />
          <Route path="profile" element={<Profile />} />
          <Route path="help" element={<Help />} />
          <Route path="setting" element={<Setting />} />
        </Route>

        {/* Freelancer Dashboard Routes */}
        <Route path="/freelancer/dashboard" element={<FreelancerSidebar />}>
          <Route index element={<FreelancerDashboard />} />
          <Route path="browse-projects" element={<BrowseProjects />} />
          <Route path="my-bids" element={<MyBids />} />
          <Route path="my-earnings" element={<MyEarnings />} />
          <Route path="profile" element={<FreelancerProfile />} />
          <Route path="help" element={<FreelancerHelp />} />
          <Route path="setting" element={<FreelancerSetting />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
