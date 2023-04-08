import React from "react";
import FoodList from "../component/FoodList.js";
import Features from "../asset/ding.jpg";
import Tradition from "../asset/minceRice.jpg";
import Nightmarket from "../asset/chicken.jpg";

function Food() {
  return (
    <div className="py-8">
      <h1>Feed Your Stomach</h1>
      <p>Satisfy Your Hunger with Flavorful and Special Dishes</p>
      <div>
        <FoodList backgroundImageUrl={Features} title="Features" path="/Food" />
        <FoodList
          backgroundImageUrl={Tradition}
          title="Tradition"
          path="/Food"
        />
        <FoodList
          backgroundImageUrl={Nightmarket}
          title="Night Market "
          path="/Food"
        />
      </div>
    </div>
  );
}

export default Food;
