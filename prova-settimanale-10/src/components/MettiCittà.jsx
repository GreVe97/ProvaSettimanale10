import React from 'react'
import {
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBCol,
  MDBContainer,
  MDBRow,
} from "mdb-react-ui-kit";
let iconBaseUrl = "http://openweathermap.org/img/wn/";
let iconFormat = ".png";

export default function MettiCittà({ città }) {
  let urlGif = "https://mdbgo.io/ascensus/mdb-advanced/img/" + città.weather[0].main.toLowerCase() + ".gif";
  console.log(città);
  return (

    <>
      <section className="vh-100">
        <MDBContainer className="h-100">
          <MDBRow className="justify-content-center align-items-center h-100">
            <MDBCol md="9" lg="7" xl="5">
              <MDBCard
                className="text-white bg-image shadow-4-strong"
                style={{
                  backgroundImage: "url(" + urlGif + ")"
                }}
              >
                <MDBCardHeader className="p-4 border-0">
                  <div className="text-center mb-2">
                    <p className="h2 mb-1"> <strong>{città.name}</strong>, {città.sys.country}</p>
                    <img src={iconBaseUrl + città.weather[0].icon + iconFormat} className="d-inline-block" alt="" /><p className="mb-1 d-inline-block">{città.weather[0].description.toUpperCase()}</p>
                    <p className="display-1 mb-1">{città.main.temp}°C</p>

                  </div>
                </MDBCardHeader>

                <MDBCardBody className="p-2 border-top border-bottom mb-1">
                  <MDBRow className="text-center">
                    <MDBCol size="4">
                      <strong className="d-block mb-2">"Feels like"</strong>
                      {/* <img src={iconsFullyUrl.now} className="" alt="" /> */}
                      <strong className="d-block">{città.main.feels_like}°C</strong>
                    </MDBCol>

                    <MDBCol size="4">
                      <strong className="d-block mb-2">T Min</strong>

                      <strong className="d-block">{città.main.temp_min}°C</strong>
                    </MDBCol>

                    <MDBCol size="4">
                      <strong className="d-block mb-2">T Max</strong>

                      <strong className="d-block">{città.main.temp_max}°C</strong>
                    </MDBCol>
                  </MDBRow>
                </MDBCardBody>

                <MDBCardBody className="px-3">
                  <MDBRow className="">
                    <MDBCol lg={6} md={12} >
                      <MDBRow className="align-items-center">
                        <MDBCol >
                          <strong>Visibilità</strong>
                        </MDBCol>


                        <MDBCol className="text-end">
                          {città.visibility} m
                        </MDBCol>
                      </MDBRow>

                      <MDBRow className="align-items-center">
                        <MDBCol >
                          <strong>Nuvolosità</strong>
                        </MDBCol>



                        <MDBCol className="text-end">
                          {città.clouds.all}%
                        </MDBCol>
                      </MDBRow>

                      <MDBRow className="align-items-center">
                        <MDBCol >
                          <strong>Vel vento</strong>
                        </MDBCol>



                        <MDBCol className="text-end">
                          {città.wind.speed}m/s
                        </MDBCol>
                      </MDBRow>
                      <MDBRow className="align-items-center">
                        <MDBCol >
                          <strong>Dir vento</strong>
                        </MDBCol>
                        <MDBCol className="text-end">
                          {città.wind.speed}°
                        </MDBCol>
                      </MDBRow>

                    </MDBCol>
                    <MDBCol lg={6} md={12} className="">
                      <MDBRow className="align-items-center">
                        <MDBCol >
                          <strong>Pressione:</strong>
                        </MDBCol>
                        <MDBCol className="text-end">
                          {città.main.pressure} hPa
                        </MDBCol>
                      </MDBRow>
                      <MDBRow className="align-items-center">
                        <MDBCol >
                          <strong>Umidità: </strong>
                        </MDBCol>
                        <MDBCol className="text-end">
                          {città.main.humidity}%
                        </MDBCol>
                      </MDBRow>
                      <MDBRow className="align-items-center">
                        <MDBCol >
                          <strong>P sea-lvl:</strong>
                        </MDBCol>
                        <MDBCol className="text-end">
                          {città.main.sea_level} hPa
                        </MDBCol>
                      </MDBRow>
                      <MDBRow className="align-items-center">
                        <MDBCol >
                          <strong>P grnd-lvl: </strong>
                        </MDBCol>
                        <MDBCol className="text-end">
                          {città.main.grnd_level} hPa
                        </MDBCol>
                      </MDBRow>

                    </MDBCol>
                  </MDBRow>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </>

  )
}



