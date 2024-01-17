import React from 'react'
import { useState } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import axios from 'axios';
import RisultatoRicerca from './RisultatoRicerca';


export default function MainSearch() {

 

    const [query, setQuery] = useState("");
    const [città, setCittà] = useState([]);

    const baseEndpoint = "http://api.openweathermap.org/geo/1.0/direct?limit=5&q=";
    const chiave = "&appid=ffb99f146969547191dab81df6c39e4b"

    const handleChange = e => {
        setQuery(e.target.value);
        if(e.target.value==""){
          setCittà([])
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.get(baseEndpoint + query + chiave + "&lang=it")
            .then(response => {
                if (response.status === 200) {
                    console.log(response.data);
                    setCittà(response.data)
                } else {
                    console.log("Errore Server!!!")
                }
            }).catch(error => console.error(error))        
      };

    return (
        <Container>
        <Row>
          <Col xs={10} className="mx-auto my-3">
            <h1 className="display-1">Cerca città</h1>
          </Col>
          <Col xs={10} className="mx-auto">
            <Form onSubmit={handleSubmit}>
              <Form.Control type="search" value={query} onChange={handleChange} placeholder="type and press Enter" />
            </Form>
          </Col>          
          {query && 
            <Col xs={10} className="mx-auto mb-5">
              {città.map((ele, index)=> (
              <RisultatoRicerca key={index} city={ele}/>
            ))}       
            </Col>}         
        </Row>       
      </Container>
    )
}
