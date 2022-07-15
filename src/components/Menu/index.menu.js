import React from 'react'
import logo from '../../img/logo.jpeg'
import { AiOutlineHome } from 'react-icons/ai';
import { MdEmojiPeople } from 'react-icons/md';
import { SiWhatsapp } from 'react-icons/si';
import { BsGithub, BsFileEarmarkSpreadsheet, BsBriefcase } from 'react-icons/bs';
import CV from "../../CV/site.pdf"
import "./menu.css";

export function Menu({setPage}) {
    

    return (
        <>  
            <nav className='nav nav__verticalLayout'>
                  <figure className='nav__logo'>
                        <a href="/" className='nav__logo'><img src={logo} alt="logo" className='nav__img'></img></a>
                  </figure>


                  <div className='nav__links nav__verticalLayout'>
                        <a onClick={() => setPage("home")} className='nav__link' href='# '><AiOutlineHome width={"1000px"}/></a>
                        <a onClick={() => setPage("about")} className='nav__link' href='# ' ><MdEmojiPeople /></a>
                        <a onClick={() => setPage("briefcase")} className='nav__link' href='# '><BsBriefcase /></a>
                        
                  </div>

                  <div className='nav__netwoks nav__verticalLayout'>
                        <a className='nav__net' href='https://wa.me/3054040360'><SiWhatsapp /></a>
                        <a className='nav__net' href='https://github.com/JuanmaX17'><BsGithub/></a>
                        <a className='nav__net' href={CV} download><BsFileEarmarkSpreadsheet /></a>
                  </div>
            </nav>

        </>
    );
}