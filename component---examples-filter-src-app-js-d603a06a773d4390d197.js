(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{NmCX:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return p})),r.d(t,"renderToDom",(function(){return u}));r("E5k/");var n=r("mXGw"),o=r("xARA"),a=r("+qjn");var i=function(e){var t,r;function o(){return e.apply(this,arguments)||this}return r=e,(t=o).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,o.prototype.render=function(){return n.createElement("div",{className:"control-panel"},n.createElement("h3",null,"Highlight Features Containing Similar Data"),n.createElement("p",null,"Hover over counties to highlight counties that share the same name."),n.createElement("div",{className:"source-link"},n.createElement("a",{href:"https://github.com/visgl/react-map-gl/tree/5.2-release/examples/filter",target:"_new"},"View Code ↗")))},o}(n.PureComponent),l={id:"counties",type:"fill","source-layer":"original",paint:{"fill-outline-color":"rgba(0,0,0,0.1)","fill-color":"rgba(0,0,0,0.1)"}},c={id:"counties-highlighted",type:"fill",source:"counties","source-layer":"original",paint:{"fill-outline-color":"#484896","fill-color":"#6e599f","fill-opacity":.75}};var p=function(e){var t,r;function o(){for(var t,r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(t=e.call.apply(e,[this].concat(n))||this).state={filter:["in","COUNTY",""],viewport:{latitude:38.88,longitude:-98,zoom:3,minZoom:2,bearing:0,pitch:0},hoverInfo:null},t._onViewportChange=function(e){return t.setState({viewport:e})},t._onHover=function(e){var r="",n=null,o=e.features[0];o&&(n={lngLat:e.lngLat,county:o.properties},r=o.properties.COUNTY),t.setState({filter:["in","COUNTY",r],hoverInfo:n})},t}r=e,(t=o).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r;var p=o.prototype;return p._renderPopup=function(){var e=this.state.hoverInfo;return e?n.createElement(a.Popup,{longitude:e.lngLat[0],latitude:e.lngLat[1],closeButton:!1},n.createElement("div",{className:"county-info"},e.county.COUNTY)):null},p.render=function(){var e=this.state,t=e.viewport,r=e.filter;return n.createElement(a.default,Object.assign({},t,{width:"100%",height:"100%",mapStyle:"mapbox://styles/mapbox/light-v9",mapboxApiAccessToken:"",onViewportChange:this._onViewportChange,onHover:this._onHover,interactiveLayerIds:["counties"]}),n.createElement(a.Source,{type:"vector",url:"mapbox://mapbox.82pkq93d"},n.createElement(a.Layer,Object.assign({beforeId:"waterway-label"},l)),n.createElement(a.Layer,Object.assign({beforeId:"waterway-label"},c,{filter:r}))),this._renderPopup(),n.createElement(i,{containerComponent:this.props.containerComponent}))},o}(n.Component);function u(e){Object(o.render)(n.createElement(p,null),e)}}}]);