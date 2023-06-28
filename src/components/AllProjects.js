import React from 'react';
import './ProCardStyles.css';
import ProCard from './ProCard';
import proData from '../components/data';

const AllProjects = () => {
  return (
    <div>
      <div className="big-container">
        <h1 className="project-heading">projects</h1>
        <ProCard item={proData} />
      </div>
    </div>
  );
};

export default AllProjects;
