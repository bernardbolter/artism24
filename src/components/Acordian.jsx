import { useState, useRef } from 'react'
import Minus from '../svg/minus'

const Accordian = ({ faq, even }) => {
    const [accordianOpen, setAccordianOpen] = useState(false)
    const contentHeight = useRef()

    return (
        <div className="accordian-container">
            <div 
                className="accordian-headline"
                onClick={() => setAccordianOpen(!accordianOpen)}
            >
                <h2>{faq.headline}</h2>
                <div className="faq-svg">
                    <Minus accordianOpen={true} />
                    <Minus accordianOpen={accordianOpen} />
                </div>
            </div>
            <div 
                className={accordianOpen ? "accordian-text accodrian-text-open" : 'accordian-text'}
                ref={contentHeight}
                style={
                    accordianOpen
                    ? { height: contentHeight.current.scrollHeight }
                    : { height: '0px' }
                }   
            >
                <p>{faq.text}</p>
            </div>
        </div>
    )
}

export default Accordian