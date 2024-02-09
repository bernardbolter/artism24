"use client"

import { useContext } from "react"
import { ArtContext } from "../providers/ArtProvider"
import vars from '../styles/vars.module.scss'

import Instagram from "../svg/instagram"
import Twitter from "../svg/twitter"
import Linkedin from "../svg/linkedin"

const Links = () => {
    const [art] = useContext(ArtContext)

    return (
        <div className="links-container">
            <a href="https://www.instagram.com/art____ism">
                <Instagram 
                    fill={art.showPhone ? vars.compliment :vars.brand }
                />
            </a>
            <a href="https://twitter.com/art____ism">
                <Twitter
                    style={{ paddingLeft: '3px' }}
                    fill={art.showPhone ? vars.compliment :vars.brand }
                />
            </a>
            <a href="https://www.linkedin.com/in/bernardbolter">
                <Linkedin 
                    fill={art.showPhone ? vars.compliment :vars.brand }
                />
            </a>
        </div>
    )
}

export default Links