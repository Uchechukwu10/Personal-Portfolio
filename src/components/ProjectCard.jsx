import React from "react";
import { Col } from "react-bootstrap";
import { Github } from "react-bootstrap-icons";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

const ProjectCard = (props) => {
  return (
    
    <Col sm={6} md={4}>
    <TrackVisibility>
    {({ isVisible }) =>
    <div className={isVisible ? '' : ''}>
      <div className="proj-imgbx">
        <img src={props.imgURL} alt="project-card" />
        <div className="proj-txtx">
          <h4>{props.title}</h4>
          <span>{props.description}</span>
        </div>
      </div>
      <h4>{props.title}</h4>
      <div className="actions">
        <div className="action"><a href={props.liveSite}>Visit Site</a></div>
        <div className="action"><a href={props.github}>GitHub <Github /></a></div>
      </div>
      <div className="stacks">
        {props.stacks.map((stack) => (
          <span className="stack">{stack}</span>
        ))}
      </div>
      </div>}
      </TrackVisibility>
    </Col>
  );
};

export default ProjectCard;
