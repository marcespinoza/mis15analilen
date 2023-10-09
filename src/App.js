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
import './Experience.css'
import Countdown  from '../src/Countdown.js';
import { Pagination, EffectCoverflow, Autoplay  } from 'swiper'

import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'


import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

import 'swiper/swiper.min.css'
import 'swiper/modules/pagination/pagination.min.css'
import uno from './assets/png/1.jpeg';
import dos from './assets/png/2.jpeg';
import tres from './assets/png/3.jpeg';
import cuatro from './assets/png/4.jpeg';
import cinco from './assets/png/5.jpeg';
import seis from './assets/png/6.jpeg';
import siete from './assets/png/7.jpeg';
import ocho from './assets/png/8.jpeg';
import nueve from './assets/png/9.jpeg';
import diez from './assets/png/10.jpeg';
import Resume from "./Components/Resume";
import Aboutme from "./Components/Aboutme";
import Contact from "./Components/Contact";


function App() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: reactLogo,
    rendererSettings: {
       preserveAspectRatio: "xMidYMid slice"
    },
 };

 const slider = [
  {url: uno
  },
  { url: dos
  },
  { url: tres
  },  
  {url: cuatro
  },
  {url: cinco
  },
  {url: seis
  },
  {url: siete
  },
  {url: ocho
  }, 
  {url: nueve
  },
  {url: diez
  },
]

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
    <div >

<section class="hero">
  <div class="hero-inner" id="section-0">
    <figure></figure>
    <Aboutme/>
  </div>
</section>
<section class="hero">
  <div class="hero-inner" id="section-0">
    <figure></figure>
    <div className='page'>
      <Countdown countdownData={state} name={name} />      
    </div>
  </div>
</section>
<section class="hero">
  <div class="hero-inner" id="section-0">
    <figure></figure>
    <Contact/>
  </div>
</section>
<section class="hero">
  <div class="hero-inner" id="section-0">
    <figure></figure>
    <Resume/>
  </div>
</section>
    </div>
  );
}

export default App;
