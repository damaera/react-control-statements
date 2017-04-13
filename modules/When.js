import React, { PropTypes } from 'react';

import If from './If.js'

const When = (props) => {
  return <If {...props} />
}

When.propTypes = {
  condition: PropTypes.any,
  children: PropTypes.element,
}

export default When;