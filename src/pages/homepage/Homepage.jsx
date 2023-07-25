import React from "react";
import "./homepage.css";
import Cardslider from "../../components/cardSlider/cardslider";
import Slider from "../../components/slider/Slider";
import CountdownTimer from "../../components/CountdownTimer/CountdownTimer";
import Jel1 from "../../components/resources/1.jpg";
import Jel2 from "../../components/resources/2.jpg";
import Jel3 from "../../components/resources/3.webp";
import bg from "../../components/resources/bg1.jpg";
import expVid from "../../components/resources/expVid.mp4";
import CardGallery from "../../components/CardGallary/CardGallary";
import { Image } from "@chakra-ui/react";

const SALES_TIMER = 3 * 24 * 60 * 60 * 1000;
const NOW_IN_MS = new Date().getTime();

const dateTimeAfterThreeDays = NOW_IN_MS + SALES_TIMER;

export default function Homepage() {
  return (
    <>
      <Slider />
      <div className="parentPic">
        <div class="bar">
          <span class="bar_content">
            Unlock the magic of our exquisite jewelry collection today! Enjoy
            15% off your first purchase with promo code GEM15. Elevate your
            style with timeless beauty now!
          </span>
        </div>

        <div class="bg-opacity" src={bg}>
          <div className="cardSliderCss">
            <Cardslider />
          </div>
          <br />
          <div direction="row">
            <h2>TOP TRENDING</h2>
            <Image boxSize="32.5%" objectFit="cover" src={Jel1} alt="error" />
            <Image boxSize="35%" objectFit="cover" src={Jel2} alt="error" />
            <Image boxSize="32.5%" objectFit="cover" src={Jel3} alt="error" />
          </div>
        </div>
        <div>
          <h1>Sales Countdown</h1>
          <CountdownTimer targetDate={dateTimeAfterThreeDays} />
        </div>
        <div className="promo">
          <video src={expVid} autoPlay muted></video>
        </div>
        <CardGallery/>
      </div>
    </>
  );
}
