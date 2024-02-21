'use client'

import { useContext } from "react"
import { ArtContext } from "../providers/ArtProvider"
import { motion } from 'framer-motion'

import { useWindowSize } from '../helpers/useWindowSize'

import Video from './Video'

import { Element } from 'react-scroll'

const Showcase = () => {
    const [art, setArt] = useContext(ArtContext)
    const size = useWindowSize()
    
    return (
        <Element name="showcase" className="showcase-container">
            <h1>Showcase</h1>
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