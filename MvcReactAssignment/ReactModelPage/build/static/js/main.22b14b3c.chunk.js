(this["webpackJsonpmodel-page"]=this["webpackJsonpmodel-page"]||[]).push([[0],{21:function(e,t,s){},28:function(e,t,s){"use strict";s.r(t);var n=s(0),a=s(1),c=s.n(a),i=s(9),o=s.n(i),l=(s(21),s(2)),r=s(3),p=s(5),d=s(4),j=s(6),h=(s(7),s(8));function b(e){var t=e.RatingValue,s=e.MaxRating;console.log(t);for(var a=[],c=0;c<s;c++)c<t?a.push("star"):a.push("nv");return a.map((function(e,t){return"star"===e?Object(n.jsx)("span",{className:"fa fa-star star"},t):Object(n.jsx)("span",{className:"fa fa-star nv"},t)}))}var m=function(e){Object(p.a)(s,e);var t=Object(d.a)(s);function s(){return Object(l.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){return Object(n.jsxs)("div",{className:"RatingsAndReviews",children:[Object(n.jsx)("div",{className:"Ratings",children:Object(n.jsxs)("p",{className:"Car-Name",children:["BMW ",this.props.model.modelName]})}),Object(n.jsx)("div",{className:"Path",children:Object(n.jsx)(b,{RatingValue:this.props.model.rating,MaxRating:5})}),Object(n.jsx)("p",{className:"-Reviews",children:"456 Reviews"})]})}}]),s}(c.a.Component),u=function(e){Object(p.a)(s,e);var t=Object(d.a)(s);function s(){return Object(l.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){return Object(n.jsxs)("div",{className:"ImgAndInfo",children:[Object(n.jsx)("div",{className:"CarImage",children:Object(n.jsx)("img",{src:this.props.model.imageUrl,className:"Images2",alt:"CarImage"})}),Object(n.jsxs)("div",{className:"CarInformation",children:[Object(n.jsxs)("div",{className:"Color",children:[Object(n.jsx)("img",{src:"./colors.svg",className:"Images3",alt:"ColorImage"}),Object(n.jsx)("p",{className:"car-info",children:"Color"})]}),Object(n.jsxs)("div",{className:"Image",children:[Object(n.jsx)("img",{src:"./image.svg",className:"Images",alt:"Images"}),Object(n.jsx)("p",{className:"car-info",children:"Image"})]}),Object(n.jsxs)("div",{className:"Video",children:[Object(n.jsx)("img",{src:"./video.svg",className:"Images",alt:"Video"}),Object(n.jsx)("p",{className:"car-info",children:"Video"})]}),Object(n.jsxs)("div",{className:"View",children:[Object(n.jsx)("img",{src:"./view.svg",className:"Images",alt:"View"}),Object(n.jsx)("p",{className:"car-info",children:"View"})]})]})]})}}]),s}(c.a.Component),O=function(e){Object(p.a)(s,e);var t=Object(d.a)(s);function s(e){var n;return Object(l.a)(this,s),(n=t.call(this,e)).OpenLocationPopUp=function(){n.props.changeEntityFlag(!0,n.state.selectedCity,"Location")},n.handleLocationClick=function(){n.props.changeCityName(n.state.selectedCity),n.OpenLocationPopUp()},n.displayTooltip=function(){document.getElementsByClassName("tooltip")[0].style.display="block",setTimeout((function(){document.getElementsByClassName("tooltip")[0].style.display="none"}),2e3)},n.state={selectedCity:e.selectedLocation},n}return Object(r.a)(s,[{key:"render",value:function(){return Object(n.jsxs)("div",{className:"Rectangle",children:[Object(n.jsx)("img",{src:"https://imgd.aeplcdn.com/0x0/cw/static/icons/new-header/logo.svg",className:"LogoImgShape"}),Object(n.jsx)("img",{src:"https://www.flaticon.com/svg/static/icons/svg/927/927667.svg",className:"LocationShape",onMouseOver:this.displayTooltip,onClick:this.handleLocationClick,"data-tip":!0,"data-for":"locationTip"}),Object(n.jsx)("img",{src:"./search.svg",className:"SearchShape"}),Object(n.jsx)("div",{className:"tooltip",style:{backgroundColor:"gray"},children:Object(n.jsxs)("p",{className:"tooltipText",children:["Current Location : ",this.state.selectedCity]})})]})}}]),s}(c.a.Component),g=function(e){Object(p.a)(s,e);var t=Object(d.a)(s);function s(){return Object(l.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){return Object(n.jsxs)("div",{children:[Object(n.jsxs)("div",{children:[Object(n.jsxs)("span",{className:"price",children:[" \u20b9 ",this.props.selectedVersion.price," Lakh"]}),Object(n.jsx)("span",{className:"pricebreakup",children:"View Price Breakup"})]}),Object(n.jsx)("span",{className:"onroad",children:"On-Road Price"}),Object(n.jsxs)("div",{className:"emiDiv",children:[Object(n.jsx)("p",{className:"Emi",children:"EMI \u20b9 478,270"}),Object(n.jsx)("p",{className:"years",children:"For 5 years"}),Object(n.jsx)("button",{className:"button",children:"Customrize your Emi"})]})]})}}]),s}(c.a.Component),v=function(e){Object(p.a)(s,e);var t=Object(d.a)(s);function s(e){var n;return Object(l.a)(this,s),(n=t.call(this,e)).OpenLocationPopUp=function(){n.props.changeEntityFlag(!0,n.state.selectedLocation,"Location")},n.OpenVersionPopUp=function(){n.props.changeEntityFlag(!0,n.state.selectedVersion,"Version")},n.state={popupName:["Version","City"],selectedLocation:e.selectedLocation,selectedVersion:e.selectedVersion},n}return Object(r.a)(s,[{key:"render",value:function(){var e=this,t=this.state.popupName.map((function(t){return"Version"===t?Object(n.jsxs)("div",{style:{display:"inline-block",margin:"0 20px"},children:[Object(n.jsx)("div",{className:"version",children:t}),Object(n.jsxs)("button",{className:"button",onClick:e.OpenVersionPopUp,children:[" ",e.state.selectedVersion.versionName]},t)]}):Object(n.jsxs)("div",{style:{display:"inline-block",margin:"0 20px"},children:[Object(n.jsx)("div",{className:"version",children:t}),Object(n.jsxs)("button",{className:"button",onClick:e.OpenLocationPopUp,children:[" ",e.state.selectedLocation]},t)]})}));return Object(n.jsx)("div",{className:"popUpContainer",children:t})}}]),s}(c.a.Component),y=function(e){Object(p.a)(s,e);var t=Object(d.a)(s);function s(e){var n;return Object(l.a)(this,s),(n=t.call(this,e)).changeEntityDetails=function(e){var t=e.target.innerHTML;"Location"===n.state.popUpType&&n.props.changeCityName(t),n.props.changeEntityFlag(!1,t,n.state.popUpType)},n.state={popUpType:e.popUpType,popUpVisible:!0,entityList:e.entityList},n}return Object(r.a)(s,[{key:"render",value:function(){var e=this,t=this.state.entityList.map((function(t){return e.state.popUpVisible?"Version"===e.state.popUpType?Object(n.jsx)("p",{style:{whiteSpace:"nowrap"},onClick:e.changeEntityDetails,children:t.versionName},t.versionId+"_"+t.versionName):"Model"===e.state.popUpType?Object(n.jsx)("p",{style:{whiteSpace:"nowrap"},onClick:e.changeEntityDetails,children:t.modelName},t.modelId+"_"+t.modelName):Object(n.jsx)("p",{style:{whiteSpace:"nowrap"},onClick:e.changeEntityDetails,children:t},t):""}));return Object(n.jsx)("div",{children:t})}}]),s}(c.a.Component),f=Object(h.b)(C,V)(O),x=Object(h.b)(C,V)(v),N=Object(h.b)(C,V)(y);function C(e){return Object(j.a)(Object(j.a)({},e),{},{selectedLocation:e.selectedLocation})}function V(e){return{changeCityName:function(t){e({type:"UPDATE_CITY",selectedLocation:t})}}}var L=function(e){Object(p.a)(s,e);var t=Object(d.a)(s);function s(e){var n;return Object(l.a)(this,s),(n=t.call(this,e)).changeEntityFlag=function(e,t,s){if("Version"===s){for(var a={},c=0;c<n.state.versions.length;c++)if(n.state.versions[c].versionName===t){a=n.state.versions[c];break}n.setState(Object(j.a)(Object(j.a)({},n.state),{},{selectedVersion:a,locationPopUpVisible:!1,versionPopUpVisible:e}))}else n.setState(Object(j.a)(Object(j.a)({},n.state),{},{selectedLocation:t,locationPopUpVisible:e,versionPopUpVisible:!1}))},n.state={id:1,models:[],selectedModel:{},dataRecieved:!1,locationPopUpVisible:!1,versionPopUpVisible:!1,versions:[],locations:[],selectedLocation:"",selectedVersion:{}},n}return Object(r.a)(s,[{key:"componentDidMount",value:function(){var e=this;fetch("http://localhost:5000/home/GetModelsDetails?companyId=1").then((function(e){return e.json()})).then((function(t){console.log(t),fetch("http://localhost:5000/home/getcardetails?companyId=1&modelId=2").then((function(e){return e.json()})).then((function(s){console.log(s),fetch("http://localhost:5000/home/GetCities").then((function(e){return e.json()})).then((function(n){console.log(n),e.setState(Object(j.a)(Object(j.a)({},e.state),{},{dataRecieved:!0,models:t,selectedModel:t[0],versions:s,locations:n,selectedLocation:n[0],selectedVersion:s[0]}))}),(function(e){console.log("Error City fetch:",e)}))}),(function(e){console.log("Error: version fetch:",e)}))}),(function(e){console.log("Error: cardata fetch: ",e)}))}},{key:"render",value:function(){return this.state.dataRecieved?this.state.locationPopUpVisible?Object(n.jsx)("div",{children:Object(n.jsx)(N,{popUpType:"Location",entityList:this.state.locations,changeEntityFlag:this.changeEntityFlag,selectedEntity:this.state.selectedLocation,popUpVisible:this.state.locationPopUpVisible})}):this.state.versionPopUpVisible?Object(n.jsx)("div",{children:Object(n.jsx)(N,{popUpType:"Version",entityList:this.state.versions,changeEntityFlag:this.changeEntityFlag,selectedEntity:this.state.selectedVersion,popUpVisible:this.state.versionPopUpVisible})}):Object(n.jsxs)("div",{className:"Container",children:[Object(n.jsx)(f,{selectedLocation:this.state.selectedLocation,changeEntityFlag:this.changeEntityFlag}),Object(n.jsx)(u,{model:this.state.selectedModel}),Object(n.jsx)(m,{model:this.state.selectedModel}),Object(n.jsx)(x,{selectedLocation:this.state.selectedLocation,selectedVersion:this.state.selectedVersion,changeEntityFlag:this.changeEntityFlag}),Object(n.jsx)(g,{selectedVersion:this.state.selectedVersion})]}):Object(n.jsx)("div",{children:'console.log("error")'})}}]),s}(c.a.Component),U=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,29)).then((function(t){var s=t.getCLS,n=t.getFID,a=t.getFCP,c=t.getLCP,i=t.getTTFB;s(e),n(e),a(e),c(e),i(e)}))},E=s(10),k={locationList:["Mumbai","Pune","Navi Mumbai","Alwar","Goa","Chandigarh"],selectedLocation:"Alwar"};var I=Object(E.b)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;if("UPDATE_CITY"===t.type){var s=Object(j.a)(Object(j.a)({},e),{},{selectedLocation:t.selectedLocation});return s}return e}));o.a.render(Object(n.jsx)(h.a,{store:I,children:Object(n.jsx)(L,{})}),document.getElementById("root")),U()},7:function(e,t,s){}},[[28,1,2]]]);
//# sourceMappingURL=main.22b14b3c.chunk.js.map