import React, { PropTypes } from 'react';

const JsRunBtn = ({ text, handleClick }) =>
  <div>
    <button className="ibc-editor__head__run" onClick={handleClick}>{text}</button>
  </div>

JsRunBtn.propTypes = {
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired
}

export default JsRunBtn;
