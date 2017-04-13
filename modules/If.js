import React, { PropTypes } from 'react';

const If = (props) => {
  if (props.condition) {
    return (
      <span>
        { props.children }
      </span>
    )
  } else {
    return null
  }
}

If.propTypes = {
  condition: PropTypes.any,
  children: PropTypes.element,
}

export default If;