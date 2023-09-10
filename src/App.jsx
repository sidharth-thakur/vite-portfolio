import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div div className="relative z-0 bg-primary">
        <Navbar />
        <div className="relative z-0">
          <StarsCanvas />
          <Hero />
        </div>

        <About />
        <Experience />
        <Tech />
        <Works />
        {/* <Feedbacks /> */}
        <Contact />
      </div>
    </BrowserRouter>
  );
};

export default App;
