import { useContext } from "react"
import { ArtContext } from "../providers/ArtProvider"
import vars from '../styles/vars.module.scss'

const Logo = () => {
    const [art] = useContext(ArtContext)

    return (
        <svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path 
                fillRule="evenodd" clipRule="evenodd" 
                d="M0 31V42C0 43.1046 0.895431 44 2 44H30.453V16.25H38.688V44H42C43.1046 44 44 43.1046 44 42V2C44 0.895431 43.1046 0 42 0H19.2167L24.962 31H16.544L15.507 23.863H8.43099L7.33299 31H0ZM4.78433 0H2C0.895431 0 0 0.895432 0 2V25.2693L4.78433 0ZM14.287 15.628H9.65099L12.0183 0.0431509L14.287 15.628Z" 
                fill={art.brandColor ? vars.brand : vars.compliment }
            />
        </svg>
    )
}

export default Logo
