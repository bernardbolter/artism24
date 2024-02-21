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
            <div
                style={{
                    display: art.videoIndex === 0 ? 'none' : 'flex'
                }}
                className="video-left video-control"
                onClick={() => setArt(state => ({ ...state, videoIndex: state.videoIndex - 1 }))}    
            >
                <Arrow />
            </div>
            <div className="video-info">
                <h2>{video.title}</h2>
                <video muted controls src={video.video} poster="/images/megacities_poster.png" />
                <p>{video.text}</p>
            </div>
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
    )
}

export default Video