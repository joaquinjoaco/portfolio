export const useHoverableTitleOpacity = () => {
     const texts = document.querySelectorAll('.hoverable-title-opacity');

     texts.forEach((text) => {

          const letters = text.textContent.split('');

          text.textContent = '';

          letters.forEach((letter) => {
               const span = document.createElement('span');
               span.textContent = letter;
               text.appendChild(span);

               span.addEventListener('mouseenter', () => {
                    span.style.opacity = `0.5`;
                    span.style.paddingInline = `6px`;
               });

               span.addEventListener('mouseleave', () => {
                    span.style.opacity = `1`;
                    span.style.paddingInline = `0px`;
               });
          });
     });

}