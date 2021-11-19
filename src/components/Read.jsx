import React, { Fragment } from 'react';

const Read = ({ data }) => {

  const { name, description, tools, image } = data
  return (
    <Fragment>

      <div className="row">
        <div className="col-md-6">
          <img src={image} alt={name} />
        </div>
        <div className="col-md-6">
          <h1>{name}</h1>
        </div>
        <div className="col-md-6">
          <p>{description}</p>
        </div>
        <div className="col-md-6">
          <ul>
            {tools.map(tool => (
              <li>{tool}</li>
            ))}
          </ul>
        </div>
      </div>
    </Fragment>
  );
}

export default Read;
