export const useMouseTrailer = () => {
     // root element with its computed styles, will be used to get the css custom properties
     var r = document.querySelector(':root');
     var rs = getComputedStyle(r);

     // Two different blobs so we can come up with nice transitions when interacting with something
     const blob = document.getElementById("blob");
     const blob2 = document.getElementById("blob2");

     // listening for mouse movement on window 
     window.onpointermove = event => {
          const { clientX, clientY } = event;
          const interactable = event.target.closest(".interactable"),
               interacting = interactable !== null;

          // blob1 animation
          blob.animate({
               left: `${clientX}px`,
               top: `${clientY}px`,
               background: `${interacting ? rs.getPropertyValue('--blue') : rs.getPropertyValue('--pink')}`,
               transform: `scale(${interacting ? 1.5 : 1})`,
          }, { duration: 1800, fill: "forwards" });

          // blob2 animation
          blob2.animate({
               left: `${clientX}px`,
               top: `${clientY}px`,
               background: `${interacting ? rs.getPropertyValue('--pink') : rs.getPropertyValue('--blue')}`,
               transform: `scale(${interacting ? 1.5 : 1})`,
          }, { duration: 2800, fill: "forwards" });
     }
}