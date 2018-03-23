// src/views/Signup/index.js
import React, { Component } from 'react';
import classnames from 'classnames';

import './style.css';

class Signup extends Component {
  static propTypes = {}
  static defaultProps = {}
  state = {}

  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames('Signup', className)} {...props}>
        <h1>
          Signup
        </h1>
      </div>
    );
  }
}

export default Signup;
