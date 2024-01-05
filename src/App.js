import { useState } from "react";
import "./App.css";
import DesktopUi from "./Components/Desktop/DesktopUi";
import "./Components/Desktop/styles.css";
import { AppContext } from "./AppContext";
import MobileUI from "./Components/Mobile/MobileUI";

const App = () => {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <div className="App">
      <AppContext.Provider value={{ isMobile, setIsMobile }}>
        {isMobile ? <MobileUI /> : <DesktopUi />}
      </AppContext.Provider>
    </div>
  );
};

export default App;
