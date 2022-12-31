import React from "react";
import LoadingSticker from "../../assets/images/loading_bitmoji2.png";
import "./LoadingScreen.css";
function LoadingScreen() {
  return (
    <>
      <div className="loading-container">
        <div className="loader-holder">
          <div className="loading_sticker_holder">
            {/* <div className="loading_sticker"> */}
            <img src={LoadingSticker} alt="" />
            {/* </div> */}
          </div>
          <div className="inner-load-holder">Loading </div>
        </div>
      </div>
    </>
  );
}

export default LoadingScreen;
