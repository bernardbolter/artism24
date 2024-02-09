'use client'

import { useContext } from "react"
import { ArtContext } from "../providers/ArtProvider"

import { Element } from 'react-scroll'

const Showcase = () => {
    const [art, setArt] = useContext(ArtContext)
    
    return (
        <Element name="showcase" className="showcase-container">
            <div>Showcase</div>
        </Element>
    )
}

export default Showcase