import React, { useState, useEffect } from "react";
import "./App.css";
import SectionEight from "./Components/SectionEight/SectionEight";
import SectionOne from "./Components/SectionOne/SectionOne";
import SectionSeven from "./Components/SectionSeven/SectionSeven";
import SectionThree from "./Components/SectionThree/SectionThree";
import SectionTwo from "./Components/SectionTwo/SectionTwo";
import Footer from "./Components/Footer/Footer";
import SectionFour from "./Components/SectionFour/SectionFour";
import SectionSix from "./Components/SectionSix/SectionSix";
import LoadingScreen from "./Components/LoadingScreen/LoadingScreen";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 9000);
  }, []);
  return (
    <>
      {loading === false ? (
        <div className="App">
          <SectionOne />
          <SectionTwo />
          <SectionThree />
          <SectionSix />
          <SectionSeven />
          <SectionFour />
          {/* <SectionFive /> */}
          <SectionEight />
          <Footer />
        </div>
      ) : (
        <LoadingScreen />
      )}
    </>
  );
}

export default App;