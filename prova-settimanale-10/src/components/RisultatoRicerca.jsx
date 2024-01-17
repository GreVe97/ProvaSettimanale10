import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'


export default function RisultatoRicerca({ city }) {
  const navigate = useNavigate()

  return (
    <Row
      className="mx-0 mt-3 p-1"
      style={{ border: '1px solid #00000033', borderRadius: 4 }}>
      <Col xs={3}>
        <Link to={`/città/${city.lat}/${city.lon}`} className='text-decoration-none'>
          {city.name} - {city.country} {city.state && <span className="">- {city.state}</span>}

        </Link>
      </Col>
      <Col xs={8}>
         <p  onClick={() => navigate(`/città/${city.lat}/${city.lon}`)}> {city.name} - {city.country} {city.state && <span className="">- {city.state}</span>}</p>
        
     
      </Col>
      <Col xs={1}>
      </Col>
    </Row>
  )
}
