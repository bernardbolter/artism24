import { useContext } from "react"
import { ArtContext } from "../providers/ArtProvider"
import { motion } from 'framer-motion'

import Close from "../svg/close"

const Impressum = () => {
    const [art, setArt] = useContext(ArtContext)

    return (
        <motion.section 
            className="impressum-container"
            initial={{ translateX: 0}}
            animate={{ translateX: art.impressumOpen ? 0 : 310 }}
            exit={{ translateX: 0 }}
            transition={{ duration: .5 }}     
        >
            <div 
                className="modal-close"
                onClick={() => setArt(state => ({ ...state, impressumOpen: false }))}    
            >
                <Close />
            </div>
            <div className="impressum-content">
                <h1>IMPRESSUM</h1>
                <h2>AUTOR DIESES INTERNETANGEBOTES</h2>
                <h2 className="spacer">UND INHABER VON ARTISM</h2>
                <h5>Bernard John Bolter IV</h5>
                <h5>Markgrafendamm 18</h5>
                <h5>10245 Berlin</h5>
                <h4>email: bernardbolter@gmail.com</h4>
                <h5>DE: +49 (0)151 4749 1553</h5>
                <h5>US: +1 415 490 7702 <span>what&#39;s app, telegram, and signal</span></h5>
                <h4>Steuer Nr. 15/235/05740</h4>
            </div>
        </motion.section>
    )
}

export default Impressum