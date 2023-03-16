import { useEffect } from 'react';
import { useMouseTrailer } from './components/MouseTrailer/useMouseTrailer';
import { useHoverableOpacity } from './hooks/useHoverableOpacity';
import { useHoverableTitleOpacity } from './hooks/useHoverableTitleOpacity';

import Header from './components/Header/Header';
import MouseTrailer from './components/MouseTrailer/MouseTrailer';
import ContactBtn from './components/ContactBtn/ContactBtn';
import MyProjectsCTA from './components/MyProjectsCTA/MyProjectsCTA';
import MyProjects from './components/MyProjects/MyProjects';

function App() {

  useEffect(() => {
    let isMobile = window.matchMedia("only screen and (min-width: 1000px)").matches;
    if (isMobile) {
      useMouseTrailer();
      useHoverableOpacity();
      useHoverableTitleOpacity();
    }
  }, []);

  return (

    <div className="App">
      {/* Header */}
      <Header />

      {/* Hero */}
      <div className="hero inside">
        <MouseTrailer />
        <div className="borders">
          <div className="heroContainer">
            <h1 className="interactable">Hello there! I'm Joaquín, and I specialize in front-end web development. With a keen eye for design, I enjoy crafting beautiful and interactive experiences that are both visually appealing and functional.
              <br />
              <br />
              <ContactBtn />
            </h1>
            <MyProjectsCTA />
          </div>
        </div>
      </div>

      {/* Projects */}
      <MyProjects />
      <div className="container outside">
        <h1 className="hoverable-opacity">Boberwatch</h1>
      </div>

      {/* white container */}
      <div className="container white" id="white">
        <h1 className="interactable">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, earum.</h1>
      </div>

    </div>

  )
}

export default App;
