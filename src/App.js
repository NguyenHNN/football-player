import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Players from './components/Players';
import Detail from './components/Detail';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Players />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;