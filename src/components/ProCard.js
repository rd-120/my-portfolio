import React from 'react';
import './ProCardStyles.css';
import { NavLink } from 'react-router-dom';
// import pro from '../Images/intro-bg.jpg';

const ProCard = ({ item }) => {
  return (
    <div className="pro-container">
      {item.map((proItem) => {
        const { imgPro, title, text, view } = proItem;
        console.log(proItem);
        console.log(title);
        return (
          <div className="project-card">
            <img className="pro-img" src={imgPro} alt={title} />

            <h2 className="project-title">{title}</h2>
            <div className="pro-details">
              <p>{text}</p>
            </div>
            <div className="pro-btn">
              <NavLink to={view} className="btn" target="_blank">
                view
              </NavLink>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProCard;
