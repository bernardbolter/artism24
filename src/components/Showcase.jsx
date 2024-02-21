'use client'

import { useContext } from "react"
import { ArtContext } from "../providers/ArtProvider"
import { motion } from 'framer-motion'

import { useWindowSize } from '../helpers/useWindowSize'

import Video from './Video'
import Arrow from "../svg/arrow"

import { Element } from 'react-scroll'

import vars from '../styles/vars.module.scss'

const Showcase = () => {
    const [art, setArt] = useContext(ArtContext)
    const size = useWindowSize()
    
    return (
        <Element name="showcase" className="showcase-container">
            <div className="showcase-header">
                <h1>Showcase</h1>
                <div className="showcase-nav">
                    <div
                        style={{
                            display: art.videoIndex === 0 ? 'none' : 'flex'
                        }}
                        className="video-left video-control"
                        onClick={() => setArt(state => ({ ...state, videoIndex: state.videoIndex - 1 }))}    
                    >
                        <Arrow />
                    </div>
                    {art.videos.map((video, i) => (
                        <div 
                            className="video-dot" 
                            key={i} 
                            style={{
                                background: art.videoIndex === i ? vars.success : vars.compliment
                            }}
                        />
                    ))}
                    <div
                        style={{
                            display: art.videoIndex > art.videos.length - 2 ? 'none' : 'flex'
                        }}
                        className="video-right video-control"
                        onClick={() => setArt(state => ({ ...state, videoIndex: state.videoIndex + 1 }))}
                    >
                        <Arrow />
                    </div>
                </div>
            </div>
            
            <motion.div
                initial={{ left: 0}}
                animate={{ left: -size.width * art.videoIndex }}
                className="videos-container"
                style={{ width: art.videos.length * size.width }}      
            >
                {art.videos.map((video, i) => (
                    <Video video={video} key={i} />
                ))}
            </motion.div>
        </Element>
    )
}

export default Showcase