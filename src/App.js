import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Service from './components/Service';
import Faq from './components/Faq';
import Login from './components/Login';
import Register from './components/Register';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route element={<Home />} path='/' />
          <Route element={<Home />} path='/Home' />
          <Route element={<About />} path='/About' />
          <Route element={<Contact />} path='/Contact' />
          <Route element={<Service />} path='/Service' />
          <Route element={<Faq />} path='/Faq' />
          <Route element={<Login />} path='/Login' />
          <Route element={<Register />} path='/Register' />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
