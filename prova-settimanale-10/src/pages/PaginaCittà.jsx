import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import axios from 'axios';
import MettiCittà from '../components/MettiCittà';



export default function PaginaCittà() {

  let chiave = "&appid=ffb99f146969547191dab81df6c39e4b"
  const { lat, lon } = useParams();
  const [città, setCittà] = useState()
  const [previsioni, setPrevisioni] = useState();

  useEffect(() => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=it&units=metric`+ chiave)
      .then(response => {
        if (response.status === 200) {
          console.log(response.data);
          setCittà(response.data)
        } else {
          console.log("Errore Server!!!")
        }
      }).catch(error => console.error(error))

    axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&lang=it&units=metric`+ chiave)
      .then(response => {
        if (response.status === 200) {
          console.log(response.data);
          setPrevisioni(response.data)
        } else {
          console.log("Errore Server!!!")
        }
      }).catch(error => console.error(error))
  }, []);



  return (
    <Container>
      <h1>Pagina Città</h1>
      <MettiCittà/>




    </Container>
  )
}
