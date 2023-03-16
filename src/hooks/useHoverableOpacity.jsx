export const useHoverableOpacity = () => {

     let isMobile = window.matchMedia("only screen and (min-width: 1000px)").matches;
     // Hoverable opacity will work on screens bigger than 1000px

     if (isMobile) {

          const hoverables = document.querySelectorAll('.hoverable-opacity');

          // Gets each hoverable
          hoverables.forEach((hoverable) => {

               // hoverable.onmouseover = () => {
               const letters = hoverable.textContent.split('');

               hoverable.textContent = '';

               letters.forEach((letter, index) => {
                    const span = document.createElement('span');
                    span.textContent = letter;
                    span.style.animationDelay = `${index * 50}ms`;
                    span.classList.add('animate-opacity'); // add animate-opacity class
                    hoverable.append(span);
               });
               // }

          });

     }
}