import React from 'react';

import PropTypes from 'prop-types';

import If from './If.js'

const When = (props) => {
  return <If condition={props.condition}>
    { props.children }
  </If>
}

When.propTypes = {
  condition: PropTypes.any.isRequired,
  children: PropTypes.any.isRequired,
}

export default When;