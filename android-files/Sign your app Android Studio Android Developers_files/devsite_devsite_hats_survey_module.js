(function(_ds){var window=this;var q1=function(a,b,c){return a.g.then(function(d){const e=d[b];if(!e)throw Error(`Method not found: ${b}`);return e.apply(d,c)})},r1=class{constructor(a){this.g=a;a.then((0,_ds.ze)(function(){},this),()=>{},this)}},t1=function(a,b,c){const d=Array(arguments.length-2);for(var e=2;e<arguments.length;e++)d[e-2]=arguments[e];e=s1(a,b).then(function(f){return f.apply(null,d)});return new r1(e)},u1={},s1=function(a,b){var c=u1[b];if(c)return c;c=(c=_ds.se(b))?_ds.Jl(c):(new _ds.Fl(function(d,e){const f=
(new _ds.aj(document)).createElement("SCRIPT");f.async=!0;_ds.Kd(f,_ds.be(_ds.pd(a)));f.onload=f.onreadystatechange=function(){f.readyState&&"loaded"!=f.readyState&&"complete"!=f.readyState||d()};f.onerror=e;(document.head||document.getElementsByTagName("head")[0]).appendChild(f)})).then(function(){const d=_ds.se(b);if(!d)throw Error(`Failed to load ${b} from ${a}`);return d});return u1[b]=c};var v1=class{constructor(a){this.g=a}o(a){_ds.Nl(q1(this.g,"requestSurvey",arguments),()=>{},this)}h(a){_ds.Nl(q1(this.g,"presentSurvey",arguments),()=>{},this)}j(a){_ds.Nl(q1(this.g,"dismissSurvey",arguments),()=>{},this)}},w1=new _ds.od(_ds.oh,"https://www.gstatic.com/feedback/js/help/prod/service/lazy.min.js");_ds.Nl(s1(w1,"help.service.Lazy.create"),()=>{});var x1=function(){return"devsite-hats-survey"},B1=function(){if(y1){let a;null==(a=z1)||a.j({surveyMetadata:{sessionId:y1}});return A1.promise}return Promise.resolve()},C1=async function(a){var b=await _ds.w();const c=_ds.z(b.getConfig(),18);var d=a.getAttribute("listnr-id");d?(b={locale:b.getLocale()||"en",apiKey:c},d=t1(w1,"help.service.Lazy.create",d,{apiKey:b.apiKey||b.apiKey,environment:b.environment||b.environment,helpCenterPath:b.helpCenterPath||b.helpCenterPath,locale:b.locale||b.locale||
"en".replace(/-/g,"_"),nonce:b.nonce||b.nonce,productData:b.productData||b.productData,receiverUri:b.receiverUri||b.receiverUri,renderApiUri:b.renderApiUri||b.renderApiUri,theme:b.theme||b.theme,window:b.window||b.window}),z1=new v1(d),a.g=z1):console.warn('<devsite-hats-survey> missing attribute "listnr-id"')},F1=function(a,b){let c;null==(c=a.g)||c.h({productData:{customData:{pageUrl:_ds.F().toString()}},surveyData:b,colorScheme:1,authuser:0,customZIndex:1E4,listener:{surveyPrompted:d=>{y1=d.sessionId||
null;A1=new _ds.gm;D1=A1.g},surveyClosed:()=>{y1=E1=null;D1()}}})},I1=class extends _ds.E{constructor(a){super();this.g=null;a&&(this.g=z1=a)}async connectedCallback(){E1=this;const a=this.getAttribute("hats-id");a&&a!==G1&&(await B1(),this.g||await C1(this),G1=a,await this.Kh(a))}disconnectedCallback(){E1=null;_ds.em(H1,document.body,"devsite-page-changed",()=>{E1||(B1(),G1=null)})}async Kh(a){await _ds.w();let b;null==(b=this.g)||b.o({triggerId:a,callback:c=>{c.surveyData&&F1(this,c.surveyData)},
authuser:0,enableTestingMode:!1})}};I1.prototype.renderSurvey=I1.prototype.Kh;I1.prototype.disconnectedCallback=I1.prototype.disconnectedCallback;I1.prototype.connectedCallback=I1.prototype.connectedCallback;I1.closeCurrentSurvey=B1;I1.getTagName=x1;var G1=null,y1=null,E1=null,A1=new _ds.gm,D1=A1.g,H1=new _ds.G,z1=void 0;try{window.customElements.define(x1(),I1)}catch(a){console.warn("devsite.app.customElement.DevsiteHatsSurvey",a)};})(_ds_www);