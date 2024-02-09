import React from "react";
import "./Skill.css";
import { ProgressBar } from "react-bootstrap";

const Skill = () => {
  const now = 75;
  const reactjs = 85; 
  const reactnative = 90;
  const express = 78;
  const nod = 95;
  const html = 80;
  const mongo = 70;
  const jjj = 85;
  const unittest = 80;
  const firebase = 90;
  const rest = 85;
  const studio = 80;
  const application = 80;
  const web = 80;
  const boot = 90
  return (
    <div className="skillcontainer">
      <div className="skillleftside">
        <h1>EXPERTISE LEVEL</h1>
      </div>
      <div className="skillrightside">
        <div className="ul-list">
          <p className="skillparagraph">JavaScript<ProgressBar now={now} label={`${now}%`} /></p> 
          <p className="skillparagraph">React.JS<ProgressBar now={reactjs} label={`${reactjs}%`} /></p>
          <p className="skillparagraph">React Native<ProgressBar now={reactnative} label={`${reactnative}%`} /></p>
          <p className="skillparagraph">React Bootstrap<ProgressBar now={boot} label={`${boot}%`} /></p>
          <p className="skillparagraph">Express.JS<ProgressBar now={express} label={`${express}%`} /></p>
          <p className="skillparagraph">Node.JS<ProgressBar now={nod} label={`${nod}%`} /></p>
          <p className="skillparagraph">Mongo DB<ProgressBar now={mongo} label={`${mongo}%`} /></p>
          <p className="skillparagraph">JEST<ProgressBar now={jjj} label={`${jjj}%`} /></p>
          <p className="skillparagraph">Unit Testing<ProgressBar now={unittest} label={`${unittest}%`} /></p>
          <p className="skillparagraph">HTML & CSS<ProgressBar now={html} label={`${html}%`} /></p>
          <p className="skillparagraph">Firebase<ProgressBar now={firebase} label={`${firebase}%`} /></p>
          <p className="skillparagraph">REST API's<ProgressBar now={rest} label={`${rest}%`} /></p>
          <p className="skillparagraph">Android Studio<ProgressBar now={studio} label={`${studio}%`} /></p>
          <p className="skillparagraph">Mobile Applications<ProgressBar now={application} label={`${application}%`} /></p>
          <p className="skillparagraph">Web Development<ProgressBar now={web} label={`${web}%`} /></p>
          
        </div>
        
      </div>
      
    </div>
  );
};

export default Skill;
