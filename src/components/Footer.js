// src/components/Footer.js
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="text-left">
            <p style={{ margin: 0 }}>
              Designed and Developed by <strong>Atrayee Pathak</strong>
            </p>
          </Col>

          <Col md={6} className="text-right">
            <p style={{ margin: 0 }}>
              Copyright © {new Date().getFullYear()} <strong>AP</strong>
            </p>
            <div style={{ marginTop: 6 }}>
              <a
                href="https://github.com/atrayeepathak"
                target="_blank"
                rel="noreferrer"
                style={{ marginRight: 12 }}
                aria-label="GitHub"
              >
                <AiFillGithub size={20} />
              </a>

              <a
                href="https://twitter.com/" /* replace with your Twitter */
                target="_blank"
                rel="noreferrer"
                style={{ marginRight: 12 }}
                aria-label="Twitter"
              >
                <AiOutlineTwitter size={20} />
              </a>

              <a
                href="https://www.linkedin.com/in/atrayee-pathak-4771a7312/"
                target="_blank"
                rel="noreferrer"
                style={{ marginRight: 12 }}
                aria-label="LinkedIn"
              >
                <FaLinkedinIn size={20} />
              </a>

              <a
                href="https://www.instagram.com/" /* replace with your Instagram */
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <AiFillInstagram size={20} />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
