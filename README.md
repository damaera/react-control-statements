[![npm version](https://img.shields.io/npm/v/react-conditioner.svg?style=flat-square)](https://www.npmjs.com/package/react-conditioner)

There's no built-in conditional syntax in React. This library adds the syntactic sugar to write conditionals as component.
Inspired by [https://www.npmjs.com/package/jsx-control-statements](jsx control statements)

## Install
```
npm install --save react-conditioner
```

## Syntax

### If
The body of the if statement only gets evaluated if condition is true.
```
// before transformation 
<If condition={ test }>
  <span>Truth</span>
</If>
```

### Choose
This is an alternative syntax for more complex conditional statements.
```
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
 
// default block is optional; minimal example: 
<Choose>
  <When condition={true}>
    <span>IfBlock</span>
  </When>
</Choose>
```