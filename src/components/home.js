import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import NavBar from "./Navbar";
import Count from "./count";
import Products from "./products";
import Blogs from "./blogs";
import Indus from "./indus";
import Newsletter from "./newsletter";
import Footermob from "./footermob";
import GetStarted from "./Getstartedtoday";
import Homepage from "./MainPage";
import HowItWorks from "./HowItWorks";
import Video from "./video";
import CopyMob from "./copymobile";

function Home() {
  const [display, setdisplay] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 769) {
      setdisplay(true);
    }
  }, [display]);

  return (
    <>
      {/* {display ? <FeatMob /> : <UpcomEve />} */}

      <NavBar />
      <Homepage />
      <Count />
      <Products />

      <HowItWorks />
      <Indus />
      <GetStarted />
      <Video />
      <Blogs />
      <Newsletter />
      <Footermob />
      <CopyMob />
    </>
  );
}

export default Home;
