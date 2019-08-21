'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var reactBootstrap = require('react-bootstrap');
var Breadcrumb = _interopDefault(require('react-bootstrap/Breadcrumb'));
var Form = _interopDefault(require('react-bootstrap/Form'));
var Nav = _interopDefault(require('react-bootstrap/Nav'));

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
        var links = location.split('/').map(function (link) {
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
      var result = string.split(' ').map(function (word) {
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
      return React__default.createElement(Breadcrumb, null, items.map(function (item) {
        return items.indexOf(item) === items.length - 1 ? React__default.createElement(Breadcrumb.Item, {
          active: true
        }, item.label === '' ? 'Home' : _this2.capitalizeFirstLetter(item.label)) : React__default.createElement(Breadcrumb.Item, {
          href: String(item.href)
        }, item.label === '' ? 'Home' : _this2.capitalizeFirstLetter(item.label));
      }));
    }
  }]);

  return Breadcrumbs;
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
        controlId: this.props.controlId
      }, React__default.createElement(Form.Label, null, this.props.label), React__default.createElement(Form.Control, {
        type: this.props.type,
        placeholder: this.props.placeholder
      }), React__default.createElement(Form.Text, {
        className: "text-muted"
      }, this.props.muted !== undefined ? this.props.muted : ''));
    }
  }]);

  return FormGroup;
}(React.Component);

var HexImg =
/*#__PURE__*/
function (_Component) {
  _inherits(HexImg, _Component);

  function HexImg() {
    _classCallCheck(this, HexImg);

    return _possibleConstructorReturn(this, _getPrototypeOf(HexImg).apply(this, arguments));
  }

  _createClass(HexImg, [{
    key: "render",
    value: function render() {
      var imgStyle = {
        backgroundImage: "url('".concat(this.props.url, "')"),
        transform: "rotate(10deg) scale(".concat(this.props.scale, ")")
      };
      return React__default.createElement("div", {
        className: "hexagon",
        style: imgStyle
      }, React__default.createElement("div", {
        className: "hexTop"
      }), React__default.createElement("div", {
        className: "hexBottom"
      }));
    }
  }]);

  return HexImg;
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
      return React__default.createElement("a", this.props, this.props.label);
    }
  }]);

  return Links;
}(React.Component);

var ExtNavBarItem =
/*#__PURE__*/
function (_Component) {
  _inherits(ExtNavBarItem, _Component);

  function ExtNavBarItem() {
    _classCallCheck(this, ExtNavBarItem);

    return _possibleConstructorReturn(this, _getPrototypeOf(ExtNavBarItem).apply(this, arguments));
  }

  _createClass(ExtNavBarItem, [{
    key: "render",
    value: function render() {
      return React__default.createElement(Nav.Item, null, React__default.createElement(Links, this.props));
    }
  }]);

  return ExtNavBarItem;
}(React.Component);

var NavBarItem =
/*#__PURE__*/
function (_Component) {
  _inherits(NavBarItem, _Component);

  function NavBarItem() {
    _classCallCheck(this, NavBarItem);

    return _possibleConstructorReturn(this, _getPrototypeOf(NavBarItem).apply(this, arguments));
  }

  _createClass(NavBarItem, [{
    key: "render",
    value: function render() {
      return React__default.createElement(Nav.Item, null, React__default.createElement(Links, this.props));
    }
  }]);

  return NavBarItem;
}(React.Component);

var ExtNavBar =
/*#__PURE__*/
function (_Component) {
  _inherits(ExtNavBar, _Component);

  function ExtNavBar() {
    _classCallCheck(this, ExtNavBar);

    return _possibleConstructorReturn(this, _getPrototypeOf(ExtNavBar).apply(this, arguments));
  }

  _createClass(ExtNavBar, [{
    key: "render",
    value: function render() {
      return React__default.createElement(Nav, this.props, this.props.children);
    }
  }]);

  return ExtNavBar;
}(React.Component);

/*       */
var index = {
  NavBar: ExtNavBar,
  NavBarItem: ExtNavBarItem
};

var NavBar =
/*#__PURE__*/
function (_Component) {
  _inherits(NavBar, _Component);

  function NavBar() {
    _classCallCheck(this, NavBar);

    return _possibleConstructorReturn(this, _getPrototypeOf(NavBar).apply(this, arguments));
  }

  _createClass(NavBar, [{
    key: "render",
    value: function render() {
      return React__default.createElement(Nav, this.props, this.props.children);
    }
  }]);

  return NavBar;
}(React.Component);

var index$1 = {
  NavBar: NavBar,
  NavBarItem: NavBarItem
};

exports.Breadcrumb = Breadcrumbs;
exports.Button = Button;
exports.ExtNavBar = index;
exports.FormGroup = FormGroup;
exports.HexImage = HexImg;
exports.Image = Image;
exports.Link = Links;
exports.NavBar = index$1;
exports.Tab = Tab;
exports.Tabs = Tabs;
