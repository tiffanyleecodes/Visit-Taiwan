import React from "react";

function FoodFeatures({ image, title, text, note }) {
  return (
    <div className="text-left px-4 ">
      <img src={image} alt="" className="  " />
      <div className=" py-4 px-2">
        <h1 className=" text-2xl font-bold my-2">{title}</h1>
        <p className=" text-sm  my-2 opacity-70 leading-6">{text}</p>
        <p className=" text-sm  mt-4 mb-8 leading-6">{note}</p>
      </div>
    </div>
  );
}

export default FoodFeatures;
