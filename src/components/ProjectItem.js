import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProjectItem extends Component {

  deleteProject(id) {
    console.log('Deleting project with ID: ' + id);
    this.props.onDelete(id);
  }

  render() {
    return (
      <li className="ProjectItem">
        <strong>{this.props.project.title}</strong> - {this.props.project.category} <a href="#" onClick={this.deleteProject.bind(this, this.props.project.id)}>x</a>
      </li>
    );
  }
}

ProjectItem.propTypes = {
  onDelete: PropTypes.func,
  project: PropTypes.object
}

export default ProjectItem;
