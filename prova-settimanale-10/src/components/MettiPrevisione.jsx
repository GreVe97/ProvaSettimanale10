import React from "react";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

export default function MettiPrevisione({ città }) {

  let urlGif = "https://mdbgo.io/ascensus/mdb-advanced/img/" + città.weather[0].main.toLowerCase() + ".gif";

  console.log(città);

  let data = new Date(città.dt_txt);
  let giorno = data.toLocaleDateString("it", {
    weekday: "short",
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  let ora = data.toLocaleDateString("it", {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false
  }).slice(-5);
  console.log(data);








  return (



    <OverlayTrigger

      placement="auto-start"
      overlay={
        <Popover id={`popover-positioned-${città.name}`}>
          <Card style={{}}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <strong className="me-auto">Velocità vento:{ parseInt(ora)}</strong>
                  <span className="ms-auto"> {città.wind.speed}m/s</span></ListGroup.Item>
              <ListGroup.Item>
                <strong className="me-auto">Direzione vento:</strong>
                  <span className="ms-auto"> {città.wind.deg}°</span></ListGroup.Item>
              <ListGroup.Item>
                <strong className="me-auto">Pressione:</strong>
                 <span className="ms-auto"> {città.main.pressure} hPa</span></ListGroup.Item>
              <ListGroup.Item>
                <strong className="me-auto">P. sea-lvl:</strong>
                <span className="ms-auto"> {città.main.sea_level} hPa</span></ListGroup.Item>
              <ListGroup.Item>
                <strong className="me-auto">P. grnd-lvl:</strong>
                <span className="ms-auto"> {città.main.grnd_level} hPa</span></ListGroup.Item>
            </ListGroup>
          </Card>
        </Popover>}>

      <div className="d-flex justify-content-center align-items-center me-2">
        <div className="card text-white bg-image" style={{ color: '#4B515D', borderRadius: '35px', width: '20rem', backgroundImage: "url(" + urlGif + ")" }}>
          <div className="card-body p-4">
            <div className="d-flex justify-content-between">
              <h6 className="flex-grow-1">{città.name}, {città.country}</h6>
              <div className="d-flex flex-column align-items-end">
                <h6 className="">{giorno}</h6>
                <div className="d-flex">
                  <h5 className="me-2">ore: {ora}</h5>
                {(parseInt(ora)<18 && parseInt(ora)>=6 ) ? <i className="fa-solid fa-sun p-0 my-0"></i> : <i className="fa-solid fa-moon p-0 my-0"></i> }
                </div>
                
              </div>
            </div>
            <div className="d-flex flex-column text-center mt-3 mb-4">
              <h6 className="display-4 mb-0 font-weight-bold" style={{}}>{Math.round(città.main.temp)}°C</h6>
              <div>
                <img src={"http://openweathermap.org/img/wn/" + città.weather[0].icon + ".png"} className="d-inline-block" alt="" /><span className="small" style={{}}>{città.weather[0].description}</span>
              </div>
            </div>
            <div className="d-flex justify-content-between">
              <div className="d-flex align-items-center">
                <div className="flex-grow-1" style={{ fontSize: '1rem' }}>
                  <div >
                    <i className="fa-solid fa-cloud" style={{}}></i>
                    <span className="ms-1"> {città.clouds.all}%</span>
                  </div>
                  <div>
                    <i className="fas fa-wind" style={{}}></i>
                    <span className="ms-1"> {città.wind.speed}m/s</span>
                  </div>
                  <div>
                    <i className="fas fa-tint" style={{}}></i>
                    <span className="ms-1"> {città.main.humidity}%</span>
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <div className="flex-grow-1" style={{ fontSize: '1rem' }}>
                  <div >
                    <i className="fa-solid fa-temperature-arrow-up"></i>
                    <span className="ms-1"> {città.main.temp_max}°C</span>
                  </div>
                  <div>
                    <i className="fas fa-temperature-arrow-down" style={{}}></i>
                    <span className="ms-1"> {città.main.temp_min}°C</span>
                  </div>
                  <div>
                    <i className="fa-solid fa-eye-low-vision"></i>
                    <span className="ms-1"> {città.visibility / 1000} km</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </OverlayTrigger>




  );
}