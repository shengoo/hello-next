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

var _MyLayout = require('../components/MyLayout');

var _MyLayout2 = _interopRequireDefault(_MyLayout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/shengqing/code/next/hello-next/pages/counter.js?entry';


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
			this.timer = setInterval(this.increment.bind(this), 1000);
		}
	}, {
		key: 'componentWillUnmount',
		value: function componentWillUnmount() {
			clearInterval(this.timer);
		}
	}, {
		key: 'increment',
		value: function increment() {
			this.setState({ number: this.state.number + step });
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(_MyLayout2.default, {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 27
				}
			}, _react2.default.createElement('div', {
				__source: {
					fileName: _jsxFileName,
					lineNumber: 28
				}
			}, 'counter: ', this.state.number));
		}
	}]);

	return Counter;
}(_react.Component);

exports.default = Counter;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2NvdW50ZXIuanMiXSwibmFtZXMiOlsiQ29tcG9uZW50IiwiTGF5b3V0Iiwic3RlcCIsIkNvdW50ZXIiLCJwcm9wcyIsInN0YXRlIiwibnVtYmVyIiwidGltZXIiLCJzZXRJbnRlcnZhbCIsImluY3JlbWVudCIsImJpbmQiLCJjbGVhckludGVydmFsIiwic2V0U3RhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBUTs7OztBQUNSLEFBQU8sQUFBWTs7Ozs7Ozs7O0FBRW5CLElBQU0sT0FBTixBQUFhOztJQUVQLEE7a0NBRUw7O2tCQUFBLEFBQVksT0FBTTtzQ0FBQTs7c0lBQUEsQUFDWCxBQUNOOztRQUFBLEFBQUssUUFBUSxFQUFFLFFBRkUsQUFFakIsQUFBYSxBQUFVO1NBQ3ZCOzs7OztzQ0FFa0IsQUFDbEI7UUFBQSxBQUFLLFFBQVEsWUFBWSxLQUFBLEFBQUssVUFBTCxBQUFlLEtBQTNCLEFBQVksQUFBb0IsT0FBN0MsQUFBYSxBQUFzQyxBQUNuRDs7Ozt5Q0FFcUIsQUFDckI7aUJBQWMsS0FBZCxBQUFtQixBQUNuQjs7Ozs4QkFFVSxBQUNWO1FBQUEsQUFBSyxTQUFTLEVBQUMsUUFBUSxLQUFBLEFBQUssTUFBTCxBQUFXLFNBQWxDLEFBQWMsQUFBNkIsQUFDM0M7Ozs7MkJBRU8sQUFDUDswQkFDQyxBQUFDOztlQUFEO2lCQUFBLEFBQ0M7QUFERDtBQUFBLElBQUEsa0JBQ0MsY0FBQTs7ZUFBQTtpQkFBQTtBQUFBO0FBQUEsTUFBZ0Isa0JBQUEsQUFBSyxNQUZ2QixBQUNDLEFBQ0MsQUFBMkIsQUFHN0I7Ozs7O0FBekJvQixBLEFBNkJ0Qjs7a0JBQUEsQUFBZSIsImZpbGUiOiJjb3VudGVyLmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9zaGVuZ3FpbmcvY29kZS9uZXh0L2hlbGxvLW5leHQifQ==