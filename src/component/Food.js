import React from "react";
import FoodList from "../component/FoodList.js";
import Features from "../asset/ding.jpg";
import Tradition from "../asset/minceRice.jpg";
import Nightmarket from "../asset/chicken.jpg";

function Food() {
  return (
    <div className="py-8">
      <h1 className="text-2xl font-bold">Feed Your Stomach</h1>
      <p className=" text-sm px-8 opacity-90 pt-3">
        Satisfy Your Hunger with Flavorful and Special Dishes
      </p>
      <div>
        <FoodList
          backgroundImageUrl={Features}
          title="Features"
          path="/Food#features"
        />
        <FoodList
          backgroundImageUrl={Tradition}
          title="Tradition"
          path="/Food#Tradition"
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
