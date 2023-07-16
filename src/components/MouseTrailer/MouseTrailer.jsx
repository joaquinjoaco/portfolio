import React from 'react';

export default function MouseTrailer() {

     // blobs opacity is set to 0 when currentPosition > 500
     window.addEventListener('scroll', function () {
          var currentPosition = window.scrollY;

          if (currentPosition > 500) {
               // element.style.display = 'none';
               blob.animate({
                    opacity: 0,
               }, { duration: 2000, fill: "forwards" });
               blob2.animate({
                    opacity: 0,
               }, { duration: 2000, fill: "forwards" });
          } else {
               // element.style.display = 'block';
               blob.animate({
                    opacity: 1,
               }, { duration: 1000, fill: "forwards" });
               blob2.animate({
                    opacity: 1,
               }, { duration: 1000, fill: "forwards" });
          }
     });

     return (
          <>
               <div id="blob"></div>
               <div id="blob2"></div>
               <div id="blur"></div>
          </>

     )
}
