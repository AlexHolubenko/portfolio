(this.webpackJsonpmywebsite=this.webpackJsonpmywebsite||[]).push([[0],{21:function(e,t,a){e.exports=a.p+"static/media/resume-avatar.559902b4.png"},22:function(e,t,a){e.exports=a.p+"static/media/recipe.0cba940f.png"},23:function(e,t,a){e.exports=a.p+"static/media/natours.4f39f8a5.png"},24:function(e,t,a){e.exports=a.p+"static/media/trillo.410a3c8b.png"},25:function(e,t,a){e.exports=a.p+"static/media/todos.7d50f622.png"},26:function(e,t,a){e.exports=a.p+"static/media/avatar.f3e7f395.png"},27:function(e,t,a){e.exports=a(39)},32:function(e,t,a){},33:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(18),c=a.n(l),o=(a(32),a(1)),i=a(2),s=a(3),m=a(4),u=(a(33),a(10)),p=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("header",{className:"header"},r.a.createElement("h1",null,r.a.createElement(u.b,{to:"/portfolio/"},"AlexDev")),r.a.createElement("nav",{className:"nav-top"},r.a.createElement(u.b,{to:"/portfolio/resume"},"Resume"),r.a.createElement(u.b,{to:"/portfolio/projects"},"Projects")))}}]),a}(n.Component),h=a(9),d=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"edu"},r.a.createElement("div",{className:"edu-years"},r.a.createElement("p",null,this.props.startYear," - ",this.props.endYear)),r.a.createElement("div",{className:"edu-university"},r.a.createElement("h4",{style:{marginTop:"0"}},this.props.academicDegree,", ",this.props.schoolName),r.a.createElement("p",null,"Field of study ",this.props.fieldStudy)))}}]),a}(n.Component),b=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props.descriptionJob.map((function(e,t){return r.a.createElement("li",{className:"job-description-item",key:t}," - ",e,";")}));return r.a.createElement("div",{className:"exp"},r.a.createElement("div",{className:"exp-years"},r.a.createElement("p",null,this.props.start," - ",this.props.end)),r.a.createElement("div",{className:"exp-job"},r.a.createElement("h4",{style:{marginTop:"0"}},this.props.jobName),r.a.createElement("ul",{className:"exp-job-description"},e)))}}]),a}(n.Component),f=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props.languages.map((function(e,t){return r.a.createElement("li",{key:t},e.name," - ",e.level)}));return r.a.createElement("div",{className:"languages"},r.a.createElement("h4",{className:"skill-type"},"Languages:"),r.a.createElement("ul",{className:"skill-review"},e))}}]),a}(n.Component),v=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props.techSkills.map((function(e,t){return r.a.createElement("li",{key:t},e)}));return r.a.createElement("div",{className:"technical"},r.a.createElement("h4",{className:"skill-type"},"Technical:"),r.a.createElement("ul",{className:"skill-review"},e))}}]),a}(n.Component),E=a(21),g=a.n(E),k=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"resume-grid"},r.a.createElement("div",{className:"resume-left-col"},r.a.createElement("div",{className:"resume-img-container"},r.a.createElement("img",{className:"resume-img",src:g.a,alt:"avatar"})),r.a.createElement("h2",{className:"full-name"},"Oleksandr Holubenko"),r.a.createElement("h4",{className:"job-position"},"Front End Developer"),r.a.createElement("p",{className:"summery"},"Enthusiastic, team player Front-end Developer with passion for creating and optimizing interactive, user-friendly, and feature-rich websites. Skilled in HTML, CSS and JavaScript."),r.a.createElement("div",{className:"short-contact-info"},r.a.createElement("h5",null,"Phone:"),r.a.createElement("p",null,"+38 (063) 11-47-913"),r.a.createElement("h5",null,"Email:"),r.a.createElement("p",null,"ovholubenko@gmail.com"),r.a.createElement("h5",null,"Skype:"),r.a.createElement("p",null,"alex.holubenko"))),r.a.createElement("div",{className:"resume-right-col"},r.a.createElement("h2",null,"Experience"),r.a.createElement(b,{start:"February 2020",end:"Present",jobName:'Online Course "The Advanced Web Developer Bootcamp"',descriptionJob:["Built responsive applications using modern CSS technologies like flexbox","Learnt front end library React and master the fundamentals around state, props, hooks and the component lifecycle","Added routing to a single page application with routing library for react, React Router"]}),r.a.createElement("h2",null,"Skills"),r.a.createElement(f,{languages:[{name:"Ukrainian",level:"Native"},{name:"English",level:"Intermediate"},{name:"Russian",level:"Proficiency"}]}),r.a.createElement(v,{techSkills:["Html/Css","Sass","Bootstrap","JavaScript","jQuery","Ajax","React","Npm"]}),r.a.createElement("h2",null,"Education"),r.a.createElement(d,{startYear:"September 2018",endYear:"December 2019",academicDegree:"Master of Computer Science",schoolName:"Lviv Polytechnic National University",fieldStudy:'"Automation and computer-integrated technologies"'}),r.a.createElement(d,{startYear:"September 2014",endYear:"June 2018",academicDegree:"Master of Computer Science",schoolName:"Lviv Polytechnic National University",fieldStudy:'"Systems engineering"'})))}}]),a}(n.Component),j=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"project-card"},r.a.createElement("img",{src:this.props.item.img,alt:"project"}),r.a.createElement("h2",null,this.props.item.name),r.a.createElement("p",null,"Tools: ",this.props.item.tools),r.a.createElement("div",{className:"link-btns"},r.a.createElement("a",{href:this.props.item.github,target:"_blank",rel:"noopener noreferrer"},"GitHub"),r.a.createElement("a",{href:this.props.item.live,target:"_blank",rel:"noopener noreferrer"},"Live")))}}]),a}(n.Component),y=a(22),N=a.n(y),O=a(23),S=a.n(O),x=a(24),w=a.n(x),C=a(25),T=a.n(C),A=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){var e;return Object(o.a)(this,a),(e=t.call(this)).state={projects:[{name:"Recipe App",tools:"HTML/CSS, JavaScript, React",img:N.a,github:"https://github.com/AlexHolubenko/recipe-app",live:" https://alexholubenko.github.io/recipe-app/"},{name:"Todo App",tools:"HTML/CSS, JavaScript, React",img:T.a,github:"https://github.com/AlexHolubenko/Todo-App",live:"https://alexholubenko.github.io/Todo-App/"},{name:"Natours",tools:"HTML/CSS, Sass",img:S.a,github:"https://github.com/AlexHolubenko/Natours-no-flex-sass-",live:"https://alexholubenko.github.io/Natours-no-flex-sass-/."},{name:"Trillo",tools:"HTML/CSS, Sass",img:w.a,github:"https://github.com/AlexHolubenko/Trillo",live:"https://alexholubenko.github.io/Trillo/"}]},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state.projects.map((function(e,t){return r.a.createElement(j,{key:t,item:e})}));return r.a.createElement("div",{className:"projects"},e)}}]),a}(n.Component),H=a(26),L=a.n(H),J=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"landing-grid"},r.a.createElement("div",null,r.a.createElement("img",{src:L.a,alt:"avatar",className:"avatar-img"}),r.a.createElement("div",{className:"banner-text"},r.a.createElement("h2",null,"Hi, I`m Oleksandr"),r.a.createElement("h1",null,"Front End Developer"),r.a.createElement("hr",null),r.a.createElement("p",null,"HTML/CSS |  JavaScript | React"),r.a.createElement("div",{className:"social-links"},r.a.createElement("a",{href:"https://www.linkedin.com/in/oleksandr-holubenko-766906147/",rel:"noopener noreferrer",target:"_blank"},r.a.createElement("i",{className:"fa fa-linkedin-square","aria-hidden":"true"})),r.a.createElement("a",{href:"https://github.com/AlexHolubenko",rel:"noopener noreferrer",target:"_blank"},r.a.createElement("i",{className:"fa fa-github-square","aria-hidden":"true"})),r.a.createElement("a",{href:"https://www.facebook.com/profile.php?id=100019013498370&ref=bookmarks",rel:"noopener noreferrer",target:"_blank"},r.a.createElement("i",{className:"fa fa-facebook-square","aria-hidden":"true"}))))))}}]),a}(n.Component);var R=function(){return r.a.createElement(h.c,null,r.a.createElement(h.a,{exact:!0,path:"/portfolio/",component:J}),r.a.createElement(h.a,{exact:!0,path:"/portfolio/resume",component:k}),r.a.createElement(h.a,{exact:!0,path:"/portfolio/projects",component:A}))},D=function(e){Object(m.a)(a,e);var t=Object(s.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(p,null),r.a.createElement(R,null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(u.a,null,r.a.createElement(D,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[27,1,2]]]);
//# sourceMappingURL=main.4f8ddb13.chunk.js.map