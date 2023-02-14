import React, { useState } from "react"
import "./album.css"
const Album = (props)=>{

    const [like, setLike] = useState(false)
    const [fill, setFill] = useState("none")
    
    return (
        <div className="card">
            <div className="image">
                <img src={require(`${props.src}`)} alt={props.alt} width="200px" height="200px"/>
                <div className="box">
                <p className="textImage">{props.title}</p>
                </div>
                <p className="album">{props.album}</p>
            </div>
            <div className="description">
                <h1>{props.title}</h1>
                <p className="type">{props.type}</p>
                <h2 className="albumDescription">{props.album}</h2>
                <p className="year">{props.year}</p>
                <div className="like">
                <h3>{props.gener}</h3>
                <button onClick={()=>{
                     setLike(!like)
                     like ? setFill("red"):setFill("none")
                }}><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-heart" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill={fill} stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"></path>
                    </svg></button>
                    </div>
            </div>
        </div>
    )
}

export default Album