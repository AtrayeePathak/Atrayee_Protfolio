import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import medicalAI from "../../Assets/Projects/medical-ai.png";
import smartCity from "../../Assets/Projects/smart-city.jpg";
import hostelMgmt from "../../Assets/Projects/hostel.webp";
import toyfort from "../../Assets/Projects/toyfort.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={medicalAI}
              isBlog={false}
              title="Medical Image Diagnostic Aid"
              description="Built an AI-powered diagnostic aid using YOLOv8 to analyze MRI scans for brain tumors. Integrated Ollama's Gemma3 LLM for generating patient-friendly explanations. Containerized with Docker for easy deployment. Tech: Python, YOLOv8 ML, Docker, LLM Integration"
              ghLink="https://github.com/AtrayeePathak/medical_imagery_minor_2.git"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={smartCity}
              isBlog={false}
              title="Smart City Expansion"
              description="Implemented optimal urban transport route planning system using multiple pathfinding algorithms (Dijkstra's, A*, Bellman-Ford) in Java. Focused on efficient station placement and route optimization for smart city development. Tech: Java, Advanced Algorithms"
              ghLink="https://github.com/AtrayeePathak/Smart-City.git"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={hostelMgmt}
              isBlog={false}
              title="Girls' Hostel Management System"
              description="Developed a full-stack web application for hostel management featuring user authentication, room booking system, and administrative controls. Built with modern web technologies for efficient hostel operations. Tech: HTML, CSS, JavaScript, Node.js, MongoDB"
              ghLink="https://github.com/AtrayeePathak/Pathak-s-Girls-Hostel.git"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={toyfort}
              isBlog={false}
              title="Toyfort E-commerce Platform"
              description="Created responsive user interfaces for Toyfort e-commerce platform during internship at Austere System Limited. Improved mobile compatibility and user experience through React.js implementation. Tech: React.js, Front-end Development"
              ghLink="https://github.com/AtrayeePathak/toyfort_fe.git"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
