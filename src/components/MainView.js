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
            <Route path="/portfolio/" element={<Home />} />
            <Route path="/portfolio/projects" element={<Projects />} />
            <Route path="/portfolio/code" element={<CodeSamples />} />
            <Route path="/portfolio/about" element={<About />} />
            <Route path="/portfolio/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </BrowserRouter>
  );
};

export default MainView;
