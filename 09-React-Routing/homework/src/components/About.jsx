import Logo from '../img/logoHenry.png'
import React from 'react';


const About = () => (

    <div className='aboutApp'>
        <h4 className='aboutTitle'>About Weather App!</h4>
        <p classname='aboutMe'>Hi, I am Vanesa Rodriguez! I'm currently a Full Stack Developer in development,</p>
        <p classname='aboutMe'>and this is my first App created with React using the openweathermap.org API.</p> 
        <p classname='aboutMe'>If you would like to learn to create and make apps like this, go to www.soyhenry.com.</p> 
        <p classname='aboutMe'>And if you want to contact with me, all my information is in my Linkedin </p>
        <img id="logoHenry" src={Logo} className='logoHenry' alt='Icono no encontrado'/>
    </div>
);

export default About;