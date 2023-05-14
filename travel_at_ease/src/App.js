/** @format */



import { MainRoutes } from './Components/AllRoutes/MainRoutes';
import Footer from './Components/Footer';
import { Navbar } from './Components/Navbar';


function App() {
  return (
    <div>
      <Navbar />
      <MainRoutes />
      <Footer/>
    </div>
  );
}

export default App;
