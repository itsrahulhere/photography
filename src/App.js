import React from 'react';
import './App.css';
import logo from './assets/logo.png';
import toggle from './assets/toggle.png';
import play from './assets/play.png';

function App() {
  return (
    <div className="App">
       <header>
       <a href="#" class="logo"><img src={logo}  /></a>
       <div class="toggle"><img src={toggle}  /></div>
       </header>
      <div class="banner">
        <div class="content">
          <h2>Put on a <span>Happy</span> face</h2>
        <p>
        Lorem Ipsum is simply dummy text of the printing and typesetti
        ng industry. Lorem Ipsum has been the industry's standard dummy text ever sinc
        e the 1500s, when an unknown printer took a galley of type and scrambled it to 
        make a type specimen book. It has survived nf Lorem Ipsum.
        </p>
        <a href="#" class="play" onClick="toggle();" ><img src={play} />Watch Trailer</a>
        <div class="slide"></div>
        <ul class="sci">
          <li><a href="#"><img src={facebook} /></a></li>
          <li><a href="#"><img src={twitter} /></a></li>
          <li><a href="#"><img src={instagram} /></a></li>
        </ul>

        </div>
      </div>
      <div class="trailer">
        <video src="trailer.mp4" controls="true"></video>
        <img src="close" class="close " onClick="toggle();" />
      </div>

        
    </div>
  );
}
function toggle(){
            var trailer = document.querySelector('.trailer');
            var video = document.querySelector('video');
            trailer.classList.toggle('active');
            video.currentTime = 0;
            video.pause();
     }

export default App;
