import React from "react";
import ProjectCard from "./ProjectCard";
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";

const Projects = () => {
  const projects = [
    {
      title: "Trivia App",
      description:
        "An app that displays trivia questions based on category and allows you play the trivia game",
      imgURL: projImg1,
    },
    {
      title: "Trivia App",
      description:
        "An app that displays trivia questions based on category and allows you play the trivia game",
      imgURL: projImg2,
    },
    {
      title: "Trivia App",
      description:
        "An app that displays trivia questions based on category and allows you play the trivia game",
      imgURL: projImg3,
    },
    {
      title: "Trivia App",
      description:
        "An app that displays trivia questions based on category and allows you play the trivia game",
      imgURL: projImg1,
    },
    {
      title: "Trivia App",
      description:
        "An app that displays trivia questions based on category and allows you play the trivia game",
      imgURL: projImg2,
    },
  ];

  return (
    <div>
      <section className="project" id="project">
        <Container>
          <Row>
            <Col>
              <h2>Projects</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.{" "}
              </p>
              <Tab.Container id="projects-tabs" defaultActiveKey="first">
                <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                  <Nav.Item>
                    <Nav.Link eventKey="first">Frontend</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Full Stack</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <Row>
                        {projects.map((project, index) => {
                            return (
                            <ProjectCard
                                key={index}
                                title={project.title}
                                description={project.description}
                                imgURL={project.imgURL}
                            />
                            );
                        })}
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <Row>
                      {projects.map((project, index) => {
                        return (
                          <ProjectCard
                            key={index}
                            title={project.title}
                            description={project.description}
                            imgURL={project.imgURL}
                          />
                        );
                      })}
                    </Row>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </Col>
          </Row>
        </Container>
        <img
          className="background-image-left"
          src={colorSharp2}
          alt="purple-gradient"
        />
      </section>
    </div>
  );
};

export default Projects;
