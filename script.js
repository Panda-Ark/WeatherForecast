// Theme Toggle
window.toggleTheme = function () {
  const body = document.body;
  const icon = document.getElementById('theme-icon');
  const label = document.getElementById('theme-label');

  body.classList.toggle('dark');

  if (body.classList.contains('dark')) {
    icon.className = 'fas fa-sun';
    label.textContent = 'Light Mode';
  } else {
    icon.className = 'fas fa-moon';
    label.textContent = 'Dark Mode';
  }
};

// Firebase SDKs (Modular Import)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyCRdqRj0H2RaFeH0Xn5Z4_4coLW1LaBfBg",
  authDomain: "weather-forecasting-23312.firebaseapp.com",
  databaseURL: "https://weather-forecasting-23312-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "weather-forecasting-23312",
  storageBucket: "weather-forecasting-23312.appspot.com",
  messagingSenderId: "951129535975",
  appId: "1:951129535975:web:687b2c691be27d2a7ef942",
  measurementId: "G-611QDB1Y1P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Listen for data changes
const dataRef = ref(database, 'sensor value/Data');
onValue(dataRef, (snapshot) => {
  updateChart('tempChart', data.sht40_temperature);
updateChart('humidityChart', data.humidity);
updateChart('pressureChart', data.pressure);
updateChart('ltr390Chart', data.ambient_light_ltr390);
updateChart('tsl2591Chart', data.ambient_light_tsl2591);
updateChart('uvIndexChart', data.uv_index);
updateChart('uvRawChart', data.uv_raw);
updateChart('airQualityChart', data.airquality);

  const data = snapshot.val();
  if (data) {
    document.getElementById("temperature").innerText = `${data.sht40_temperature} ℃`;
    document.getElementById("humidity").innerText = `${data.humidity} %`;
    document.getElementById("pressure").innerText = `${data.pressure} hPa`;
    document.getElementById("uvIndex").innerText = `${data.uv_index}`;
    document.getElementById("radiation").innerText = `${data.radiation} W/m²`;
    document.getElementById("lightIntensity").innerText = `${data.intensity} lux`;
    document.getElementById("airPurity").innerText = `${data.air_purity} AQI`;
  }
});
