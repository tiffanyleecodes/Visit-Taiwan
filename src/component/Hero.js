import React, { useState, useEffect } from "react";

import Ali from "../asset/ali.jpg";
import Taipei from "../asset/taipei.jpg";
import Yushan from "../asset/yushan.png";
import Ye from "../asset/ye.jpg";
import Hua from "../asset/hua.jpg";
import Train from "../asset/train.jpg";

function Hero() {
  const images = [Yushan, Ali, Hua, Ye, Taipei, Train];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  const backgroundImageStyle = {
    backgroundImage: `url(${images[index]})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    transition: "background-image 2s ease-in-out",
  };

  return (
    <div
      style={backgroundImageStyle}
      className="  bg-cover flex justify-center align-middle py-52 px-6 flex-col"
    >
      <h1 className="font-bold text-white text-3xl ">More Than An Island</h1>
    </div>
  );
}

export default Hero;
