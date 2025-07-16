import React, { useState } from "react";
import { TbGpsFilled } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import axios from "axios";


function Home() {
  const [city, setCity] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const apikey = import.meta.env.VITE_API_KEY;

  const onHanddle = async (e) => {
    try {
      e.preventDefault();
      if(!city) {
        alert("กรุณากรอกอำเภอหรือจังหวัด");
        return ;
      }
      const dataCity = await axios.get(
        `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apikey}`
      );
      sentReq(dataCity.data[0].lat, dataCity.data[0].lon);
    } catch (err) {
      console.log(err);
    }
  };
  const trackGPS = async (e) => {
    e.preventDefault();
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          let lat = position.coords.latitude;
          let lng = position.coords.longitude;
          sentReq(lat, lng);
        },
        (err) => {
          setError("ไม่สามารถเข้าถึงตำแหน่งของคุณได้");
          alert(error);
          console.log(err.message);
        }
      );
    } else {
      alert("เบราว์เซอร์ไม่รองรับการระบุตำแหน่ง");
    }
  };

  const sentReq = async (lat: Number, lng: Number) => {
    try {
      const res = await axios.post(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${apikey}`
      );
      console.log(res.data);
      setError("");
      alert(res.data.name);
      navigate("/page", {state: {weather: res.data}})
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="bg-blue-300 min-h-screen flex flex-col justify-center items-center">
      <div className="bg-white border-1 rounded-lg grid grid-rows-[40%_60%] min-h-36 w-128">
        <div className="flex justify-center items-center">
          <h1 className="text-2xl">พยากรณ์อากาศวันนี้</h1>
        </div>
        <form onSubmit={onHanddle}>
          <div className="grid grid-cols-[70%_20%_10%]">
            <div className="flex items-center justify-center">
              <input
                className="px-14 py-5 border-1 rounded-lg"
                type="text"
                value={city}
                placeholder="กรอกอำเภอหรือจังหวัด"
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-center">
              <button
                className="bg-green-500 border-0 rounded-lg p-1 text-white text-xl"
                type="submit"
              >
                submit
              </button>
            </div>
            <div className="flex items-center justify-center">
              <button type="button" onClick={trackGPS} >
                <TbGpsFilled size={36}  />
              </button>
            </div>
          </div>
        </form>
      </div>
      {error &&<span className="text-2xl text-white border rounded-lg bg-red-500 px-2 mt-1"> {error}</span>}
    </div>

  );
}

export default Home;
