import React from 'react'

const Host = ({ Host }) => {
  const { name, picture } = Host

  return (
    <div className="host-container">
      <img src={picture} alt={`Host: ${name}`} className="host-picture" />
      <p className="host-name">{name}</p>
    </div>
  );
};

export default Host