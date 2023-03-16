export const useMouseTrailer = () => {
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
               background: `${interacting ? '#5d7ec5' : '#c44d6a'}`,
               transform: `scale(${interacting ? 1.5 : 1})`,
          }, { duration: 1800, fill: "forwards" });

          // blob2 animation
          blob2.animate({
               left: `${clientX}px`,
               top: `${clientY}px`,
               background: `${interacting ? '#c44d6a' : '#5d7ec5'}`,
               transform: `scale(${interacting ? 1.5 : 1})`,
          }, { duration: 2800, fill: "forwards" });
     }
}