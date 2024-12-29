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
import Dashboard from './components/client/dashboard/Dashboard';
import Project from './components/client/dashboard/Project';
import Sidebar from './components/client/dashboard/Sidebar';


function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

function AppContent() {
  const locationPath = useLocation()

  return (
    <div className="App">
      {locationPath.pathname !== '/client/dashboard' && !locationPath.pathname.startsWith('/client/dashboard/') && <Navbar />}
      <Routes>
        <Route element={<Home />} path='/' />
        <Route element={<Home />} path='/home' />
        <Route element={<About />} path='/about' />
        <Route element={<Contact />} path='/contact' />
        <Route element={<Service />} path='/service' />
        <Route element={<Faq />} path='/faq' />
        <Route element={<Login />} path='/login' />
        <Route element={<Register />} path='/register' />

        <Route element={<Sidebar />} path='/client/dashboard'>
          <Route index element={<Dashboard />} />
          <Route element={<Project />} path='project' />
          <Route element={<Project />} path='project' />
          <Route element={<Project />} path='project' />
          <Route element={<Project />} path='project' />
          <Route element={<Project />} path='project' />
        </Route>
      </Routes>
    </div >
  );
}


export default App;
