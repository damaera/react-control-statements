import React from 'react';

import PropTypes from 'prop-types';

const If = (props) => {
  if (props.condition) {
    return (
      <span>
        { props.children }
      </span>
    )
  }
  return null
}

If.propTypes = {
  condition: PropTypes.any,
  children: PropTypes.any,
}

export default If;