import React from "react";
import { TiTick } from "react-icons/ti";
import back from "../assets/back.jpeg";
const ExploreMore = () => {
  return (
    <div className="px-24 pt-16">
      <div className="flex justify-between flex-wrap">
        <div>
          <div className="">
            <p>Demonstrate branding</p>
            <p>consequently think outside</p>
          </div>
          <div className="">
            <p>
              Velit purus egestas tellus phasellus, Mattis eget sed faucibus
              magna
            </p>
            <p>
              vulputate pellentesque a diam tincidunt. Aenean malesuada tellus{" "}
            </p>
            <p>tellus faucibus mauris quisque mauris in.</p>
          </div>
          <div className="">
            <div className="flex">
              <p className="mt-1">
                <TiTick />
              </p>
              <p>Enterprise-grade security</p>
            </div>
            <div className="flex">
              <p className="mt-1">
                <TiTick />
              </p>
              <p>99.9% guaranted uptime SLA</p>
            </div>
            <div className="flex">
              <p className="mt-1">
                <TiTick />
              </p>
              <p>Designated customer success team</p>
            </div>
          </div>
        </div>

        <div className="mr-12">
          <div>
            <img src={back} alt="img" />
          </div>
          <div className="bg-white rounded-lg relative bottom-[70px]">
              <p>Check Us Out</p>
              <button>Get Started Now</button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ExploreMore;
