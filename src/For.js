import React from 'react';

import PropTypes from 'prop-types';


const For = (thisProps) => {
  const { each, of, children } = thisProps
  // children is just text element
  if (typeof children === 'string') {
    return <span>
      { of.map(item => {
        const keys = children.split('.')
        if (keys[0] === each) {
          keys.shift()
          // https://stackoverflow.com/questions/8051975
          const newVal = keys.reduce((a, b) => a[b], item) 
          console.log(newVal)
          if (newVal) {
            return newVal
          }
          return null
        }
        return item
      }) }
    </span>
  } else if (children && typeof children === 'object') { // children is element
    const { props } = children

    // mapping data -> item
    const ParentEl = of.map(item => {
      // recursive function
      const ChildEl = (children1) => {
        return React.Children.map(children1, (child) => {
          
          const { type, props } = child
          let newProps = {}
          
          if (typeof child === 'string') {
            const keys = child.split('.')
            if (keys[0] === each) {
              keys.shift()
              if (item[keys]) {
                return item[keys]
              }
              return null
            }
            return child
          } else { // eslint-disable-line no-else-return
            Object.keys(props).map((prop) => {
              const val = props[prop]
              newProps[prop] = val
              if (typeof val === 'string') {
                const keys = val.split('.')
                if (keys[0] === each) {
                  keys.shift()
                  // https://stackoverflow.com/questions/8051975
                  if (keys.length) {
                    const newVal = keys.reduce((a, b) => {
                      if (a) {
                        return a[b]
                      }
                    }, item)
                    if (newProps[prop]) {
                      newProps[prop] = newVal
                    }
                  }
                }
              }
            })
          }
          
          if (props && props.children && typeof props.children === 'object') {
            return React.createElement(
              type,
              newProps,
              [...ChildEl(props.children, item)]
            )
          }
          
          return React.createElement(
            type,
            newProps
          )
        })
      }
      return ChildEl(children, item)
    })
    return <span> { ParentEl } </span>
  } else { // eslint-disable-line no-else-return
    return null
  }
}

For.propTypes = {
  each: PropTypes.string.isRequired,
  of: PropTypes.array.isRequired,
  children: PropTypes.any.isRequired,
}

export default For;