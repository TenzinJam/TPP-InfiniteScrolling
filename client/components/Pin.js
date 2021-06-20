import React from 'react';
// import Box from '@material-ui/core/Box'
// import { borders } from '@material-ui/system'

const myStyle = {
  image: {
    height: "200px",
    width: "15%",
    borderRadius: 150/2,
    boxShadow: "grey",
    padding: "40px",
    shadowOffset: { width: 10, height: 10 },
    shadowColor: "grey",
    borderWidth: 1,
    borderColor: "#689451"
  }
}
export default function Pin({ image }) {
  return (
    <div style={myStyle.image}>
      <img  src= {image} />
    </div>
  )
}


