export const switchTheme = (darkTheme, setDarkTheme) => {
     // root element with its computed styles, will be used to get the css custom properties
     var root = document.querySelector(':root');

     if (darkTheme === true) {
          // light theme
          root.style.setProperty('--white', '#111111');
          root.style.setProperty('--bg', '#fff6e5');
          root.style.setProperty('--gray', '#afada6');
          setDarkTheme(false);
          root.animate([
               { opacity: 0.1 },
               { opacity: 1 },
          ], { duration: 500, fill: "forwards" });

     } else {
          // dark theme
          root.style.setProperty('--white', '#fff6e5');
          root.style.setProperty('--bg', '#111111');
          root.style.setProperty('--gray', '#c4c1ba');
          setDarkTheme(true);
          root.animate([
               { opacity: 0.1 },
               { opacity: 1 },
          ], { duration: 500, fill: "forwards" });

     }

}