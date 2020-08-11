import React from 'react';
import './App.css';
import logo from './flipimg/logo.png';
function Flip() {
    return (
    <div className="App">
        <div class="flipbody">
        <section>
            <div class="flipcard">
                <div class="flipbox">
                    <div class="flipimgBx">
                        <img src={logo} alt={""}/>
                    </div>
                    <div class="flipcontentBx">
                        <div>
                            <h2>Post Title</h2>
                            <p>abcdefghijklajfdhfureifjdsnirejfi nfjifnjirej</p>
                        </div>

                    </div>

                </div>
            </div>
            
            <div class="flipcard">
                <div class="flipbox">
                    <div class="flipimgBx">
                        <img src={logo} alt={""}/>
                    </div>
                    <div class="flipcontentBx">
                        <div>
                            <h2>Post Title</h2>
                            <p>abcdefghijklajfdhfureifjdsnirejfi nfjifnjirej</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="flipcard">
                <div class="flipbox">
                    <div class="flipimgBx">
                        <img src={logo} alt={""}/>
                    </div>
                    <div class="flipcontentBx">
                        <div>
                            <h2>Post Title</h2>
                            <p>abcdefghijklajfdhfureifjdsnirejfi nfjifnjirej</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="flipcard">
                <div class="flipbox">
                    <div class="flipimgBx">
                        <img src={logo} alt={""}/>
                    </div>
                    <div class="flipcontentBx">
                        <div>
                            <h2>Post Title</h2>
                            <p>abcdefghijklajfdhfureifjdsnirejfi nfjifnjirej</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    </div>
  );
  

}

export default Flip;
