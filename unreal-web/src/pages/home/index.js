import React from 'react';

import './styles.css'

var LogoWhite = require('../../assets/Unreal_Logo_White.png');
var LogoRgb = require('../../assets/Unreal_Logo_RGB.png')

const Home = () => { 
    
    return(
        <main>
            <header>
                <div className="navbar" align="center"> 
                    <div id="about">
                        <a href="/about"><h3>about</h3></a>
                    </div>
                    <div id="work" align="center">
                        <a href="/work"><h3>work community</h3></a>
                    </div>
                </div>
            </header>
            <body>
                <div className="content">
                    <div id="identify" align="center">
                        <div id="logo">
                            <img src={ LogoRgb } width="260px" />
                        </div>
                        <div id="name">
                            <h1>Unreal Club</h1>   
                        </div>
                    </div>
                    <div id="frase">
                        <p>Reality might be tough sometimes, but Unreality ain't.</p>
                    </div>
                    <div id="pict">
                        <img src={require('../../assets/background.png')} width="1900px" height="1070px"/>
                    </div>
                </div>    
            </body>      
        </main>
    )
}

export default Home