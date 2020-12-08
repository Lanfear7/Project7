import React, { Component } from 'react';
import './App.css';
import Photos from './components/Photos'
import Nav from './components/Nav'
import Search from './components/search'
import SearchError from './components/SearchError'
import apiKey from './config'

export default class App extends Component {
  constructor(){
    super();
    this.state = { 
      apiResponse: []
     }

  }
  
  //call search pass up props containing the search word
  catSearch = (query = 'dogs') => {
    const cats = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`;
    fetch(cats)
      .then(res => res.json())
      .then(resData => {
        this.setState({
          apiResponse: resData.photos.photo,
        })
      })
  }
  render(){
    console.log(this.state.apiResponse)
    return(
      <div className="App">
        <Search />
        <Nav apiRes={this.state.apiResponse}/>
      </div>
    )
  }
}
