(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{1497:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(53),o=a(52),c=a.n(o),i=a(51),s=a(322),u=a(30),m=a.n(u),p=a(209),d=a.n(p),f=a(238),h=a.n(f),v=a(237),y=a.n(v),b=function(){return r.a.createElement("article",{className:"article"},r.a.createElement("div",{className:"box box-default"},r.a.createElement("div",{className:"box-header"},"Vertical Form"),r.a.createElement("div",{className:"box-body py-5"},r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"exampleInputName1"},"Name"),r.a.createElement(d.a,{placeholder:"Name",id:"exampleInputName1",fullWidth:!0})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"exampleInputPassword1"},"Password"),r.a.createElement(d.a,{placeholder:"Password",id:"exampleInputPassword1",fullWidth:!0})),r.a.createElement("div",null,r.a.createElement(h.a,{control:r.a.createElement(y.a,{value:"checked",color:"primary"}),label:"Remember Me"})),r.a.createElement(m.a,{variant:"contained",color:"primary",className:"btn-w-md"}," Login "),r.a.createElement("div",{className:"divider"})))))},E=function(){return r.a.createElement("article",{className:"article"},r.a.createElement("div",{className:"box box-default"},r.a.createElement("div",{className:"box-header"},"Horizontal Form"),r.a.createElement("div",{className:"box-body py-5"},r.a.createElement("form",null,r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{htmlFor:"inputName2",className:"col-md-2 col-form-label"},"Name"),r.a.createElement("div",{className:"col-md-10"},r.a.createElement(d.a,{placeholder:"Name",id:"inputName2",fullWidth:!0}))),r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{htmlFor:"inputPassword2",className:"col-md-2 col-form-label"},"Password"),r.a.createElement("div",{className:"col-md-10"},r.a.createElement(d.a,{placeholder:"Password",id:"inputPassword2",fullWidth:!0}))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-2"}),r.a.createElement("div",{className:"col-md-10"},r.a.createElement(h.a,{control:r.a.createElement(y.a,{value:"checked",color:"primary"}),label:"Remember Me"}))),r.a.createElement("div",{className:"form-group row"},r.a.createElement("div",{className:"col-md-2"}),r.a.createElement("div",{className:"col-md-10"},r.a.createElement(m.a,{variant:"contained",className:"btn-w-md"}," Login ")))))))},S=function(){return r.a.createElement("article",{className:"article"},r.a.createElement("div",{className:"box box-default"},r.a.createElement("div",{className:"box-header"},"Inline Form"),r.a.createElement("div",{className:"box-body py-5"},r.a.createElement("form",{className:"form-inline"},r.a.createElement(d.a,{placeholder:"Name",className:"mr-2"}),r.a.createElement(d.a,{placeholder:"Password",type:"password",className:"mr-2",inputProps:{autoComplete:"off"}}),r.a.createElement(h.a,{className:"mr-2",control:r.a.createElement(y.a,{value:"checked",color:"primary"}),label:"Remember Me"}),r.a.createElement(m.a,{variant:"contained",color:"secondary",className:"btn-w-md"}," Login ")))))},N=function(){return r.a.createElement("article",{className:"article"},r.a.createElement("h2",{className:"article-title"},"Form Layout"),r.a.createElement(b,null),r.a.createElement(E,null),r.a.createElement(S,null))},w=(a(1463),a(1586)),g=a.n(w),k=a(1468),C=a(1475),x=a(1466);function O(e){return(O="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function P(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");j(e.prototype,t&&t.prototype),t&&j(e,t)}function j(e,t){return(j=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function R(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function F(e,t,a){return t&&R(e.prototype,t),a&&R(e,a),e}function T(e,t){return!t||"object"!==O(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function B(e){return(B=Object.getPrototypeOf||function(e){return e.__proto__})(e)}var A=function(e){function t(){var e,a,n;_(this,t);for(var r=arguments.length,l=new Array(r),o=0;o<r;o++)l[o]=arguments[o];return T(n,(a=n=T(this,(e=B(t)).call.apply(e,[this].concat(l))),n.state={visible:!1},n.showModal=function(){n.setState({visible:!0})},n.handleOk=function(e){n.setState({visible:!1})},n.handleCancel=function(e){n.setState({visible:!1})},a))}return F(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(m.a,{variant:"contained",onClick:this.showModal},"Open a modal form v1"),r.a.createElement(g.a,{visible:this.state.visible,onCancel:this.handleCancel,footer:null,className:"custom-modal-v1"},r.a.createElement(k.a,null)))}}]),P(t,e),t}(r.a.Component),M=function(e){function t(){var e,a,n;_(this,t);for(var r=arguments.length,l=new Array(r),o=0;o<r;o++)l[o]=arguments[o];return T(n,(a=n=T(this,(e=B(t)).call.apply(e,[this].concat(l))),n.state={visible:!1},n.showModal=function(){n.setState({visible:!0})},n.handleOk=function(e){n.setState({visible:!1})},n.handleCancel=function(e){n.setState({visible:!1})},a))}return F(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(m.a,{variant:"contained",onClick:this.showModal},"Open a modal form v2"),r.a.createElement(g.a,{visible:this.state.visible,onCancel:this.handleCancel,footer:null,className:"custom-modal-v1"},r.a.createElement(C.a,null)))}}]),P(t,e),t}(r.a.Component),I=function(e){function t(){var e,a,n;_(this,t);for(var r=arguments.length,l=new Array(r),o=0;o<r;o++)l[o]=arguments[o];return T(n,(a=n=T(this,(e=B(t)).call.apply(e,[this].concat(l))),n.state={visible:!1},n.showModal=function(){n.setState({visible:!0})},n.handleOk=function(e){n.setState({visible:!1})},n.handleCancel=function(e){n.setState({visible:!1})},a))}return F(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(m.a,{variant:"contained",onClick:this.showModal},"Open a modal form v3"),r.a.createElement(g.a,{visible:this.state.visible,onCancel:this.handleCancel,footer:null,className:"custom-modal-v1"},r.a.createElement(x.a,null)))}}]),P(t,e),t}(r.a.Component),L=function(){return r.a.createElement("article",{className:"article"},r.a.createElement("h2",{className:"article-title"},"Modal Form"),r.a.createElement("div",{className:"box box-default"},r.a.createElement("div",{className:"box-body d-flex justify-content-around py-5"},r.a.createElement(A,null),r.a.createElement(M,null),r.a.createElement(I,null))))},W=function(){return r.a.createElement("section",{className:"container-fluid container-mw-lg chapter"},r.a.createElement(s.a,{type:"bottom",className:"ui-animate"},r.a.createElement("div",{className:"article__section",key:"1"}," ",r.a.createElement(N,null)," "),r.a.createElement("div",{className:"article__section",key:"2"}," ",r.a.createElement(L,null)," ")))},z=a(176),H=a(1570),U=a.n(H),J=a(1569),V=a.n(J),q=a(830),Y=a.n(q),D=a(62),G=a.n(D);function K(e){return(K="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function Q(e,t){return(Q=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function X(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function Z(e,t){return!t||"object"!==K(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function $(e){return($=Object.getPrototypeOf||function(e){return e.__proto__})(e)}var ee=function(e){function t(){var e,a,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,l=new Array(r),o=0;o<r;o++)l[o]=arguments[o];return Z(n,(a=n=Z(this,(e=$(t)).call.apply(e,[this].concat(l))),n.state={activeStep:0,skipped:new Set},n.isStepOptional=function(e){return 1===e},n.handleNext=function(){var e=n.state.activeStep,t=n.state.skipped;n.isStepSkipped(e)&&(t=new Set(t.values())).delete(e),n.setState({activeStep:e+1,skipped:t})},n.handleBack=function(){var e=n.state.activeStep;n.setState({activeStep:e-1})},n.handleSkip=function(){var e=n.state.activeStep;if(!n.isStepOptional(e))throw new Error("You can't skip a step that isn't optional.");n.setState(function(t){var a=new Set(t.skipped.values());return a.add(e),{activeStep:t.activeStep+1,skipped:a}})},n.handleReset=function(){n.setState({activeStep:0})},a))}var a,n,l;return a=t,(n=[{key:"isStepSkipped",value:function(e){return this.state.skipped.has(e)}},{key:"render",value:function(){var e=this,t=this.props.classes,a=["Select campaign settings","Create an ad group","Create an ad"],n=this.state.activeStep;return r.a.createElement("div",{className:"box box-default demo-stepper"},r.a.createElement("div",{className:"box-header"},"Horizontal Linear"),r.a.createElement("div",{className:"box-body"},r.a.createElement(U.a,{activeStep:n,className:"stepper-header"},a.map(function(t,a){var n={},l={};return e.isStepOptional(a)&&(l.optional=r.a.createElement(G.a,{variant:"caption"},"Optional")),e.isStepSkipped(a)&&(n.completed=!1),r.a.createElement(V.a,Object.assign({key:t},n),r.a.createElement(Y.a,l,t))})),n===a.length?r.a.createElement("div",null,r.a.createElement(G.a,{className:"stepper-content"},'All steps completed - you"re finished'),r.a.createElement(m.a,{onClick:this.handleReset,className:t.button},"Reset")):r.a.createElement("div",null,r.a.createElement(G.a,{className:"stepper-content"},function(e){switch(e){case 0:return"Select campaign settings...";case 1:return"What is an ad group anyways?";case 2:return"This is the bit I really care about!";default:return"Unknown step"}}(n)),r.a.createElement("div",null,r.a.createElement(m.a,{disabled:0===n,onClick:this.handleBack,className:t.button},"Back"),this.isStepOptional(n)&&r.a.createElement(m.a,{variant:"contained",color:"primary",onClick:this.handleSkip,className:t.button},"Skip"),r.a.createElement(m.a,{variant:"contained",color:"primary",onClick:this.handleNext,className:t.button},n===a.length-1?"Finish":"Next")))))}}])&&X(a.prototype,n),l&&X(a,l),function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");Q(e.prototype,t&&t.prototype),t&&Q(e,t)}(t,e),t}(r.a.Component),te=Object(z.withStyles)(function(e){return{button:{marginRight:e.spacing.unit}}})(ee),ae=a(1568),ne=a.n(ae),re=a(88),le=a.n(re);function oe(e){return(oe="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ce(e,t){return(ce=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function ie(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function se(e,t){return!t||"object"!==oe(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function ue(e){return(ue=Object.getPrototypeOf||function(e){return e.__proto__})(e)}var me=function(e){function t(){var e,a,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,l=new Array(r),o=0;o<r;o++)l[o]=arguments[o];return se(n,(a=n=se(this,(e=ue(t)).call.apply(e,[this].concat(l))),n.state={activeStep:0},n.handleNext=function(){n.setState(function(e){return{activeStep:e.activeStep+1}})},n.handleBack=function(){n.setState(function(e){return{activeStep:e.activeStep-1}})},n.handleReset=function(){n.setState({activeStep:0})},a))}var a,n,l;return a=t,(n=[{key:"render",value:function(){var e=this,t=this.props.classes,a=["Select campaign settings","Create an ad group","Create an ad"],n=this.state.activeStep;return r.a.createElement("div",{className:"box box-default"},r.a.createElement("div",{className:"box-header"},"Vertical Stepper"),r.a.createElement("div",{className:"box-body"},r.a.createElement(U.a,{activeStep:n,orientation:"vertical"},a.map(function(l,o){return r.a.createElement(V.a,{key:l},r.a.createElement(Y.a,null,l),r.a.createElement(ne.a,null,r.a.createElement(G.a,null,function(e){switch(e){case 0:return"For each ad campaign that you create, you can control how much\n              you're willing to spend on clicks and conversions, which networks\n              and geographical locations you want your ads to show on, and more.";case 1:return"An ad group contains one or more ads which target a shared set of keywords.";case 2:return"Try out different ad text to see what brings in the most customers,\n              and learn how to enhance your ads using features like ad extensions.\n              If you run into any problems with your ads, find out how to tell if\n              they're running and how to resolve approval issues.";default:return"Unknown step"}}(o)),r.a.createElement("div",{className:t.actionsContainer},r.a.createElement("div",null,r.a.createElement(m.a,{disabled:0===n,onClick:e.handleBack,className:t.button},"Back"),r.a.createElement(m.a,{variant:"contained",color:"primary",onClick:e.handleNext,className:t.button},n===a.length-1?"Finish":"Next")))))})),n===a.length&&r.a.createElement(le.a,{square:!0,elevation:0,className:t.resetContainer},r.a.createElement(G.a,null,'All steps completed - you"re finished'),r.a.createElement(m.a,{onClick:this.handleReset,className:t.button},"Reset"))))}}])&&ie(a.prototype,n),l&&ie(a,l),function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");ce(e.prototype,t&&t.prototype),t&&ce(e,t)}(t,e),t}(r.a.Component),pe=Object(z.withStyles)(function(e){return{button:{marginTop:e.spacing.unit,marginRight:e.spacing.unit},actionsContainer:{marginBottom:2*e.spacing.unit},resetContainer:{padding:3*e.spacing.unit}}})(me),de=a(1567),fe=a.n(de);function he(e){return(he="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function ve(e,t){return(ve=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function ye(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function be(e,t){return!t||"object"!==he(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function Ee(e){return(Ee=Object.getPrototypeOf||function(e){return e.__proto__})(e)}var Se=function(e){function t(){var e,a,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,l=new Array(r),o=0;o<r;o++)l[o]=arguments[o];return be(n,(a=n=be(this,(e=Ee(t)).call.apply(e,[this].concat(l))),n.state={activeStep:0,completed:{}},n.totalSteps=function(){return["Select campaign settings","Create an ad group","Create an ad"].length},n.handleNext=function(){var e;n.isLastStep()&&!n.allStepsCompleted()?e=["Select campaign settings","Create an ad group","Create an ad"].findIndex(function(e,t){return!(t in n.state.completed)}):e=n.state.activeStep+1;n.setState({activeStep:e})},n.handleBack=function(){var e=n.state.activeStep;n.setState({activeStep:e-1})},n.handleStep=function(e){return function(){n.setState({activeStep:e})}},n.handleComplete=function(){var e=n.state.completed;e[n.state.activeStep]=!0,n.setState({completed:e}),n.handleNext()},n.handleReset=function(){n.setState({activeStep:0,completed:{}})},a))}var a,n,l;return a=t,(n=[{key:"completedSteps",value:function(){return Object.keys(this.state.completed).length}},{key:"isLastStep",value:function(){return this.state.activeStep===this.totalSteps()-1}},{key:"allStepsCompleted",value:function(){return this.completedSteps()===this.totalSteps()}},{key:"render",value:function(){var e=this,t=this.props.classes,a=["Select campaign settings","Create an ad group","Create an ad"],n=this.state.activeStep;return r.a.createElement("div",{className:"box box-default demo-stepper"},r.a.createElement("div",{className:"box-header"},"Horizontal Non Linear"),r.a.createElement("div",{className:"box-body"},r.a.createElement(U.a,{nonLinear:!0,activeStep:n,className:"stepper-header"},a.map(function(t,a){return r.a.createElement(V.a,{key:t},r.a.createElement(fe.a,{onClick:e.handleStep(a),completed:e.state.completed[a]},t))})),r.a.createElement("div",null,this.allStepsCompleted()?r.a.createElement("div",null,r.a.createElement(G.a,{className:"stepper-content"},'All steps completed - you"re finished'),r.a.createElement(m.a,{onClick:this.handleReset},"Reset")):r.a.createElement("div",null,r.a.createElement(G.a,{className:"stepper-content"},function(e){switch(e){case 0:return"Step 1: Select campaign settings...";case 1:return"Step 2: What is an ad group anyways?";case 2:return"Step 3: This is the bit I really care about!";default:return"Unknown step"}}(n)),r.a.createElement("div",null,r.a.createElement(m.a,{disabled:0===n,onClick:this.handleBack,className:t.button},"Back"),r.a.createElement(m.a,{variant:"contained",color:"primary",onClick:this.handleNext,className:t.button},"Next"),n!==a.length&&(this.state.completed[this.state.activeStep]?r.a.createElement(G.a,{variant:"caption",className:t.completed},"Step ",n+1," already completed"):r.a.createElement(m.a,{variant:"contained",color:"primary",onClick:this.handleComplete},this.completedSteps()===this.totalSteps()-1?"Finish":"Complete Step")))))))}}])&&ye(a.prototype,n),l&&ye(a,l),function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");ve(e.prototype,t&&t.prototype),t&&ve(e,t)}(t,e),t}(r.a.Component),Ne=Object(z.withStyles)(function(e){return{root:{width:"90%"},button:{marginRight:e.spacing.unit},completed:{display:"inline-block"},instructions:{marginTop:e.spacing.unit,marginBottom:e.spacing.unit}}})(Se),we=(a(1631),function(){return r.a.createElement("div",{className:"container-fluid container-mw-xl chapter"},r.a.createElement("article",{className:"article"},r.a.createElement("h2",{className:"article-title"},"Steppers"),r.a.createElement(s.a,{type:"bottom",className:"ui-animate"},r.a.createElement("div",{key:"1",className:"mb-5"},r.a.createElement(te,null)),r.a.createElement("div",{key:"2",className:"mb-5"},r.a.createElement(pe,null)),r.a.createElement("div",{key:"3",className:"mb-5"},r.a.createElement(Ne,null)))))}),ge=c()({loader:function(){return Promise.all([a.e(0),a.e(21)]).then(a.bind(null,1508))},loading:i.a}),ke=c()({loader:function(){return Promise.all([a.e(0),a.e(20)]).then(a.bind(null,1484))},loading:i.a});t.default=function(e){var t=e.match;return r.a.createElement("div",null,r.a.createElement(l.a,{path:"".concat(t.url,"/form-control"),component:ge}),r.a.createElement(l.a,{path:"".concat(t.url,"/forms"),component:ke}),r.a.createElement(l.a,{path:"".concat(t.url,"/layouts"),component:W}),r.a.createElement(l.a,{path:"".concat(t.url,"/steppers"),component:we}))}},1631:function(e,t,a){}}]);
//# sourceMappingURL=8.22136f3c.chunk.js.map