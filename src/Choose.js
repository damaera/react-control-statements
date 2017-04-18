import React, { PropTypes } from 'react';

const Choose = (props) => {
  let foundEl = null
  var i = 0

  if (props.children.length) {

    const { children } = props
    for (i = 0; i < children.length; i++) {

      const child = children[i]

      if (child.type.name === 'When') {
        if (child.props.condition) {
          foundEl = <span>{ child }</span>
          break
        }
      } else if (child.type.name === 'Otherwise') {
        if (foundEl === null) {
          foundEl = <span>{ child }</span>
          break
        }
      }

    }
  }
  return foundEl
}

Choose.propTypes = {
}

export default Choose;