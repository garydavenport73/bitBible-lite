(function(_ds){var window=this;var Iaa=function(a){return(0,_ds.Q)('<div class="devsite-popout" id="'+_ds.Y(a.id)+'"><div class="devsite-popout-result devsite-suggest-results-container" devsite-hide></div></div>')},h7=function(a){a="All results in "+_ds.T(a);return(0,_ds.Q)('<button type="submit" class="button button-white devsite-search-project-scope">'+a+"</button>")},i7=function(a,b,c){let d='<button type="submit" class="button button-white devsite-suggest-all-results">';b?(a="All results across "+_ds.T(c),d+=a):(a='All results for "'+
_ds.T(a)+'"',d+=a);return(0,_ds.Q)(d+"</button>")},j7=function(a,b,c,d,e,f,g,h){a=(c?"":'<devsite-analytics-scope action="'+_ds.Y(_ds.Vz("Restricted "+d))+'">')+'<a class="devsite-result-item-link" href="'+_ds.Y(_ds.Vz(a))+'"><span class="devsite-suggestion-fragment">'+_ds.T(b)+"</span>"+(h?'<span class="devsite-suggestion-fragment">'+_ds.T(h)+"</span>":"")+(e?'<span class="devsite-suggestion-fragment">'+_ds.T(e)+"</span>":"")+(_ds.xz(f)&&!g?'<span class="devsite-suggestion-fragment">'+_ds.T(f)+"</span>":
"");c||(a+='<span class="devsite-result-item-confidential">Confidential</span>');return(0,_ds.Q)(a+("</a>"+(c?"":"</devsite-analytics-scope>")))},Jaa=function(a){var b=a.projectName;const c=a.nq,d=a.query,e=a.uq;a=a.bk;b='<div class="devsite-suggest-wrapper '+(e?"":"devsite-search-disabled")+'"><div class="devsite-suggest-section"><div class="devsite-result-label">There are no suggestions for your query</div></div>'+((e?'<div class="devsite-suggest-footer">'+(c?h7(b):"")+i7(d,c,a)+"</div>":"")+"</div>");
return(0,_ds.Q)(b)},Kaa=function(a){var b=a.jw;const c=a.uw;var d=a.Dw;const e=a.projectName,f=a.nq,g=a.query;var h=a.Iw;const k=a.uq;a=a.bk;let l='<div class="devsite-suggest-wrapper '+(k?"":"devsite-search-disabled")+'" tabindex="0" role="list"><div class="devsite-suggest-section">';if(0<_ds.U(d).length){l=l+'<div class="devsite-suggest-sub-section" role="listitem"><div class="devsite-suggest-header" id="devsite-suggest-header-partial-query" role="heading" aria-level="2">Suggested searches'+((f?
'<span class="devsite-suggest-project">'+_ds.T(e)+"</span>":"")+'</div><devsite-analytics-scope category="Site-Wide Custom Events" label="Search" role="list" aria-labelledby="devsite-suggest-header-partial-query" action="Query Suggestion Click">');var m=d.length;for(var n=0;n<m;n++){var t=d[n];l+='<div class="devsite-result-item devsite-nav-label" id="suggestion-partial-query-'+_ds.Y(n)+'" role="listitem" index=":'+_ds.Y(n)+'">'+j7(t.getPath(),t.getTitle(),_ds.hg(t,14),"Query Suggestion Click")+"</div>"}l+=
"</devsite-analytics-scope></div>"}l+=0<_ds.U(d).length&&0<_ds.U(b).length?'<hr role="none">':"";if(0<_ds.U(b).length){l=l+'<div class="devsite-suggest-sub-section" role="listitem"><div class="devsite-suggest-header" id="devsite-suggest-header-product" role="heading" aria-level="2">Pages'+((f?'<span class="devsite-suggest-project">'+_ds.T(e)+"</span>":"")+'</div><devsite-analytics-scope category="Site-Wide Custom Events" label="Search" role="list" aria-labelledby="devsite-suggest-header-product" action="Page Suggestion Click">');
m=b.length;for(n=0;n<m;n++)t=b[n],l+='<div class="devsite-result-item devsite-nav-label" id="suggestion-product-'+_ds.Y(n)+'" role="listitem" index=":'+_ds.Y(n)+'">'+j7(t.getPath(),t.getTitle(),_ds.hg(t,14),"Page Suggestion Click",void 0,_ds.z(t,4),f)+"</div>";l+="</devsite-analytics-scope></div>"}l+=0<_ds.U(h).length&&0<_ds.U(b).length+_ds.U(d).length?'<hr role="none">':"";if(0<_ds.U(h).length){l=l+'<div class="devsite-suggest-sub-section" role="listitem"><div class="devsite-suggest-header" id="devsite-suggest-header-reference" role="heading" aria-level="2">Reference'+
((f?'<span class="devsite-suggest-project">'+_ds.T(e)+"</span>":"")+'</div><devsite-analytics-scope category="Site-Wide Custom Events" label="Search" role="list" aria-labelledby="devsite-suggest-header-reference" action="Reference Suggestion Click">');m=h.length;for(n=0;n<m;n++)t=h[n],l+='<div class="devsite-result-item devsite-nav-label" id="suggestion-reference-'+_ds.Y(n)+'" role="listitem" index=":'+_ds.Y(n)+'">'+j7(t.getPath(),t.getTitle(),_ds.hg(t,14),"Reference Suggestion Click",_ds.z(t,3),
_ds.z(t,4),f,_ds.Pc(t,10,_ds.mc)[0])+"</div>";l+="</devsite-analytics-scope></div>"}l+=0<_ds.U(c).length&&0<_ds.U(b).length+_ds.U(d).length+_ds.U(h).length?'<hr role="none">':"";if(0<_ds.U(c).length){l+='<div class="devsite-suggest-sub-section" role="listitem"><div class="devsite-suggest-header" id="devsite-suggest-header-other-products" role="heading" aria-level="2"><span role="columnheader">Products</span></div><devsite-analytics-scope category="Site-Wide Custom Events" label="Search" role="list" aria-labelledby="devsite-suggest-header-other-products" action="Product Suggestion Click">';
b=c.length;for(d=0;d<b;d++)h=c[d],l+='<div class="devsite-result-item devsite-nav-label" id="suggestion-other-products-'+_ds.Y(d)+'" role="listitem" index=":'+_ds.Y(d)+'">'+j7(h.getPath(),h.getTitle(),_ds.hg(h,14),"Product Suggestion Click")+"</div>";l+="</devsite-analytics-scope></div>"}l+="</div>"+(k?'<div class="devsite-suggest-footer">'+(f?h7(e):"")+i7(g,f,a)+"</div>":"")+"</div>";return(0,_ds.Q)(l)};var Laa=/[ .()<>{}\[\]\/:,]+/,Maa=0,Paa=function(a){a.g&&(a.h.listen(a.g,"suggest-service-search",b=>{a:{var c=a.ma.querySelector(".highlight");if(c&&(c=c.querySelector(".devsite-result-item-link"))){c.click();break a}k7(a,b.detail.originalEvent,!!a.qa)}}),a.h.listen(a.g,"suggest-service-suggestions-received",b=>void Naa(a,b)),a.h.listen(a.g,"suggest-service-focus",()=>{l7(a,"cloud-track-search-focus",null);a.ua=!0;m7(a,!0)}),a.h.listen(a.g,"suggest-service-blur",()=>{m7(a,!1)}),a.h.listen(a.g,"suggest-service-input",
()=>{!a.oa["Text Entered Into Search Bar"]&&a.g.query.trim()&&(a.dispatchEvent(new CustomEvent("devsite-analytics-observation",{detail:{category:"Site-Wide Custom Events",label:"Search",action:"Text Entered Into Search Bar"},bubbles:!0})),a.oa["Text Entered Into Search Bar"]=!0);a.ua&&(l7(a,"cloud-track-search-input",null),a.ua=!1)}),a.h.listen(a.g,"suggest-service-navigate",b=>void Oaa(a,b)),a.h.listen(document.body,"devsite-page-changed",()=>a.oa={}),_ds.TF(a.g));a.o&&a.h.listen(a.o,"submit",b=>
{k7(a,b)});a.ma&&a.h.listen(a.ma,"click",b=>{const c=b.target;if(c.closest(".devsite-result-item-link")){m7(a,!1);let d;l7(a,"cloud-track-search-submit",{query:null==(d=a.v)?void 0:d.value,WE:c})}c.classList.contains("devsite-search-project-scope")&&k7(a,b,!0)});a.Da&&a.h.listen(a.Da,"click",()=>void m7(a,!0));a.xa&&a.h.listen(a.xa,"click",()=>void m7(a,!1))},Naa=function(a,b){b=b.detail;var c=b.suggestions;b=b.query;if(a.g.query.toLowerCase().startsWith(b.toLowerCase()))if(c){var d=c.Md();c=d.filter(t=>
2===t.Ff());var e=d.filter(t=>3===t.Ff()),f=d.filter(t=>4===t.Ff()).slice(0,5),g=d.filter(t=>1===t.Ff());d=c.length+f.length+g.length;for(var h of f)h.setPath(_ds.Hk(`${a.qa||"/s/results"}/?q=${h.getTitle()}`).toString());var k=b.split(Laa);e.forEach(t=>_ds.mE(t,_ds.Pc(t,10,_ds.mc).filter(u=>k.some(v=>u.includes(v)))));h=a.getAttribute("project-name")||"";var l=a.hasAttribute("project-scope"),m=a.hasAttribute("enable-search"),n=a.getAttribute("tenant-name")||"";c={jw:c,projectName:h,nq:l,uw:g,Dw:f,
query:b,Iw:e,uq:m,bk:n};0===d?_ds.K(a.ea,Jaa,c):(_ds.K(a.ea,Kaa,c),Qaa(a,b));a.setAttribute("aria-expanded","true");a.ea.removeAttribute("hidden")}else a.ea.setAttribute("hidden",""),a.setAttribute("aria-expanded","false")},l7=function(a,b,c=null){a.dispatchEvent(new CustomEvent(b,{detail:c,bubbles:!0}))},m7=function(a,b){if(a.ra!==b){_ds.PF(a.g,b);if(a.ra=b)a.setAttribute("search-active","");else{let c=a.ma.querySelector(".highlight");c&&c.classList.remove("highlight");a.removeAttribute("search-active");
a.setAttribute("aria-expanded","false");_ds.qj(a.ea)}a.hasAttribute("capture")||a.dispatchEvent(new CustomEvent("devsite-search-toggle",{detail:{active:b},bubbles:!0}))}},Oaa=function(a,b){var c=b.detail;b=a.ea.querySelector(".highlight");let d;const e=Array.from(a.ea.querySelectorAll(".devsite-result-item"));let f=[];let g,h=-1;if(b){var k=_ds.Jj(b,l=>l.classList.contains("devsite-suggest-section"));f=Array.from(k.querySelectorAll(".devsite-result-item"));k=_ds.xj(b.parentNode.parentNode);g=_ds.yj(b.parentNode.parentNode);
h=e.indexOf(b)}switch(c.keyCode){case 37:if(!k&&!g)return;b&&(c=b.getAttribute("index"),g?(d=g.querySelector('[index="'+c+'"]'))||(d=_ds.$a(Array.from(g.querySelectorAll("[index]")))):k&&((d=k.querySelector('[index="'+c+'"]'))||(d=_ds.$a(Array.from(k.querySelectorAll("[index]"))))));break;case 39:if(!k&&!g)return;b&&(c=b.getAttribute("index"),k?(d=k.querySelector('[index="'+c+'"]'))||(d=_ds.$a(Array.from(k.querySelectorAll("[index]")))):g&&((d=g.querySelector('[index="'+c+'"]'))||(d=_ds.$a(Array.from(g.querySelectorAll("[index]"))))));
break;case 38:b?(d=e[h-1])||(d=_ds.$a(f)):d=_ds.$a(e);break;case 40:b?(d=e[h+1])||(d=f[0]):d=e[0]}b&&(b.classList.remove("highlight"),b.removeAttribute("aria-selected"));d&&(a.v.setAttribute("aria-activedescendant",d.id),d.setAttribute("aria-selected","true"),d.classList.add("highlight"),d.scrollIntoViewIfNeeded&&d.scrollIntoViewIfNeeded()||d.scrollIntoView())},k7=async function(a,b,c=!1){b.preventDefault();b.stopPropagation();if(a.hasAttribute("enable-search")){a.oa["Full Site Search"]||(a.dispatchEvent(new CustomEvent("devsite-analytics-observation",
{detail:{category:"Site-Wide Custom Events",label:"Search",action:"Full Site Search"},bubbles:!0})),a.oa["Full Site Search"]=!0);let d;l7(a,"cloud-track-search-submit",{query:null==(d=a.v)?void 0:d.value});b=c&&a.qa?_ds.Hk(a.qa):_ds.Hk(a.o.getAttribute("action"));c=new _ds.ak(b.href);a.g.query&&_ds.nk(c,"q",a.g.query);b.search=c.g.toString();await DevsiteApp.fetchPage(b.href,!a.hasAttribute("disable-history"));m7(a,!1)}},Qaa=function(a,b){b=new RegExp(`(${_ds.Ui(b)})`,"ig");a=a.ea.querySelectorAll(".devsite-suggestion-fragment");
for(const c of a)a=c.innerHTML,a=a.replace(b,"<b>$1</b>"),_ds.Ed(c,_ds.fi(a))},n7=class extends _ds.E{static get observedAttributes(){return["project-scope","url-scoped","disabled"]}constructor(){super();this.ra=!1;this.oa={};this.va="";this.qa=null;this.h=new _ds.G;this.g=null;this.ua=!1}disconnectedCallback(){_ds.H(this.h);this.g&&(this.g.dispose(),this.g=null)}attributeChangedCallback(a,b,c){switch(a){case "project-scope":this.va=c||"";this.g&&(this.g.ra=this.va);break;case "url-scoped":this.qa=
c;break;case "disabled":this.v&&(this.v.disabled=null!==c)}}connectedCallback(){if(this.o=this.querySelector("form")){this.v=this.o.querySelector(".devsite-search-query");this.Da=this.o.querySelector(".devsite-search-button[search-open]");this.xa=this.querySelector(".devsite-search-button[search-close]");var a=`devsite-search-popout-container-id-${++Maa}`;this.v.setAttribute("aria-controls",a);this.ma=_ds.L(Iaa,{id:a});this.ea=this.ma.querySelector(".devsite-suggest-results-container");this.o.appendChild(this.ma);
this.hasAttribute("project-scope")&&(this.va=this.getAttribute("project-scope"));this.hasAttribute("url-scoped")&&(this.qa=this.getAttribute("url-scoped"));this.o&&this.v&&(this.g=new _ds.UF(this,this.o,this.v),this.g.j=!0,this.g.Ea=this.hasAttribute("enable-query-completion"),this.g.ua=!0,this.g.Ba=!0,this.g.Aa=!0,this.g.ra=this.va,this.g.j=this.hasAttribute("enable-suggestions"));Paa(this)}}};n7.prototype.connectedCallback=n7.prototype.connectedCallback;n7.prototype.attributeChangedCallback=n7.prototype.attributeChangedCallback;
n7.prototype.disconnectedCallback=n7.prototype.disconnectedCallback;try{window.customElements.define("devsite-search",n7)}catch(a){console.warn("devsite.app.customElement.DevsiteSearch",a)};})(_ds_www);