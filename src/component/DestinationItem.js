import React from "react";
import { Link } from "react-router-dom";

function DestinationItem(props) {
  return (
    <div>
      <Link to={props.path}>
        <div className="relative flex  justify-end align-middle flex-col">
          <img src={props.src} alt="" />
          <div className="bg-black bg-opacity-70 absolute w-full py-4 hover:py-6 transition duration-700 ease-in-out hover:scale-y-105">
            <h3 className="text-white">{props.text}</h3>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default DestinationItem;
