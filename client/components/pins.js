import React, { Component } from 'react';
import axios from 'axios';
import Pin from './Pin';
import Grid from '@material-ui/core/Grid'

class Pins extends Component {

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
    const y = entities[0].boundingClientRect.y
    if(this.state.previousPosition > y) {
      const curPage = this.state.page + 1
      this.fetchImages(curPage)
      this.setState( { page: curPage })
    }
    this.setState( { previousPosition: y })
  }

  fetchImages(page) {
    this.setState({ loading: true })
    axios
      .post(`/`, {page: page, limit: 10})
      .then(res => {
        this.setState( {pins: [...this.state.pins, ...res.data] })
        this.setState( { loading: false } )
    })
  }


  render() {
    const myStyle = {
      imageBatch: {
          // display: flex,
          alignItems: "center",
          justifyContent: "center"
      }
    }

    const loadingStyle = {
      height: "100px",
      margin: "30px"
    }



    const loadingTextStyle = {display: this.state.loading ? "block" : "none" }


    return (
      <div className="container" style={{padding: "20px"}}>
        <Grid container justify="center" style={{ paddingLeft: "20px"}}>
          {this.state.pins.map(pin => (
              <Pin key={pin.id} image={pin} style={{margin: 2}}/>
            ))}
        </Grid>
        <div ref={loadingRef => (this.loadingRef = loadingRef)} style={loadingStyle}>
          <span style={loadingTextStyle}>Loading...</span>
        </div>
      </div>
    );
  }
}


export default Pins;
