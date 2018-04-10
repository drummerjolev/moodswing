import React from 'react';

const Menu = (props) => (
  <div className="btn-group btn-group-toggle menu" data-toggle="buttons">
    <label
      className={"btn btn-secondary" + (props.view === 'recommendations' ? " active" : "")}
      onClick={(e) => props.change('recommendations', e)}
    >
      Recommendations
    </label>
    <label
      className={"btn btn-secondary" + (props.view === 'services' ? " active" : "")}
      onClick={(e) => props.change('services', e)}
    >
      Connected Services
    </label>
    <label
      className={"btn btn-secondary" + (props.view === 'wifi' ? " active" : "")}
      onClick={(e) => props.change('wifi', e)}
    >
      Wifi
    </label>
  </div>
);

export default Menu;
