"use client"

import React, { useState, createContext } from 'react'

import videos from '../data/videos.json'
import faq from '../data/faq.json'

export const ArtContext = createContext()

const ArtProvider = ({ children }) => {
    const [art, setArt] = useState({
        showPhone: false,
        phoneX: 0,
        phoneY: 0,
        phoneWidth: 0,
        phoneHeight: 0,
        phoneBotPad: 0,
        navOpen: false,
        datenschutzOpen: false,
        impressumOpen: false,
        datenDisplay: 'none',
        brandColor: true, 

        faq: faq,
        videos: videos,
        videoIndex: 0
    })
    
    return (
        <ArtContext.Provider
            value={[art, setArt]}
        >
            {children}
        </ArtContext.Provider>
    )
}

export default ArtProvider