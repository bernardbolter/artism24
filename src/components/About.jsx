'use client'

import { useContext } from "react"
import { ArtContext } from "../providers/ArtProvider"

import { Element } from 'react-scroll'

import ARphone from '../svg/ar-phone'
import Cubes from '../../public/images/cubes.png'

const About = () => {
    const [art, setArt] = useContext(ArtContext)
    
    return (
        <Element 
            name="about" 
            className="about-container"
            style={{
                backgroundImage: `url(${Cubes})`,
                backgroundRepeat: 'repeat'
            }}
        >
            <div className="about-top" />
            <div className="about-elements">
                <h1>Collaborate. Create. Transform.</h1>
                <h2>ARTISM collaborates with artists and designers to seamlessly integrate web-based AR enhancements onto their creations.</h2>
                <h3>Together, we explore meaningful enhancements that go beyond surface-level animations, unlocking the true potential of AR.</h3>
                <h4>Browser based,</h4>
                <h4>no App required.</h4>
                <h5>just imagination and collaboration</h5>
                <p>Browse examples, read FAQs, and reach out via the contact form below.</p>
                <p>Let&#39;s collaborate and pioneer together in this brave new world of augmented reality.</p>
                <div className="about-phone">
                    <ARphone />
                </div>
            </div>
            <div className="about-bot-1" />
            <div className="about-bot-2" />
            <div className="about-bot-3" />
        </Element>
    )
}

export default About