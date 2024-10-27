// App.tsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import MainSection from './MainSection';
import About from './Pages/About'; // Ensure this component exists
import Contact from './Pages/Contact'; // Ensure this component exists
import Work from './Pages/Work'; // Ensure this component exists
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<MainSection />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/work" element={<Work />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
