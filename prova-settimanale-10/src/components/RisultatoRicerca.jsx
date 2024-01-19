import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import Card from 'react-bootstrap/Card';



export default function RisultatoRicerca({ city }) {
  const navigate = useNavigate()
  let mapkey = "0723bd65fa37455b9769a930eccac2d6";
  let altezza = 160;
  let larghezza = 285;


  return (
    <>
      <div onClick={() => navigate(`/città/${city.lat}/${city.lon}`)} className='carta mt-5 me-4 justify-content-center rounded overflow-hidden'>
        <img width={larghezza + "px"} height={altezza + "px"} src={"https://maps.geoapify.com/v1/staticmap?style=osm-bright&width=" + larghezza + "&height=" + altezza + "&center=lonlat:" + city.lon + "," + city.lat + "&zoom=5&marker=lonlat:" + city.lon + "," + city.lat + ";color:%23ff0000;size:small&apiKey=" + mapkey} className='rounded border border-bottom-0 img-fluid' />
        <div className='pt-2 ps-2 border '>
          <h5>{city.name}</h5>
          <h6>
            {city.country} {city.state && <span className="">- {city.state}</span>}
          </h6>
        </div>
      </div>
    </>
  )
}
