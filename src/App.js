import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Services from './components/Services';
import Industries from './components/Industries';
import Finance from './components/Finance';
import About from './components/About';
import Transform from './components/Transform';

function App() {
  return (
    <div>
      <Header/>
      <Services/>
      <Industries/>
      <Finance/>
      <About/>
      <Transform/>
      <Footer/>
    </div>
  );
}

export default App;
