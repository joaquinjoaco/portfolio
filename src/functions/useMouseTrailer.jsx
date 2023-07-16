export const useMouseTrailer = () => {
     // root element with its computed styles, will be used to get the css custom properties
     var r = document.querySelector(':root');
     var rs = getComputedStyle(r);

     // Two different blobs so we can come up with nice transitions when interacting with something
     const blob = document.getElementById("blob");
     const blob2 = document.getElementById("blob2");

     // Image trailer
     const imageTrailer = document.getElementById("image-trailer");

     // listening for mouse movement on window 
     window.onpointermove = event => {
          const { clientX, clientY } = event;
          // normal interactable
          const interactable = event.target.closest(".interactable"),
               interacting = interactable !== null;

          // image interactable
          const imageInteractable = event.target.closest(".image-interactable"),
               imageInteracting = imageInteractable !== null;

          // Blobs will not move when interacting with an image, for performance purposes
          if (!imageInteractable) {
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

          imageTrailer.animate(
               { transform: `translate(${clientX - 600}px, ${clientY}px)`, },
               { duration: 800, fill: "forwards" }
          );

          // shows the image when interacting with an element that has the class "image-interactable"
          if (imageInteracting) {
               // true 
               const image = event.target.closest(".image-interactable").id;
               switch (image) {
                    case "quitel":
                         imageTrailer.style.backgroundImage = `url('assets/images/desktop/quitel-desktop.png')`;
                         imageTrailer.style.width = `600px`;
                         imageTrailer.style.height = `296px`;
                         break;
                    case "mificha":
                         imageTrailer.style.backgroundImage = `url('assets/images/ficha-medica.png')`;
                         imageTrailer.style.width = `230px`;
                         imageTrailer.style.height = `501px`;
                         break;

                    case "laundrifycrud":
                         imageTrailer.style.backgroundImage = `url('assets/images/laundrify-crud.png')`;
                         imageTrailer.style.width = `230px`;
                         imageTrailer.style.height = `501px`;
                         break;

                    case "sorvislater":
                         imageTrailer.style.backgroundImage = `url('assets/images/desktop/sorvisLater-desktop.png')`;
                         imageTrailer.style.width = `600px`;
                         imageTrailer.style.height = `305px`;
                         break;

                    case "eventyrbanlist":
                         imageTrailer.style.backgroundImage = `url('assets/images/eventyr-banlist.png')`;
                         imageTrailer.style.width = `230px`;
                         imageTrailer.style.height = `501px`;
                         break;

                    case "eventyrplayerguide":
                         imageTrailer.style.backgroundImage = `url('assets/images/desktop/eventyrguia-desktop.png')`;
                         imageTrailer.style.width = `600px`;
                         imageTrailer.style.height = `300px`;
                         break;

                    case "bandicoot":
                         imageTrailer.style.backgroundImage = `url('assets/images/desktop/bandicoot-desktop.png')`;
                         imageTrailer.style.width = `600px`;
                         imageTrailer.style.height = `300px`;
                         break;

                    case "laundrifylanding":
                         imageTrailer.style.backgroundImage = `url('assets/images/desktop/laundrifylanding-desktop.png')`;
                         imageTrailer.style.width = `600px`;
                         imageTrailer.style.height = `300px`;
                         break;

                    case "lafisicasegundios":
                         imageTrailer.style.backgroundImage = `url('assets/images/desktop/lafisicasegundios-desktop.png')`;
                         imageTrailer.style.width = `600px`;
                         imageTrailer.style.height = `300px`;
                         break;

                    default:
                         imageTrailer.style.background = `#c4c4c4`;
               }
               imageTrailer.style.opacity = `1`;
          } else {
               //false
               imageTrailer.style.opacity = `0`;
          }
     }
}