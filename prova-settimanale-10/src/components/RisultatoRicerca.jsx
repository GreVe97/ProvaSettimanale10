import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import Card from 'react-bootstrap/Card';



export default function RisultatoRicerca({ city }) {
  const navigate = useNavigate()
  let mapkey ="0723bd65fa37455b9769a930eccac2d6"

  return (
    <Row
      className="mx-0 mt-3 p-1"
      style={{ border: '1px solid #00000033', borderRadius: 4 }}>
      <Col xs={3}>
        <Link to={`/città/${city.lat}/${city.lon}`} className='text-decoration-none'>
          {city.name} - {city.country} {city.state && <span className="">- {city.state}</span>}

        </Link>
      </Col>
      <Col xs={3}>
         <p  onClick={() => navigate(`/città/${city.lat}/${city.lon}`)}> {city.name} - {city.country} {city.state && <span className="">- {city.state}</span>}</p>
        
     
      </Col>
      <Col xs={6}>
        <img  width="300" height="300" src={"https://maps.geoapify.com/v1/staticmap?style=osm-bright&center=lonlat:"+city.lon+","+city.lat+"&zoom=6&marker=lonlat:"+city.lon+","+city.lat+";color:%23ff0000;size:small&scaleFactor=1&apiKey=0723bd65fa37455b9769a930eccac2d6"} alt="" />
      </Col>
    </Row>
  )
}
