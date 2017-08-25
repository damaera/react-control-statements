(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react);
    global.Choose = mod.exports;
  }
})(this, function (exports, _react) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var Choose = function Choose(props) {
    var foundEl = null;
    var i = 0;

    if (props.children.length) {
      var children = props.children;

      for (i = 0; i < children.length; i++) {

        var child = children[i];

        if (child.type.name === 'When') {
          if (child.props.condition) {
            foundEl = _react2.default.createElement(
              'span',
              null,
              child
            );
            break;
          }
        } else if (child.type.name === 'Otherwise') {
          if (foundEl === null) {
            foundEl = _react2.default.createElement(
              'span',
              null,
              child
            );
            break;
          }
        }
      }
    }
    return foundEl;
  };

  Choose.propTypes = {};

  exports.default = Choose;
});