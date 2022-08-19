import React from "react";
import ProjectCard from "./ProjectCard";
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import keeper from "../assets/img/keeper.jpg";
import trivia from "../assets/img/trivia-app.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";

const Projects = () => {
  const frontend = [
    {
      title: "Keeper App",
      description:
        "This is a basic Frontend web app that allows a user to create notes",
      imgURL: keeper,
      stacks: ['ReactJS', 'NodeJS'],
      liveSite: "https://keeper-app-bay.vercel.app/",
      github: "https://github.com/Uchechukwu10/keeper-app"
    },
    {
      title: "Trivia App",
      description:
        "An app that displays trivia questions based on category and allows you play the trivia game",
      imgURL: trivia,
      stacks: ['ReactJS', 'Flask', 'PostgreSQL'],
      liveSite: "https://knowledge-banks.herokuapp.com/",
      github: "https://github.com/Uchechukwu10/Trivia-game"
    }
  ];

  const fullstack = [
    {
      title: "Keeper App",
      description:
        "This is a basic Frontend web app that allows a user to create notes",
      imgURL: keeper,
      stacks: ['ReactJS', 'NodeJS'],
      liveSite: "https://keeper-app-bay.vercel.app/",
      github: "https://github.com/Uchechukwu10/keeper-app"
    },
    {
      title: "Trivia App",
      description:
        "An app that displays trivia questions based on category and allows you play the trivia game",
      imgURL: trivia,
      stacks: ['ReactJS', 'Flask', 'PostgreSQL'],
      liveSite: "https://knowledge-banks.herokuapp.com/",
      github: "https://github.com/Uchechukwu10/Trivia-game"
    },
    {
      title: "Trivia App",
      description:
        "An app that displays trivia questions based on category and allows you play the trivia game",
      imgURL: trivia,
      stacks: ['ReactJS', 'Flask', 'PostgreSQL'],
      liveSite: "https://keeper-app-bay.vercel.app/",
      github: "https://github.com/Uchechukwu10/keeper-app"
    }
  ];

  return (
    <div>
      <section className="project" id="projects">
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
                        {frontend.map((project, index) => {
                            return (
                            <ProjectCard
                                key={index}
                                title={project.title}
                                description={project.description}
                                imgURL={project.imgURL}
                                stacks={project.stacks}
                                liveSite={project.liveSite}
                                github={project.github}
                            />
                            );
                        })}
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <Row>
                      {fullstack.map((project, index) => {
                        return (
                          <ProjectCard
                            key={index}
                            title={project.title}
                            description={project.description}
                            imgURL={project.imgURL}
                            stacks={project.stacks}
                            liveSite={project.liveSite}
                            github={project.github}
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
