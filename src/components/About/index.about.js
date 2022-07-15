import React from 'react'
import "./about.css"
import img from "../../img/about.png"
export function About() {
    

    return (
        <main className='main sec3'>
            <article className='about'>

                <h2 className='about__title'>About me</h2>
                <p className='about__p'>I am Juan Manuel Vargas, a student of Computer Engineering at the Unilasallista University Corporation.</p>
                <p className='about__p'>I am passionate about developing web applications, I love challenges, learning, improving and solving problems and needs, I see technology as the promise of an ideal future</p>

            </article>

           <div className='about__ilus'>
            <figure className='about__figure'>
                    <img className='about__img' src={img} alt="img about"></img>
                </figure>
           </div>
        </ main>
    );
}