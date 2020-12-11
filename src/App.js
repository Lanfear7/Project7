import React, { Component } from 'react';
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch
} from 'react-router-dom'
import './App.css';
import Nav from './components/Nav'
import Photos from './components/Photos';
import Search from './components/search';
import SearchError from './components/SearchError'
import axios from 'axios'
import APIKey from './components/config'


export default class App extends Component {
  constructor() {
    super();
    this.state = {
      ApiKey: APIKey,
      search: 'cats',
      images: []
    }
  }

  componentDidMount(){
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${this.state.ApiKey}&tags=${this.state.search}&per_page=24&format=json&nojsoncallback=1`)
    .then(res => {
      res = res.data.photos.photo
      this.setState({
        images: res
      })
    })
  }

  render(){
    return(
      <div className='container'>
        <BrowserRouter>
          <Search />
          <Nav />
          <Route path="/" render={ () => <Redirect to="/Cats"/>} />
          <Switch>  
            <Route path="/Cats" render={ () => <Photos images={this.state.images} title="Cats"/>} />
            <Route path="/Dogs" render={ () => <Photos images={this.state.images} title="Dogs"/>} />
            <Route path="/Computers" render={ () => <Photos images={this.state.images} title="Computers"/>}/>
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}


