import React, { useEffect } from 'react';
import MouseTrailer from '../components/MouseTrailer/MouseTrailer';
import ContactBtn from '../components/ContactBtn/ContactBtn';
import MyProjectsCTA from '../components/MyProjectsCTA/MyProjectsCTA';
import MyProjects from '../components/MyProjects/MyProjects';

import { useMouseTrailer } from '../functions/useMouseTrailer';
import { useHoverableOpacity } from '../functions/useHoverableOpacity';
import { useHoverableTitleOpacity } from '../functions/useHoverableTitleOpacity';


export default function Home() {

     useEffect(() => {
          let isNotMobile = window.matchMedia("only screen and (min-width: 1000px)").matches;
          if (isNotMobile) {
               useMouseTrailer();
               useHoverableOpacity();
               useHoverableTitleOpacity();
               console.log("useeffect ran")
          }
     }, []);

     return (
          <>
               {/* Hero */}
               <div className="hero inside">
                    <MouseTrailer />
                    <div className="borders">
                         <div className="hero-container">
                              <h1 className="interactable">Hello there! I'm Joaquín, and I specialize in front-end web development. With a keen eye for design, I craft engaging, functional and visually appealing user experiences.
                                   <br />
                                   <br />
                                   <ContactBtn />
                              </h1>
                              <MyProjectsCTA />
                         </div>
                    </div>
               </div>

               {/* Projects */}
               <MyProjects />

               {/* Goodbye */}
               <div className="container outside">
                    <h1 className="looking-for-oportunities">Im looking for oportunities to learn and contribute in Uruguay, Montevideo or remote.
                         <p>Thank you for your visit!</p>
                    </h1>
               </div>
          </>
     )
}