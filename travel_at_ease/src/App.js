import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/Navbar';
import { Second } from './components/Second';
import { Featuredoffers } from './components/FeaturedOffers';
import Options from './components/Options';


function App() {
  return (
    <>
      <Navbar />
      <Second />
      <Featuredoffers />
      <Options />
      
    </>
  );
}

export default App;
