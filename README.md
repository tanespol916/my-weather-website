# 🌤️ Weather website (พยากรณ์อากาศจากตำแหน่งปัจจุบัน)

เว็ปพยากรณ์อากาศที่สามารถตรวจสอบอุณหภูมิ,และสภาพอากาศจาก **ตำแหน่งปัจจุบันของผู้ใช้** โดยใช้ Geolocation API และ OpenWeatherMap API 

## 🚀 ฟีเจอร์

- ตรวจหาตำแหน่งปัจจุบันอัตโนมัติ
- แสดงชื่อเมือง, อุณหภูมิ,
- รองรับหน่วยอุณหภูมิ °C
- แสดงภาพสภาพอากาศแบบ icon


## 🛠️ เทคโนโลยีที่ใช้

- 🌐 Frontend: React ( typescript)
- 📡 API: [OpenWeatherMap](https://openweathermap.org/api)
- 📍 Geolocation API (Browser Built-in)

## 📦 การติดตั้งและรันโปรเจกต์

```bash
git clone https://github.com/tanespol916/my-weather-website.git
cd my-weather-website


## 🔑 การตั้งค่า API Key
สร้างไฟล์ .env หรือ mkdir .env และเพิ่ม 

VITE_API_KEY=your_api_key_here
##สมัคร API ฟรีที่: https://openweathermap.org/api

## รันโปรเจกต์
npm install 
npm run dev