import Footer from './components/Footer/Footer';
import { Router } from './routes/Route';
import { BrowserRouter } from "react-router-dom";
import BackgroundImage from './assets/images/background_image.png';
import BackgroundImageMobile from './assets/images/background_image_mobile.png';
import StarWarsLogoWhite from './assets/images/star_wars_logo_white.svg';
import { APP } from './App.styles';
import { PlanetProvider } from './context/Planet.context';
import { useMediaQuery } from '@mui/material';

function App() {

  const isMobile = useMediaQuery('(max-width: 480px)');

  return (
    <APP imageurl={isMobile ? BackgroundImageMobile : BackgroundImage}>
      <div className='app_logo'>
        <span>PLANET SEARCH</span>
        <img src={StarWarsLogoWhite} alt="" />
      </div>
      <BrowserRouter>
        <PlanetProvider>
          <Router />
          <Footer />
        </PlanetProvider>
      </BrowserRouter>
    </APP>
  );
}

export default App;
