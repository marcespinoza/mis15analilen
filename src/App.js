import React, {useState, useEffect} from "react";
import "./App.css";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import Main from "./Components/Main";
import { Link } from 'react-router-dom';
import Lottie from "react-lottie";
import reactLogo from "./assets/animation_instagram.json";
import  './Musica.css'
import './Preparate.css'
import './Fiesta.css'
import './DressCode.css'
import './neon.css'
import './Landing.css'
import './Countdown.css'
import Countdown  from '../src/Countdown.js';


function App() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: reactLogo,
    rendererSettings: {
       preserveAspectRatio: "xMidYMid slice"
    },
 };

 const name = "Ana Lilén";
 const day = 3;
 const month = 11;
 const [state, setState] = useState({
 seconds: 0,
 hours: 0,
 minutes: 0,
 days: 0,
 isItBday: false,});
 if (name === undefined || day === undefined || month === undefined) {
   // This is if not enough params are provided
   name = 'Ana Lilen'; // Name of the Person
   month = 11; // Month of the Birthday
   day = 3; // Day of the Birthday
 }
 const currentTime = new Date();
 // get current year
 const currentYear = currentTime.getFullYear();

 const isItBday =
 currentTime.getDate() === day && currentTime.getMonth() === month - 1;

 useEffect(() => {
   setInterval(() => {
     const countdown = () => {
       const dateAtm = new Date();
       let birthdayDay = new Date(currentYear, month - 1, day);
       if (dateAtm > birthdayDay) {
         birthdayDay = new Date(currentYear + 1, month - 1, day);
       } else if (dateAtm.getFullYear() === birthdayDay.getFullYear() + 1) {
         birthdayDay = new Date(currentYear, month - 1, day);
       }
       const currentTime = dateAtm.getTime();
       const birthdayTime = birthdayDay.getTime();
       const timeRemaining = birthdayTime - currentTime;

       let seconds = Math.floor(timeRemaining / 1000);
       let minutes = Math.floor(seconds / 60);
       let hours = Math.floor(minutes / 60);
       let days = Math.floor(hours / 24);

       seconds %= 60;
       minutes %= 60;
       hours %= 24;

       setState((prevState) => ({
         ...prevState,
         seconds,
         minutes,
         hours,
         days,
         isItBday,
       }));
     };
     if (!isItBday) {
       countdown();
     } else {
       setState((prevState) => ({
         ...prevState,
         isItBday: true,
       }));
     }
   }, 1000);
 }, [currentYear, day, isItBday, month]);

  return (
    <div className="demo-big-content">

<section class="hero">
  <div class="hero-inner" id="section-0">
    <figure></figure>
    <div className='landing'>
            <div className='landing--container'>
                             
                    <div
                        className='lcr--content'
                    >
                        <h1 class="neon"> Ana Lilen</h1>
                        <h6 class="flicker" > <span class="fast-flicker">M</span>is<span class="flicker"> 1</span>5</h6>

                </div>
            </div>
        </div>
  </div>
</section>

<section class="hero">
    <div className='page'>
      <Countdown countdownData={state} name={name} />      
    </div>
</section>

<section class="hero">
      <div className="education-body">
                    <h1>
                    ¡Preparate para esta gran fiesta! <br />
                    Seguime y etiquetame en tus fotos y videos.
                    </h1>
                <div className="lottie-ig-id">
                  <Lottie options={defaultOptions} />              
                </div>
                <div className='ig-account'>
                  @anaa_xd2
                </div>
        </div>
</section>

      <section class="hero">
      <div className="education-body">
                    <h1>
                    ¡Preparate para esta gran fiesta! <br />
                    Seguime y etiquetame en tus fotos y videos.
                    </h1>
                <div className="lottie-ig-id">
                  <Lottie options={defaultOptions} />              
                </div>
                <div className='ig-account'>
                  @anaa_xd2
                </div>
        </div>
</section>

<section class="hero">
  <div className="musica">
    <h1>MUSICA</h1>
      <div className="musicaHeader">
      <p >
      ¡Ayudame sugiriendo las canciones que pensás 
      <br />
      que no pueden faltar en la fiesta!
      </p>
      </div>
      <div className='buttonMusic'>
        <button class="music">Sugerir canción</button>
      </div>
   </div>
</section>

<section class="hero">
    <div className="fiesta">
            <div >
                <h2>FIESTA</h2>
            </div>
            <div className="fiestaHeader">
             <p >
             ¡Te espero el viernes 03/11/23, salón upcn, sito en belgrano, para festejar este gran momento de mi vida!
             <br />
                Clickeá en el botón de abajo y encontrá las indicaciones para llegar al lugar

            </p>
            </div>
            <div>
            <a href="https://www.google.com/maps/place/UPCN+-+Formosa/@-26.177815,-58.1698866,17z/data=!3m1!4b1!4m6!3m5!1s0x945ca5e81a246505:0x4433f925df26ef93!8m2!3d-26.177815!4d-58.1673117!16s%2Fg%2F11fz959btb?entry=ttu" target="_blank">
               <button class="fiestaButton">Como llegar</button>
               </a>
            </div>
        </div>
</section>

<section class="hero">
    <div className="dressCode">
            <div className="dressCode-header">
                <h2>DRESS CODE</h2>
            </div>           
            <div className="dressCode-header">
             <p >
               Sport Elegante
            </p>
            </div>
        </div>
</section>
    </div>
  );
}

export default App;
