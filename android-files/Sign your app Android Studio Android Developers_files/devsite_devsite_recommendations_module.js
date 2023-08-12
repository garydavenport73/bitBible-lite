(function(_ds){var window=this;var z6=function(a,b){const c=[];for(const h of a)try{a=c;var d=a.push,e=b;const k=new URL(h),l=_ds.F();if(k.hostname!==l.hostname)throw new y6("Recommendations must be from the same site.");var f=k.pathname;var g=_ds.Gs(_ds.Hs(new _ds.Is,f),e.toString());d.call(a,g)}catch(k){if(k instanceof y6)console.warn("Link is off-site, not recommending.",h);else throw k;}return c};var A6=function(a){const b=a.Av,c=a.Zt;a=a.Iu;let d;d='<h2 class="significatio-heading no-link">Recommended for you</h2>';""!=b?(d=d+'<div class="info-container"><button type="button" class="button-flat info-button significatio-info-container" id="significatio-info-button" aria-label="'+_ds.Gz("About recommendations"),d=d+'" data-title="'+_ds.Gz("About recommendations"),d+='"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="significatio-icon-info"><path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg></button></div>'):
(d=d+'<div class="significatio-popout-container"><button type="button" class="significatio-popout-toggle button-flat significatio-info-container" id="significatio-popout-toggle" aria-haspopup="true" aria-controls="significatio-popout" aria-label="'+_ds.Gz("About recommendations"),d=d+'" data-title="'+_ds.Gz("About recommendations"),d+='"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="significatio-icon-info"><path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg></button><div class="significatio-popout" id="significatio-popout" aria-labelledby="significatio-popout-toggle" hidden><h4 class="significatio-popout-heading">About these recommendations</h4><p>These recommendations help you find the content you are looking for. They may be based on the page you\u2019re currently viewing and your account\u2019s saved <a href="https://myactivity.google.com/activitycontrols/webandapp" class="significatio-popout-interactive">web and app activity</a>.</p><a href="http://go/devsite-recommendations" class="significatio-popout-interactive">Learn More</a></div></div>');
d+='<div class="significatio-buttons">';a&&(d+='<p class="significatio-internal-only">Internal only</p>');""!=c&&(d=d+'<button type="button" class="significatio-issue-button button-flat" id="significatio-issue-button" aria-label="'+_ds.Gz("Report low quality recommendations"),d=d+'" data-title="'+_ds.Gz("Report low quality recommendations"),d+='"><span class="material-icons" aria-hidden="true">bug_report</span></button>');return(0,_ds.Q)(d+"</div>")},B6=function(){return(0,_ds.Q)('<div class="significatio-overview"></div><div class="significatio-body"><div class="significatio-recommendations"></div><div class="significatio-loading"><devsite-spinner size="64"></devsite-spinner></div></div>')},
D6=function(a){let b="";a=a.rc;const c=a.length;for(let d=0;d<c;d++)b+=C6(a[d]);return(0,_ds.Q)(b)},C6=function(a){let b="";var c=[a.getTitle(),_ds.z(a,3),_ds.z(a,4)];b+='<div class="significatio-card"><h3 class="significatio-card-heading no-link"><a href="'+_ds.Y(_ds.Vz(a.getUrl()+"?"+_ds.z(a,8)))+'" data-category="Site-Wide Custom Events" data-label="devsite-recommendation card link" data-action="click" track-type="recommendations" track-name="cardClick" track-metadata-eventdetail="'+_ds.Y(a.getUrl())+
'">'+_ds.T(c.filter(d=>0<(""+_ds.U(d)).length)[0])+'</a></h3><p class="significatio-card-description">'+_ds.T(_ds.Bz(_ds.z(a,5)))+'</p><div class="significatio-card-meta">';c='Updated <span class="significatio-date" date="'+(_ds.Y(_ds.Tf(a,_ds.fE,7).getSeconds())+'"></span>');b+=c;if(0!=_ds.U(_ds.Uf(a,_ds.DR,11)).length){b=b+'<span class="significatio-recommend-popout-container"><button type="button" class="significatio-popout-toggle button-flat significatio-attr-toggle" aria-haspopup="true" aria-controls="significatio-popout" aria-label="'+
_ds.Gz("Why is this recommended?");b=b+'" data-title="'+_ds.Gz("Why is this recommended?");b+='"><i class="material-icons significatio-attr-info">help_outline</i></button><div class="significatio-popout significatio-attr" aria-labelledby="significatio-popout-toggle" hidden><h4 class="significatio-popout-heading">Why is this recommended?</h4><p>Because you viewed ';a=_ds.Uf(a,_ds.DR,11);c=a.length;for(let d=0;d<c;d++){const e=a[d];b+=' <a href="'+_ds.Y(_ds.Vz(e.getUrl()))+'" class="significatio-popout-interactive" track-type="recommendations" track-name="attributionLink">'+
_ds.T(e.getTitle())+"</a>"}b+=".</p></div></span>"}return(0,_ds.Q)(b+"</div></div>")},E6=function(a){var b=a.Xw;a='<div class="significatio-card error">'+(0,_ds.Q)('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="significatio-error-icon"><path d="M11 15h2v2h-2v-2zm0-8h2v6h-2V7zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/></svg>')+'<p class="significatio-card-description">';a+='No recommendations at this time.</p><p class="significatio-card-description">';
b='Try <a href="#" class="'+(_ds.Y(b)+'">signing in</a> to your Google account.');return(0,_ds.Q)(a+b+"</p></div>")};var F6={"in-page":5},H6=function(a){a.eventHandler.listen(document,"devsite-on-recommendations",b=>{G6(a)?a.Ea||(b=b.Fa)&&(null==b?0:b.detail)&&(b=b.detail,5===_ds.kg(b,5)?(a.o=b,a.Ea=!0,a.removeAttribute("hidden"),a.render()):a.h.g()):a.h.g()})},G6=function(a){return!a.xa&&document.querySelector("devsite-recommendations:not([yield])")?!1:!0},Q6=async function(a,b){var c=[2,5,3];if(!a.Da&&c.some(h=>(null==b?void 0:_ds.kg(b,5))===h)&&((null==b?0:_ds.OR(b).length)&&a.dispatchEvent(new CustomEvent("devsite-on-recommendations",
{detail:b,bubbles:!0})),3!==(null==b?void 0:_ds.kg(b,5)))){I6(a);return}if(a.display&&F6[a.display]!==(null==b?void 0:_ds.kg(b,5)))I6(a);else{c=a.querySelector(".significatio-overview");var d=null==b?void 0:_ds.z(b,6);a.ma=(null==b?void 0:_ds.z(b,7))||"";a.ea=(null==b?void 0:_ds.z(b,8))||"";var e=1===(null==b?void 0:_ds.kg(b,9));c&&d?_ds.K(c,A6,{Ju:d,Av:a.ma,Zt:a.ea,Iu:e}):await J6(a,!0,!0,"no title");if(null==b?0:_ds.OR(b).length){_ds.K(a.g,D6,{rc:_ds.OR(b)});K6(a);(null==b?0:_ds.Uf(b,_ds.NR,2).length)&&
L6(_ds.Uf(b,_ds.NR,2));a.v=a.querySelector("#significatio-stats-button");if(null==b?0:_ds.z(b,4)){var f;null==(f=a.v)||f.removeAttribute("hidden");a.ua=_ds.z(b,4)}else{let h;null==(h=a.v)||h.setAttribute("hidden","")}if(a.g){f=a.g.querySelectorAll(".significatio-recommend-popout-container");for(var g of f)M6(a,g)}(g=a.querySelector(".significatio-popout-container"))&&M6(a,g);N6(a);O6(a);P6(a);a.removeAttribute("loading");a.h.g()}else await J6(a,!1)}},S6=async function(a){a.setAttribute("loading",
"");await _ds.w();a.g&&_ds.qj(a.g);const b=await R6(a);let c=null;try{c=await _ds.Ls(b)}catch(d){await J6(a,!0,!1,"error fetching recommendations");return}a.o=c;await Q6(a,c)},J6=async function(a,b=!0,c=!1,d=""){b&&_ds.Sk(d);if(c){let e;null==(e=a.parentNode)||e.removeChild(a)}a.h.g();if(await (await _ds.w()).isSignedIn()){let e;null==(e=a.parentNode)||e.removeChild(a)}else _ds.K(a.g,E6,{Xw:"significatio-sign-in"}),P6(a),O6(a),a.removeAttribute("loading")},M6=function(a,b){const c=b.querySelector(".significatio-popout-toggle"),
d=b.querySelector(".significatio-popout");c&&d&&(a.Ba.push(d),a.eventHandler.listen(d,"focusout",e=>{e.relatedTarget&&(_ds.Kj(e.relatedTarget,null,"significatio-popout",6)||a.hidePopout(d))}),a.eventHandler.listen(c,"click",()=>{a.qa.get(d)||(d.hasAttribute("active")?a.hidePopout(d):a.showPopout(d))}))},R6=async function(a){const b=(await _ds.w()).getTenantId()||0;return _ds.MR(_ds.LR(_ds.KR(_ds.JR(_ds.Ks(b,window.location.pathname),z6(a.va.map(c=>c.href),b)),z6(a.oa.map(c=>c.href),b)),Number(a.getAttribute("generated"))||
0),a.query())},I6=function(a){a.h.g();let b;null==(b=a.parentNode)||b.removeChild(a)},K6=function(a){if(a.g){var b=Array.from(a.g.querySelectorAll(".significatio-date"));for(const c of b)b=c.getAttribute("date"),c.textContent=(new Date(1E3*Number(b))).toLocaleDateString("default",{month:"short",year:"numeric",day:"numeric",timeZone:a.timeZone})}},L6=function(a){for(const b of a)document.body.dispatchEvent(new CustomEvent("devsite-analytics-set-dimension",{bubbles:!0,detail:{name:b.getName(),value:_ds.z(b,
2),gaid:_ds.z(b,3)}}))},N6=function(a){var b=a.querySelector("#significatio-issue-button");b&&a.eventHandler.listen(b,"click",()=>void T6(a));(b=a.querySelector("#significatio-info-button"))&&a.eventHandler.listen(b,"click",()=>void aaa(a));a.v&&a.eventHandler.listen(a.v,"click",()=>{a.ua&&_ds.Iq(a.ua,{target:"_blank"})});a.eventHandler.listen(document,"click",c=>{for(const d of a.Ba)!d.contains(c.target)&&d.hasAttribute("active")&&a.hidePopout(d)})},O6=function(a){a.eventHandler.listen(a,"click",
async b=>{_ds.Kj(b.target,null,"significatio-sign-in",2)&&await baa()})},P6=function(a){if(a.g){a=Array.from(a.g.querySelectorAll(".significatio-card:not([show])"));for(const b of a)b.setAttribute("show","")}},baa=async function(){await (await _ds.w()).signIn()},aaa=async function(a){a.ma&&_ds.Iq(a.ma,{target:"_blank"})},T6=async function(a){a.ea&&_ds.Iq(a.ea,{target:"_blank"})},caa=class extends _ds.E{constructor(a){super();this.timeZone=a;this.eventHandler=new _ds.G(this);this.xa=!0;this.Ea=this.Da=
this.Aa=this.ra=!1;this.va=[];this.oa=[];this.o=this.g=null;this.display="";this.qa=new Map;this.Ba=[];this.v=this.ua=null;this.ea=this.ma="";this.h=new _ds.gm;this.loaded=this.h.promise;this.Ha=new _ds.gm;this.Ca=new _ds.gm}connectedCallback(){this.ra=!0;this.va=[...this.querySelectorAll("a[href]")];this.oa=[...this.querySelectorAll('link[rel="disallow"][href]')];this.display=this.getAttribute("display");this.getAttribute("display")?"in-page"===this.getAttribute("display")&&(H6(this),this.Ca.g(),
this.Da=!0):this.render()}disconnectedCallback(){document.body.dispatchEvent(new CustomEvent("devsite-recommendations-disconnected",{bubbles:!0}));_ds.H(this.eventHandler);this.va=[];this.oa=[]}static get observedAttributes(){return["yield","display"]}attributeChangedCallback(a,b,c){"yield"===a?this.xa=null==c:"display"===a&&(this.display=c);this.render()}query(){return this.getAttribute("query")||""}async render(){if(this.ra)if(G6(this))if(_ds.K(this,B6),this.g=this.querySelector(".significatio-recommendations")){if(this.o?
await Q6(this,this.o):await S6(this),!this.Aa){const c=await _ds.w();try{if(await c.intersectionEnterForElement(this.g),null!=this.o){var a;for(const d of null==(a=this.o)?void 0:_ds.OR(a)){{const g=d.getMetadata();var b=g?{targetPage:d.getUrl(),targetType:_ds.kg(g,3),targetRank:_ds.ig(g,2),targetIdenticalDescriptions:_ds.ig(g,4),targetTitleWords:_ds.ig(g,5),targetDescriptionWords:_ds.ig(g,6),experiment:_ds.z(g,7)}:void 0}a=b;if(!a)continue;const e={category:"Site-Wide Custom Events",action:"recommended",
label:d.getUrl(),nonInteraction:!0,additionalParams:{recommendations:a}};this.dispatchEvent(new CustomEvent("devsite-analytics-observation",{detail:e,bubbles:!0}));const f={eventData:JSON.stringify({type:"recommendations",name:"impression",metadata:a})};this.dispatchEvent(new CustomEvent("devsite-analytics-observation-cloudtrack",{detail:f,bubbles:!0}))}this.Ha.g();this.Aa=!0}}catch(d){}}}else await J6(this,!0,!1,"no recommendations element");else this.h.g()}async showPopout(a){a.removeAttribute("hidden");
await _ds.Ok();a.setAttribute("active","");let b;null==(b=a.querySelector(".significatio-popout-interactive"))||b.focus()}async hidePopout(a){!this.qa.get(a)&&a&&(this.qa.set(a,!0),a.removeAttribute("active"),await _ds.Ok(),_ds.em(this.eventHandler,a,"transitionend",()=>{a.setAttribute("hidden","");this.qa.set(a,!1)}))}},y6=class extends Error{constructor(a){super(a);Object.setPrototypeOf(this,y6.prototype)}};try{window.customElements.define("devsite-recommendations",caa)}catch(a){console.warn("Unrecognized DevSite custom element - DevsiteRecommendations",a)};})(_ds_www);