import React from "react";
import ReactLoading from "react-loading";
import "./LoadingScreen.css";
function LoadingScreen() {
  return (
    <>
      <div className="loading-container">
        <div className="loader-holder">
          <div className="inner-load-holder">
            <div>
              <ReactLoading
                className="loading-animation"
                type={"bars"}
                color="#05435d"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoadingScreen;