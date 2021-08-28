import "./Contact.css";
import Foot from "./footer.jsx"
import {Link} from "react-router-dom";
function Contact(){
  const Mailto = ({ email, subject = '', body = '', children }) => {
  let params = subject || body ? '?' : '';
  if (subject) params += `subject=${encodeURIComponent(subject)}`;
  if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`;

  return <a href={`mailto:${email}${params}`}>{children}</a>;
};
  return(
<div className="ConBod">

<div className="ConMain">
<h1>Contact Me.</h1>
<h2>Ph: 9553925079</h2>
<h2>
<p style={{display:"inline"}}>Mail: </p>
<p style={{display:"inline",fontFamily: "'Yesteryear', cursive",color:"#F05945"}}><Mailto email="mr.j06031997@gmail.com" subject="" body="">mr.j06031997@gmail.com</Mailto></p>
</h2>

</div>


<div className="AboutOps">
<Link to="/">
<button>Home.</button>
</Link>
<Link to="/projects">
<button><p style={{float:"left",display:"inline",margin:"0"}}>works.</p><p style={{float:"left",display:"inline",margin:"0",color:"purple"}}>5 for now</p></button>
</Link>
<Link to="/about">
<button>About.</button>
</Link>
</div>


<Foot/>


</div>
  )
}
export default Contact;
