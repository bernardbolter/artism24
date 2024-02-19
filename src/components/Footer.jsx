import { useContext } from 'react'
import { ArtContext } from '../providers/ArtProvider'

import Impressum from './Impressum'

let currentYear = new Date().getFullYear()

const Footer = () => {
    const [art, setArt] = useContext(ArtContext)

    return (
        <footer className="footer-container">
            <h2>ARTISM &#169; {currentYear}</h2>
            <div className="footer-links">
                <p 
                    onClick={() => setArt(state => ({ 
                        ...state, 
                        datenschutzOpen: !state.datenschutzOpen
                    }))}
                >Datenschutz</p>
                <p
                    onClick={() => setArt(state => ({
                        ...state,
                        impressumOpen: !state.impressumOpen
                    }))}
                >Impressum</p>
            </div>
            <Impressum />
        </footer>
    )
}

export default Footer