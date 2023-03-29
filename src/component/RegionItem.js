import React from "react";
import { Link } from "react-router-dom";

function RegionItem(props) {
  return (
    <div className="mx-8 my-8">
      <Link to={props.path}>
        <div className="   shadow-slate-500 shadow-lg rounded-b-md transition duration-700 ease-in-out hover:scale-105">
          <figure className="">
            <img src={props.src} alt="" className="rounded-t-md  " />
          </figure>
          <div className="bg-white py-10 rounded-b-md ">
            <h3 className="font-semibold text-1xl">{props.text}</h3>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default RegionItem;
