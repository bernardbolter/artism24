'use client'

import LogoIcon from '../svg/logo'
import { animateScroll } from 'react-scroll'

const options = {
    duration: 500,
    smooth: true,
  }

const Logo = () => {
    return (
        <div 
            className="logo-container"
            onClick={() => animateScroll.scrollToTop(options)}    
        >
            <LogoIcon />
        </div>
    )
}

export default Logo