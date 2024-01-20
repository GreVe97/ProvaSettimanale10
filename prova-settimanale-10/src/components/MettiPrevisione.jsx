import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import MettiCittà from './MettiCittà';

import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';

export default function MettiPrevisione({ città }) {

  console.log(città);



  return (



    <OverlayTrigger
     
      placement="auto-start"
      overlay={
        <Popover id={`popover-positioned-${città.name}`}>
          {/* <MettiCittà città={{ città }} /> */}
        </Popover>}>

      <div className="d-flex justify-content-center align-items-center me-2">
        <div className="card" style={{ color: '#4B515D', borderRadius: '35px', width: '20rem' }}>
          <div className="card-body p-4">
            <div className="d-flex">
              <h6 className="flex-grow-1">{città.name}, {città.country}</h6>
              <h6>{città.dt_txt}</h6>
            </div>

            <div className="d-flex flex-column text-center mt-5 mb-4">
              <h6 className="display-4 mb-0 font-weight-bold" style={{ color: '#1C2331' }}>{città.main.temp}°C</h6>
              <span className="small" style={{ color: '#868B94' }}>{città.weather[0].description}</span>
            </div>

            <div className="d-flex align-items-center">
              <div className="flex-grow-1" style={{ fontSize: '1rem' }}> 
              <div>
                  <i class="fa-solid fa-cloud"style={{ color: '#868B94' }}></i>
                  <span className="ms-1"> {città.clouds.all}%</span>
                </div>
                <div>
                  <i className="fas fa-wind" style={{ color: '#868B94' }}></i>
                  <span className="ms-1">{città.wind.speed}m/s</span>
                </div>
                <div>
                  <i className="fas fa-tint" style={{ color: '#868B94' }}></i>
                  <span className="ms-1">{città.main.humidity}%</span>
                </div>
               
              </div>
              <div>
                <img src={"http://openweathermap.org/img/wn/" + città.weather[0].icon +".png"} className="d-inline-block" width="100px" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>


    </OverlayTrigger>




  );
}