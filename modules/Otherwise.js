import React, { PropTypes } from 'react';

import If from './If.js'

const Otherwise = (props) => {
  return (
    <If condition={ true } >
      { props.children }
    </If>
  )
}

Otherwise.propTypes = {
  children: PropTypes.element,
}

export default Otherwise;