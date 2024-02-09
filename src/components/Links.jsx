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
            <a href="">
                <Instagram 
                    fill={art.showPhone ? vars.compliment :vars.brand }
                />
            </a>
            <a href="">
                <Twitter
                    style={{ paddingLeft: '3px' }}
                    fill={art.showPhone ? vars.compliment :vars.brand }
                />
            </a>
            <a href="">
                <Linkedin 
                    fill={art.showPhone ? vars.compliment :vars.brand }
                />
            </a>
        </div>
    )
}

export default Links