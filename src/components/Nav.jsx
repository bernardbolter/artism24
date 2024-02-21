"use client"

import { useContext, useState, useEffect } from "react"
import { ArtContext } from "../providers/ArtProvider"

import { Link } from 'react-scroll'

import { useAnimate, stagger, motion, useScroll, useMotionValueEvent } from "framer-motion"
import { useWindowSize } from "../helpers/useWindowSize"

import vars from '../styles/vars.module.scss'

const staggerMenuItems = stagger(0.1, { startDelay: 0.15 });

const Nav = () => {
    const [art, setArt] = useContext(ArtContext)
    const { scrollY } = useScroll()
    const size = useWindowSize()
    const [navPosition, setNavPosition] = useState({ top: 'auto', bottom: 20, position: 'absolute'})
    const [linksPosition, setLinksPosition] = useState({ top: 'auto', bottom: 49, position: 'absolute'})
    const [scope, animate] = useAnimate()

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > ( size.height - 140 )) {
            setNavPosition({ top: 60, bottom: 'auto', position: 'fixed'})
            setLinksPosition({ top: 80, bottom: 'auto', position: 'fixed'})
        } else {
            setNavPosition({ top: 'auto', bottom: 20, position: 'absolute'})
            setLinksPosition({ top: 'auto', bottom: 49, position: 'absolute'})
        }
        if (latest > (size.height * 2) - 100 && latest < (size.height * 3) - 100) {
            setArt(state => ({ ...state, brandColor: false }))
        } else {
            setArt(state => ({ ...state, brandColor: true }))
        }
    })

    useEffect(() => {
        animate(
            "ul",
            { translateX: art.navOpen ? -100 : 0},
            { type: "spring", bounce: 0, duration: 0.5}
        )
        animate(
            "li",
            art.navOpen
              ? { opacity: 1, scale: 1, filter: "blur(0px)" }
              : { opacity: 0, scale: 0.3, filter: "blur(4px)" },
            {
              duration: 0.2,
              delay: art.navOpen ? staggerMenuItems : 0,
            }
          );
    }, [art.navOpen])

    return (
        <motion.nav 
            className="nav-container"
            
            ref={scope}   
        >
            <div 
                className="nav-menu"
                style={navPosition}
                onClick={() => setArt(state => ({ ...state, navOpen: !state.navOpen }))}    
            >
                <div className={art.navOpen ? 'nav-spans nav-spans-open' : 'nav-spans'}>
                    <span 
                        className="span-top"
                        style={{background: art.brandColor ? vars.brand : vars.compliment}}
                    />
                    <span 
                        className="span-middle"
                        style={{background: art.brandColor ? vars.brand : vars.compliment}}
                    />
                    <span 
                        className="span-bottom"
                        style={{background: art.brandColor ? vars.brand : vars.compliment}}
                    />
                </div>
            </div>
            <ul 
                className="nav-links"
                style={linksPosition}    
            >
                <li
                    style={{color: art.brandColor ? vars.brand : vars.compliment}}
                    onClick={() => {

                    }}
                >
                    <Link to="about" spy={true} smooth={true} duration={500}>
                        about
                    </Link>
                </li>
                <li
                    style={{color: art.brandColor ? vars.brand : vars.compliment}}
                >
                    <Link to="showcase" spy={true} smooth={true} duration={500}>
                        showcase
                    </Link>
                </li>
                <li
                    style={{color: art.brandColor ? vars.brand : vars.compliment}}               
                >
                    <Link to="faq" spy={true} smooth={true} duration={500}>
                        FAQ
                    </Link>        
                </li>
                <li
                    style={{color: art.brandColor ? vars.brand : vars.compliment}}               
                >
                    <Link to="contact" spy={true} smooth={true} duration={500}>
                        contact
                    </Link>
                </li>
            </ul>
        </motion.nav>
    )
}

export default Nav