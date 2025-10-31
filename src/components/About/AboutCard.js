 import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Atrayee Pathak </span>
            from <span className="purple">Dehradun, India.</span>
            <br />
            I am currently pursuing <b>B.Tech in Computer Science and Engineering</b> 
            with a specialization in <b>DevOps</b>.
            <br />
            <br />
            I enjoy building and designing efficient systems, web applications, and 
            solving challenging programming problems. My technical interests include 
            <b> cloud computing, automation, and full-stack development</b>.
            <br />
            <br />
            Apart from coding, I love traveling with my family, exploring new places, 
            and learning through real-world experiences.
          </p>
          <br />
          <p style={{ color: "rgb(155 126 172)" }}>
            "Code. Create. Collaborate."{" "}
          </p>
          <footer className="blockquote-footer">Atrayee Pathak</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
