import React from 'react';

import './styles.css'

const LogoWhite = require('../../assets/Unreal_Logo_White.png')
const GitIcon = require('../../assets/giticon.png')
const YouIcon = require('../../assets/youicon.png')
const TwiIcon = require('../../assets/twicon.png')


const About = () => { 
    return(
     <main>
        <header>
            <div className="navbar" align="center"> 
                <div id="about">
                    <a href="/"><h3>home</h3></a>
                </div>
                <div id="work" align="center">
                    <a href="/work"><h3>work community</h3></a>
                </div>
            </div>
        </header>
        <body>
            <div className="content" align="center">
                <div id="title">
                    <h1>Unreal Club</h1>  
                </div>
                <div className="about">
                    <div id="textAbout">
                        <h2>About Us</h2>
                        <div id="text">
                            <p>
                                we're friends doing all kinds of art out of nowhere.
                            </p>
                            <p id="tucaraio">
                                may tucaraio bless our jorney
                            </p>
                        </div>
                    </div>
                    <div id="members">
                        <h2>members</h2>
                        <a href="https://www.youtube.com/channel/UCp14hU-H_v9Q8atI4ibVWjg"><img src={ YouIcon } width="25px" height="20px"/><p>FER;</p></a>
                        <a href="https://www.youtube.com/channel/UCb26gRloDs1UcBKdjeEH1wQ"><img src={ YouIcon } width="25px" height="20px"/><p>AZAM;</p></a>
                        <a href="https://www.youtube.com/channel/UC7HN7iScRH3-c01IRS9ZT8g"><img src={ YouIcon } width="25px" height="20px"/><p>ANDDY;</p></a>
                        <a href="https://www.youtube.com/channel/UCT5h9--2NEOS7UwT69a7ryg"><img src={ YouIcon } width="25px" height="20px"/><p>VAT;</p></a>
                        <a href="https://twitter.com/tsundere2D"><img src={ TwiIcon } width="25px" height="25px"/><p>ISA;</p></a>
                        <a href="https://twitter.com/hyunscenario"><img src={ TwiIcon } width="25px" height="25px"/><p>NANA;</p></a>
                        <a href="https://www.youtube.com/channel/UCIQPtgk8mAPzssEnvAiP6rw"><img src={ YouIcon } width="25px" height="20px"/><p>VICSTOR;</p></a>
                        <a href="https://www.youtube.com/channel/UC6csjVFNjZulK6ccocQDaxQ"><img src={ YouIcon } width="25px" height="20px"/><p>ACTIVE;</p></a>
                        <a href="https://www.youtube.com/channel/UCzHG2qwQc82XpZoP1rINe9Q"><img src={ YouIcon } width="25px" height="20px"/><p>LVE;</p></a>
                        <a href="https://www.youtube.com/keave"><img src={ YouIcon } width="25px" height="20px"/><p>KEAVE;</p></a>
                        <a href="https://twitter.com/Stormmz"><img src={ TwiIcon } width="25px" height="25px"/><p>STORMMZ;</p></a>
                        <a href="https://twitter.com/madebykayn"><img src={ TwiIcon } width="25px" height="25px"/><p>KAYN;</p></a>
                        <a href="https://github.com/SaLandini"><img src={ GitIcon } width="25px" height="25px"/><p>SALANDIN</p></a>
                    </div>
                    <div id="social">
                        <h2>follow the club</h2>
                        <p><a href="https://www.youtube.com/channel/UCiKshD8J1ZotpXJmX5ysCgQ">YouTube</a></p>
                        <p><a href="https://www.instagram.com/unreal.club/">Instagram</a></p>
                        <h2>follow the club</h2>
                    </div>
                </div>
                <div className="logo">
                    <img src={LogoWhite} width="100px" />
                </div>
            </div>
        </body>
     </main>   
    )
}

export default About