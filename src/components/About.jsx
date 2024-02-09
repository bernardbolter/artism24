'use client'

import { useContext } from "react"
import { ArtContext } from "../providers/ArtProvider"

import { Element } from 'react-scroll'

const About = () => {
    const [art, setArt] = useContext(ArtContext)
    
    return (
        <Element name="about" className="about-container">
            <div className="about-top" />
            <h1>About</h1>
            <div className="about-bot-1" />
            <div className="about-bot-2" />
            <div className="about-bot-3" />
        </Element>
    )
}

export default About