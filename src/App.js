// src/App.js

import './App.css';
import Navigation from './components/Navigation';
import Players from './components/Players';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Players />
      <Footer />
    </div>
  );
}

export default App;
