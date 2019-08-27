'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var reactBootstrap = require('react-bootstrap');
var Breadcrumb = _interopDefault(require('react-bootstrap/Breadcrumb'));
var Nav = _interopDefault(require('react-bootstrap/Nav'));
var Form = _interopDefault(require('react-bootstrap/Form'));

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

var Button =
/*#__PURE__*/
function (_Component) {
  _inherits(Button, _Component);

  function Button() {
    _classCallCheck(this, Button);

    return _possibleConstructorReturn(this, _getPrototypeOf(Button).apply(this, arguments));
  }

  _createClass(Button, [{
    key: "render",
    value: function render() {
      return React__default.createElement(reactBootstrap.Button, _extends({}, this.props, {
        className: "button-of-trust"
      }), this.props.text);
    }
  }]);

  return Button;
}(React.Component);

var Tab =
/*#__PURE__*/
function (_Component) {
  _inherits(Tab, _Component);

  function Tab() {
    _classCallCheck(this, Tab);

    return _possibleConstructorReturn(this, _getPrototypeOf(Tab).apply(this, arguments));
  }

  _createClass(Tab, [{
    key: "render",
    value: function render() {
      return React__default.createElement(reactBootstrap.Tab, _extends({}, this.props, {
        tabClassName: "tab-of-trust"
      }));
    }
  }]);

  return Tab;
}(React.Component);

var Tabs =
/*#__PURE__*/
function (_Component) {
  _inherits(Tabs, _Component);

  function Tabs() {
    _classCallCheck(this, Tabs);

    return _possibleConstructorReturn(this, _getPrototypeOf(Tabs).apply(this, arguments));
  }

  _createClass(Tabs, [{
    key: "render",
    value: function render() {
      return React__default.createElement(reactBootstrap.Tabs, _extends({}, this.props, {
        className: "tabs-of-trust"
      }), this.props.children);
    }
  }]);

  return Tabs;
}(React.Component);

var Image =
/*#__PURE__*/
function (_Component) {
  _inherits(Image, _Component);

  function Image() {
    _classCallCheck(this, Image);

    return _possibleConstructorReturn(this, _getPrototypeOf(Image).apply(this, arguments));
  }

  _createClass(Image, [{
    key: "render",
    value: function render() {
      return React__default.createElement(reactBootstrap.Image, _extends({}, this.props, {
        className: "image-of-trust"
      }));
    }
  }]);

  return Image;
}(React.Component);

var Breadcrumbs =
/*#__PURE__*/
function (_Component) {
  _inherits(Breadcrumbs, _Component);

  function Breadcrumbs(props) {
    var _this;

    _classCallCheck(this, Breadcrumbs);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Breadcrumbs).call(this, props));
    _this.state = {
      items: []
    };
    return _this;
  }

  _createClass(Breadcrumbs, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      if (!this.props.items) {
        var items = [];
        var location = window.location.pathname;
        var directory = '/';
        var links = location.split('/').map(function (link, key) {
          var completeLink = directory + link;
          return completeLink;
        });
        var labels = location.split('/').map(function (item) {
          var itemSplit = item.split('-').join(' ');
          return itemSplit;
        });

        for (var i = 0; i < labels.length; i++) {
          var item = {
            label: labels[i],
            href: links[i]
          };
          items.push(item);
        }

        this.setState({
          items: items
        });
      } else {
        this.setState({
          items: this.props.items
        });
      }
    }
  }, {
    key: "capitalizeFirstLetter",
    value: function capitalizeFirstLetter(string) {
      var result = string.split(' ').map(function (word, key) {
        if (typeof word[0] === 'string') {
          word = word.charAt(0).toUpperCase() + word.substr(1);
          return word;
        }
      }).join(' ');
      return result;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var items = this.state.items;
      return React__default.createElement(Breadcrumb, {
        className: "breadcrumb-of-trust"
      }, items.map(function (item, key) {
        return items.indexOf(item) === items.length - 1 ? React__default.createElement(Breadcrumb.Item, {
          active: true,
          className: "breadcrumb-item-active"
        }, item.label === '' ? 'Home' : _this2.capitalizeFirstLetter(item.label)) : React__default.createElement(Breadcrumb.Item, {
          className: "breadcrumb-item",
          href: String(item.href)
        }, item.label === '' ? 'Home' : _this2.capitalizeFirstLetter(item.label));
      }));
    }
  }]);

  return Breadcrumbs;
}(React.Component);

var Links =
/*#__PURE__*/
function (_Component) {
  _inherits(Links, _Component);

  function Links() {
    _classCallCheck(this, Links);

    return _possibleConstructorReturn(this, _getPrototypeOf(Links).apply(this, arguments));
  }

  _createClass(Links, [{
    key: "render",
    value: function render() {
      return React__default.createElement("a", _extends({
        className: "link-of-trust"
      }, this.props), this.props.label);
    }
  }]);

  return Links;
}(React.Component);

var ExternalNavBar =
/*#__PURE__*/
function (_Component) {
  _inherits(ExternalNavBar, _Component);

  function ExternalNavBar() {
    _classCallCheck(this, ExternalNavBar);

    return _possibleConstructorReturn(this, _getPrototypeOf(ExternalNavBar).apply(this, arguments));
  }

  _createClass(ExternalNavBar, [{
    key: "render",
    value: function render() {
      return React__default.createElement(Nav, _extends({
        className: "external-navbar-of-trust"
      }, this.props), this.props.children);
    }
  }]);

  return ExternalNavBar;
}(React.Component);

var MainNavBar =
/*#__PURE__*/
function (_Component) {
  _inherits(MainNavBar, _Component);

  function MainNavBar() {
    _classCallCheck(this, MainNavBar);

    return _possibleConstructorReturn(this, _getPrototypeOf(MainNavBar).apply(this, arguments));
  }

  _createClass(MainNavBar, [{
    key: "render",
    value: function render() {
      return React__default.createElement(Nav, _extends({
        className: "navbar-of-trust"
      }, this.props), this.props.children);
    }
  }]);

  return MainNavBar;
}(React.Component);

var FormGroup =
/*#__PURE__*/
function (_Component) {
  _inherits(FormGroup, _Component);

  function FormGroup() {
    _classCallCheck(this, FormGroup);

    return _possibleConstructorReturn(this, _getPrototypeOf(FormGroup).apply(this, arguments));
  }

  _createClass(FormGroup, [{
    key: "render",
    value: function render() {
      return React__default.createElement(Form.Group, {
        className: "form-group-of-trust",
        controlId: this.props.controlId
      }, React__default.createElement(Form.Label, {
        className: "form-label-of-trust"
      }, this.props.label), React__default.createElement(Form.Control, {
        className: "form-input-of-trust",
        type: this.props.type,
        placeholder: this.props.placeholder
      }), React__default.createElement(Form.Text, {
        className: "text-muted"
      }, this.props.muted !== undefined ? this.props.muted : ''));
    }
  }]);

  return FormGroup;
}(React.Component);

var HexImage =
/*#__PURE__*/
function (_Component) {
  _inherits(HexImage, _Component);

  function HexImage() {
    _classCallCheck(this, HexImage);

    return _possibleConstructorReturn(this, _getPrototypeOf(HexImage).apply(this, arguments));
  }

  _createClass(HexImage, [{
    key: "render",
    value: function render() {
      var imgStyle = {
        backgroundImage: "url('".concat(this.props.src, "')"),
        transform: "rotate(10deg) scale(".concat(this.props.scale, ")")
      };
      return React__default.createElement("div", {
        className: "hexagon-container"
      }, React__default.createElement("div", {
        className: "hexagon",
        style: imgStyle
      }, React__default.createElement("div", {
        className: "hex-top"
      }), React__default.createElement("div", {
        className: "hex-bottom"
      })));
    }
  }]);

  return HexImage;
}(React.Component);

exports.Breadcrumbs = Breadcrumbs;
exports.Button = Button;
exports.ExternalNavBar = ExternalNavBar;
exports.FormGroup = FormGroup;
exports.HexImage = HexImage;
exports.Image = Image;
exports.Links = Links;
exports.MainNavBar = MainNavBar;
exports.Tab = Tab;
exports.Tabs = Tabs;
