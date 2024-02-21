import { useContext } from "react"
import { ArtContext } from "../providers/ArtProvider"

import { useWindowSize } from "../helpers/useWindowSize" 

import Arrow from "../svg/arrow"

const Video = ({ video }) => {
    const [art, setArt] = useContext(ArtContext)
    const size = useWindowSize()

    return (
        <div 
            className="video-container"
            style={{ width: size.width }}
        >
            <div className="video-info">
                <video muted controls src={video.video} poster="/images/megacities_poster.png" />
                <div className="video-text">
                    <h2>{video.about}</h2>
                    <h4>{video.text}</h4>    
                </div>
            </div>
        </div>
    )
}

export default Video