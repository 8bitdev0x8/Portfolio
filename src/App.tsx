// App.tsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import MainSection from './MainSection';
import About from './Pages/About'; 
import Contact from './Pages/Contact'; 
import Work from './Pages/Work'; 
import Gallery from './Pages/Gallery'; 
import Footer from './Footer'; 
import Blog from './Pages/Blog';
import VideoGallery from './Pages/VideoGallery';


import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/portfolio/" element={<MainSection />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} /> 
          <Route path="/contact" element={<Contact />} />
          <Route path="/work" element={<Work />} />   
          <Route path="/Blog" element={<Blog />} />
          <Route path="/VideoGallery" element={<VideoGallery />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
