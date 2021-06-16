import Reactб, { useState } from "react";
import { Animated } from "react-animated-css";

import backgroundskreen from "./img/Desktop_cropped1050.png";
import cub from "./img/CupHoist.png";
import komImg from "./img/3Groupbooton.png";
import komupImg from "./img/3Group2up.png";
import timLeftImg from "./img/TearmLeft.png";
import timRightImg from "./img/TeamTeamright.png";
import oneTopImg from "./img/ONE_.png";
import oneTop2Img from "./img/ONE-GAME.png";
import oneTop3Img from "./img/ONE-GAME-TO-GLORY.png";
import oneTop4Img from "./img/logoOne4.png";
import fon2Img from "./img/fon2.png";
import fon3Img from "./img/fon3.png";
import fonFinishImg from "./img/finishfon2.png";
import fonleftImg from "./img/fon3left.png";
import fonrightImg from "./img/fon3right.png";
import botonelepsImg from "./img/Ellipse1.png";

import "./App.scss";

function App() {
  const [toggle, toggleBulin] = useState(true);
  function onCheng(toggle1: any) {
    return toggleBulin(!toggle1);
  }

  const [back, setBack] = useState("none");
  function changesBagr(e: any): any {
    e.preventDefault();
    const block = "block";
    return setBack(block);
  }

  const styles: any = {
    display: `${back}`,
    width: "100%",
    position: "absolute",
    zIndex: "26",
    top: "0px",
    left: "0px",
  };

  setTimeout(onCheng, 24000, toggle);
  return (
    <div className="app">
      <header className="app-header">
        <img src={backgroundskreen} alt="ImgPeg" className="img-peg" />
        <div style={styles}>
          <video width="750" height="500" controls>
            <source src="Videos/video.mp4" type="video/mp4" />
          </video>
        </div>
        <Animated
          animationIn="slideInUp"
          animationOut="bounce"
          animationInDuration={2000}
          animationOutDuration={3000}
          isVisible={true}
          className="img-cub"
        >
          <img src={cub} alt="ImgCub" />
        </Animated>
        <Animated
          animationIn="slideInUp"
          animationOut="bounce"
          animationInDelay={3000}
          animationInDuration={2000}
          animationOutDuration={3000}
          isVisible={true}
          className="img-kom-bot"
        >
          <img src={komImg} alt="ImgCub" />
        </Animated>
        <Animated
          animationIn="slideInUp"
          animationOut="bounce"
          animationInDelay={4000}
          animationInDuration={3000}
          animationOutDuration={1000}
          isVisible={true}
          className="img-kom-up"
        >
          <img src={komupImg} alt="ImgCub" />
        </Animated>
        <Animated
          animationIn="fadeInLeft"
          animationOut="bounce"
          animationInDelay={6000}
          animationInDuration={6000}
          animationOutDuration={5000}
          isVisible={true}
          className="timleft"
        >
          <img src={timLeftImg} alt="ImgCub" />
        </Animated>
        <Animated
          animationIn="fadeInRight"
          animationOut="bounce"
          animationInDelay={6000}
          animationInDuration={6000}
          animationOutDuration={5000}
          isVisible={true}
          className="tim-right"
        >
          <img src={timRightImg} alt="ImgCub" />
        </Animated>
        <Animated
          animationIn="fadeIn"
          animationOut="bounce"
          animationInDelay={13000}
          animationInDuration={3000}
          animationOutDuration={3000}
          isVisible={true}
          className="one-top"
        >
          <img src={oneTopImg} alt="ImgCub" />
        </Animated>
        <Animated
          animationIn="fadeIn"
          animationOut="bounce"
          animationInDelay={14000}
          animationInDuration={3000}
          animationOutDuration={3000}
          isVisible={true}
          className="one2-top"
        >
          <img src={oneTop2Img} alt="ImgCub" />
        </Animated>
        <Animated
          animationIn="fadeIn"
          animationOut="bounce"
          animationInDelay={15000}
          animationInDuration={3000}
          animationOutDuration={3000}
          isVisible={true}
          className="one3-top"
        >
          <img src={oneTop3Img} alt="ImgCub" />
        </Animated>
        <Animated
          animationIn="fadeIn"
          animationOut="fadeOut"
          animationInDelay={15000}
          animationInDuration={3000}
          animationOutDuration={3000}
          isVisible={true}
          className="one4-top"
        >
          <img src={oneTop4Img} alt="ImgCub" />
        </Animated>
        <Animated
          animationIn="fadeIn"
          animationOut="fadeOut"
          animationInDelay={17000}
          animationInDuration={2000}
          animationOutDuration={3000}
          isVisible={true}
          className="fon2-top"
        >
          <img src={fon2Img} alt="ImgCub" />
        </Animated>
        <Animated
          animationIn="fadeIn"
          animationOut="fadeOut"
          animationInDelay={19000}
          animationInDuration={2000}
          animationOutDuration={3000}
          isVisible={true}
          className="fon2-top"
        >
          <img src={fon3Img} alt="ImgCub" />
        </Animated>
        <Animated
          animationIn="fadeIn"
          animationOut="fadeOut"
          animationInDelay={22000}
          animationInDuration={2000}
          animationOutDuration={3000}
          isVisible={true}
          className="finish-fon"
        >
          <img src={fonFinishImg} alt="ImgCub" />
          <img
            src={botonelepsImg}
            onClick={changesBagr}
            alt="ImgCub"
            className="botonimg"
          />
        </Animated>
        <Animated
          animationIn="fadeIn"
          animationOut="fadeOutRight"
          animationInDelay={22000}
          animationInDuration={1000}
          animationOutDuration={5000}
          isVisible={toggle}
          className="left-fon"
        >
          <img src={fonleftImg} alt="ImgCub" />
        </Animated>
        <Animated
          animationIn="fadeIn"
          animationOut="fadeOutLeft"
          animationInDelay={22000}
          animationInDuration={1000}
          animationOutDuration={5000}
          isVisible={toggle}
          className="right-fon"
        >
          <img src={fonrightImg} alt="ImgCub" />
        </Animated>
      </header>
    </div>
  );
}

export default App;
