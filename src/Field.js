import React from 'react';

const Field = (props) => (
  <div>
    <input
      type="text"
      className="form-control"
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
    />
  </div>
);

export default Field;
