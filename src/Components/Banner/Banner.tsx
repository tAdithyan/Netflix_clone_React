import React from 'react';
import './Banner.css';
const Banner = () => {
  return (
    <div className="banner">
      <div className="content">
        <h1 className="title">Movie NAme</h1>
        <div className="banner_buttons">
          <button className="button">play</button>
          <button className="button">My-List</button>
        </div>
        <h1 className="discription">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus ab nisi quibusdam natus
          praesentium ducimus optio quis non, libero laborum! Fugit possimus sint earum velit
          voluptates excepturi amet nam id.
        </h1>
      </div>
      <div className="fade_bottom"></div>
    </div>
  );
};

export default Banner;
