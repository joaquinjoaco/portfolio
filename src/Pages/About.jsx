import React, { useEffect } from 'react'
import { useHoverableOpacity } from '../hooks/useHoverableOpacity';

export default function About() {

     useEffect(() => {
          let isNotMobile = window.matchMedia("only screen and (min-width: 1000px)").matches;
          if (isNotMobile) {
               useHoverableOpacity();
               console.log("useeffect ran")
          }
     }, []);

     return (
          <div className="container outside">
               <h1 className="looking-for-oportunities">Im looking for oportunities to learn and contribute in Uruguay, Montevideo or remote.
                    <p>Thank you for your visit!</p>
               </h1>
          </div>
     )
}
