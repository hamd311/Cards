import React from "react";
import Viewcard from "../Cards/Viewcard";
import stats from "../../assets/icons/stats.svg";
import graph from "../../assets/icons/graph.svg";
import Chart from "../Chart/Chart";

const Dashboardcontent = () => {
  return (
    <div className="lg:flex justify-center w-full h-full px-4 ">
      <div className="lg:w-2/6  w-full py-6 lg:border-r xl:border-r border-black lg:h-full">
        <div className="w-full p-3">
          <Viewcard />
        </div>
      </div>

      <div className="lg:w-4/5  w-full p-2 py-6  h-full flex flex-col drop-shadow-xl border h-fit mb-40 rounded-lg lg:border-none border-2 rounded-lg ">
        <h3 className="font-bold text-center">Life Time Analysis</h3>
        <div className="grid grid-cols-2  lg:grid-cols-4  gap-2 lg:gap-10 w-full lg:w-4/5 mx-auto">
          <div className="w-full  rounded lg:border-2 lg:border-gray-300 lg:m-4 xl:m-4 my-4 p-1 w-full lg:col-start-2 ">
            <div className="flex items-center">
              <span className="w-4 h-4 rounded-full bg-green-400 mx-2"></span>
              <span> Visitors</span>
            </div>
            <div className="flex items-center justify-around ">
              <span> 255 </span>
              <span className="">
                <img src={stats} alt="statistic" className="w-10" />
              </span>
            </div>
          </div>
          <div className="w-full  rounded lg:border-2 lg:border-gray-300 lg:m-4 xl:m-4 my-4 p-1 w-full lg:col-start-3 ">
            <div className="flex items-center ">
              <span className="w-4 h-4 rounded-full bg-blue-400 mx-2"></span>
              <span> Clicks</span>
            </div>
            <div className="flex items-center justify-around ">
              <span> 195 </span>
              <span className="">
                <img src={graph} alt="graph" className="w-10" />
              </span>
            </div>
          </div>
        </div>

        {/* Date input */}
        <div className="w-full">
          <input
            type="date"
            className="w-full rounded p-2 border-2 border-gray-300 bg-inherit"
          />
        </div>

        {/* Activity  */}
        <div className="p-4 border-2 border-gray-300 lg:rounded rounded-lg my-2">
          <div className="w-4/5 flex justify-between items-center">
            <span className="text-2xl">Activity</span>
            <div>
              <div className="flex items-center justify-center">
                <span className="w-4 h-4 rounded-full bg-green-400 mx-2"></span>
                <span> Clicks</span>
              </div>
              <div className="text-center text-xl">2</div>
            </div>
            <div>
              <div className="flex items-center justify-center">
                <span className="w-4 h-4 rounded-full bg-blue-400 mx-2"></span>
                <span> Clicks</span>
              </div>
              <div className="text-center text-xl">2</div>
            </div>
          </div>

          {/* Big chart */}
          {/* <div className="w-full h-[50%] text-center align-center border-2 border-gray-300 rounded">
          
          <Chart />
        </div> */}
        </div>

        <div className="flex my-5 items-center  justify-around lg:block hidden">
          <div>
            <div className="text-2xl"> Link to your DATA card</div>
            <div>https://www.my-datacard.com/noi/c3</div>
          </div>

          <img src="./images/qrcode.png" alt="QR Code" className="w-[10%]" />
        </div>
      </div>
    </div>
  );
};

export default Dashboardcontent;
