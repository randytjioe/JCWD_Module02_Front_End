

import Navbar from './components/navbar';
import ImgGrid from './components/imggrid';
import "./css/style.css"
import Profile from './components/profile';
import Doing from './components/doing';
import Port from './components/port';
import Kontak from './components/kontak';
import Footer from './components/footer';


function App() {
  return (
    <div>
      <Navbar />
      <ImgGrid />
      <Profile/>
      <Doing/>
      <Port/>
      <Kontak/>
      <Footer/>
    </div>
  );
}

export default App;
