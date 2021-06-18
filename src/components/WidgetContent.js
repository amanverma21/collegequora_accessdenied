import React from "react";
import "./WidgetContent.css";
//import "download.jpg" from ""../images";
function WidgetContent() {
  return (
    <div className="widget__contents">
      <div className="widget__content">
      <a href = "https://www.instagram.com/dsc_iiitsurat/">
        <img
          src="dsc.jpg"
          alt=""
        />
        </a>
        <div className="widget__contentTitle">
        
          <h5>DSC IIIT Surat
          
          </h5>
          <p>Developer Students Club - Collaborate & Build Together</p>
        </div>
      </div>
      <div className="widget__content">
      <a href = "https://www.instagram.com/saras.iiitsurat/">
        <img
          src="saras.jpg"
          alt=""
        />
        </a>
        <div className="widget__contentTitle">
          <h5>Saras-Cultural Society</h5>
          <p>Student Artistic Club & Recreational Activity Society</p>
        </div>
      </div>
      <div className="widget__content">
      <a href = "https://www.instagram.com/robotics_club_iiits/">
        <img
          src="robot.jpg"
          alt=""
        />
        </a>
        <div className="widget__contentTitle">
          <h5>Robotics Club</h5>
          <p>Club which strives to stimulate interest in Robotics</p>
        </div>
      </div>
      <div className="widget__content">
      <a href = "https://www.instagram.com/ecell_iiits/">
        <img
          src="ecell.jpg"
          alt=""
        />
        </a>
        <div className="widget__contentTitle">
          <h5>Ruminate E-Cell</h5>
          <p>Club promoting Entreprenuership Skills among Students</p>
        </div>
      </div>
      <div className="widget__content">
      <a href = "https://www.instagram.com/lcsiiitsurat/">
        <img
          src="lcs.jpg"
          alt=""
        />
        </a>
        <div className="widget__contentTitle">
          <h5>LCS-Coding Club</h5>
          <p>Club promoting Coding Culture among Students</p>
        </div>
      </div>
      <div className="widget__content">
      <a href = "https://collab-chat.netlify.app/">
        <img
          src="chit.jpg"
          alt=""
        />
        </a>
        <div className="widget__contentTitle">
          <h5>Chit-Chat</h5>
          <p>For more detailed interaction use our Exclusive Chit-Chat Web App</p>
        </div>
      </div>
    </div>
  );
}

export default WidgetContent;
