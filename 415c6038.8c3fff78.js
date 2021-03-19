(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{109:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return l})),n.d(r,"metadata",(function(){return s})),n.d(r,"toc",(function(){return p})),n.d(r,"default",(function(){return d}));var t=n(3),o=n(7),a=(n(0),n(180)),i=n(185),c=n(186),l={id:"hooks-provider",title:"Schema Generator Hooks Provider"},s={unversionedId:"plugins/hooks-provider",id:"plugins/hooks-provider",isDocsHomePage:!1,title:"Schema Generator Hooks Provider",description:"GraphQL Kotlin plugins can generate GraphQL schema as your build artifact directly from your source code. Plugins will scan",source:"@site/docs/plugins/hooks-provider.mdx",slug:"/plugins/hooks-provider",permalink:"/graphql-kotlin/docs/plugins/hooks-provider",editUrl:"https://github.com/ExpediaGroup/graphql-kotlin/tree/master/website/docs/plugins/hooks-provider.mdx",version:"current",lastUpdatedBy:"Dariusz Kuc",lastUpdatedAt:1616190247,sidebar:"docs",previous:{title:"Maven Plugin Usage",permalink:"/graphql-kotlin/docs/plugins/maven-plugin-usage"}},p=[{value:"Creating Custom Hooks Service Provider",id:"creating-custom-hooks-service-provider",children:[{value:"Add dependency on graphql-kotlin-hooks-provider",id:"add-dependency-on-graphql-kotlin-hooks-provider",children:[]},{value:"Create new SchemaGeneratorHooksProvider implementation",id:"create-new-schemageneratorhooksprovider-implementation",children:[]},{value:"Create provider configuration file",id:"create-provider-configuration-file",children:[]}]},{value:"Limitations",id:"limitations",children:[]}],u={toc:p};function d(e){var r=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(t.a)({},u,n,{components:r,mdxType:"MDXLayout"}),Object(a.b)("p",null,"GraphQL Kotlin plugins can generate GraphQL schema as your build artifact directly from your source code. Plugins will scan\nyour classpath for classes implementing ",Object(a.b)("inlineCode",{parentName:"p"},"graphql-kotlin-server")," marker ",Object(a.b)("inlineCode",{parentName:"p"},"Query"),", ",Object(a.b)("inlineCode",{parentName:"p"},"Mutation")," and ",Object(a.b)("inlineCode",{parentName:"p"},"Subscription")," interfaces\nand then generate corresponding GraphQL schema using ",Object(a.b)("inlineCode",{parentName:"p"},"graphql-kotlin-schema-generator"),". By default, plugins will generate\nthe schema using ",Object(a.b)("inlineCode",{parentName:"p"},"NoopSchemaGeneratorHooks"),". If your project uses custom hooks or needs to generate the federated GraphQL\nschema, you will need to provide an instance of ",Object(a.b)("inlineCode",{parentName:"p"},"SchemaGeneratorHooksProvider")," that will be used to create an instance of\nyour custom hooks."),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"SchemaGeneratorHooksProvider")," is a service provider interface that exposes a single ",Object(a.b)("inlineCode",{parentName:"p"},"hooks")," method to generate an instance\nof ",Object(a.b)("inlineCode",{parentName:"p"},"SchemaGeneratorHooks")," that will be used to generate your schema. By utilizing Java ",Object(a.b)("a",{parentName:"p",href:"https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/ServiceLoader.html"},"ServiceLoader"),"\nwe can dynamically load your custom provider from the classpath. Service provider can be provided as part of your project\nsources, included inside of one of your project dependencies or through explicitly provided artifact. Since we need to be\nable to deterministically choose a single hooks provider, generation of schema will fail if there are multiple providers\non the classpath."),Object(a.b)("h2",{id:"creating-custom-hooks-service-provider"},"Creating Custom Hooks Service Provider"),Object(a.b)("h3",{id:"add-dependency-on-graphql-kotlin-hooks-provider"},"Add dependency on graphql-kotlin-hooks-provider"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"SchemaGeneratorHooksProvider")," interface is defined in ",Object(a.b)("inlineCode",{parentName:"p"},"graphql-kotlin-hooks-provider")," module."),Object(a.b)(i.a,{defaultValue:"gradle",values:[{label:"Gradle",value:"gradle"},{label:"Maven",value:"maven"}],mdxType:"Tabs"},Object(a.b)(c.a,{value:"gradle",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-kotlin"},'// build.gradle.kts\nimplementation("com.expediagroup", "graphql-kotlin-hooks-provider", latestVersion)\n'))),Object(a.b)(c.a,{value:"mavem",mdxType:"TabItem"},Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>com.expediagroup</groupId>\n    <artifactId>graphql-kotlin-hooks-provider</artifactId>\n    <version>${latestVersion}</version>\n</dependency>\n")))),Object(a.b)("h3",{id:"create-new-schemageneratorhooksprovider-implementation"},"Create new SchemaGeneratorHooksProvider implementation"),Object(a.b)("p",null,"Service provider implementation has to implement ",Object(a.b)("inlineCode",{parentName:"p"},"SchemaGeneratorHooksProvider")," interface that provides a way to instantiate\nschema generator hooks that will be used to generate the GraphQL schema."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-kotlin"},"package com.example\n\nclass MyCustomSchemaGeneratorHooksProvider : SchemaGeneratorHooksProvider {\n    override fun hooks(): SchemaGeneratorHooks = MyCustomHooks()\n}\n")),Object(a.b)("h3",{id:"create-provider-configuration-file"},"Create provider configuration file"),Object(a.b)("p",null,"Service loader provider configuration file should be created under JAR ",Object(a.b)("inlineCode",{parentName:"p"},"/META-INF/services")," directory (e.g. ",Object(a.b)("inlineCode",{parentName:"p"},"src/main/resources/META-INF/services"),"\nin default project structure). Name of the provider configuration should be fully qualified service provider interface name, i.e.\n",Object(a.b)("inlineCode",{parentName:"p"},"SchemaGeneratorHooksProvider")," and contain single entry - a fully qualified\nname of the service provider implementation."),Object(a.b)("p",null,"Using the example service provider implementation from the above, our project structure should look like"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"my-project\n|- src\n  |- main\n    |- kotlin\n      |- com\n        |- example\n          |- MyCustomSchemaGeneratorHooksProvider.kt\n    |- resources\n      |- META-INF\n        |- services\n          |- SchemaGeneratorHooksProvider\n\n")),Object(a.b)("p",null,"Our service provider configuration file should have following content"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-text"},"com.example.MyCustomSchemaGeneratorHooksProvider\n")),Object(a.b)("h2",{id:"limitations"},"Limitations"),Object(a.b)("p",null,"We don't support Java 9 module mechanism for declaring ",Object(a.b)("inlineCode",{parentName:"p"},"ServiceLoader")," implementations. As a workaround, you have to define\nyour service providers in the provider configuration file under ",Object(a.b)("inlineCode",{parentName:"p"},"META-INF/services"),"."))}d.isMDXComponent=!0},180:function(e,r,n){"use strict";n.d(r,"a",(function(){return u})),n.d(r,"b",(function(){return b}));var t=n(0),o=n.n(t);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function c(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),p=function(e){var r=o.a.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):c(c({},r),e)),n},u=function(e){var r=p(e.components);return o.a.createElement(s.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},m=o.a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=t,b=u["".concat(i,".").concat(m)]||u[m]||d[m]||a;return n?o.a.createElement(b,c(c({ref:r},s),{},{components:n})):o.a.createElement(b,c({ref:r},s))}));function b(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var a=n.length,i=new Array(a);i[0]=m;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:t,i[1]=c;for(var s=2;s<a;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},181:function(e,r,n){"use strict";function t(e){var r,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(r=0;r<e.length;r++)e[r]&&(n=t(e[r]))&&(o&&(o+=" "),o+=n);else for(r in e)e[r]&&(o&&(o+=" "),o+=r);return o}r.a=function(){for(var e,r,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(r=t(e))&&(o&&(o+=" "),o+=r);return o}},183:function(e,r,n){"use strict";var t=n(0),o=n(184);r.a=function(){var e=Object(t.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},184:function(e,r,n){"use strict";var t=n(0),o=Object(t.createContext)(void 0);r.a=o},185:function(e,r,n){"use strict";var t=n(0),o=n.n(t),a=n(183),i=n(181),c=n(53),l=n.n(c),s=37,p=39;r.a=function(e){var r=e.lazy,n=e.block,c=e.defaultValue,u=e.values,d=e.groupId,m=e.className,b=Object(a.a)(),v=b.tabGroupChoices,f=b.setTabGroupChoices,h=Object(t.useState)(c),g=h[0],y=h[1],O=t.Children.toArray(e.children);if(null!=d){var j=v[d];null!=j&&j!==g&&u.some((function(e){return e.value===j}))&&y(j)}var k=function(e){y(e),null!=d&&f(d,e)},C=[];return o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":n},m)},u.map((function(e){var r=e.value,n=e.label;return o.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":g===r,className:Object(i.a)("tabs__item",l.a.tabItem,{"tabs__item--active":g===r}),key:r,ref:function(e){return C.push(e)},onKeyDown:function(e){!function(e,r,n){switch(n.keyCode){case p:!function(e,r){var n=e.indexOf(r)+1;e[n]?e[n].focus():e[0].focus()}(e,r);break;case s:!function(e,r){var n=e.indexOf(r)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,r)}}(C,e.target,e)},onFocus:function(){return k(r)},onClick:function(){k(r)}},n)}))),r?Object(t.cloneElement)(O.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):o.a.createElement("div",{className:"margin-vert--md"},O.map((function(e,r){return Object(t.cloneElement)(e,{key:r,hidden:e.props.value!==g})}))))}},186:function(e,r,n){"use strict";var t=n(0),o=n.n(t);r.a=function(e){var r=e.children,n=e.hidden,t=e.className;return o.a.createElement("div",{role:"tabpanel",hidden:n,className:t},r)}}}]);