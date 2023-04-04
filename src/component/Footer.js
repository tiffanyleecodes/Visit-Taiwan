import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

function Footer() {
  return (
    <div>
      <section className="bg-lime-700 px-8 pt-8 pb-2 text-white">
        <p className="text-xs opacity-80 ">
          Get the latest on where to eat, where to explore and play in Taiwan
          delivered direct to your inbox.
        </p>
        <div className="my-6 text-sm">
          <input
            type="email"
            name="email"
            placeholder="Please type your email"
            className="opacity-80 px-2 py-1 rounded-sm mr-3"
          />
          <button className="font-bold  px-2 py-1 bg-white border-2 border-white text-lime-700 rounded-sm hover:bg-transparent hover:text-white ">
            Sign me up!
          </button>
        </div>

        <div className="text-xs">
          <p className="py-1">
            Contact Number:<a href="tel:02-2222-2222">02-2222-2222</a>
          </p>
          <p>5F No.106 xxxx Rd, Da'an District ,Taipei City, Taiwan</p>
        </div>
        <div className="icon mt-7 mb-3 flex justify-center align-middle gap-3">
          <FacebookIcon className=" hover:border-b-2" />
          <InstagramIcon className=" hover:border-b-2" />
          <YouTubeIcon className=" hover:border-b-2" />
        </div>
        <p className="text-xs  opacity-70">©VISIT TAIWAN 2023</p>
      </section>
    </div>
  );
}

export default Footer;
