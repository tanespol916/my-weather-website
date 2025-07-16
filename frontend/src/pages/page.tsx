import React from "react";
import { useLocation } from "react-router-dom";
import iconCloudy from '../assets/cloudy icon.json';
import iconRain from '../assets/rainy icon.json';
import iconSnow from '../assets/snow icon.json';
import Lottie from "lottie-react";
function Page() {
  const location = useLocation();
  const weather = location.state?.weather;

  const kelvinToCelesius = (k: number) => {
    return (k - 273.15).toFixed(2);
  };

  const icon = (s: string) =>{
    if(s === "Snow")
      return <Lottie animationData={iconSnow} loop autoPlay/>
    else if(s === "Rain")
      return <Lottie animationData={iconRain} loop autoPlay/>
    else if(s === "Clouds")
      return <Lottie animationData={iconCloudy} loop autoPlay/>
    else
      return <h1 className="text-xl">กำลังดาวโหลด...</h1>
  }; 

  return (
    <div className="bg-blue-300 min-h-screen flex justify-center items-center">
      <div className="bg-white min-h-96 min-w-256 rounded-lg border grid grid-rows-[70%_30%]">
        <div className="grid items-center justify-center ">
            {icon(weather.weather[0].main)}
        </div>
        <div className="flex items-end justify-center ">
          <div className="grid gird-rows-3 text-center mb-5 gap-1">
            <div>
              <h1 className="text-2xl font-bold">
                {weather.name}, {weather.sys.country}
              </h1>
            </div>
            <div>
              <h1>{weather.weather[0].main}</h1>
            </div>
            <div className="grid grid-cols-2">
              <span> temp: {kelvinToCelesius(weather.main.temp)} °C</span>
              <span> feels like: {kelvinToCelesius(weather.main.feels_like)} °C</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
