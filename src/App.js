import axios from "axios";
import "./App.css";

function App() {
  function handleResponse(response) {
    alert(`The weather in New York is ${response.data.main.temp}°C`);
  }
  let apiKey = "5981bb6e099bf047fb0ade85502f44fa";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="App">
      <div class="container">
        <div class="weather-app-wrapper">
          <div class="weather-app">
            <form id="search-form">
              <div class="row">
                <div class="col-9">
                  <input
                    type="search"
                    placeholder="Type a City..."
                    id="inputSearch"
                    class="form-control"
                    autocomplete="off"
                    autofocus="on"
                  />
                </div>
                <div class="col-3">
                  <input
                    type="submit"
                    value="Search"
                    class="form-control btn btn-primary shadow-sm"
                  />
                </div>
              </div>
            </form>
            <h1 id="city">Weather</h1>
            <ul class="condition">
              <li>
                Last updated: <span id="date"></span>
              </li>
              <li id="description">Partly Cloudy</li>
            </ul>
            <div class="row">
              <div class="col-6">
                <div class="d-flex weather-temperature">
                  <img src="" alt="Cloudy icon" id="weather-icon" />

                  <span id="temperature">19</span>
                  <span class="units">
                    <a href="" id="celcius" class="active">
                      °C
                    </a>{" "}
                    |
                    <a
                      href="
                    "
                      id="fahren"
                      rel="noreferrer"
                    >
                      °F
                    </a>
                  </span>
                </div>
              </div>

              <div class="col-6">
                <ul class="type">
                  <li>
                    Humidity: <span id="humidity"></span>
                    <span>%</span>
                  </li>
                  <li>
                    Wind: <span id="wind"></span>
                    <span> km/h</span>
                  </li>
                </ul>
              </div>
            </div>
            <div class="weather-forecast" id="forecast"></div>
          </div>
          <small>
            <a
              href="https://github.com/shashabella/Vanilla-Weather-App"
              target="_blank"
              class="source-code"
              rel="noreferrer"
            >
              Open-source code
            </a>
            by Ayesha Issah
          </small>
        </div>
      </div>
    </div>
  );
}

export default App;
