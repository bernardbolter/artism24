'use client'

import { useEffect, useContext, useState } from "react"
import { ArtContext } from "../providers/ArtProvider"
import { useWindowSize } from '../helpers/useWindowSize'
import vars from '../styles/vars.module.scss'
import texts from '../styles/text.json'
import backgrounds from '../styles/background.json'

const Hero = () => {
    const [art, setArt] = useContext(ArtContext)
    const [text, setText] = useState(texts[Math.floor(Math.random()*texts.length)])
    const [background, setBackground] = useState(backgrounds[Math.floor(Math.random()*backgrounds.length)])
    const size = useWindowSize()

    useEffect(() => {

    }, [])
    
    useEffect(() => {
        window.addEventListener('pointermove', handleCursorMove)

        return () => window.removeEventListener('pointermove', handleCursorMove)
    })

    useEffect(() => {
        if (size.width < 769) {
            setArt(state => ({ 
                ...state, 
                phoneWidth: 187, 
                phoneHeight: 338,
                phoneBotPad: 28

            }))
        }  else {
            setArt(state => ({ 
                ...state, 
                phoneWidth: 245, 
                phoneHeight: 460,
                phoneBotPad: 34
            }))
        }
    }, [size])

    const handleCursorMove = pos => {
        let x = pos.client / window.innerWidth * 100
        let y = pos.clientY / window.innerHeight * 100

        let phoneOffsetX = (pos.clientX / size.width) * art.phoneWidth
        let phoneOffsetY = (pos.clientY / size.height) * art.phoneHeight

        setArt(state => ({
            ...state,
            phoneX: pos.clientX - phoneOffsetX,
            phoneY: pos.clientY - phoneOffsetY
        }))
    }
    
    return (
        <section 
        className="hero-container"
      >
          {art.showPhone && (
            <>
                <div className="phone">
                <img 
                    src={size.width < 769 ? "/phone_l.png" : "/phone-mask_xl.png"}
                    alt="phone case" 
                    style={{ 
                        transform: `translate(${art.phoneX}px, ${art.phoneY}px)`,
                        top: -5,
                        left: 0
                    }}
                    onClick={() => art.showPhone ? setArt(state => ({ ...state, showPhone: false })) : null}   
                />
                </div>
                <div 
                    className="phone-mask"
                    style={{
                        transform:`translateX(${art.phoneX}px)`,
                        left: '-100%'
                        // left
                    }}
                />
                <div 
                    className="phone-mask"
                    style={{
                        transform:`translateX(${art.phoneX}px)`,
                        left: art.phoneWidth - 15
                        // right
                    }}
                />
                <div 
                    className="phone-mask"
                    style={{
                        transform:`translateY(${art.phoneY}px)`,
                        top: '-100vh'
                        // top
                    }}
                />
                <div 
                    className="phone-mask"
                    style={{
                        transform:`translateY(${art.phoneY}px)`,
                        top: art.phoneHeight
                        // bottom
                    }}
                />
                <div 
                    className="phone-corner top-left"
                    style={{
                        transform: `translateX(${art.phoneX - 7}px) translateY(${art.phoneY - 12}px)`,
                        // top-left
                    }}
                />
                <div 
                    className="phone-corner top-right"
                    style={{
                        transform: `translateX(${art.phoneX + (art.phoneWidth - 46)}px) translateY(${art.phoneY - 12}px)`,
                        // top-right
                    }}
                />
                <div 
                    className="phone-corner bottom-left"
                    style={{
                        transform: `translateX(${art.phoneX - 7}px) translateY(${art.phoneY + (art.phoneHeight - art.phoneBotPad)}px)`,
                        // bottom-left
                    }}
                />
                <div 
                    className="phone-corner bottom-right"
                    style={{
                        transform: `translateX(${art.phoneX + (art.phoneWidth - 46)}px) translateY(${art.phoneY + (art.phoneHeight - art.phoneBotPad)}px)`,
                        // bottom-left
                    }}
                />

                <div 
                    className='colorful name'
                    style={background}
                >
                    <h1 style={text}>
                        <span className='art'>ART</span>
                        <span className='ism'>ISM</span>
                    </h1>
                </div>
            </>
          )}
     
          <div 
              className="plain name"
              style={{ opacity: art.showPhone ? .5 : 1 }}
          >
            <h1>
                <span className='art'>ART</span>
                <span className='ism'>ISM</span>
            </h1>
          </div>
          <div className="artism-tagline">
            <p>web based AR for artists</p>
          </div>
          <div className="showPhoneButton" >
              <h4
                style={{ color: art.showPhone ? vars.compliment : vars.brand }}
                onClick={() => setArt(state => ({ ...state, showPhone: !state.showPhone }))}
              >{art.showPhone ? 'learn more' : 'show more'}</h4>
          </div>
      </section>
    )
}

export default Hero