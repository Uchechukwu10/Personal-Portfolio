import React from "react";
import ProjectCard from "./ProjectCard";
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import keeper from "../assets/img/keeper.jpg";
import trivia from "../assets/img/trivia-app.jpg";
import fitness from "../assets/img/fitness.jpg";
import secrets from "../assets/img/secrets.jpg";
import jobify from "../assets/img/jobify.jpg";
import debtors from "../assets/img/debtors.jpg";
import fyyur from "../assets/img/fyyur.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";

const Projects = () => {
  const frontend = [
    {
      title: "DMA",
      description:
        "Frontend for a debtor monitoring agency that allows schools checkmate parents that refuse to pay fees of their wards",
      imgURL: debtors,
      stacks: ['ReactJS', 'TailwindCSS'],
      liveSite: "https://my-debtors-team32.vercel.app/",
      github: "https://github.com/zuri-training/my-debtors-team32"
    },
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
      title: "Aptitude Fitness",
      description:
        "This is a home page design for a fitness app with CSS animations.",
      imgURL: fitness,
      stacks: ['HTML', 'CSS', 'Javascript'],
      liveSite: "https://uchechukwu10.github.io/fitness-website/",
      github: "https://github.com/Uchechukwu10/fitness-website"
    },
    {
      title: "Jobify",
      description:
        "Jobify is a platform that allows users search for available jobs from top employers. This is a design of the home page.",
      imgURL: jobify,
      stacks: ['HTML', 'CSS'],
      liveSite: "https://uchechukwu10.github.io/Job-search-website/",
      github: "https://github.com/Uchechukwu10/Job-search-website"
    }
  ];

  const fullstack = [
    {
      title: "Fyyur",
      description:
        "Fyyur is a full-stack web application that let's artistes search for venues to perform and vice-versa",
      imgURL: fyyur,
      stacks: ['Flask', 'Python', 'HTML', 'CSS', 'PostgreSQL'],
      liveSite: "https://fyyur-musical.herokuapp.com/",
      github: "https://github.com/Uchechukwu10/Fyyur"
    },
    {
      title: "Secrets",
      description:
        "Secrets is a practice web app that allows users login and share their ultimate secret. All secrets are anonymously shared on logging in.",
      imgURL: secrets,
      stacks: ['ExpressJS', 'NodeJS', 'MongoDB', 'PassportJS'],
      liveSite: "https://secrets-to-uche.herokuapp.com/",
      github: "https://github.com/Uchechukwu10/Secrets"
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

  return (
    <div>
      <section className="project" id="projects">
        <Container>
          <Row>
            <Col>
              <h2>Projects</h2>
              <p>
                Here are a few projects I have worked on. They are grouped into Frontend and Fullstack projects.{" "}
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
