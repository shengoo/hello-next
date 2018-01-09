'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var step = 1;

var Counter = function (_Component) {
	(0, _inherits3.default)(Counter, _Component);

	function Counter(props) {
		(0, _classCallCheck3.default)(this, Counter);

		var _this = (0, _possibleConstructorReturn3.default)(this, (Counter.__proto__ || (0, _getPrototypeOf2.default)(Counter)).call(this, props));

		_this.state = { number: 0 };
		return _this;
	}

	(0, _createClass3.default)(Counter, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			setInterval(this.increment.bind(this), 1000);
		}
	}, {
		key: 'increment',
		value: function increment() {
			this.setState({ number: this.state.number + step });
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement('div', null, 'counter: ', this.state.number);
		}
	}]);

	return Counter;
}(_react.Component);

exports.default = Counter;