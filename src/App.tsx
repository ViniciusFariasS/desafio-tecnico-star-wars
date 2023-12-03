import Footer from './components/Footer/Footer';
import { Router } from './routes/Route';
import { BrowserRouter } from "react-router-dom";
import BackgroundImage from './assets/images/background_image.png';
import StarWarsLogoWhite from './assets/images/star_wars_logo_white.svg';
import { APP } from './App.styles';

function App() {
  return (
    <APP imageUrl={BackgroundImage}>
      <div className='app_logo'>
        <span>PLANET SEARCH</span>
        <img src={StarWarsLogoWhite} alt="" />
      </div>
      <BrowserRouter>
        <Router />
        <Footer />
      </BrowserRouter>
    </APP>
  );
}

export default App;
