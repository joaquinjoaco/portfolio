// does not work on mobile
export const isElementInViewport = () => {
     const options = {
          root: null,
          rootMargin: '0px',
          threshold: 0.85, // element will be considered "in view" when it is at least 50% visible
     }
     const headerTexts = document.querySelectorAll(".header-text");


     const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
               if (entry.isIntersecting) {
                    console.log("is in view")

                    headerTexts.forEach((text) => {
                         text.animate({
                              color: '#1d1d1f',
                         }, { duration: 1000, fill: "forwards" });
                    });
               } else {
                    headerTexts.forEach((text) => {
                         text.animate({
                              color: '#fff6e5',
                         }, { duration: 1000, fill: "forwards" });
                    });
               }
          })
     }, options);

     const elements = document.querySelectorAll(".white");
     elements.forEach(element => {
          observer.observe(element);
     });
}