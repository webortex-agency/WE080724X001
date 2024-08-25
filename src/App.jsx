import { useState } from "react";
import "@fontsource/poppins";
import Navbar from "./Components/Navabar/Navbar";
import Footer from "./Components/Footer/Footer";
import LandingPage from "./Components/LandingPage/LandingPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFound from "./Components/NotFound/NotFound";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
import DigitalMarket from "./Components/Projects/ProjectCompo/DigitalMarket";
import GraphicDesign from "./Components/Projects/ProjectCompo/GraphicDesign";
import MotionGraphics from "./Components/Projects/ProjectCompo/MotionGraphics";
import InteriorDesign from "./Components/Projects/ProjectCompo/InteriorDesign";
import Photography from "./Components/Projects/ProjectCompo/Photography";
import ThreeD from "./Components/Projects/ProjectCompo/ThreeD";
import TwoD from "./Components/Projects/ProjectCompo/TwoD";
import Web from "./Components/Projects/ProjectCompo/Web";
import CinematographyService from "./Components/Services/ServicesCompo/CinematographyService";
import DigitalMarketingService from "./Components/Services/ServicesCompo/DigitalMarketingService";
import GraphicDesignService from "./Components/Services/ServicesCompo/GraphicDesignService";
import InteriorDesignService from "./Components/Services/ServicesCompo/InteriorDesignService";
import MotionGraphicService from "./Components/Services/ServicesCompo/MotionGraphicService";
import PhotographyService from "./Components/Services/ServicesCompo/PhotographyService";
import ThreeDCinematographyService from "./Components/Services/ServicesCompo/ThreeDCinematographyService";
import WebDesignService from "./Components/Services/ServicesCompo/WebDesignService";
import { Provider } from "./Components/Context/Context";

const App = () => {
  const [loading, setLoading] = useState(true);
  const spinner = document.getElementById("spinner");
  if (spinner) {
    setTimeout(() => {
      spinner.style.display = "none";
      setLoading(false);
    }, 2000);
  }

  return (
    !loading && (
      <>
        <Provider>
          <Router basename="/WE080724X001/">
            <ScrollToTop />
            <Navbar />
            <Routes>
              <Route exact path="/" element={<LandingPage />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/contact" element={<Contact />} />

              <Route
                exact
                path="/projects/digital-marketing"
                element={<DigitalMarket />}
              />
              <Route
                exact
                path="/projects/graphic-design"
                element={<GraphicDesign />}
              />
              <Route
                exact
                path="/projects/motion-graphics"
                element={<MotionGraphics />}
              />
              <Route
                exact
                path="/projects/interior-design"
                element={<InteriorDesign />}
              />
              <Route
                exact
                path="/projects/photography"
                element={<Photography />}
              />
              <Route exact path="/projects/3d" element={<ThreeD />} />
              <Route exact path="/projects/2d" element={<TwoD />} />
              <Route exact path="/projects/web" element={<Web />} />

              <Route
                exact
                path="/services/cinematography"
                element={<CinematographyService />}
              />
              <Route
                exact
                path="/services/digital-marketing"
                element={<DigitalMarketingService />}
              />
              <Route
                exact
                path="/services/graphic-design"
                element={<GraphicDesignService />}
              />
              <Route
                exact
                path="/services/interior-design"
                element={<InteriorDesignService />}
              />
              <Route
                exact
                path="/services/motion-graphics"
                element={<MotionGraphicService />}
              />
              <Route
                exact
                path="/services/photography"
                element={<PhotographyService />}
              />
              <Route
                exact
                path="/services/3d-cinematography"
                element={<ThreeDCinematographyService />}
              />
              <Route
                exact
                path="/services/web-design"
                element={<WebDesignService />}
              />

              <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
          </Router>
        </Provider>
      </>
    )
  );
};

export default App;
