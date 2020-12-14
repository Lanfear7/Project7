import React from 'react'

const Photo = (props) => {  
    const url = `https://live.staticflickr.com/${props.image.server}/${props.image.id}_${props.image.secret}.jpg`;
    return(
        <li>
            <img src={url}/>
        </li>
    )
}

export default Photo