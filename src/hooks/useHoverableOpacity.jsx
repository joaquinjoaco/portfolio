export const useHoverableOpacity = () => {

     // Gets all the hoverables in the dom
     const hoverables = document.querySelectorAll('.hoverable-opacity');

     // Gets each hoverable
     hoverables.forEach((hoverable) => {

          // splits each letter of the hoverable text content into an array
          const letters = hoverable.textContent.split('');

          // text content is emptied to be replaced with span elements
          hoverable.textContent = '';

          // A span with an animation class is made for each letter and then appended as a child to the hoverable element
          letters.forEach((letter, index) => {
               const span = document.createElement('span');
               span.textContent = letter;
               span.style.animationDelay = `${index * 50}ms`; // animation delay is increased by 50 for every consecutive span
               span.classList.add('animate-opacity'); // add animate-opacity class
               hoverable.append(span);
          });
     });
}