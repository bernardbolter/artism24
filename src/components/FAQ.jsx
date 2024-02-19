'use client'

import { useContext } from "react"
import { ArtContext } from "../providers/ArtProvider"

import Accordian from "./Acordian"

import { Element } from 'react-scroll'

import faqs from '../data/faq.json'

const FAQ = () => {
    const [art, setArt] = useContext(ArtContext)
    
    return (
        <Element name="faq" className="faq-container">
            <h1>Freaquntly Asked Questions</h1>
            <div className="faq-accordians">
                {faqs.map((faq, i) => <Accordian faq={faq} key={i} even={i % 2 === 0} />)}
            </div>
        </Element>
    )
}

export default FAQ