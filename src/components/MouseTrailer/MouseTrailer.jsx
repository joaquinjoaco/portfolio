import React from 'react';

export default function MouseTrailer() {

     // CTA dissapears when scrolling past 500px
     // window.addEventListener('scroll', function () {
     //      var element = document.getElementById('blobs');
     //      var currentPosition = window.scrollY;

     //      if (currentPosition > 500) {
     //           // element.style.display = 'none';
     //           element.animate({
     //                opacity: 0,
     //           }, { duration: 2000, fill: "forwards" });
     //      } else {
     //           // element.style.display = 'block';
     //           element.animate({
     //                opacity: 1,
     //           }, { duration: 1000, fill: "forwards" });
     //      }
     // });

     return (
          <>
               <div id="blob"></div>
               <div id="blob2"></div>
               <div id="blur"></div>
          </>

     )
}
