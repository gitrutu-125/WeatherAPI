
const API_KEY = "1b5d175ac11a458989b111149262710";

const form = document.getElementById("weatherForm");
const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");
const message = document.getElementById("message");
const weatherResult = document.getElementById("weatherResult");

form.addEventListener("submit", async function (event) {
    event.preventDefault();

    const city = cityInput.value.trim();

    if (!city) {
        message.textContent = "Please enter a city name.";
        return;
    }

    searchBtn.disabled = true;
    searchBtn.textContent = "Loading...";
    message.textContent = "Fetching weather...";
    weatherResult.hidden = true;

    try {
        const url =
            `https://api.weatherapi.com/v1/current.json` +
            `?key=${API_KEY}&q=${encodeURIComponent(city)}&aqi=yes`;

        const response = await fetch(url);
        const data = await response.json();

        if (!response.ok) {
            throw new Error(
                data.error?.message || "Unable to get weather data."
            );
        }

        const current = data.current;
        const location = data.location;

        document.getElementById("cityName").textContent =
            `${location.name}, ${location.country}`;

        document.getElementById("localTime").textContent =
            `Local time: ${location.localtime}`;

        document.getElementById("temperature").textContent =
            Math.round(current.temp_c);

        document.getElementById("condition").textContent =
            current.condition.text;

        const icon = document.getElementById("weatherIcon");
        icon.src = "https:" + current.condition.icon;
        icon.alt = current.condition.text;

        document.getElementById("feelsLike").textContent =
            `${Math.round(current.feelslike_c)}°C`;

        document.getElementById("humidity").textContent =
            `${current.humidity}%`;

        document.getElementById("wind").textContent =
            `${current.wind_kph} km/h`;

        document.getElementById("updatedAt").textContent =
            current.last_updated;

        message.textContent = "Weather loaded successfully!";
        weatherResult.hidden = false;

    } catch (error) {
        message.textContent =
            error.message.includes("fetch")
                ? "Network error. Check your internet connection and try again."
                : error.message;
    } finally {
        searchBtn.disabled = false;
        searchBtn.textContent = "Search";
    }
});
