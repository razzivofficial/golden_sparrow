import React from "react";
import "./homepage.css";
import Cardslider from "../../components/cardSlider/cardslider";
import Slider from "../../components/slider/Slider";
import CountDownTimer from "../../components/CountdownTimer/CountdownTimer";
import Jel1 from "../../components/resources/1.jpg";
import Jel2 from "../../components/resources/2.jpg";
import Jel3 from "../../components/resources/3.jpg";
import bg from "../../components/resources/bg1.jpg";
import { Image } from "@chakra-ui/react";
export default function Homepage() {
  return (
    <>
      <Slider />
      <div className="parentPic">
        <div class="bar">
          <span class="bar_content">
            Experience Unparalleled Luxury at Unbeatable Prices! Book Now with
            Promo Code EXCITE25 for 25% Off Your Dream Getaway.
          </span>
        </div>

        <div class="bg-opacity" src={bg}>
          <h2>TOP TRENDING</h2>
          <div direction="row">
            <Image boxSize="30%" objectFit="cover" src={Jel1} alt="error" />
            <Image boxSize="40%" objectFit="cover" src={Jel2} alt="error" />
            <Image boxSize="30%" objectFit="cover" src={Jel3} alt="error" />
          </div>
        </div>
        <Cardslider />
        <CountDownTimer />
      </div>
    </>
  );
}
