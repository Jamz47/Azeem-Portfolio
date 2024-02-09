import "./About.css";
import azeem from "../assets/azeem.jpg";
import { Image } from "react-bootstrap";

const About = () => {
  return (
    <div >
      <div className="aboutpage"> 
        <Image className="aboutazeem" src={azeem} rounded />
        <h1 className="abouttilte" id="/about">About Me</h1>
      </div>
      <div className="aboutparag">
        <p className="aboutparagraph">
          Hi! I'm <span>Azeem Rafique</span>,<br />
          As a <span> React Native </span> & <span> MERN </span>
          developer, my introduction can be crafted to highlight my expertise in
          building full-stack web applications and mobile applications. Here's
          an example introduction. I'M Developer, specializing in MERN stack
          technologies and React Native. With a strong background in (MongoDB,
          Express.js, React.js, and Node.js) I have a proven track record of
          delivering robust and scalable web applications. My passion lies in
          creating seamless user experiences, and I bring my expertise to the
          forefront when developing both web and mobile solutions. As a
          proficient MERN and React Native developer, I am adept at crafting
          efficient, responsive, and feature-rich applications that meet and
          exceed client expectations. Let's connect and discuss how we can
          leverage these technologies to bring your projects to life.
        </p>
      </div>
    </div>
  );
};

export default About;
