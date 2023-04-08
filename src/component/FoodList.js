import React from "react";
import { Link } from "react-router-dom";

function FoodList(props) {
  return (
    <div
      style={{
        backgroundImage: `url(${props.backgroundImageUrl})`,
      }}
      className="bg-cover m-6"
    >
      <Link to={props.path}>
        <div className="py-36 bg-cover bg-black bg-opacity-30 hover:bg-opacity-60 transition duration-700 ease-in-out ">
          <p className="text-3xl font-bold text-white">{props.title}</p>
        </div>
      </Link>
    </div>
  );
}

export default FoodList;
