import "./Home.css";
import Foot from "./footer.jsx"
import {Link} from "react-router-dom";
import {clickonabout,clickonproj,clickoncontact} from "./Functions.jsx";
function Home(){
return(
  <div className="HomeBody">

  <div className="welbod">
  <div className="welcome">
  <h1>Welcome!</h1>
  </div>
  <div className="thisis">
  <h2>-TO MY PORTFOLIO-</h2>
  </div>
  </div>

  <div className="options">
  <Link to="/about">
<button>about.</button>
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
export default Home;
