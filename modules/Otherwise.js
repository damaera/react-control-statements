import React from 'react';

import PropTypes from 'prop-types';

import If from './If.js'

const Otherwise = (props) => {
  return (
    <If condition={ true } >
      { props.children }
    </If>
  )
}

Otherwise.propTypes = {
  children: PropTypes.any,
}

export default Otherwise;