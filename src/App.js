import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import "./App.css";
import DesktopUi from "./Components/Desktop/DesktopUi";
import "./Components/Desktop/styles.css";
import { AppContext } from "./AppContext";
import MobileUI from "./Components/Mobile/MobileUI";

const App = () => {
  const [isMobile, setIsMobile] = useState(false);
  const isDesktop = useMediaQuery({ query: "(min-width:1224px)" });
  const isMobileDevice = useMediaQuery({ query: "(max-width: 1224px)" });
  return (
    <div className="App">
      <AppContext.Provider value={{ isMobile, setIsMobile }}>
        {isMobileDevice || isMobile ? <MobileUI /> : <DesktopUi />}
      </AppContext.Provider>
    </div>
  );
};

export default App;
