// src/views/Profile/index.js
import React, { Component } from 'react';
import classnames from 'classnames';

import './style.css';

class Profile extends Component {
  static propTypes = {}
  static defaultProps = {}
  state = {}

  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames('Profile', className)} {...props}>
        <h1>
        Profile
        </h1>
      </div>
    );
  }
}

export default Profile;
