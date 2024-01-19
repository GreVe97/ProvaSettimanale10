import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import axios from 'axios';
import MettiCittà from '../components/MettiCittà';
import Previsioni from '../components/Previsioni';
import Spinner from 'react-bootstrap/Spinner';



export default function PaginaCittà() {

  let chiave = "&appid=ffb99f146969547191dab81df6c39e4b"
  const [città, setCittà] = useState()
  const [previsioni, setPrevisioni] = useState();
  const [loading, setLoading] = useState();
  const [{ lat, lon }, { setLat, setLon }] = useState(useParams())

  useEffect(() => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=it&units=metric` + chiave)
      .then(response => {
        if (response.status === 200) {
          console.log(response.data);
          setCittà(response.data)
        } else {
          console.log("Errore Server!!!")
        }
      }).catch(error => console.error(error))

    axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&lang=it&units=metric` + chiave)
      .then(response => {
        if (response.status === 200) {
          console.log(response.data);
          setPrevisioni(response.data)
        } else {
          console.log("Errore Server!!!")
        }
      }).catch(error => console.error(error))

  }, [lat, lon]);

  useEffect(() => {
    console.log(città);
  }, [città])



  return (
    <Container>
      <h1>Pagina Città</h1>
      {città ?
        <MettiCittà città={città} />
        : <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>}

      {previsioni ?
        <Previsioni previsioni={previsioni.list} />
        :
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>}






    </Container>
  )
}
