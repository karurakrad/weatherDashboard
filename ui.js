// Select DOM elements for manipulation
const container = document.querySelector('.container'); // Selects the main content container
const search = document.querySelector('.search-box button'); // Selects the search button
const weatherBox = document.querySelector('.weather-box'); // Selects the weather information display
const weatherDetails = document.querySelector('.weather-details'); // Selects the additional weather details
const error404 = document.querySelector('.not-found'); // Selects the error message for incorrect locations

// Function to handle the search button click
export function handleSearch() {
    // API key and user's city input
    const APIKey = 'cda07a332de1541bee1f02939682657d'; // API key for OpenWeatherMap
    const city = document.querySelector('.search-box input').value; // Gets the user's input for the city

    if (city === '') // Checks if the city input is empty
        return; // If it's empty, exit the function

    // Fetch weather data from the OpenWeatherMap API
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
        .then(response => response.json()) // Parse the response as JSON
        .then(json => {
            if (json.cod === '404') {
                // Handle errors when the city is not found
                container.style.height = '400px'; // Adjust container height
                weatherBox.style.display = 'none'; // Hide weather information
                weatherDetails.style.display = 'none'; // Hide additional weather details
                error404.style.display = 'block'; // Display the error message
                error404.classList.add('fadeIn'); // Apply a CSS class for animation
                return; // Exit the function
            }

            error404.style.display = 'none'; // Hide the error message
            error404.classList.remove('fadeIn'); // Remove the animation class

            const image = document.querySelector('.weather-box img'); // Select the weather icon element
            const temperature = document.querySelector('.weather-box .temperature'); // Select the temperature element
            const description = document.querySelector('.weather-box .description'); // Select the weather description element
            const humidity = document.querySelector('.weather-details .humidity span'); // Select the humidity element
            const wind = document.querySelector('.weather-details .wind span'); // Select the wind speed element

            // Set the weather icon based on the weather condition
            switch (json.weather[0].main) {
                case 'Clear':
                    image.src = 'images/clear.png';
                    break;
                case 'Rain':
                    image.src = 'images/rain.png';
                    break;
                case 'Snow':
                    image.src = 'images/snow.png';
                    break;
                case 'Clouds':
                    image.src = 'images/cloud.png';
                    break;
                case 'Haze':
                    image.src = 'images/haze.png';
                    break;
                case 'Mist':
                    image.src = 'images/haze.png';
                    break;
                case 'Atmosphere':
                    image.src = 'images/haze.png';
                    break;
                case 'Drizzle':
                    image.src = 'images/rain.png';
                    break;
                case 'Thunderstorm':
                    image.src = 'images/rain.png';
                    break;
                case 'Fog':
                    image.src = 'images/haze.png';
                    break;
                default:
                    image.src = '';
            }

            temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`; // Set the temperature value
            description.innerHTML = `${json.weather[0].description}`; // Set the weather description
            humidity.innerHTML = `${json.main.humidity}%`; // Set the humidity value
            wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`; // Set the wind speed value

            weatherBox.style.display = ''; // Display the weather information box
            weatherDetails.style.display = ''; // Display the additional weather details
            weatherBox.classList.add('fadeIn'); // Apply a CSS class for animation
            weatherDetails.classList.add('fadeIn'); // Apply a CSS class for animation
            container.style.height = '590px'; // Adjust the container height
        });
}