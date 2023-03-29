import React from "react";
import RegionItem from "./RegionItem";
import East from "../asset/east.jpg";
import North from "../asset/9.jpeg";
import Central from "../asset/central.jpg";
import South from "../asset/south.jpg";

function Region() {
  return (
    <div className="py-8">
      <h2 className="text-2xl font-bold">Regions of Taiwan</h2>
      <div className="card">
        <RegionItem src={North} text="North Taiwan" path="/Destination" />
      </div>
      <div className="card">
        <RegionItem src={Central} text="Centra Taiwan" path="/Destination" />
      </div>
      <div className="card">
        <RegionItem src={South} text="South Taiwan" path="/Destination" />
      </div>
      <div className="card">
        <RegionItem src={East} text="East Taiwan" path="/Destination" />
      </div>
    </div>
  );
}

export default Region;
