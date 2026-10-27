
# ☀️ Weather App

A simple and responsive Weather App built using **HTML, CSS, and JavaScript**. It uses WeatherAPI to fetch real-time weather information based on the city entered by the user.

## 🌟 Features

- 🔍 Search weather by city name
- 🌡️ Display current temperature in Celsius
- ☁️ Show weather conditions with icons
- 🌡️ Display feels-like temperature
- 💧 Show humidity percentage
- 💨 Display wind speed in km/h
- 🕒 Show local time and last updated time
- ⚠️ Handle invalid city names and API errors
- 📱 Responsive design for mobile and desktop

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript
- WeatherAPI

## 📂 Project Structure

```text
WeatherApp/
├── index.html
├── style.css
├── script.js
└── README.md
```

## 🚀 How to Run the Project

1. Clone this repository:

   ```bash
   git clone YOUR_GITHUB_REPOSITORY_URL
   ```

2. Open the project folder in Visual Studio Code.

3. Configure your WeatherAPI key in `script.js`:

   ```javascript
   const API_KEY = "YOUR_API_KEY";
   ```

4. Open `index.html` using the Live Server extension.

5. Enter a city name and click **Search** to view its current weather.

## 🌐 API Used

**WeatherAPI** provides real-time weather information.

API endpoint:

```text
https://api.weatherapi.com/v1/current.json
```

The application uses the current weather endpoint to retrieve temperature, weather conditions, humidity, wind speed, and other location details.

Website: https://www.weatherapi.com/

## 📸 Application Preview

The app displays a weather card with the searched city's name, temperature, weather icon, feels-like temperature, humidity, wind speed, and local time.

## 🔒 Security Note

For public deployment, avoid exposing your API key in client-side JavaScript. Use a backend server to securely handle API requests.

## 👩‍💻 Author

**Rutuja Biradar**

## 📄 License

This project is available for learning and educational purposes.
