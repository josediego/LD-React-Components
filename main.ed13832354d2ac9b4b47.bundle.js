(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{425:function(module,exports,__webpack_require__){__webpack_require__(426),__webpack_require__(520),__webpack_require__(521),module.exports=__webpack_require__(809)},447:function(module,exports){},809:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(120),_storybook_addon_a11y__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__(811),__webpack_require__(151),__webpack_require__(424));Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.configure)(__webpack_require__(962),module),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.addDecorator)(_storybook_addon_a11y__WEBPACK_IMPORTED_MODULE_3__.withA11y),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__.addParameters)({options:{panelPosition:"bottom",name:"Launch Darkly React Components"},backgrounds:[{name:"white",value:"#fff",default:!0},{name:"grey",value:"#f4f5f8"}],a11y:{element:"#root",config:{},options:{}}})}.call(this,__webpack_require__(810)(module))},962:function(module,exports,__webpack_require__){var map={"./lib/FeatureFlag/FeatureFlag.stories.jsx":972};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=962},972:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);var react=__webpack_require__(0),react_default=__webpack_require__.n(react),prop_types=(__webpack_require__(22),__webpack_require__(32),__webpack_require__(40),__webpack_require__(23),__webpack_require__(67)),prop_types_default=__webpack_require__.n(prop_types);function FeatureFlag(props){var children=props.children,flagKey=props.flagKey,appFlags=props.appFlags,isChildPluginComponent=!1,isNonPluginComponent=!1,childArray=[];return react_default.a.Children.forEach(children,(function(element){if(react_default.a.isValidElement(element)&&("FeatureTrue"===element.type.displayName||"FeatureTrue"===element.type.name)){if(isNonPluginComponent)return void console.warn("Dont Use <FeatureTrue /> among other elements/components under <FeatureFlag /> only use it with <FeatureFalse />, No mix allowed");appFlags[flagKey]&&appFlags[flagKey].value&&childArray.push(element),isChildPluginComponent=!0}if(react_default.a.isValidElement(element)&&("FeatureFalse"===element.type.displayName||"FeatureFalse"===element.type.name)){if(isNonPluginComponent)return void console.warn("Dont Use <FeatureFalse /> among other elements/components under <FeatureFlag /> only use it with <FeatureTrue />, No mix allowed");appFlags[flagKey]&&(!appFlags[flagKey]||appFlags[flagKey].value)||childArray.push(element),isChildPluginComponent=!0}if(react_default.a.isValidElement(element)&&("FeatureSwitch"===element.type.displayName||"FeatureSwitch"===element.type.name)){if(isNonPluginComponent)return void console.warn("Dont Use <FeatureSwitch /> unless its the immediate children of <FeatureFlag />, No mix allowed");childArray.push(react_default.a.cloneElement(element,{flagKey:flagKey,appFlags:appFlags})),isChildPluginComponent=!0}isChildPluginComponent||(isNonPluginComponent=!0,appFlags[flagKey]&&appFlags[flagKey].value&&childArray.push(element))})),react_default.a.Children.map(childArray,(function(child){return child}))}FeatureFlag.propTypes={flagKey:prop_types_default.a.string.isRequired,appFlags:prop_types_default.a.object.isRequired};var lib_FeatureFlag=FeatureFlag;var lib_FeatureSwitch=function FeatureSwitch(props){var children=props.children,flagKey=props.flagKey,appFlags=props.appFlags,childArray=[],breakIt=!1;return react_default.a.Children.forEach(children,(function(element){if(react_default.a.isValidElement(element)&&("FeatureCase"===element.type.displayName||"FeatureCase"===element.type.name)&&!breakIt){var _element$props=element.props,condition=_element$props.condition,allowBreak=_element$props.allowBreak;(appFlags[flagKey]&&appFlags[flagKey].value)===condition&&(childArray.push(element),breakIt=allowBreak)}react_default.a.isValidElement(element)&&("FeatureDefault"===element.type.displayName||"FeatureDefault"===element.type.name)&&!breakIt&&childArray.push(element)})),react_default.a.Children.map(childArray,(function(child){return child}))};var lib_FeatureCase=function FeatureCase(props){var children=props.children;return react_default.a.Children.map(children,(function(child){return child}))};var lib_FeatureDefault=function FeatureDefault(props){var children=props.children;return react_default.a.Children.map(children,(function(child){return child}))};__webpack_require__.d(__webpack_exports__,"basicFeatureFlag",(function(){return basicFeatureFlag}));__webpack_require__(412).withSource;var addSourceDecorator=__webpack_require__(412).addSource,_ref=(__webpack_exports__.default={title:"Component|Feature Flag",component:lib_FeatureFlag,parameters:{storySource:{source:"import React from 'react';\nimport FeatureFlag from '.';\nimport FeatureSwitch from '../FeatureSwitch';\nimport FeatureCase from '../FeatureCase';\nimport FeatureDefault from '../FeatureDefault';\nimport notes from './README.md';\n\nexport default {\n  title: 'Component|Feature Flag',\n  component: FeatureFlag,\n  parameters: { notes }\n};\n\nconst applicationKeys = {\n  'integration-test': { value: true, version: 3 },\n  'multivariate-test': { value: 'multivariate-test-1', version: 5 }\n};\n\nexport const basicFeatureFlag = () => (\n  <FeatureFlag flagKey=\"multivariate-test\" appFlags={applicationKeys}>\n    <FeatureSwitch>\n      <FeatureCase condition=\"multivariate-test-1\" allowBreak>\n        <p>Multivariate Test 1 Rendered</p>\n      </FeatureCase>\n      <FeatureCase condition=\"multivariate-test-2\" allowBreak>\n        <p>Multivariate Test 2 Rendered</p>\n      </FeatureCase>\n      <FeatureCase condition=\"multivariate-test-3\" allowBreak>\n        <p>Multivariate Test 3 Rendered</p>\n      </FeatureCase>\n      <FeatureCase condition=\"multivariate-test-4\" allowBreak>\n        <p>Multivariate Test 4 Rendered</p>\n      </FeatureCase>\n      <FeatureDefault>\n        <p>If no conditions are met then render the default</p>\n      </FeatureDefault>\n    </FeatureSwitch>\n  </FeatureFlag>\n);",locationsMap:{"component-feature-flag--basic-feature-flag":{startLoc:{col:32,line:19},endLoc:{col:1,line:39},startBody:{col:32,line:19},endBody:{col:1,line:39}}}},notes:"### FeatureFlag\n\nTakes `flagKey` and `appFlags` as `props`, which is an object containing list of features.\n\n### FeatureSwitch, FeatureCase and FeatureDefault\n\n`FeatureSwitch` should be a child of `FeatureFlag` and can take `FeatureCase` and `FeatureDefault` as children.\n\n`FeatureCase` component takes `condition` and `allowBreak`(a boolean) as props,\n`condition` is the `case` feature, while `allowBreak` used as a `break`. The reason for name change is `case` and `break` are reserved words on JS."}},react_default.a.createElement(lib_FeatureFlag,{flagKey:"multivariate-test",appFlags:{"integration-test":{value:!0,version:3},"multivariate-test":{value:"multivariate-test-1",version:5}}},react_default.a.createElement(lib_FeatureSwitch,null,react_default.a.createElement(lib_FeatureCase,{condition:"multivariate-test-1",allowBreak:!0},react_default.a.createElement("p",null,"Multivariate Test 1 Rendered")),react_default.a.createElement(lib_FeatureCase,{condition:"multivariate-test-2",allowBreak:!0},react_default.a.createElement("p",null,"Multivariate Test 2 Rendered")),react_default.a.createElement(lib_FeatureCase,{condition:"multivariate-test-3",allowBreak:!0},react_default.a.createElement("p",null,"Multivariate Test 3 Rendered")),react_default.a.createElement(lib_FeatureCase,{condition:"multivariate-test-4",allowBreak:!0},react_default.a.createElement("p",null,"Multivariate Test 4 Rendered")),react_default.a.createElement(lib_FeatureDefault,null,react_default.a.createElement("p",null,"If no conditions are met then render the default"))))),basicFeatureFlag=addSourceDecorator((function(){return _ref}),{__STORY__:"import React from 'react';\nimport FeatureFlag from '.';\nimport FeatureSwitch from '../FeatureSwitch';\nimport FeatureCase from '../FeatureCase';\nimport FeatureDefault from '../FeatureDefault';\nimport notes from './README.md';\n\nexport default {\n  title: 'Component|Feature Flag',\n  component: FeatureFlag,\n  parameters: { notes }\n};\n\nconst applicationKeys = {\n  'integration-test': { value: true, version: 3 },\n  'multivariate-test': { value: 'multivariate-test-1', version: 5 }\n};\n\nexport const basicFeatureFlag = () => (\n  <FeatureFlag flagKey=\"multivariate-test\" appFlags={applicationKeys}>\n    <FeatureSwitch>\n      <FeatureCase condition=\"multivariate-test-1\" allowBreak>\n        <p>Multivariate Test 1 Rendered</p>\n      </FeatureCase>\n      <FeatureCase condition=\"multivariate-test-2\" allowBreak>\n        <p>Multivariate Test 2 Rendered</p>\n      </FeatureCase>\n      <FeatureCase condition=\"multivariate-test-3\" allowBreak>\n        <p>Multivariate Test 3 Rendered</p>\n      </FeatureCase>\n      <FeatureCase condition=\"multivariate-test-4\" allowBreak>\n        <p>Multivariate Test 4 Rendered</p>\n      </FeatureCase>\n      <FeatureDefault>\n        <p>If no conditions are met then render the default</p>\n      </FeatureDefault>\n    </FeatureSwitch>\n  </FeatureFlag>\n);",__ADDS_MAP__:{"component-feature-flag--basic-feature-flag":{startLoc:{col:32,line:19},endLoc:{col:1,line:39},startBody:{col:32,line:19},endBody:{col:1,line:39}}},__MAIN_FILE_LOCATION__:"/FeatureFlag.stories.jsx",__MODULE_DEPENDENCIES__:[],__LOCAL_DEPENDENCIES__:{},__SOURCE_PREFIX__:"/home/circleci/ld-react-components/src/lib/FeatureFlag",__IDS_TO_FRAMEWORKS__:{}})}},[[425,1,2]]]);
//# sourceMappingURL=main.ed13832354d2ac9b4b47.bundle.js.map