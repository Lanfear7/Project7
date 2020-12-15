import React, { useState } from 'react';
import Photo from './Photo';
import SearchError from './SearchError'

const Photos = (props) => {
  //use map to map each photo in the array and add a custom key to each photo
  var data = props.images
  //check to see if there is data from the request
  let photos;
  if(data.length > 0){
    photos = data.map((photo, index) => <Photo image={photo} index={index} key={index}/>)
  }else{
    photos = <SearchError />
  }
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