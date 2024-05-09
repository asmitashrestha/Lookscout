import React from "react";
import { TiTick } from "react-icons/ti";
import back from "../assets/back.jpeg";
const ExploreMore = () => {
  return (
    <div className="px-24 pt-16">
      <div className="flex justify-between flex-wrap">
        <div>
          <div className="font-bold text-gray-900 text-2xl">
            <p>Demonstrate branding</p>
            <p>consequently think outside</p>
          </div>
          <div className="my-4 text-gray-600 text-[16px] font-semibold">
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
                <TiTick className="text-blue-600 text-xl"/>
              </p>
              <p className="text-gray-600 text-[16px] mb-2">Enterprise-grade security</p>
            </div>
            <div className="flex">
              <p className="mt-1">
                <TiTick className="text-blue-600 text-xl"/>
              </p>
              <p className="text-gray-600 text-[16px] mb-2">99.9% guaranted uptime SLA</p>
            </div>
            <div className="flex">
              <p className="mt-1">
                <TiTick className="text-blue-600 text-xl"/>
              </p>
              <p className="text-gray-600 text-[16px] mb-2">Designated customer success team</p>
            </div>
          </div>
        </div>

        <div className="mr-12">
          <div>
            <img src={back} alt="img" height={560} className="img"/>
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
