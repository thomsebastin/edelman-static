"use strict";(self.webpackChunkaem_maven_archetype=self.webpackChunkaem_maven_archetype||[]).push([[194],{"./src/main/webpack/components/location-map-directions/location-map-directions.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:function(){return LocationMapDirections}});__webpack_require__("./node_modules/core-js/modules/es.error.cause.js");function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,descriptor.key,descriptor)}}var LocationMapDirections=function(){function LocationMapDirections(el){!function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,LocationMapDirections),this.el=el,el&&this.mount(el)}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(LocationMapDirections,[{key:"mount",value:function mount(el){var _el$dataset,_el$dataset2,_el$dataset3,LAT=+(null===(_el$dataset=el.dataset)||void 0===_el$dataset?void 0:_el$dataset.latitude),LNG=+(null===(_el$dataset2=el.dataset)||void 0===_el$dataset2?void 0:_el$dataset2.longitude),ZOOM=+(null===(_el$dataset3=el.dataset)||void 0===_el$dataset3?void 0:_el$dataset3.zoomlevel)||5;if("undefined"!=typeof google&&void 0!==google.maps){var myLatLng=new google.maps.LatLng(LAT,LNG),styles=[{stylers:[{saturation:-100}]}],styledMap=new google.maps.StyledMapType(styles,{name:"Styled Map"}),options={zoom:ZOOM,center:myLatLng,mapTypeControl:!1,mapTypeControlOptions:{mapTypeIds:[google.maps.MapTypeId.TERRAIN,"map_style"]}},map=new google.maps.Map(document.getElementById("map_canvas"),options);map.mapTypes.set("map_style",styledMap),map.setMapTypeId("map_style"),new google.maps.Marker({position:myLatLng,map:map,title:"Middle of America PIN"})}else console.error("Google maps API was not initialized. Please ensure that you are loading the scripts required to initialize google maps.")}}],[{key:"init",value:function init(el){return new LocationMapDirections(el)}}]),LocationMapDirections}()}}]);