import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const HomeHeader = props => (
   <header className="home-header">
      <h1>JFrog Binary Bank</h1>

      <p>We have {props.clientsCount} clients right now!</p>
   </header>
);

HomeHeader.propTypes = {
   clients: PropTypes.array,
   lastClient: PropTypes.object
};

export default HomeHeader;
