import React from 'react'

export default function MyProjectsCTA() {

     // CTA dissapears when scrolling past 500px
     window.addEventListener('scroll', function () {
          var element = document.getElementById('ctaContainer');
          var currentPosition = window.pageYOffset;

          if (currentPosition > 500) {
               // element.style.display = 'none';
               element.animate({
                    transform: 'translate(0px, 60px)',
                    opacity: 0,
               }, { duration: 2000, fill: "forwards" });
          } else {
               // element.style.display = 'block';
               element.animate({
                    opacity: 1,
                    transform: 'translate(0px, 0px)',
               }, { duration: 1000, fill: "forwards" });
          }
     });

     // CTA scrolls to 1000px on click
     const scrollDown = () => {
          window.scrollTo(0, 800);
     }


     return (
          <div className="cta-container interactable" id="ctaContainer">
               <div className="projects-cta" onClick={() => scrollDown()}>
                    <p>
                         <span className="animate-opacity" style={{ animationDelay: "0ms" }}>M</span>
                         <span className="animate-opacity" style={{ animationDelay: "50ms" }}>y</span>
                         <span>&nbsp;</span>
                         <span className="animate-opacity" style={{ animationDelay: "100ms" }}>p</span>
                         <span className="animate-opacity" style={{ animationDelay: "150ms" }}>r</span>
                         <span className="animate-opacity" style={{ animationDelay: "200ms" }}>o</span>
                         <span className="animate-opacity" style={{ animationDelay: "250ms" }}>j</span>
                         <span className="animate-opacity" style={{ animationDelay: "300ms" }}>e</span>
                         <span className="animate-opacity" style={{ animationDelay: "350ms" }}>c</span>
                         <span className="animate-opacity" style={{ animationDelay: "400ms" }}>t</span>
                         <span className="animate-opacity" style={{ animationDelay: "450ms" }}>s</span>
                         <span>&nbsp;</span>
                         <span>&nbsp;</span>
                         <span>👇</span>
                    </p>
               </div>
          </div>
     )
}
