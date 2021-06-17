import React, { Component } from 'react';
import axios from 'axios';
import Pin from './Pin';

export class Pins extends Component {

  constructor(){
    super()
    this.state = {
      pins: [],
      pinner: "",
      likeCount: null,
      commentCount: null,
      loading: false,
      page: 0,
      previousPosition: 0,
      createdAt: ""
    };
  }


  componentDidMount() {
    this.fetchImages(this.state.page)
    let options = {
      root: null,
      rootMargin: "0px",
      threshold: 1.0
    }
    this.observer = new IntersectionObserver(this.handleObserver.bind(this), options)
    this.observer.observe(this.loadingRef)
  }

  handleObserver(entities, observer){
    const y = entities[0].boundClientRect.y
    if(this.state.previousPosition > y) {
      const lastPhoto = this.state.pins[this.state.pins.length -1]
      const curPage = lastPhoto.id
      this.fetchImages(curPage)
      this.setState( { page: curPage })
    }
    this.setState( { previousPosition: y })
  }

  async fetchImages(page) {
    this.setState({ loading: true })
    let res = await axios.get(`.api/photos?page=${page}$limit=20`)
    this.setState( {pins: [...this.state.pins, ...res.data] })
    this.setState( { loading: false } )
  };

  render() {

    const loadingStyle = {
      height: "100px",
      margin: "30px"
    }

    const loadingTextStyle = {display: this.state.loading ? "block" : "none" }


    return (
      <div className="container">
        <div style={{ minHeight: "800px" }}>
          {this.state.pins.map(pin => (
            <Pin key={pin.id} image={pin.images["136x136"]} />
          ))}
        </div>
        <div ref={loadingRef => (this.loadingRef = loadingRef)} style={loadingStyle}>
          <span style={loadingTextStyle}>Loading...</span>
        </div>
      </div>
    );
  }
}

export default Images;
