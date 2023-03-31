import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './Sidebar';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import CodeSamples from './CodeSamples';
import './MainView.scss';

const MainView = () => {
  return (
    <BrowserRouter>
      <div className="layout-container">
        <Sidebar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/code" element={<CodeSamples />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </BrowserRouter>
  );
};

export default MainView;
