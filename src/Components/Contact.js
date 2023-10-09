import React, { Component } from "react";
import '../../src/Fiesta.css'


class Contact extends Component {
  render() {
    return (
      <div className="fiesta">
            <div >
                <h2>FIESTA</h2>
            </div>
            <div className="fiestaHeader">
             <p >
             ¡TE ESPERO EL VIERNES PARA FESTEJAR ESTE GRAN MOMENTO DE MI VIDA!
             <br />
                CLICKEA EN EL BOTON DE ABAJO Y ENCONTRA LAS INDICACIONES PARA LLEGAR AL LUGAR

            </p>
            </div>
            <div>
            <a href="https://www.google.com/maps/place/UPCN+-+Formosa/@-26.177815,-58.1698866,17z/data=!3m1!4b1!4m6!3m5!1s0x945ca5e81a246505:0x4433f925df26ef93!8m2!3d-26.177815!4d-58.1673117!16s%2Fg%2F11fz959btb?entry=ttu" target="_blank">
               <button class="fiestaButton">Como llegar</button>
               </a>
            </div>
        </div>
    );
  }
}

export default Contact;
