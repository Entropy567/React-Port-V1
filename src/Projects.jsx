import "./Projects.css";
import Foot from "./footer.jsx";
import {Link} from "react-router-dom";
function Proj(){
  return(
<div className="ProjectsBod">

<div className="ProjectsIntro">
<h1 style={{fontSize:"60px"}}>Selected Works</h1>
<h2>-done by me-</h2>
</div>

<div className="ProjList">
<div style={{width:"100%",display:"flex",justifyContent:"center",fontFamily: "'Yesteryear', cursive",color: "#F05945"}}><h3 style={{margin:"10px",fontSize:"30px"}}>List:</h3></div>
<hr style={{color:"#5EAAA8"}}/>
<h3 style={{marginLeft:"20px",display:"inline",lineHeight:"30px"}}><a style={{ textDecoration: "none",color: "inherit"}} href="https://takenotesjk.herokuapp.com" target="_blank">Take Notes</a></h3><br/>
<h3 style={{marginLeft:"20px",display:"inline",lineHeight:"30px"}}><a style={{ textDecoration: "none",color: "inherit"}} href="https://whispering-scrubland-97736.herokuapp.com" target="_blank">To Do list</a></h3><br/>
<h3 style={{marginLeft:"20px",display:"inline",lineHeight:"30px"}}><a style={{ textDecoration: "none",color: "inherit"}} href="https://shrouded-garden-35107.herokuapp.com/" target="_blank">Quiz</a></h3><br/>
<h3 style={{marginLeft:"20px",display:"inline",lineHeight:"30px"}}><a style={{ textDecoration: "none",color: "inherit"}} href="https://boiling-headland-93523.herokuapp.com/" target="_blank">Calculator</a></h3><br/>
<h3 style={{marginLeft:"20px",display:"inline",lineHeight:"30px"}}><a style={{ textDecoration: "none",color: "inherit"}} href="https://damp-ocean-17122.herokuapp.com/" target="_blank">Tribute</a></h3><br/>
<h3 style={{marginLeft:"20px",display:"inline",lineHeight:"30px"}}><a style={{ textDecoration: "none",color: "inherit"}}>A few more Coming .....</a></h3><br/>
</div>

<div className="ProjectOps">
<Link to="/">
<button>Home.</button>
</Link>
<Link to="/about">
<button>about.</button>
</Link>
<Link to="/contact">
<button>contact.</button>
</Link>
</div>
<Foot/>

</div>
  )
}
export default Proj;
