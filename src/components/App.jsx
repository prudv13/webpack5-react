import React from 'react'
import WebpackIcon from '../assets/webpack.png';

const App = () => {

    const imgStyling = {
        height: "80px",
        width: "80px",
    }
  return (
    <div>
        <img src={WebpackIcon} style={imgStyling} />
    </div>
  )
}

export default App;