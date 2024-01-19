import React from 'react'
import { Container, Spinner, Alert, } from 'react-bootstrap';

import MettiCittà from './MettiCittà';



function scrolla(verso) {
    let carosello = document.querySelector(`#previsioni .carousel-inner`);
    let scrollata = carosello.offsetWidth * 0.85;
    let maxScrollLeft = carosello.scrollWidth - carosello.offsetWidth;
    if (verso === -1) {
        carosello.scrollLeft -= scrollata;
    } else {
        carosello.scrollLeft += scrollata;
    }
    if (carosello.scrollLeft >= maxScrollLeft) {
        carosello.scrollLeft = 0;
    }
}

export default function Previsioni({previsioni}) {
    console.log(previsioni);


  return (<>
    <div>Previsioni</div>
    <Container className='mt-5'>
                <div className="grigliaFilm my-4">
                    <div id="previsioni" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active d-flex">
                                {previsioni.map((ele,index) =>
                                    <MettiCittà città = {ele} key={index}/>
                                )} 
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#previsioni"
                            data-bs-slide="prev" onClick={() => scrolla(-1)}>
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#previsioni"
                            data-bs-slide="next" onClick={() => scrolla(1)}>
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </Container>
    
    </>
  )
}
