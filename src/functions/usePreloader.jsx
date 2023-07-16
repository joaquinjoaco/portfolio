export const usePreloader = () => {
     var loader = document.getElementById("preloader");

     window.addEventListener("load", () => {
          loader.style.display = "none";
          document.body.style.overflow = "unset";
     })

}