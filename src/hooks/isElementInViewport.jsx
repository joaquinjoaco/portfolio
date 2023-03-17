// does not work on mobile
export const isElementInViewport = () => {
     const options = {
          root: null,
          rootMargin: '0px',
          threshold: 0.85, // element will be considered "in view" when it is at least 85% visible
     }
     // Header's texts
     const headerTexts = document.querySelectorAll(".header-text");
     // root element with its computed styles, will be used to get the css custom properties
     var r = document.querySelector(':root');
     var rs = getComputedStyle(r);

     const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
               if (entry.isIntersecting) {
                    headerTexts.forEach((text) => {
                         text.animate({
                              color: rs.getPropertyValue('--bg'),
                         }, { duration: 1000, fill: "forwards" });
                    });
               } else {
                    headerTexts.forEach((text) => {
                         text.animate({
                              color: rs.getPropertyValue('--white'),
                         }, { duration: 1000, fill: "forwards" });
                    });
               }
          })
     }, options);

     // .white Element is going to be observed
     const elements = document.querySelectorAll(".white");
     elements.forEach(element => {
          observer.observe(element);
     });
}