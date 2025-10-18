 import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg"; // replace with your photo if you want
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m currently pursuing{" "}
              <b className="purple">
                B.Tech in Computer Science and Engineering
              </b>{" "}
              with a specialization in{" "}
              <b className="purple">DevOps</b>. Over time, I’ve developed a
              strong interest in building modern, scalable, and efficient
              software solutions. ✨
              <br />
              <br />
              I’m skilled in
              <i>
                <b className="purple">
                  {" "}
                  React.js, MySQL, HTML, and CSS{" "}
                </b>
              </i>
              and have hands-on experience working with{" "}
              <b className="purple">Docker, AWS, and other cloud platforms</b>.
              <br />
              <br />
              My interests include developing
              <i>
                <b className="purple"> dynamic web applications </b>
              </i>
              and exploring areas related to{" "}
              <b className="purple">cloud computing, DevOps practices</b>, and
              efficient system design.
              <br />
              <br />
              I love applying my skills to solve real-world problems — from
              creating structured backend systems to building smooth,
              responsive frontends using
              <i>
                <b className="purple"> React.js </b>
              </i>
              and other modern tools.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/atrayeepathak" // your GitHub here
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/" // optional: your Twitter link
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/atrayee-pathak-4771a7312/" // your LinkedIn here
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/" // optional: your Instagram link
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
