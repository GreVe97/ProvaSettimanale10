import React from "react";
import MettiCittà from './MettiCittà';
import { format } from 'date-fns';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';

export default function MettiPrevisione({ città }) {
 
  let urlGif = "https://mdbgo.io/ascensus/mdb-advanced/img/" + città.weather[0].main.toLowerCase() + ".gif";

  console.log(città);

  let data =new Date(città.dt_txt);
  let giorno = data.toLocaleDateString("it", {
    weekday: "short",
    day : "2-digit",    
    month: "short",
    year: "numeric",
  }); 

  let ora =  data.toLocaleDateString("it", {
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
          
        </Popover>}>

      <div className="d-flex justify-content-center align-items-center me-2">
        <div className="card text-white bg-image" style={{ color: '#4B515D', borderRadius: '35px', width: '20rem', backgroundImage: "url(" + urlGif + ")"} }>
          <div className="card-body p-4">
            <div className="d-flex justify-content-between">
              <h6 className="flex-grow-1">{città.name}, {città.country}</h6>
              <div className="d-flex flex-column align-items-end">
                <h6 className="">{giorno}</h6>
                <h5 className="">ore: {ora}</h5>
              </div>
              
            </div>

            <div className="d-flex flex-column text-center mt-3 mb-4">
              <h6 className="display-4 mb-0 font-weight-bold" style={{ }}>{Math.round(città.main.temp)}°C</h6>
              <div>
              <img src={"http://openweathermap.org/img/wn/" + città.weather[0].icon +".png"} className="d-inline-block"  alt="" /><span className="small" style={{ }}>{città.weather[0].description}</span>
              </div>
              
            </div>

            <div className="d-flex justify-content-between">

               <div className="d-flex align-items-center">
              <div className="flex-grow-1" style={{ fontSize: '1rem' }}> 
              <div >
                  <i class="fa-solid fa-cloud"style={{  }}></i>
                  <span className="ms-1"> {città.clouds.all}%</span>
                </div>
                <div>
                  <i className="fas fa-wind" style={{ }}></i> 
                  <span className="ms-1"> {città.wind.speed}m/s</span>
                </div>
                <div>
                  <i className="fas fa-tint" style={{ }}></i>
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
                  <i className="fas fa-temperature-arrow-down" style={{ }}></i> 
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