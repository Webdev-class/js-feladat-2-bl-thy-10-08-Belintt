
const BASE_URL = "https://api.open-meteo.com/v1/forecast";
async function getAverageTemperature(lat, lon, date) {
    const url = `${BASE_URL}?latitude=${lat}&longitude=${lon}&start_date=${date}&end_date=${date}&hourly=temperature_2m`;

        const response = await fetch(url);
        const data = await response.json();
        const temperatures = data.hourly.temperature_2m;

        // Átlaghőmérséklet kiszámítása
        const averageTemp = Math.floor(temperatures.reduce((a, b) => a + b) / temperatures.length);
        console.log(`Átlaghőmérséklet: ${averageTemp} °C`);
        return averageTemp;
    
}

async function getHourlyTemperature(lat, lon, date) {
    const url = `${BASE_URL}?latitude=${lat}&longitude=${lon}&start_date=${date}&end_date=${date}&hourly=temperature_2m`;

        const response = await fetch(url);
        const data = await response.json();
        const temperatures = data.hourly.temperature_2m;

        // Feltételezve, hogy az első órára vagy kíváncsi (pl. 00:00 óra)
        const hourlyTemp = temperatures[0]; 
        console.log(`Hőmérséklet az adott órában: ${hourlyTemp} °C`);
        return hourlyTemp;
   
}

// HTML form elemek kezelése
document.getElementById('getAvgTempBtn').addEventListener('click', () => {
    const lat = document.getElementById('lat').value;
    const lon = document.getElementById('lon').value;
    const date = document.getElementById('date').value;
    getAverageTemperature(lat, lon, date).then(temp => {
        document.getElementById('avg-temp').textContent = `Átlaghőmérséklet: ${temp} °C`;
    });
});

document.getElementById('getHourlyTempBtn').addEventListener('click', () => {
    const lat = document.getElementById('lat2').value;
    const lon = document.getElementById('lon2').value;
    const date = document.getElementById('date2').value;
    getHourlyTemperature(lat, lon, date).then(temp => {
        document.getElementById('hourly-temp').textContent = `Hőmérséklet az adott órában: ${temp} °C`;
    });
});
