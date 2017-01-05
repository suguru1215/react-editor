import React, { Component } from 'react';

import HeaderMenu from './HeaderMenu.jsx';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="ibc-header">
        <h1 className="ibc-header__head">{this.props.name}</h1>
        <HeaderMenu />
      </div>
    );
  }
};

export default Header;
