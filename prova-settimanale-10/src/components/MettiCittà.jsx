import React from 'react'
let iconBaseUrl = "http://openweathermap.org/img/wn/";
let iconFormat = ".png";

export default function MettiCittà({ città }) {
  let urlGif = "https://mdbgo.io/ascensus/mdb-advanced/img/" + città.weather[0].main.toLowerCase() + ".gif";
  console.log(città);

  return (

    <>
      <div className="container mt-4" style={{ maxWidth: "35rem" }}>
        <div className="row justify-content-center align-items-center">
          <div className="col">
            <div
              className="card text-white bg-image shadow-4-strong"
              style={{
                backgroundImage: `url(${urlGif})`
              }}>
              <div className="card-header p-4 border-0 text-center mb-2">
                <p className="h2 mb-1">
                  <strong>{città.name}</strong>, {città.sys.country}
                </p>
                <img
                  src={`${iconBaseUrl}${città.weather[0].icon}${iconFormat}`}
                  className="d-inline-block mb-2"
                  alt=""
                />
                <p className="pb-0 d-inline-block fs-4 text">
                  {città.weather[0].description}
                </p>
                <p className="display-1 mb-1">{Math.round(città.main.temp)}°C</p>
              </div>
              <div className="card-body p-2 border-top border-bottom mb-1">
                <div className="row text-center">
                  <div className="col">
                    <strong className="d-block mb-2">"Feels like"</strong>
                    <strong className="d-block">{città.main.feels_like}°C</strong>
                  </div>
                  <div className="col">
                    <strong className="d-block mb-2">T Min <i className="fa-solid fa-temperature-arrow-down"></i></strong>
                    <strong className="d-block">{città.main.temp_min}°C</strong>
                  </div>
                  <div className="col">
                    <strong className="d-block mb-2">T Max <i className="fa-solid fa-temperature-arrow-up"></i></strong>
                    <strong className="d-block">{città.main.temp_max}°C</strong>
                  </div>
                </div>
              </div>
              <div className="card-body px-3">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="row align-items-center">
                      <div className="col">
                        <strong>Visibilità</strong>
                      </div>
                      <div className="col text-end">
                        {città.visibility / 1000} km
                      </div>
                    </div>
                    <div className="row align-items-center">
                      <div className="col">
                        <strong>Nuvolosità</strong>
                      </div>
                      <div className="col text-end">{città.clouds.all}%</div>
                    </div>
                    <div className="row align-items-center">
                      <div className="col">
                        <strong>Vel vento</strong>
                      </div>
                      <div className="col text-end">{città.wind.speed}m/s</div>
                    </div>
                    <div className="row align-items-center">
                      <div className="col">
                        <strong>Dir vento</strong>
                      </div>
                      <div className="col text-end">{città.wind.deg}°</div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="row align-items-center">
                      <div className="col">
                        <strong>Pressione:</strong>
                      </div>
                      <div className="col text-end">
                        {città.main.pressure} hPa
                      </div>
                    </div>
                    <div className="row align-items-center">
                      <div className="col">
                        <strong>Umidità:</strong>
                      </div>
                      <div className="col text-end">{città.main.humidity}%</div>
                    </div>
                    <div className="row align-items-center">
                      <div className="col">
                        <strong>P sea-lvl:</strong>
                      </div>
                      <div className="col text-end">
                        {città.main.sea_level} hPa
                      </div>
                    </div>
                    <div className="row align-items-center">
                      <div className="col">
                        <strong>P grnd-lvl:</strong>
                      </div>
                      <div className="col text-end">
                        {città.main.grnd_level} hPa
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



    </>

  )
}



