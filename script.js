const input = document.getElementById("city-name");
const btn = document.getElementById("btn");
const currentWeatherContainer = document.querySelector(".main");

let key = "dd9079c668fe47bfb892f6dc26d7fddf";
let weatherIcons = {
    0: {
        day: {
            description: "Sunny",
            image: "http://openweathermap.org/img/wn/01d@2x.png",
        },
        night: {
            description: "Clear",
            image: "http://openweathermap.org/img/wn/01n@2x.png",
        },
    },
    1: {
        day: {
            description: "Mainly Sunny",
            image: "http://openweathermap.org/img/wn/01d@2x.png",
        },
        night: {
            description: "Mainly Clear",
            image: "http://openweathermap.org/img/wn/01n@2x.png",
        },
    },
    2: {
        day: {
            description: "Partly Cloudy",
            image: "http://openweathermap.org/img/wn/02d@2x.png",
        },
        night: {
            description: "Partly Cloudy",
            image: "http://openweathermap.org/img/wn/02n@2x.png",
        },
    },
    3: {
        day: {
            description: "Cloudy",
            image: "http://openweathermap.org/img/wn/03d@2x.png",
        },
        night: {
            description: "Cloudy",
            image: "http://openweathermap.org/img/wn/03n@2x.png",
        },
    },
    45: {
        day: {
            description: "Foggy",
            image: "http://openweathermap.org/img/wn/50d@2x.png",
        },
        night: {
            description: "Foggy",
            image: "http://openweathermap.org/img/wn/50n@2x.png",
        },
    },
    48: {
        day: {
            description: "Rime Fog",
            image: "http://openweathermap.org/img/wn/50d@2x.png",
        },
        night: {
            description: "Rime Fog",
            image: "http://openweathermap.org/img/wn/50n@2x.png",
        },
    },
    51: {
        day: {
            description: "Light Drizzle",
            image: "http://openweathermap.org/img/wn/09d@2x.png",
        },
        night: {
            description: "Light Drizzle",
            image: "http://openweathermap.org/img/wn/09n@2x.png",
        },
    },
    53: {
        day: {
            description: "Drizzle",
            image: "http://openweathermap.org/img/wn/09d@2x.png",
        },
        night: {
            description: "Drizzle",
            image: "http://openweathermap.org/img/wn/09n@2x.png",
        },
    },
    55: {
        day: {
            description: "Heavy Drizzle",
            image: "http://openweathermap.org/img/wn/09d@2x.png",
        },
        night: {
            description: "Heavy Drizzle",
            image: "http://openweathermap.org/img/wn/09n@2x.png",
        },
    },
    56: {
        day: {
            description: "Light Freezing Drizzle",
            image: "http://openweathermap.org/img/wn/09d@2x.png",
        },
        night: {
            description: "Light Freezing Drizzle",
            image: "http://openweathermap.org/img/wn/09n@2x.png",
        },
    },
    57: {
        day: {
            description: "Freezing Drizzle",
            image: "http://openweathermap.org/img/wn/09d@2x.png",
        },
        night: {
            description: "Freezing Drizzle",
            image: "http://openweathermap.org/img/wn/09n@2x.png",
        },
    },
    61: {
        day: {
            description: "Light Rain",
            image: "http://openweathermap.org/img/wn/10d@2x.png",
        },
        night: {
            description: "Light Rain",
            image: "http://openweathermap.org/img/wn/10n@2x.png",
        },
    },
    63: {
        day: {
            description: "Rain",
            image: "http://openweathermap.org/img/wn/10d@2x.png",
        },
        night: {
            description: "Rain",
            image: "http://openweathermap.org/img/wn/10n@2x.png",
        },
    },
    65: {
        day: {
            description: "Heavy Rain",
            image: "http://openweathermap.org/img/wn/10d@2x.png",
        },
        night: {
            description: "Heavy Rain",
            image: "http://openweathermap.org/img/wn/10n@2x.png",
        },
    },
    66: {
        day: {
            description: "Light Freezing Rain",
            image: "http://openweathermap.org/img/wn/10d@2x.png",
        },
        night: {
            description: "Light Freezing Rain",
            image: "http://openweathermap.org/img/wn/10n@2x.png",
        },
    },
    67: {
        day: {
            description: "Freezing Rain",
            image: "http://openweathermap.org/img/wn/10d@2x.png",
        },
        night: {
            description: "Freezing Rain",
            image: "http://openweathermap.org/img/wn/10n@2x.png",
        },
    },
    71: {
        day: {
            description: "Light Snow",
            image: "http://openweathermap.org/img/wn/13d@2x.png",
        },
        night: {
            description: "Light Snow",
            image: "http://openweathermap.org/img/wn/13n@2x.png",
        },
    },
    73: {
        day: {
            description: "Snow",
            image: "http://openweathermap.org/img/wn/13d@2x.png",
        },
        night: {
            description: "Snow",
            image: "http://openweathermap.org/img/wn/13n@2x.png",
        },
    },
    75: {
        day: {
            description: "Heavy Snow",
            image: "http://openweathermap.org/img/wn/13d@2x.png",
        },
        night: {
            description: "Heavy Snow",
            image: "http://openweathermap.org/img/wn/13n@2x.png",
        },
    },
    77: {
        day: {
            description: "Snow Grains",
            image: "http://openweathermap.org/img/wn/13d@2x.png",
        },
        night: {
            description: "Snow Grains",
            image: "http://openweathermap.org/img/wn/13n@2x.png",
        },
    },
    80: {
        day: {
            description: "Light Showers",
            image: "http://openweathermap.org/img/wn/09d@2x.png",
        },
        night: {
            description: "Light Showers",
            image: "http://openweathermap.org/img/wn/09n@2x.png",
        },
    },
    81: {
        day: {
            description: "Showers",
            image: "http://openweathermap.org/img/wn/09d@2x.png",
        },
        night: {
            description: "Showers",
            image: "http://openweathermap.org/img/wn/09n@2x.png",
        },
    },
    82: {
        day: {
            description: "Heavy Showers",
            image: "http://openweathermap.org/img/wn/09d@2x.png",
        },
        night: {
            description: "Heavy Showers",
            image: "http://openweathermap.org/img/wn/09n@2x.png",
        },
    },
    85: {
        day: {
            description: "Light Snow Showers",
            image: "http://openweathermap.org/img/wn/13d@2x.png",
        },
        night: {
            description: "Light Snow Showers",
            image: "http://openweathermap.org/img/wn/13n@2x.png",
        },
    },
    86: {
        day: {
            description: "Snow Showers",
            image: "http://openweathermap.org/img/wn/13d@2x.png",
        },
        night: {
            description: "Snow Showers",
            image: "http://openweathermap.org/img/wn/13n@2x.png",
        },
    },
    95: {
        day: {
            description: "Thunderstorm",
            image: "http://openweathermap.org/img/wn/11d@2x.png",
        },
        night: {
            description: "Thunderstorm",
            image: "http://openweathermap.org/img/wn/11n@2x.png",
        },
    },
    96: {
        day: {
            description: "Light Thunderstorms With Hail",
            image: "http://openweathermap.org/img/wn/11d@2x.png",
        },
        night: {
            description: "Light Thunderstorms With Hail",
            image: "http://openweathermap.org/img/wn/11n@2x.png",
        },
    },
    99: {
        day: {
            description: "Thunderstorm With Hail",
            image: "http://openweathermap.org/img/wn/11d@2x.png",
        },
        night: {
            description: "Thunderstorm With Hail",
            image: "http://openweathermap.org/img/wn/11n@2x.png",
        },
    },
};

const getCurrentWeather = async (city) => {
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}`
        );
        let data = await response.json();

        let currentWeather = {
            city: data.name,
            temp: Math.round(data.main.temp),
            icon: data.weather[0].icon,
            description: data.weather[0].description,
            humidity: Math.round(data.main.humidity),
            wind: Math.round(data.wind.speed),
            zone: data.timezone,
            lat: data.coord.lat,
            lon: data.coord.lon,
        };
        return currentWeather;
    } catch (error) {
        document.querySelector(".current-weather").innerHTML =
            "<h2 style='text-align: center; font-size: 2em;'>Invalid Request</h2>";
        document.querySelector(".future-weather").innerHTML =
            "<h2 style='text-align: center; font-size: 2em;'>An error occured during fetching data...kire ki korsu ?</h2>";
    }
};
const getFutureWeather = async (lat, lon, time) => {
    try {
        const response = await fetch(
            `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m,weather_code&daily=weather_code,temperature_2m_max,temperature_2m_max,temperature_2m_min&timeformat=unixtime&timezone=GMT`
        );
        let data = await response.json();
        let futureWeather = {
            minTemp: data.daily.temperature_2m_min,
            maxTemp: data.daily.temperature_2m_max,
            time: data.daily.time,
            weather: data.daily.weather_code,
        };
        return futureWeather;
    } catch (error) {
        document.querySelector(".current-weather").innerHTML =
            "<h2 style='text-align: center; font-size: 2em;'>Invalid API Request</h2>";
        document.querySelector(".future-weather").innerHTML =
            "<h2 style='text-align: center; font-size: 2em;'>An error occured during fetching data. Please check your internet connection and tru again.</h2>";
    }
};
const upDateWeather = async () => {
    let city = input.value.toLowerCase().trim();
    input.value = "";
    if (!city) return;

    let currentWeather = await getCurrentWeather(city);
    let time = Date.now() + currentWeather.zone * 1000;
    let utcTime = new Date(time);
    let idkMan = utcTime.toLocaleString("en-US", { timeZone: "UTC" });
    let laIlaha = new Date(idkMan);

    let futureWeather = await getFutureWeather(
        currentWeather.lat,
        currentWeather.lon,
        laIlaha
    );

    const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    const dayss = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    let day = days[laIlaha.getDay()];
    let date = laIlaha.getDate();
    let month = months[laIlaha.getMonth()];
    let year = laIlaha.getFullYear();

    const futureDays = futureWeather.time.map((element) => {
        let time = new Date(element * 1000 + currentWeather.zone * 1000);
        let utcTime = new Date(time);
        let timeIG = utcTime.toLocaleString("en-US", { timeZone: "UTC" });
        let aaa = new Date(timeIG);

        return dayss[aaa.getDay()];
    });
    const futureWeatherIcons = futureWeather.weather.map((icon) => {
        return weatherIcons[icon].day.image;
    });
    currentWeatherContainer.innerHTML = `<div class="current-weather">
            <div class="city-date">
                <h2>${currentWeather.city}</h2>
                <h3>
                    ${day}<br />
                    ${date} ${month} ${year} 
                </h3>
            </div>
            <div class="weather">
                <img
                    src="https://openweathermap.org/img/wn/${
                        currentWeather.icon
                    }@2x.png"
                    alt="Sunny"
                />
                <section>
                    <h2>${currentWeather.temp}°</h2>
                    <h3>${currentWeather.description}</h3>
                </section>
            </div>
        </div>

    <div class="future-weather">
        <div class="humidity-wind">
            <section><span>Humidity</span><span>${
                currentWeather.humidity
            }%</span></section>
            <section><span>Wind</span><span>${
                currentWeather.wind
            }km/h</span></section>
        </div>

        <div class="future">
            <div class="future-icons selected">
                <img
                    src='${futureWeatherIcons[0]}'
                />
                <span>${Math.round(
                    futureWeather.minTemp[0]
                )}° &nbsp  ${Math.round(futureWeather.maxTemp[0])}°</span>
                <p>Today</p>
            </div>
            <div class="future-icons">
                <img
                src='${futureWeatherIcons[1]}'
                />
                <span>${Math.round(
                    futureWeather.minTemp[1]
                )}° &nbsp ${Math.round(futureWeather.maxTemp[1])}°</span>
                <p>${futureDays[1]}</p>
            </div>
            <div class="future-icons">
                <img
                src='${futureWeatherIcons[2]}'
                />
                <span>${Math.round(
                    futureWeather.minTemp[2]
                )}° &nbsp ${Math.round(futureWeather.maxTemp[2])}°</span>
                <p>${futureDays[2]}</p>
            </div>
            <div class="future-icons">
                <img
                src='${futureWeatherIcons[3]}'
                />
                <span>${Math.round(
                    futureWeather.minTemp[3]
                )}° &nbsp ${Math.round(futureWeather.maxTemp[3])}°</span>
                <p>${futureDays[3]}</p>
            </div>
            <div class="future-icons">
                <img
                src='${futureWeatherIcons[4]}'
                />
                <span>${Math.round(
                    futureWeather.minTemp[4]
                )}° &nbsp ${Math.round(futureWeather.maxTemp[4])}°</span>
                <p>${futureDays[4]}</p>
            </div>
            <div class="future-icons">
                <img
                src='${futureWeatherIcons[5]}'
                />
                <span>${Math.round(
                    futureWeather.minTemp[5]
                )}° &nbsp ${Math.round(futureWeather.maxTemp[5])}°</span>
                <p>${futureDays[5]}</p>
            </div>
            <div class="future-icons">
                <img
                src='${futureWeatherIcons[6]}'
                />
                <span>${Math.round(
                    futureWeather.minTemp[6]
                )}° &nbsp ${Math.round(futureWeather.maxTemp[6])}°</span>
                <p>${futureDays[6]}</p>
            </div>
        </div>
    </div>`;
    input.value = "";
};

btn.addEventListener("click", upDateWeather);
input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        upDateWeather();
    }
});
upDateWeather();
