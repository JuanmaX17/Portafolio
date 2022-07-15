import React from 'react'
import "./briefcase.css"
import imgOne from "../../img/rick.jpeg"
import imgTwo from "../../img/latam.jpeg"
import imgThree from "../../img/todo.jpeg"
import imgFour from "../../img/landing1.jpeg"
import imgFive from "../../img/landing2.jpeg"
export function Briefcase() {
    
    const projects = [
        {
            name: "Rick and Morty",
            description: "API rick and morty",
            img: imgOne,
            link: "https://curious-cendol-d90996.netlify.app/"
        },
        {
            name: "Latinoamerica X",
            description: "developed by me and a friend, it was one of the winning projects of the IBSER Hackathon 2022",
            img: imgTwo,
            link: "https://latamx.herokuapp.com/"
        },
        {
            name: "TodoList",
            description: "to do list app",
            img: imgThree,
            link: "https://todolistaweb.herokuapp.com/"
        },
        {
            name: "Landing Page",
            description: "landing, design taken from frontedMentor",
            img: imgFour,
            link: "https://regal-kashata-8e3a08.netlify.app/"
        },
        {
            name: "Landing Page",
            description: "Other landing, design taken from frontedMentor",
            img: imgFive,
            link: "https://effortless-meringue-2661cd.netlify.app/"
        }
        
    ]

    return (
        <main className='main sec2'>
            <section className='briefcase'>
            <h2>developed projects</h2>

            <div className='briefcase__items'>
                
               {
                projects.map((item) => (
                    <article className='briefcase__item' key={item.name}>
                        <div className='briefcase__overlay' style={{backgroundImage: `url(${item.img})`}}>
                        <a href={item.link} className='overlay-a'> </a>
                        </div>
                        <div className='briefcase__text'>
                            <h4 className='briefcase__name'>{item.name}</h4>
                            <p className='briefcase__desc'>{item.description}</p>
                        </div>
                    </article>
                ))
               }

         
            </div>  
            </section>
        </main>
    );
}