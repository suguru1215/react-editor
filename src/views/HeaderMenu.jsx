import React, { Component } from 'react';

import HeaderMenuEdit from './HeaderMenuEdit.jsx';

class Menu extends Component {
  constructor(...args) {
    super(...args);

    this.handleClickEdit = this.handleClickEdit.bind(this);
  }

  handleClickEdit() {
    const editorContainer = document.querySelector('.ibc-editor__container');
    const previewContainer = document.querySelector('.ibc-main');

    editorContainer.classList.toggle('is-passive');
    previewContainer.classList.toggle('is-passive');
  }

  render() {
    return (
      <div className="ibc-menu__container">
        <ul className="ibc-menu__list">
          <li>
            <HeaderMenuEdit
              text="Edit"
              handleClickEdit={this.handleClickEdit}
            />
          </li>
        </ul>
      </div>
    );
  }
};

export default Menu;
