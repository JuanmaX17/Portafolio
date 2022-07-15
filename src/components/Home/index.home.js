import React from 'react'
import me from "../../img/me.jpeg"
import "./home.css"


export function Home() {
    

    return (
  
        <main className='main sec1'>
            <div className='home'>
                <h1 className='home__title'><div className='hi'>Hi!,</div>Im <span >Juan Manuel Vargas</span>,<div></div> Web <span className='hi'>Developer</span></h1>
                <a href="https://wa.me/3054040360" target={"_black"}><button className='home__button'>Contact me</button></a>
            </div>

            <div className='picture'>
                <figure className='picture__figure'>
                    <img className='picture__me' src={me} alt="me"></img>
                </figure>
            </div>
        </main>


        
    );
}