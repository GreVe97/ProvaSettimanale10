import React from 'react'
import { Container, Spinner, Alert, } from 'react-bootstrap';
import MettiPrevisione from './MettiPrevisione';




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

export default function Previsioni({previsioni,città}) {
    console.log(previsioni);
    console.log(città);
    console.log({...previsioni,...città});


  return (<>
    <div>Previsioni</div>
    <Container className='mt-5'>
                <div className="griglia my-4">
                    <div id="previsioni" className="carousel slide py-1" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active d-flex">
                                {previsioni.map((ele,index) =>
                                <MettiPrevisione città={{...ele,...città}} key={index}/>                    
                               
                                    
                                    
                                )} 
                            </div>
                        </div>
                        <button className="carousel-control-prev rounded-5" type="button" data-bs-target="#previsioni"
                            data-bs-slide="prev" onClick={() => scrolla(-1)}>
                            <span className="carousel-control-prev-icon" aria-hidden="false"></span>
                            
                        </button>
                        <button className="carousel-control-next rounded-5" type="button" data-bs-target="#previsioni"
                            data-bs-slide="next" onClick={() => scrolla(1)}>
                            <span className="carousel-control-next-icon" aria-hidden="false"></span>
                           
                        </button>
                    </div>
                </div>
            </Container>
    
    </>
  )
}
