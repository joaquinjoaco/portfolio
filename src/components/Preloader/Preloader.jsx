export default function Preloader() {
     // remember to add overflow: hidden; on body
     return (
          <div className="preloader" id="preloader">
               <p className="preloader-p">
                    <span className="preloader-animate-opacity" style={{ animationDelay: "0ms" }}>J</span>
                    <span className="preloader-animate-opacity" style={{ animationDelay: "50ms" }}>o</span>
                    <span className="preloader-animate-opacity" style={{ animationDelay: "100ms" }}>a</span>
                    <span className="preloader-animate-opacity" style={{ animationDelay: "150ms" }}>q</span>
                    <span className="preloader-animate-opacity" style={{ animationDelay: "200ms" }}>u</span>
                    <span className="preloader-animate-opacity" style={{ animationDelay: "250ms" }}>í</span>
                    <span className="preloader-animate-opacity" style={{ animationDelay: "300ms" }}>n</span>
                    <span>&nbsp;</span>
                    <span className="preloader-animate-opacity" style={{ animationDelay: "350ms" }}>G</span>
                    <span className="preloader-animate-opacity" style={{ animationDelay: "400ms" }}>ó</span>
                    <span className="preloader-animate-opacity" style={{ animationDelay: "450ms" }}>m</span>
                    <span className="preloader-animate-opacity" style={{ animationDelay: "500ms" }}>e</span>
                    <span className="preloader-animate-opacity" style={{ animationDelay: "550ms" }}>z</span>
               </p>
          </div>
     )
}
