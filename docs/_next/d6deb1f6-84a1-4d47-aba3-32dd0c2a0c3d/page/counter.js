
          window.__NEXT_REGISTER_PAGE('/counter', function() {
            var comp = module.exports=webpackJsonp([8],{223:function(e,t,n){e.exports=n(224)},224:function(e,t,n){"use strict";function u(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(13),i=u(r),o=n(3),a=u(o),l=n(4),s=u(l),c=n(14),f=u(c),d=n(15),m=u(d),h=n(1),p=u(h),v=function(e){function t(e){(0,a.default)(this,t);var n=(0,f.default)(this,(t.__proto__||(0,i.default)(t)).call(this,e));return n.state={number:0},n}return(0,m.default)(t,e),(0,s.default)(t,[{key:"componentDidMount",value:function(){setInterval(this.increment.bind(this),1e3)}},{key:"increment",value:function(){this.setState({number:this.state.number+1})}},{key:"render",value:function(){return p.default.createElement("div",null,"counter: ",this.state.number)}}]),t}(h.Component);t.default=v}},[223]);
            return { page: comp.default }
          })
        