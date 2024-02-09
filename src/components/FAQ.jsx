'use client'

import { useContext } from "react"
import { ArtContext } from "../providers/ArtProvider"

import { Element } from 'react-scroll'

const FAQ = () => {
    const [art, setArt] = useContext(ArtContext)
    
    return (
        <Element name="faq" className="faq-container">
            <div>FAQ</div>
        </Element>
    )
}

export default FAQ