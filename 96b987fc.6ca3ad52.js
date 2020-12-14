(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{168:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var a=n(3),r=n(7),o=(n(0),n(246)),i={id:"web_usage",title:"Usage on the Web"},c={unversionedId:"web_usage",id:"version-2.2.1/web_usage",isDocsHomePage:!1,title:"Usage on the Web",description:"React Native Elements just like on mobile can be used in your web projects. This is possible using react-native-web. We'll highlight how to set this up using create-react-app.",source:"@site/versioned_docs/version-2.2.1/web_usage.md",slug:"/web_usage",permalink:"/docs/2.2.1/web_usage",editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-2.2.1/web_usage.md",version:"2.2.1",sidebar:"version-2.2.1/docs",previous:{title:"Customization",permalink:"/docs/2.2.1/customization"},next:{title:"Troubleshooting",permalink:"/docs/2.2.1/troubleshooting"}},s=[{value:"Why do I have to set this up?",id:"why-do-i-have-to-set-this-up",children:[]},{value:"Create React App",id:"create-react-app",children:[]}],p={rightToc:s};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"React Native Elements just like on mobile can be used in your web projects. This is possible using ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/necolas/react-native-web"}),"react-native-web"),". We'll highlight how to set this up using create-react-app."),Object(o.b)("h2",{id:"why-do-i-have-to-set-this-up"},"Why do I have to set this up?"),Object(o.b)("p",null,"On the web, you can usually use UI libraries directly from npm without any additional setup. However in react-native, it's a bit different."),Object(o.b)("p",null,"The major difference is that React Native can support JSX and advanced javascript out the box. This means that we don't need to transpile our code before we ship it to npm. ",Object(o.b)("strong",{parentName:"p"},"We ship JSX and advanced javascript directly to npm")," in React Native Elements, so we need to account for this in our web projects."),Object(o.b)("h2",{id:"create-react-app"},"Create React App"),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://create-react-app.dev/"}),"Create React App")," is a very popular framework for building react applications. Unfortunately it doesn't allow much customization of the build setup. To accomplish this we'll be making use of ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/timarney/react-app-rewired"}),"react-app-rewired")," and ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/arackaf/customize-cra"}),"customize-cra"),"."),Object(o.b)("p",null,"After creating a new create-react-app project, run the following commands."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"yarn add react-native-elements react-native-web react-native-vector-icons\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"yarn add --dev @babel/plugin-proposal-class-properties customize-cra react-app-rewired\n")),Object(o.b)("p",null,"Secondly, create a ",Object(o.b)("inlineCode",{parentName:"p"},"config-overrides.js")," file in the root of your project."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const path = require('path');\nconst { override, addBabelPlugins, babelInclude } = require('customize-cra');\n\nmodule.exports = override(\n  ...addBabelPlugins('@babel/plugin-proposal-class-properties'),\n  babelInclude([\n    path.resolve(__dirname, 'node_modules/react-native-elements'),\n    path.resolve(__dirname, 'node_modules/react-native-vector-icons'),\n    path.resolve(__dirname, 'node_modules/react-native-ratings'),\n    path.resolve(__dirname, 'src'),\n  ])\n);\n")),Object(o.b)("p",null,"Also you should keep in mind that not all of React Native components are implemented for web-platform out-of-box.\nFor example, ",Object(o.b)("inlineCode",{parentName:"p"},"Modal")," component is not yet implemented in ",Object(o.b)("inlineCode",{parentName:"p"},"react-native-web"),". Therefore, to use some of our components\nyou may need to install additional third-party libraries that implement the missing functionality.\nFor ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/2.2.1/overlay"}),Object(o.b)("inlineCode",{parentName:"a"},"Overlay"))," and ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/2.2.1/tooltip"}),Object(o.b)("inlineCode",{parentName:"a"},"Tooltip"))," components ",Object(o.b)("inlineCode",{parentName:"p"},"Modal")," implementation is required."),Object(o.b)("p",null,"Lastly, change your scripts in ",Object(o.b)("inlineCode",{parentName:"p"},"package.json")," to use react-app-rewired:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-diff"}),'"scripts": {\n-   "start": "react-scripts start",\n+   "start": "react-app-rewired start",\n-   "build": "react-scripts build",\n+   "build": "react-app-rewired build",\n-   "test": "react-scripts test",\n+   "test": "react-app-rewired test"\n}\n')),Object(o.b)("p",null,"At this point your app can start. However trying to use any components that use icons, will not show them. In your App.js, load these fonts as you would on the web with a style tag."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"<style type=\"text/css\">{`\n  @font-face {\n    font-family: 'MaterialIcons';\n    src: url(${require('react-native-vector-icons/Fonts/MaterialIcons.ttf')}) format('truetype');\n  }\n\n  @font-face {\n    font-family: 'FontAwesome';\n    src: url(${require('react-native-vector-icons/Fonts/FontAwesome.ttf')}) format('truetype');\n  }\n`}</style>\n")),Object(o.b)("p",null,"The full setup of the guide can be found at ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/react-native-elements/create-react-app-example"}),"https://github.com/react-native-elements/create-react-app-example"),"."))}l.isMDXComponent=!0},246:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),l=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),d=a,m=u["".concat(i,".").concat(d)]||u[d]||b[d]||o;return n?r.a.createElement(m,c(c({ref:t},p),{},{components:n})):r.a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);