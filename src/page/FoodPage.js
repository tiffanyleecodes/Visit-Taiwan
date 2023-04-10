import React from "react";
import FoodFeatures from "../component/FoodFeatures.js";
import { FoodhelpFeatures } from "../component/FoodHelp.js";
import { FoodhelpTradition } from "../component/FoodHelp.js";
import { FoodhelpNightmarket } from "../component/FoodHelp.js";

function FoodPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Food</h1>
      <div>
        <h2
          className="text-3xl font-bold my-3 mt-6 px-3 text-slate-600"
          id="features"
        >
          Features
        </h2>
        <p className="px-3 text-sm opacity-70 leading-6 my-3  mb-6">
          Never miss them.
        </p>
        {FoodhelpFeatures.map((feature, key) => {
          return (
            <FoodFeatures
              key={key}
              image={feature.image}
              title={feature.title}
              text={feature.text}
              note={feature.note}
            />
          );
        })}
      </div>

      <h2
        className="text-3xl font-bold my-3 mt-6 px-3 text-slate-600"
        id="north"
      >
        Tradition
      </h2>
      <p className="px-3 text-sm opacity-70 leading-6 my-3 mb-6">
        A flavorful fusion of cultural influences, resulting in a unique and
        comforting culinary experience that reflects the country's rich history
        and diverse flavors.
      </p>

      {FoodhelpTradition.map((feature, key) => {
        return (
          <FoodFeatures
            key={key}
            image={feature.image}
            title={feature.title}
            text={feature.text}
            note={feature.note}
          />
        );
      })}

      <h2
        className="text-3xl font-bold my-5 mt-6 px-3 text-slate-600"
        id="north"
      >
        Night Market
      </h2>
      <div className="px-3 text-sm opacity-70 leading-6 ">
        <p>
          Bustling, vibrant gatherings of food, entertainment, and culture that
          bring you into the local way of life.
        </p>
        <p className="my-3 font-bold mb-6">
          You should visit :<br /> Raohe Night Market, Fengjia Night Market ,
          Ningxia Night Market,Tonghua Night Market
        </p>
      </div>

      {FoodhelpNightmarket.map((feature, key) => {
        return (
          <FoodFeatures
            key={key}
            image={feature.image}
            title={feature.title}
            text={feature.text}
          />
        );
      })}
    </div>
  );
}

export default FoodPage;
