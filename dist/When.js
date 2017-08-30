(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'prop-types', './If.js'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('prop-types'), require('./If.js'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.If);
    global.When = mod.exports;
  }
})(this, function (exports, _react, _propTypes, _If) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _If2 = _interopRequireDefault(_If);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var When = function When(props) {
    return _react2.default.createElement(
      _If2.default,
      { condition: props.condition },
      props.children
    );
  };

  When.propTypes = {
    condition: _propTypes2.default.any.isRequired,
    children: _propTypes2.default.any.isRequired
  };

  exports.default = When;
});