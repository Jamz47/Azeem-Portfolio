import "./Projects.css";
import { Card, Button } from "react-bootstrap";
import tictactoe from "../assets/tictactoe.jpg";
import social_media from "../assets/social_media.png";
import PortfolioImage from "../assets/PortfolioImage.jpg";
import freecodecamp from "../assets/freecodecamp.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import CalculatorMobile from "../assets/CalculatorMobile.png";

const Projects = () => {

  const freeCodeCamp = "https://www.freecodecamp.org/fccbbc007f0-2d3c-4b1f-8dbb-ba7cc7a2e27a";
  const TacToe = "https://github.com/Jamz47/TicTacToe-React-natice-Game";
  const SocialApp = "https://github.com/Jamz47/FYP";
  const calculatorMobile = "https://github.com/Jamz47/Calculator-React-Native";
  const myPortfolioLink = 'https://azeemrafique47.netlify.app/';

  return (
    <div className="pro-container">
      <h1>PROJECT LIST</h1>
      <div className="pro-card">
        <div>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={PortfolioImage} />
            <Card.Body>
              <Card.Title style={{ textAlign: "center" }}>
                My Portfolio
              </Card.Title>
              <Card.Text>
                My Portfolio
                <br />
                React.Js, JavaScript, React Boodtstrap, HTML & CSS, Firebase
                database
              </Card.Text>
              <Button variant="primary" href={myPortfolioLink}>
                Source Code <FontAwesomeIcon icon={faGithub} />
              </Button>
            </Card.Body>
          </Card>
        </div>

        <div>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={tictactoe} />
            <Card.Body>
              <Card.Title style={{ textAlign: "center" }}>
                Tic Tac Toe
              </Card.Title>
              <Card.Text>
                Tic Tac Toe Game Application <br /> Tools: <br />
                React.Js, JavaScript, HTML & CSS
              </Card.Text>
              <Button variant="primary" href={TacToe}>
                Source Code <FontAwesomeIcon icon={faGithub} />
              </Button>
            </Card.Body>
          </Card>
        </div>

        <div>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={CalculatorMobile} />
            <Card.Body>
              <Card.Title style={{ textAlign: "center" }}>
                Calculator Mobile App
              </Card.Title>
              <Card.Text>
                Android & IOS <br /> Tools: <br />
                React Native, JavaScript, HTML & CSS
              </Card.Text>
              <Button variant="primary" href={calculatorMobile}>
                Source Code <FontAwesomeIcon icon={faGithub} />
              </Button>
            </Card.Body>
          </Card>
        </div>

        <div>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={freecodecamp} />
            <Card.Body>
              <Card.Title style={{ textAlign: "center" }}>
                Free Code Camp
              </Card.Title>
              <Card.Text>
                Learn JavaScript Projects & Exercises <br />
                HTML & CSS Designing
              </Card.Text>
              <Button variant="primary" href={freeCodeCamp}>
                Source Code <FontAwesomeIcon icon={faGithub} />
              </Button>
            </Card.Body>
          </Card>
        </div>
        
      </div>
      <div className="pro-card2"></div>
      <div className="pro-card">
      <div>
          <Card style={{ width: "19rem" }}>
            <Card.Img variant="top" src={social_media} />
            <Card.Body>
              <Card.Title style={{ textAlign: "center" }}>
                University Social App
              </Card.Title>
              <Card.Text>
                Social Android App <br />
                React Native, JavaScript, HTML & CSS
              </Card.Text>
              <Button variant="primary" href={SocialApp}>
                Source Code <FontAwesomeIcon icon={faGithub} />
              </Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Projects;
