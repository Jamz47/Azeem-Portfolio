import { Form, Button } from "react-bootstrap";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Contact = () => {
  const [userData, setUserData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });
  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const submitData = async (event) => {
    event.preventDefault();
    const { fullName, email, phone, message } = userData;
    const res = fetch(
      "https://my-protfolio-a0e38-default-rtdb.firebaseio.com/userDataRecords.json",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          fullName,
          email,
          phone,
          message,
        }),
      }
    );
    if (res) {
      setUserData({
        fullName: "",
        email: "",
        phone: "",
        message: "",
      });
      alert("Submitted");
    } else {
      alert("Please Enter The Data");
    }
  };
  return (
    <div>
      <div className="contactContainer">
        <div style={{ height: 500, width: 500 }}>
          <h1>Contact Me</h1>
          <div className="contactmyinfo">
          <h5><FontAwesomeIcon icon={faLocationDot} /> Lahore, Punjab, Pakistan</h5>
          <h5><FontAwesomeIcon icon={faPhone} /> +923065395377</h5>
          <h5><FontAwesomeIcon icon={faAt} /> azeemrafique47@gmail.com</h5>
          </div>

          <div className="contactforms">
          <p>
          Lets get in touch. Send me a message:<br/>
          </p>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control 
                type="email" 
                placeholder="Full Name" 

                // value={userData.fullName}
                onChange={postUserData} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Email"
                // value={userData.email}
                onChange={postUserData}
                 />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Phone</Form.Label>
                <Form.Control type="number" placeholder="Phone"
                // value={userData.phone}
                onChange={postUserData}
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" placeholder="Comment" rows={3}
                // value={userData.message}
                onChange={postUserData}
                 />
              </Form.Group>
            </Form>
            <div className="contact-btn">
              <Button onClick={submitData} as="input" type="submit" value="Submit" />
            </div>
          </div>
          
        </div>
      </div>
      <footer>
        <div>
          <p>&copy; 2024 Azeem Rafique. All rights reserved.</p>
          <p>This is my portfolio showcasing my work.</p>
          <p>Contact: azeemrafique47@gmail.com</p>
        </div>
      </footer>
    </div>
    
  );
};

export default Contact;
