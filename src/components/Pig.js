import React from "react"
import exclamation from "../assets/exclamation.png"

export default class Pig extends React.Component {


  panic = () => (<img className="exclamation" src={exclamation} alt="" />)


  render() {
      console.log("props", this.props);
    return(
      <div id={this.props.name} className="sheeple">
          {(this.props.environment==="inhospitable") ? this.panic() : null}
      </div>
    )
  }
}
// exclaim Note7 31
// GalaxySNote7.js:39 before false
// GalaxySNote7.js:22 before Throw a fit false
// PigPen.js:30 altEnvVibe inhospitable
// PigPen.js:35 alterEnvFuncPpen docile
// GalaxySNote7.js:24 after false
// GalaxySNote7.js:22 before Throw a fit true
// PigPen.js:30 altEnvVibe inhospitable
// PigPen.js:35 alterEnvFuncPpen inhospitable
// GalaxySNote7.js:24 after true
