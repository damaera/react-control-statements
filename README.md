[![npm version](https://img.shields.io/npm/v/react-conditioner.svg?style=flat-square)](https://www.npmjs.com/package/react-conditioner)

There's no built-in conditional syntax in React. This library adds the syntactic sugar to write conditionals as component.
Inspired by [jsx control statements](https://www.npmjs.com/package/jsx-control-statements)

## Install
```
npm install --save react-conditioner
```

## Syntax

### If
The body of the if statement only gets evaluated if condition is true.
```jsx
import React, { Component } from 'react'
import { If } from 'react-conditioner'

class YourComponent extends Component {
  render() {
    <If condition={ test }>
      <span>Truth</span>
    </If>
  }
}
```

### Choose
This is an alternative syntax for more complex conditional statements.
```jsx
import React, { Component } from 'react'
import { Choose, When, Otherwise } from 'react-conditioner'

class YourComponent extends Component {
  render() {
    return (
      <div>
        <Choose>
          <When condition={ test1 }>
            <span>IfBlock</span>
          </When>
          <When condition={ test2 }>
            <span>ElseIfBlock</span>
            <span>Another ElseIfBlock</span>
            <span>...</span>
          </When>
          <Otherwise>
            <span>ElseBlock</span>
          </Otherwise>
        </Choose>
      </div>
    );
  }
}
```