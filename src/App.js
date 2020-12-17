import React, { Component } from 'react';
import { useHistory } from "react-router-dom";
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
      searchCats: 'cats',
      searchDogs: 'dogs',
      searchComputers: 'computers',
      imagesCats: [],
      imagesDogs: [],
      imagesComputers: [],
      images: [],
      loading: true,
      searchText: ''
    }
  }




  searchCats = () => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${this.state.ApiKey}&tags=${this.state.searchCats}&per_page=24&format=json&nojsoncallback=1`)
    .then(res => {
      res = res.data.photos.photo
      this.setState({
        imagesCats: res,
        loading: false
      })
    }).catch(err => {
      this.setState({
        error: err
      })
      console.log('error')
    })
  }


  searchDogs = () => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${this.state.ApiKey}&tags=${this.state.searchDogs}&per_page=24&format=json&nojsoncallback=1`)
    .then(res => {
      res = res.data.photos.photo
      this.setState({
        imagesDogs: res,
        loading: false
      })
    }).catch(err => {
      this.setState({
        error: err
      })
      console.log('error')
    })
  }


  searchComputers = () => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${this.state.ApiKey}&tags=${this.state.searchComputers}&per_page=24&format=json&nojsoncallback=1`)
    .then(res => {
      res = res.data.photos.photo
      this.setState({
        imagesComputers: res,
        loading: false
      })
    }).catch(err => {
      this.setState({
        error: err
      })
      console.log('error')
    })
  }


  searchImages = (query = 'vacations') => {
      console.log(query)
      axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${this.state.ApiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(res => {
        res = res.data.photos.photo
        this.setState({
          images: res,
          loading: false
        })
      })
  }
  

  componentDidMount(){
    this.searchCats()
    this.searchDogs()
    this.searchComputers()
    if(window.location.pathname.includes('Search/')){
      this.searchImages(window.location.pathname.slice(8,20))
    }
  }

  render(){
    return(
      <div className='container'>
        <BrowserRouter>
          <Search onSearch={this.searchImages}/>
          <Nav />
          { (this.state.loading) //provide a loading message 
          ? <p>Loading...</p>
          :
          <Switch>
            <Route exact path="/" render={ () => <Redirect to="/Cats"/>} />  
            <Route path="/Cats" render={ () => <Photos images={this.state.imagesCats} title="Cats"/> } />
            <Route path="/Dogs" render={ () => <Photos images={this.state.imagesDogs} title="Dogs"/> } />
            <Route path="/Computers" render={ () => <Photos images={this.state.imagesComputers} title="Computers"/> } />
            <Route path="/Search/:query" render={ () => <Photos images={this.state.images}/> } />
            <Route render={() => <SearchError />}/>
          </Switch>}
        </BrowserRouter>
      </div>
    )
  }
}


