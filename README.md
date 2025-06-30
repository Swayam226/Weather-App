# Weathery - Know the Heat!!

Weathery is a clean, responsive weather web app built using **Vanilla JavaScript**, **HTML**, and **CSS**. It fetches real-time weather data via the **OpenWeatherMap API** based on user-entered city names and displays dynamic weather metrics such as temperature, humidity, wind speed, and condition-based icons.

---

## 🔧 Features

- **City-Based Search**: Enter any city name to fetch and display real-time weather information
- **Live Weather Data**: Uses OpenWeatherMap's Geocoding and Weather APIs to retrieve accurate metrics
- **Dynamic UI Updates**:
  - Temperature in °C
  - Humidity in %
  - Wind Speed in m/s
  - Weather-specific icons (sunny, rainy, cloudy, etc.)
- **Responsive Layout**: Mobile-first UI built with Flexbox, optimized for screens of all sizes
- **Error Handling**: Alerts users if an invalid city is entered or if API calls fail
- **Minimal Dependencies**: Pure JavaScript without any external frameworks

---

## 🛠️ Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6)
- **API Integration**: [OpenWeatherMap API](https://openweathermap.org/api)
- **Icons**: Custom weather icons (cloudy, rainy, sunny, etc.) from Flaticon

---

## 📁 Folder Structure

```
├── index.html          # Main structure of the app
├── styles.css          # All styling, responsive design
├── script.js           # JS logic for API interaction and DOM manipulation
└── assets/             # Weather icons used in the UI
```

---

## 🚀 Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/Swayam226/Weather-App.git
   ```
2. Get a free API key from [OpenWeatherMap](https://openweathermap.org/api)
3. Replace the placeholder API key in `script.js`:
   ```javascript
   const API_KEY = "YOUR_API_KEY_HERE";
   ```
4. Open `index.html` in your browser

---

## 🌦️ How It Works

1. User types a city and hits search
2. App fetches city coordinates using OpenWeatherMap's **Geocoding API**
3. Coordinates are passed to **Current Weather API** to get weather data
4. UI is updated with temperature, wind, humidity, and a matching weather icon

---

## 📌 Future Enhancements

- Add support for hourly and weekly forecasts
- Allow geolocation-based weather without user input
- Theme toggle (dark/light mode)
- Store search history and allow quick re-search

---

## 🧑‍💻 Author
**Swayam Kumar**  
Made with ❤️ during personal practice
