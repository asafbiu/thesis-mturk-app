(this.webpackJsonpmturk=this.webpackJsonpmturk||[]).push([[3],{13:function(e,t,n){"use strict";n.r(t);var a=n(14),c=n(15),s=n(16),i=n(27),r=n(18),l=n(17),o=n(0),d=n.n(o),h=(n(53),n(1)),m=function(e){Object(r.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=this.props.onClickSkip;return Object(h.jsx)("div",{className:"home",children:Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)("div",{className:"row",children:Object(h.jsx)("div",{className:"col",children:Object(h.jsxs)("div",{className:"header text-center",children:[Object(h.jsx)("h1",{children:"Virtual Assistant++"}),Object(h.jsx)("h3",{children:Object(h.jsx)("span",{className:"bi bi-robot"})}),Object(h.jsx)("p",{children:"Your goal in this task is to write Complex Commands to the perfect virtual assistant (better than Google assistant, Alexa or Siri)"})]})})}),Object(h.jsx)("div",{className:"row mb-5",children:Object(h.jsx)("div",{className:"col",children:Object(h.jsx)("div",{className:"mt-4 mb-4 d-grid gap-2 d-sm-flex justify-content-sm-center",children:Object(h.jsx)("button",{type:"button",className:"btn btn-primary btn-lg px-4",onClick:e,children:"Start"})})})})]})})}}]),n}(d.a.Component),j=(n(54),function(e){Object(r.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"getRequirments",value:function(){return[{title:"Relevant",desc:"The different parts in your complex command should be related to one another. "},{title:"Can be done by a virtual assistant",desc:"Think of instructions that are possible for a virtual assistant to perform. As a rule of thumb, if a virtual assistant (like Siri or Alexa) can do each of the simple instructions that make the complex instruction, then it is valid."},{title:"Useful",desc:"Think about real-life scenarios where you could use this ideal virtual assistance in your favor."},{title:"Diverse",desc:"Don\u2019t repeat yourself. Think of commands in different apps or different commands in the same app. "},{title:"Unambiguous",desc:"A person can clearly understand the intents within your instruction."}]}},{key:"render",value:function(){var e=this.getRequirments();return Object(h.jsxs)("div",{className:"instructions",children:[Object(h.jsx)("div",{className:"row",children:Object(h.jsx)("div",{className:"col",children:Object(h.jsxs)("div",{className:"header text-center",children:[Object(h.jsxs)("h1",{className:"text-center",children:[Object(h.jsx)("span",{className:"title-small",children:"Your task:"}),"Write Complex instructions"]}),Object(h.jsx)("p",{children:"Now, you think of something you can ask your virtual assistant that involves multiple apps (or the same app multiple times)."})]})})}),Object(h.jsx)("div",{className:"row",children:Object(h.jsxs)("div",{className:"col",children:[Object(h.jsx)("h3",{children:"Requirements"}),Object(h.jsx)("ol",{className:"requirements",children:e.map((function(e,t){return Object(h.jsxs)("li",{className:"requirement",children:[Object(h.jsx)("div",{className:"requirement-title bold",children:e.title}),Object(h.jsx)("div",{className:"requirement-desc",children:e.desc})]},t)}))})]})})]})}}]),n}(d.a.Component)),b=(n(55),function(e){Object(r.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=this.props,t=e.onClickNext,n=e.onClickBack;return Object(h.jsx)("div",{className:"instructions",children:Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)("div",{className:"row",children:Object(h.jsx)(j,{})}),Object(h.jsx)("div",{className:"row mb-3",children:Object(h.jsx)("div",{className:"col",children:Object(h.jsxs)("div",{className:"actions bottom mt-4 mb-4 d-grid gap-2 d-sm-flex justify-content-sm-center",children:[Object(h.jsx)("button",{type:"button",className:"btn btn-outline-secondary btn-lg px-4 gap-3",onClick:n,children:Object(h.jsx)("i",{className:"bi bi-chevron-left"})}),Object(h.jsx)("button",{type:"button",className:"btn btn-primary btn-lg px-4",onClick:t,children:Object(h.jsx)("i",{className:"bi bi-chevron-right"})})]})})})]})})}}]),n}(d.a.Component)),u=n(66),p=(n(56),function(e){Object(r.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"renderAppsGrid",value:function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3,t=this.props.apps,n=[],a=0;a<t.length;a+=e)n.push(Object(h.jsxs)("div",{className:"row",children:[Object(h.jsxs)("div",{className:"col-sm app",children:[Object(h.jsx)("div",{className:"app-icon text-center",children:Object(h.jsx)("span",{className:"bi bi-".concat(t[a].icon)})}),Object(h.jsx)("div",{className:"app-name text-center",children:t[a].name})]}),a+1<t.length&&Object(h.jsxs)("div",{className:"col-sm app",children:[Object(h.jsx)("div",{className:"app-icon text-center",children:Object(h.jsx)("span",{className:"bi bi-".concat(t[a+1].icon)})}),Object(h.jsx)("div",{className:"app-name text-center",children:t[a+1].name})]}),a+2<t.length&&Object(h.jsxs)("div",{className:"col-sm app",children:[Object(h.jsx)("div",{className:"app-icon text-center",children:Object(h.jsx)("span",{className:"bi bi-".concat(t[a+2].icon)})}),Object(h.jsx)("div",{className:"app-name text-center",children:t[a+2].name})]})]},a));return Object(h.jsx)("div",{className:"apps",children:n})}},{key:"render",value:function(){return Object(h.jsx)("div",{className:"smartphone",children:Object(h.jsx)("div",{className:"content",children:Object(h.jsx)("div",{className:"apps",children:Object(h.jsx)("div",{className:"container",children:this.renderAppsGrid()})})})})}}]),n}(d.a.Component)),x=(n(57),function(e){Object(r.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"getApps",value:function(){return[{name:"Map & Navigation",icon:"truck"},{name:"Weather",icon:"cloud-sun"},{name:"Calendar",icon:"calendar-date"},{name:"Reminders",icon:"bookmark"},{name:"Messages",icon:"chat"},{name:"Music & Podcasts",icon:"music-note-beamed"},{name:"Health",icon:"heart-pulse"},{name:"Mail",icon:"envelope"},{name:"Smart Home",icon:"house"},{name:"Events & Tickets",icon:"ticket-perforated"},{name:"Shopping",icon:"cart"},{name:"photos",icon:"camera"}]}},{key:"render",value:function(){var e=this.props,t=e.title,n=e.description,a=e.examples,c=Boolean(a)&&a.length>0,s=this.getApps();return Object(h.jsxs)("div",{className:"example",children:[Object(h.jsx)("div",{className:"row",children:Object(h.jsx)("div",{className:"col",children:Object(h.jsxs)("div",{className:"header text-center",children:[Object(h.jsx)("h1",{children:t}),Object(h.jsx)("div",{children:n})]})})}),Object(h.jsxs)("div",{className:"row",children:[Object(h.jsx)("div",{className:"col",children:Object(h.jsx)(p,{apps:s})}),c&&Object(h.jsx)("div",{className:"col align-self-center",children:Object(h.jsx)("div",{className:"card card-block",children:Object(h.jsx)(u.a,{variant:"dark",interval:"10000",children:a.map((function(e,t){return Object(h.jsx)(u.a.Item,{className:"instruction-example positive-example",children:Object(h.jsx)("div",{className:"vertical-center-container",children:Object(h.jsxs)("div",{className:"vertical-center",children:[Object(h.jsx)("div",{className:"example-title utterance-text text-center",children:e.title}),e.caption&&Object(h.jsxs)("div",{className:"example-caption utterance-text text-center",children:[s.find((function(t){return t.name===e.caption})).icon&&Object(h.jsx)("span",{className:"bi bi-".concat(s.find((function(t){return t.name===e.caption})).icon)}),e.caption,Object(h.jsx)("span",{})]})]})})},t)}))})})})]})]})}}]),n}(d.a.Component)),v=(n(62),function(e){Object(r.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"getTitle",value:function(){return"Simple commands"}},{key:"getDescription",value:function(){return Object(h.jsxs)("p",{children:["You are given a mobile device with the following apps. You can ask your virtual assistant to perform ",Object(h.jsx)("span",{className:"bold",children:"Simple commands"})," using these apps."]})}},{key:"getExamples",value:function(){return[{title:"Remind me at 2 pm to call dad",caption:"Reminders"},{title:"Send a message to Louise and ask if I left my wallet in her car.",caption:"Messages"},{title:"If I leave Shakespeare in the Park at 6 pm, when will I get home?",caption:"Map & Navigation"},{title:"Is it going to snow through the spring in upstate new york?",caption:"Weather"}]}},{key:"render",value:function(){var e=this.props,t=e.showExamples,n=e.onClickNext,a=e.onClickBack,c=this.getTitle(),s=this.getDescription(),i=t?this.getExamples():null;return Object(h.jsx)("div",{className:"simple",children:Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)(x,{title:c,description:s,examples:i,onClickNext:n,onClickBack:a}),Object(h.jsx)("div",{className:"row mb-3",children:Object(h.jsx)("div",{className:"col",children:Object(h.jsxs)("div",{className:"actions bottom mt-4 mb-4 d-grid gap-2 d-sm-flex justify-content-sm-center",children:[Object(h.jsx)("button",{type:"button",className:"btn btn-outline-secondary btn-lg px-4 gap-3",onClick:a,children:Object(h.jsx)("i",{className:"bi bi-chevron-left"})}),Object(h.jsx)("button",{type:"button",className:"btn btn-primary btn-lg px-4",onClick:n,children:Object(h.jsx)("i",{className:"bi bi-chevron-right"})})]})})})]})})}}]),n}(d.a.Component)),O=(n(63),function(e){Object(r.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"getTitle",value:function(){return"Complex commands"}},{key:"getDescription",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return Object(h.jsxs)("p",{children:["A ",Object(h.jsx)("span",{className:"bold",children:"Complex command"})," allows you to request multiple simple commands in a ",Object(h.jsx)("u",{children:"single"})," command from your virtual assistant. ",!e&&Object(h.jsx)("span",{children:"Commands can be expressed in repetition, sequence and conditions."})]})}},{key:"getExamples",value:function(){return[{title:"Text coach Nick that I will be late and ask Lauren if I left my keys in her car",caption:"Sequence"},{title:"Is there a Coldplay concert in the park in July, August or September?",caption:"Repitition"},{title:"In case it will be hot tomorrow morning, text my sister that I will need to use my car at that time",caption:"Condition"},{title:"As I leave now to Shakespeare in the Park let everyone on my invite if I will be late and block my calendar at that time",caption:"Condition, Repitition & Sequence"}]}},{key:"render",value:function(){var e=this.props,t=e.minimalDescription,n=e.showExamples,a=e.onClickNext,c=e.onClickBack,s=this.getTitle(),i=this.getDescription(t),r=n?this.getExamples():[];return Object(h.jsx)("div",{className:"simple",children:Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)(x,{title:s,description:i,examples:r,onClickNext:a,onClickBack:c}),Object(h.jsx)("div",{className:"row mb-3",children:Object(h.jsx)("div",{className:"col",children:Object(h.jsxs)("div",{className:"actions bottom mt-4 mb-4 d-grid gap-2 d-sm-flex justify-content-sm-center",children:[Object(h.jsx)("button",{type:"button",className:"btn btn-outline-secondary btn-lg px-4 gap-3",onClick:c,children:Object(h.jsx)("i",{className:"bi bi-chevron-left"})}),Object(h.jsx)("button",{type:"button",className:"btn btn-primary btn-lg px-4",onClick:a,children:Object(h.jsx)("i",{className:"bi bi-chevron-right"})})]})})})]})})}}]),n}(d.a.Component)),k=n(65),f=n(69),N=function(e){return Object(h.jsxs)(k.a,Object(a.a)(Object(a.a)({},e),{},{size:"xl","aria-labelledby":"contained-modal-title-vcenter",animation:!1,centered:!0,children:[Object(h.jsx)(k.a.Header,{children:Object(h.jsx)(k.a.Title,{id:"contained-modal-title-vcenter",children:Object(h.jsx)("div",{className:"text-center",children:Object(h.jsx)("i",{className:"bi bi-life-preserver"})})})}),Object(h.jsx)(k.a.Body,{children:Object(h.jsx)("div",{children:e.children})}),Object(h.jsx)(k.a.Footer,{children:Object(h.jsx)(f.a,{onClick:e.onHide,children:"Close"})})]}))},g=function(e){Object(r.a)(n,e);var t=Object(l.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(s.a)(n,[{key:"render",value:function(){var e=this.props,t=e.show,n=e.onHide,a=e.children;return Object(h.jsx)("div",{className:"help",children:Object(h.jsx)(N,{show:t,onHide:n,children:a})})}}]),n}(d.a.Component),C=(n(64),function(e){Object(r.a)(n,e);var t=Object(l.a)(n);function n(e){var a;Object(c.a)(this,n),a=t.call(this,e);var s=e.utterance,r=e.context,l=e.contexts;return a.state={utterance:s,context:r||a.getRandomContext(l)},a.getApps=a.getApps.bind(Object(i.a)(a)),a.handleClickNext=a.handleClickNext.bind(Object(i.a)(a)),a.handleClickHelp=a.handleClickHelp.bind(Object(i.a)(a)),a.handleTextAreaChange=a.handleTextAreaChange.bind(Object(i.a)(a)),a.handleSwitchContextClick=a.handleSwitchContextClick.bind(Object(i.a)(a)),a}return Object(s.a)(n,[{key:"componentDidUpdate",value:function(e,t){if(e.utterance!==this.props.utterance){var n=this.props.utterance;n=n||"",this.setState({utterance:n})}}},{key:"handleTextAreaChange",value:function(e){var t=this.props,n=t.index,a=t.utteranceLimit,c=t.disableTextOverflow,s=t.onUtteranceChange,i=this.state.context,r=e.target.value,l=!c||r.length<=a?r:this.state.utterance||"";this.setState({utterance:l}),s&&s(n,r,i)}},{key:"handleSwitchContextClick",value:function(){var e=this.props.contexts,t=this.getRandomContext(e);this.setState({context:t})}},{key:"getApps",value:function(){return[{name:"Map & Navigation",icon:"truck"},{name:"Weather",icon:"cloud-sun"},{name:"Calendar",icon:"calendar-date"},{name:"Reminders",icon:"bookmark"},{name:"Messages",icon:"chat"},{name:"Music & Podcasts",icon:"music-note-beamed"},{name:"Health",icon:"heart-pulse"},{name:"Mail",icon:"envelope"},{name:"Smart Home",icon:"house"},{name:"Events & Tickets",icon:"ticket-perforated"},{name:"Shopping",icon:"cart"},{name:"photos",icon:"camera"}]}},{key:"getRandomContext",value:function(e){var t=e[Math.floor(Math.random()*e.length)],n=this.props.onContextChange;return n&&n(t),t}},{key:"isUtteranceValid",value:function(){var e=this.props,t=e.conjunctionWords,n=e.utteranceLimit,a=this.state.utterance,c=t.reduce((function(e,t){return e.concat(t.verification||[t.display])}),[]),s=Boolean(a&&a.trim().length>0),i=Boolean(c&&c.length>0),r=s&&i&&c.filter((function(e){return-1!==a.toLowerCase().indexOf(e.trim().toLowerCase())})).length>0;return!s||a.split(" ").length<=2?(this.setState({valid:!1,errorMessage:Object(h.jsx)("span",{children:"Please be more creative."})}),!1):i&&!r?(this.setState({valid:!1,errorMessage:Object(h.jsxs)("span",{children:["Please use at least 1 of the following word: ",Object(h.jsx)("strong",{children:t.map((function(e){return e.display})).join(", ")}),"."]})}),!1):a.indexOf("?")>=0&&a.indexOf("?")<.5*a.length||a.trim().split("?").filter((function(e){return e.length>0})).length>1?(this.setState({valid:!1,errorMessage:Object(h.jsxs)("span",{children:["Please try to phrase the utterance as a ",Object(h.jsx)("strong",{children:"single"})," request (and not in multiple phrases)."]})}),!1):a.length>n?(this.setState({valid:!1,errorMessage:Object(h.jsx)("span",{children:"Your utterance is too long!"})}),!1):(this.setState({valid:!0}),!0)}},{key:"handleClickNext",value:function(e){e.preventDefault(),this.isUtteranceValid()&&this.props.onClickNext()}},{key:"handleClickHelp",value:function(e){this.setState({showHelp:!0})}},{key:"render",value:function(){var e=this,t=this.props,n=t.utteranceLimit,a=t.onClickBack,c=this.state,s=c.utterance,i=c.valid,r=c.errorMessage,l=c.showHelp,o=this.getApps();return l?Object(h.jsx)(g,{show:l,onHide:function(){return e.setState({showHelp:!1})},children:Object(h.jsx)(j,{})}):Object(h.jsxs)("div",{className:"utterance px-4 py-5 my-5",children:[Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)("div",{className:"row",children:Object(h.jsx)("div",{className:"col",children:Object(h.jsxs)("div",{className:"header text-center",children:[Object(h.jsxs)("h1",{className:"text-center",children:[Object(h.jsx)("span",{className:"title-small",children:"Your task:"}),"Write a Complex Command"]}),Object(h.jsx)("p",{children:"Follow the requirements and write a complex command to your virtual assistant. Use the following apps in your request."})]})})}),Object(h.jsxs)("div",{className:"row mt-3 mb-3",children:[Object(h.jsx)("div",{className:"col",children:Object(h.jsx)(p,{apps:o})}),Object(h.jsx)("div",{className:"col align-self-center",children:Object(h.jsxs)("div",{className:"card mt-4",children:[Object(h.jsx)("div",{className:"card-header",children:Object(h.jsxs)("h3",{className:"text-center",children:[Object(h.jsx)("span",{className:"intent-icon bi bi-keyboard"}),"Write here"]})}),Object(h.jsx)("div",{className:"card-body",children:Object(h.jsx)("div",{className:"row",children:Object(h.jsx)("div",{className:"col",children:Object(h.jsx)("form",{className:"g-3 needs-validation pt-1",onSubmit:this.handleSubmit,noValidate:!0,children:Object(h.jsxs)("div",{className:"has-validation",children:[Object(h.jsx)("label",{className:"form-label",style:{display:"none"},children:"Write a complex command"}),Object(h.jsx)("textarea",{className:"input-textarea utterance-text form-control mb-3 ".concat(!0===i?"is-valid":!1===i&&"is-invalid"),rows:"5",value:s,type:"text",id:"utterance","aria-describedby":"help",onChange:this.handleTextAreaChange,placeholder:"Type your complex command here...",required:!0}),Object(h.jsxs)("div",{className:"p-1 m-1",children:[Object(h.jsx)("span",{className:(s||"").length>n?"text-danger":"",children:(s||"").length})," / ",n]}),Object(h.jsx)("div",{className:"invalid-feedback",children:r})]})})})})})]})})]}),Object(h.jsx)("div",{className:"row mb-3",children:Object(h.jsx)("div",{className:"col",children:Object(h.jsxs)("div",{className:"actions bottom mt-4 d-grid gap-2 d-sm-flex justify-content-sm-center",children:[Object(h.jsx)("button",{type:"button",className:"btn btn-outline-secondary btn-lg px-4 gap-3",onClick:a,children:Object(h.jsx)("i",{className:"bi bi-chevron-left"})}),Object(h.jsx)("button",{type:"button",className:"btn btn-primary btn-lg px-4",onClick:this.handleClickNext,children:Object(h.jsx)("i",{className:"bi bi-chevron-right"})})]})})})]}),Object(h.jsx)("div",{className:"actions float",children:Object(h.jsxs)("button",{type:"button",className:"btn btn-outline-secondary btn-lg px-4 gap-3",onClick:this.handleClickHelp,children:[Object(h.jsx)("i",{className:"bi bi-life-preserver"}),"Help"]})})]})}}]),n}(d.a.Component)),y=function(e){Object(r.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={feedback:""},a.handleSubmit=a.handleSubmit.bind(Object(i.a)(a)),a.handleClickBack=a.handleClickBack.bind(Object(i.a)(a)),a.handleTextAreaChange=a.handleTextAreaChange.bind(Object(i.a)(a)),a}return Object(s.a)(n,[{key:"handleTextAreaChange",value:function(e){var t=this.props.onFeedbackChange,n=e.target.value;this.setState({feedback:n}),t&&t(n)}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=this.state.feedback;this.props.onSubmit(t)}},{key:"handleClickBack",value:function(e){e.preventDefault(),this.props.onClickBack()}},{key:"render",value:function(){var e=this.state.feedback;return Object(h.jsx)("div",{className:"thank-you",children:Object(h.jsxs)("div",{className:"container",children:[Object(h.jsx)("div",{className:"row",children:Object(h.jsx)("div",{className:"col",children:Object(h.jsx)("h2",{className:"text-muted text-center mb-3",children:"Thank You."})})}),Object(h.jsx)("div",{className:"row mt-3 mb-3",children:Object(h.jsx)("div",{className:"col",children:Object(h.jsxs)("div",{className:"card mt-4",children:[Object(h.jsx)("div",{className:"card-header",children:Object(h.jsxs)("h4",{className:"text-center",children:[Object(h.jsx)("span",{className:"intent-icon bi bi-megaphone"}),"Have any feedback?"]})}),Object(h.jsx)("div",{className:"card-body",children:Object(h.jsx)("div",{className:"row",children:Object(h.jsx)("div",{className:"col",children:Object(h.jsx)("form",{className:"g-3 needs-validation pt-1",onSubmit:this.handleSubmit,noValidate:!0,children:Object(h.jsx)("div",{className:"has-validation",children:Object(h.jsx)("textarea",{className:"feedback-textarea form-control mb-3",rows:"3",value:e,type:"text",id:"feedback-text","aria-describedby":"help",onChange:this.handleTextAreaChange,placeholder:"Enter your feedback here...",required:!0})})})})})})]})})}),Object(h.jsx)("div",{className:"row",children:Object(h.jsx)("div",{className:"col",children:Object(h.jsxs)("div",{className:"mt-4 d-grid gap-2 d-sm-flex justify-content-sm-center",children:[Object(h.jsx)("button",{type:"button",className:"btn btn-outline-secondary btn-lg px-4 gap-3",onClick:this.handleClickBack,children:Object(h.jsx)("i",{className:"bi bi-chevron-left"})}),Object(h.jsx)("button",{type:"button",className:"btn btn-primary btn-lg px-4",onClick:this.handleSubmit,children:"Finish"})]})})})]})})}}]),n}(d.a.Component),w=(n(48),1),S=2,I=3,B=4,A=5,T=6,H=function(e){Object(r.a)(n,e);var t=Object(l.a)(n);function n(e){var a;Object(c.a)(this,n),a=t.call(this,e);var s=e.intents,r=e.constraints;return a.state={index:0,currentScreen:w,intentsSelections:s&&new Array(s.length),constraintsSelections:r&&new Array(r.length),workerResponses:[]},a.handleClickBack=a.handleClickBack.bind(Object(i.a)(a)),a.handleClickNext=a.handleClickNext.bind(Object(i.a)(a)),a.handleClickHelp=a.handleClickHelp.bind(Object(i.a)(a)),a.handleFeedbackChange=a.handleFeedbackChange.bind(Object(i.a)(a)),a.handleUtteranceChange=a.handleUtteranceChange.bind(Object(i.a)(a)),a.handleSelectIntent=a.handleSelectIntent.bind(Object(i.a)(a)),a.handleSelectConstraint=a.handleSelectConstraint.bind(Object(i.a)(a)),a.handleSelection=a.handleSelection.bind(Object(i.a)(a)),a}return Object(s.a)(n,[{key:"submitToMTurk",value:function(){var e=this.props,t=e.intents,n=e.constraints,a=this.state,c=a.workerResponses,s=a.feedback,i=[],r=function(e){var a=c[e],s=a.utterance,r=a.context,l=a.selectedIntents,o=a.selectedConstraints,d=a.intentsSelections,h=a.constraintsSelections,m=l&&l.map((function(e){return t[e]})).join(" | "),j=o&&o.map((function(e){return n[e]})).join(" | "),b=l&&l.map((function(e,t){return s.substring(d[t][0],d[t][1])})).join(" | "),u=o&&o.map((function(e,t){return s.substring(h[t][0],h[t][1])})).join(" | "),p={utterance:s,context:r,intents:m,constraints:j,intentsAnnotations:b,constraintsAnnotations:u};i.push(p)};for(var l in c)r(l);var o=s;document.querySelector("crowd-form").onsubmit=function(){document.getElementById("worker-responses")&&(document.getElementById("worker-responses").value=JSON.stringify(i),document.getElementById("worker-feedback").value=o)},document.querySelector("crowd-form").submit()}},{key:"handleClickNext",value:function(){var e=this.state.currentScreen;if(e===T)this.submitToMTurk(this.state);else{var t=e+1;this.setState({currentScreen:t})}window.scrollTo(0,0)}},{key:"handleClickBack",value:function(){var e=this.state.currentScreen;if(e!==w){var t=e-1;this.setState({currentScreen:t})}window.scrollTo(0,0)}},{key:"handleClickHelp",value:function(){this.setState({showHelp:!0})}},{key:"handleFeedbackChange",value:function(e){this.setState({feedback:e})}},{key:"handleUtteranceChange",value:function(e,t,n){var c=this.state.workerResponses;c[e]=Object(a.a)(Object(a.a)({},c[e]),{utterance:t,context:n,intentsSelections:[],constraintsSelections:[]}),this.setState({workerResponses:c})}},{key:"handleSelectIntent",value:function(e,t){var n=this.state.workerResponses;n[e]=Object(a.a)(Object(a.a)({},n[e]),{selectedIntents:t,intentsSelections:[]}),this.setState({workerResponses:n})}},{key:"handleSelectConstraint",value:function(e,t){var n=this.state.workerResponses;n[e]=Object(a.a)(Object(a.a)({},n[e]),{selectedConstraints:t,constraintsSelections:[]}),this.setState({workerResponses:n})}},{key:"handleSelection",value:function(e,t,n,c){var s=this.state.workerResponses;s[e]=Object(a.a)(Object(a.a)({},s[e]),{intentsSelections:t,constraintsSelections:n,currentSelectionIndex:c}),this.setState({workerResponses:s})}},{key:"getDisplayedScreen",value:function(){var e=this.props,t=e.maxUtterances,n=e.contexts,a=e.maxLength,c=e.maxLengthPerIntent,s=e.minIntents,i=e.minConstraints,r=e.intents,l=e.constraints,o=e.conjunctionWords,d=e.minConjunctionWords,j=e.testVariation,u=this.state,p=u.currentScreen,x=u.index,k=u.workerResponses,f=k.length>x?k[x]:{},N=f.utterance,g=f.context,H=a||c*r.length||250,R="B"===j,M=!("A"===j||"B"===j);return p===w?Object(h.jsx)(m,{onClickExample:this.handleClickHelp,onClickSkip:this.handleClickNext}):p===S?Object(h.jsx)(v,{showExamples:M,onClickBack:this.handleClickBack,onClickNext:this.handleClickNext}):p===I?Object(h.jsx)(O,{minimalDescription:R,showExamples:M,onClickBack:this.handleClickBack,onClickNext:this.handleClickNext}):p===B?Object(h.jsx)(b,{onClickBack:this.handleClickBack,onClickNext:this.handleClickNext}):p===A?Object(h.jsx)(C,{index:x,maxUtterances:t,utterance:N,utteranceLimit:H,minIntents:s,minConstraints:i,intents:r,constraints:l,conjunctionWords:o,minConjunctionWords:d,contexts:n,context:g,onUtteranceChange:this.handleUtteranceChange,onClickBack:this.handleClickBack,onClickHelp:this.handleClickHelp,onClickNext:this.handleClickNext}):p===T?Object(h.jsx)(y,{onFeedbackChange:this.handleFeedbackChange,onSubmit:this.handleClickNext,onClickBack:this.handleClickBack}):void 0}},{key:"render",value:function(){var e=this.getDisplayedScreen();return Object(h.jsx)("div",{className:"app",children:Object(h.jsx)("div",{className:"container",children:Object(h.jsx)("main",{children:e})})})}}]),n}(d.a.Component),R=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"root",n=document.getElementById(t).getAttribute(e);return n&&!n.startsWith("${")?n:null},M=R("data-id"),q=R("data-max-utterances")?parseInt(R("data-max-utterances")):1,E=R("data-context"),W=R("data-contexts")?R("data-contexts").split("|").map((function(e){return e.trim()})):[],U=R("data-min-intents")&&parseInt(R("data-min-intents")),D=R("data-min-constraints")&&parseInt(R("data-min-constraints")),L=R("data-conjunction-words")?R("data-conjunction-words").split("|").map((function(e){return{display:e.trim().split(":")[0],verification:e.trim().split(":")[1].split(",")}})):[],P=R("min-conjunction-words")&&parseInt(R("min-conjunction-words")),F=R("data-quantifiers")?R("data-quantifiers").split("|").map((function(e){return e.trim()})):[],V=R("data-max-length")&&parseInt(R("data-max-length")),Y=R("data-max-length-per-intent")&&parseInt(R("data-max-length-per-intent")),G=[{name:"General knowledge",icon:"google"},{name:"Weather",icon:"cloud-sun"},{name:"Reminders",icon:"bookmark"},{name:"Calendar",icon:"calendar-date"},{name:"Events & Tickets",icon:"ticket-perforated"},{name:"Mail",icon:"envelope"},{name:"Messages",icon:"chat"},{name:"Map & Navigation",icon:"truck"},{name:"Shopping",icon:"cart"},{name:"Music & Podcasts",icon:"music-note-beamed"},{name:"Smart Home",icon:"house"},{name:"Health & Nutrition",icon:"heart-pulse"}],J=[],z=R("data-test-variation");t.default=function(){return Object(h.jsx)("div",{className:"utterances",children:Object(h.jsx)(H,{id:M,context:E,contexts:W,maxUtterances:q,intents:G,minIntents:U,constraints:J,minConstraints:D,conjunctionWords:L,minConjunctionWords:P,linkWordIdx:null,quantifiers:F,quantifierIdx:null,maxLength:V,maxLengthPerIntent:Y,testVariation:z})})}},48:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){}}]);
//# sourceMappingURL=3.94dcf03d.chunk.js.map