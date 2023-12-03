import Footer from './components/Footer/Footer';
import { Router } from './routes/Route';
import { BrowserRouter } from "react-router-dom";
import BackgroundImage from './assets/images/background_image.png';
import { APP } from './App.styles';

function App() {
  return (
    <APP imageUrl={BackgroundImage}>
      <BrowserRouter>
        <Router />
        <Footer />
      </BrowserRouter>
    </APP>
  );
}

export default App;
