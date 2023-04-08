import React from "react";
import Hero from "../component/Hero.js";
import Region from "../component/Region.js";
import Food from "../component/Food.js";

function Home() {
  return (
    <div class="h-auto">
      <Hero />
      <Region />
      <Food />
    </div>
  );
}

export default Home;
