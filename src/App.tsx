import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Home from './pages/home';
import About from './pages/about';
import Project from './pages/project';
import Contact from './pages/contact';
import './App.css'
import Footer from './components/footer';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path='/project' element={<Project />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        {/* Add other routes here */}
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
