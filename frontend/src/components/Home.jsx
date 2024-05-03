import React from "react";

const Home = () => {
  return (
    <div className="bg-gray-100 ">
      <div className="py-12">
        <p
          className="text-blue-600 text-[14px] 
        font-semibold font-sans flex justify-center"
        >
          1% OF THE INDUSTRY
        </p>
        <div className="mt-3 text-gray-800">
          <p className="flex justify-center text-3xl font-bold">
            Hype got you here.
          </p>
          <p className="flex justify-center text-3xl font-bold">
            Stay for the support
          </p>
        </div>
        <div className="text-gray-500 text-sm mt-4">
          <p className="flex justify-center ">
            We've been told it is possible to revolutionize the payment
            Industry.
          </p>
          <p className="flex justify-center">
            have not reinvented the wheel, we decided to build upon it
            -successfully.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
