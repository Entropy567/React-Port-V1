import "./About.css"
import Foot from "./footer.jsx"
import {Link} from "react-router-dom";
function About(){
  return (
  <div className="AboutBod">

  <div className="AboutMeBod">
  <h1>About me.</h1>
  <h2>Name: Jeman.</h2>
  <h2>I'm a web developer.</h2>
  </div>

  <div className="AboutTxt">
  <div style={{width:"100%",display:"flex",justifyContent:"center",fontFamily: "'Yesteryear', cursive",color: "#F05945"}}><h3 style={{margin:"10px",fontSize:"30px"}}>Skills:</h3></div>
  <hr style={{color:"#5EAAA8"}}/>
  <h3>
  <p style={{marginLeft:"20px",color:"#FF4C29",display:"inline"}}>HTML,</p>
  <p style={{marginLeft:"20px",color:"#003638",display:"inline"}}>CSS,</p>
  <p style={{marginLeft:"20px",color:"#FFB830",display:"inline"}}>JS</p>
  </h3>
  <h3>
  <p style={{marginLeft:"20px",color:"navy",display:"inline"}}>jQuery,</p>
  <p style={{marginLeft:"20px",color:"#BD4B4B",display:"inline"}}>EJS,</p>
  <p style={{marginLeft:"20px",color:"green",display:"inline"}}>Node.JS,</p>
  <p style={{marginLeft:"20px",color:"blue",display:"inline"}}>React.JS</p>
  </h3>
  <h3 style={{marginLeft:"20px",color:""}}>API's</h3>
  <h3 style={{marginLeft:"20px",color:""}}>*Linux</h3>
  <h3 style={{marginLeft:"20px",color:""}}>Version COntrol</h3>
  <h3>
  <p style={{marginLeft:"20px",color:"orange",display:"inline"}}>*SQL</p>
  </h3>
  <h3>
  <p style={{marginLeft:"20px",color:"#055052",display:"inline"}}>*Mongo DB,</p>
  <p style={{marginLeft:"20px",color:"brown",display:"inline"}}>*mongoose</p>
  </h3>
  <h3 style={{marginLeft:"20px",display:"inline"}}>["*" = still practicing]</h3>
  </div>

  <div className="AboutOps">
  <Link to="/">
<button>Home.</button>
</Link>
<Link to="/projects">
<button><p style={{float:"left",display:"inline",margin:"0"}}>works.</p><p style={{float:"left",display:"inline",margin:"0",color:"purple"}}>5 for now</p></button>
</Link>
<Link to="/contact">
<button>contact.</button>
</Link>
  </div>

  <Foot/>

  </div>
  )
}
export default About;
