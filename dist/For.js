(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'react', 'prop-types'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('react'), require('prop-types'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes);
    global.For = mod.exports;
  }
})(this, function (exports, _react, _propTypes) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _toConsumableArray(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
        arr2[i] = arr[i];
      }

      return arr2;
    } else {
      return Array.from(arr);
    }
  }

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  };

  var For = function For(thisProps) {
    var each = thisProps.each,
        of = thisProps.of,
        children = thisProps.children;

    // children is just text element
    if (typeof children === 'string') {
      return _react2.default.createElement(
        'span',
        null,
        of.map(function (item) {
          var keys = children.split('.');
          if (keys[0] === each) {
            keys.shift();
            // https://stackoverflow.com/questions/8051975
            var newVal = keys.reduce(function (a, b) {
              return a[b];
            }, item);
            console.log(newVal);
            if (newVal) {
              return newVal;
            }
            return null;
          }
          return item;
        })
      );
    } else if (children && (typeof children === 'undefined' ? 'undefined' : _typeof(children)) === 'object') {
      var props = children.props;


      // mapping data -> item
      var ParentEl = of.map(function (item) {
        // recursive function
        var ChildEl = function ChildEl(children1) {
          return _react2.default.Children.map(children1, function (child) {
            var type = child.type,
                props = child.props;

            var newProps = {};

            if (typeof child === 'string') {
              var keys = child.split('.');
              if (keys[0] === each) {
                keys.shift();
                if (item[keys]) {
                  return item[keys];
                }
                return null;
              }
              return child;
            } else {
              // eslint-disable-line no-else-return
              Object.keys(props).map(function (prop) {
                var val = props[prop];
                newProps[prop] = val;
                if (typeof val === 'string') {
                  var _keys = val.split('.');
                  if (_keys[0] === each) {
                    _keys.shift();
                    // https://stackoverflow.com/questions/8051975
                    if (_keys.length) {
                      var newVal = _keys.reduce(function (a, b) {
                        if (a) {
                          return a[b];
                        }
                      }, item);
                      if (newProps[prop]) {
                        newProps[prop] = newVal;
                      }
                    }
                  }
                }
              });
            }

            if (props && props.children && _typeof(props.children) === 'object') {
              return _react2.default.createElement(type, newProps, [].concat(_toConsumableArray(ChildEl(props.children, item))));
            }

            return _react2.default.createElement(type, newProps);
          });
        };
        return ChildEl(children, item);
      });
      return _react2.default.createElement(
        'span',
        null,
        ' ',
        ParentEl,
        ' '
      );
    } else {
      // eslint-disable-line no-else-return
      return null;
    }
  };

  For.propTypes = {
    each: _propTypes2.default.string.isRequired,
    of: _propTypes2.default.array.isRequired,
    children: _propTypes2.default.any.isRequired
  };

  exports.default = For;
});