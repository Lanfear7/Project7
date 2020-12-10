import React, { useState } from 'react';
import Photo from './Photo';

const Photos = (props) => {
  //use map to map each photo in the array and add a custom key to each photo
  var data = props.images
  var photos = data.map(photo => <Photo image={photos}/>)
  return(
      <div className="photo-container">
          <h2>Results For {props.title}</h2>
          <ul>
            { photos }
          </ul>
      </div>
  ) 
}

export default  Photos