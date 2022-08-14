import React from 'react';
import { Col } from 'react-bootstrap';

const ProjectCard = (props) => {
  return (
        <Col sm={6} md={4}>
            <div className='proj-imgbx'>
                <img src={props.imgURL} alt='project-card' />
                <div className='proj-txtx'>
                <h4>{props.title}</h4>
                <span>{props.description}</span>
            </div>
            </div>
        </Col>
  )
}

export default ProjectCard