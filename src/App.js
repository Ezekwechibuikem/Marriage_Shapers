import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';

// Import pages
import ScrollToTop from "./components/layout/ScrollToTop";
import Home from './components/pages/Home/Home';
import About from './components/pages/About/About';
import Services from './components/pages/Services/Services';
import Blog from './components/pages/Blog/Blog';
import BlogPost from './components/pages/Blog/BlogPost';
import Events from './components/pages/Events/Events';
import Contact from './components/pages/Contact/Contact';
import Gallery from './components/pages/Gallery/Gallery';
import FAQ from './components/pages/FAQ/FAQ';

// Import styles
import './assets/css/styles.css';

function App() {
  return (
    <Router>
      <Layout>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
