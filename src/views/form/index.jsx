import React, { Component } from 'react';
import request from 'superagent';

class Form extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      userList: []
    }
  }

  handleSubmit() {

  }

  render() {
    return (
      <div className="ibc-loginForm__container">
        <h2 className="ibc-loginForm__head">Log In</h2>

        <form className="ibc-loginForm" onSubmit={this.handleSubmit}>
          <input className="ibc-loginForm__input__id" placeholder="User ID" />
          <input className="ibc-loginForm__input__password" placeholder="Password" />

          <div className="ibc-loginForm__btn__container">
            <button className="ibc-loginForm__btn" type="submit">Log In</button>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
