import React, { Component } from "react"
import axios from "axios"
import data from "../server/data"

class Scroll extends Component {

  constructor(){
    super()
    this.state = {
      photos: [],
      pinner: "",
      likeCount: null,
      commentCount: null,
      loading: false,
      page: 0,
      previousPosition: 0
    }
  }

  componentDidMount(){
    this.getPhotos(this.state.page)

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
      const lastPhoto = this.state.photos[this.state.photos.length -1]
      const curPage = lastPhoto.id
      this.getPhotos(curPage)
      this.setState( { page: curPage })
    }
    this.setState( { previousPosition: y })
  }


  async getPhotos(page){
    this.setState({ loading: true })
    let res = await axios.get(`./data?_page=${page}&_limit=10`)
    this.setState({ photos: [...this.state.photos, ...res.data]})
    this.setState({ loading: false })
  }

  render(){
    const loadingStyle = {
      height = "100px",
      margin: "30px"
    }

    const loadingTextStyle = {display: this.state.loading ? "block" : "none"}

    return (
      <div className="container">
        <div style={{ minHeight: "800px" }}>
          {this.state.photos.map(user => (
            <img src={user.url} height="100px" width="200px" />
          ))}
        </div>
        <div
          ref={loadingRef => (this.loadingRef = loadingRef)} style={loadingStyle}
        >
          <span style={loadingTextStyle}>Loading...</span>
        </div>
      </div>
    );
  }
}
