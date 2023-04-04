import React from "react";
import DestinationItem from "../component/DestinationItem";
import TaipeiCity from "../asset/taipeiCity.jpg";
import Yilan from "../asset/yilan.jpg";
import Keelung from "../asset/keelong.jpg";
import Taoyuan from "../asset/tau.jpg";
import Hsinchu from "../asset/hsin.jpg";
import Matsu from "../asset/ma.jpg";
import Miaoli from "../asset/miuli.jpg";
import Taichung from "../asset/taichung.jpg";
import Nantou from "../asset/nantou.jpg";
import Changhua from "../asset/changhua.jpg";
import Yunlin from "../asset/yulin.jpg";
import Kinmen from "../asset/kinmen.jpg";
import Chiayi from "../asset/chiayi.jpg";
import Tainan from "../asset/tainan.jpg";
import Kaohsiung from "../asset/kao.jpg";
import Pingtung from "../asset/pingdong.jpg";
import Penghu from "../asset/ponhu.jpg";
import Hualien from "../asset/hualian.jpg";
import Taitung from "../asset/taidong.jpg";
import Green from "../asset/green.jpg";
import Orchid from "../asset/len.jpg";

function Destination() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Destination</h1>
      <div className="py-8">
        <h2
          className="text-2xl font-bold my-3   px-3 text-slate-600"
          id="north"
        >
          North Taiwan
        </h2>
        <div className="grid grid-cols-2 gap-3 px-3 my-4">
          <DestinationItem src={TaipeiCity} text="Taipei " path="/taipei" />
          <DestinationItem src={Yilan} text="Yilan" path="/yilan" />
          <DestinationItem src={Keelung} text="Keelung" path="/" />
          <DestinationItem src={Taoyuan} text="Taoyuan" path="/" />
          <DestinationItem src={Hsinchu} text="Hsinchu" path="/" />
          <DestinationItem src={Matsu} text="Matsu Island" path="/" />
        </div>
      </div>

      <div className="py-8">
        <h2 className="text-2xl font-bold my-3  px-3 text-slate-600">
          Central Taiwan
        </h2>
        <div className="grid grid-cols-2 gap-3 px-3 my-4">
          <DestinationItem src={Miaoli} text="Miaoli " path="/taipei" />
          <DestinationItem src={Taichung} text="Taichung" path="/yilan" />

          <DestinationItem src={Nantou} text="Nantou" path="/" />
          <DestinationItem src={Changhua} text="Changhua" path="/" />

          <DestinationItem src={Yunlin} text="Yunlin" path="/" />
          <DestinationItem src={Kinmen} text="Kinmen Island" path="/" />
        </div>
      </div>

      <div className="py-8">
        <h2 className="text-2xl font-bold my-3 px-3 text-slate-600">
          South Taiwan
        </h2>
        <div className="grid grid-cols-2 gap-3 px-3 my-4">
          <DestinationItem src={Chiayi} text="Chiayi" path="/taipei" />
          <DestinationItem src={Tainan} text="Tainan" path="/yilan" />

          <DestinationItem src={Kaohsiung} text="Kaohsiung" path="/" />
          <DestinationItem src={Pingtung} text="Pingtung" path="/" />

          <DestinationItem src={Penghu} text="Penghu Island" path="/" />
        </div>
      </div>

      <div className="py-8">
        <h2 className="text-2xl font-bold my-3  px-3 text-slate-600">
          East Taiwan
        </h2>
        <div className="grid grid-cols-2 gap-3 px-3 my-4">
          <DestinationItem src={Hualien} text="Hualien" path="/taipei" />
          <DestinationItem src={Taitung} text="Taitung" path="/yilan" />

          <DestinationItem src={Green} text="Green Island" path="/" />
          <DestinationItem src={Orchid} text="Orchid Island" path="/" />
        </div>
      </div>
    </div>
  );
}

export default Destination;
