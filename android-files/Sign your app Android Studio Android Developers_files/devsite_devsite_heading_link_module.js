(function(_ds){var window=this;var X1=function(a){return(0,_ds.Q)('<span class="devsite-heading" role="heading" aria-level="'+_ds.Y(a.level)+'"></span>')},Y1=function(a){const b=a.id;a=a.label;return(0,_ds.Q)('<button type="button" class="devsite-heading-link button-flat material-icons" aria-label="'+_ds.Y(a)+'" data-title="'+_ds.Y(a)+'" data-id="'+_ds.Y(b)+'"></button>')};var Z1=async function(a){a.h=Array.from(document.querySelectorAll("h1.add-link[id],h2:not(.no-link)[id],h3:not(.no-link)[id],h4:not(.no-link)[id],h5:not(.no-link)[id],h6:not(.no-link)[id]"));const b=await _ds.w();for(const c of a.h)b.registerIntersectionForElement(c,()=>{if(!c.querySelector(".devsite-heading-link")&&(c.classList.contains("add-link")||!("full"===document.body.getAttribute("layout")||_ds.Kj(c,"devsite-dialog",null,3)||_ds.Kj(c,"devsite-selector",null,6)||_ds.Kj(c,"table",null,4)))){var d=
c.textContent||c.dataset.text;if(d&&c.id){const e="Copy link to this section: "+d,f=_ds.L(X1,{level:c.tagName[1]});for(const g of Array.from(c.childNodes))f.append(g);c.append(f);d=_ds.L(Y1,{id:c.id,label:d?e:"Copy link to this section"});c.appendChild(d);c.setAttribute("role","presentation");c.removeAttribute("tabindex")}}b.unregisterIntersectionForElement(c)})},a2=function(a){a.eventHandler.listen(document.body,"devsite-page-changed",()=>{Z1(a)});a.eventHandler.listen(document,"click",b=>{b=b.target;
if(b.classList.contains("devsite-heading-link")){var c=_ds.Kj(b,"devsite-expandable",null,3),d=c?c.id:b.dataset.id;d&&(c=_ds.F(),c.hash=d,d=document.createElement("div"),d.innerText=c.href,_ds.pr(a,[d]),$1(a,b))}})},$1=async function(a,b){if(a.g){const c=b.getAttribute("aria-label");b.setAttribute("aria-label","Link to this section was copied to the clipboard");_ds.em(a.eventHandler,a.g,_ds.xg,()=>{_ds.em(a.eventHandler,a.g,_ds.xg,()=>{b.setAttribute("aria-label",c)})})}},b2=class extends _ds.E{constructor(){super();
this.eventHandler=new _ds.G;this.g=null;this.h=[]}async connectedCallback(){await Z1(this);a2(this);this.g=document.querySelector("devsite-snackbar")}async disconnectedCallback(){const a=await _ds.w();for(const b of this.h)a.unregisterIntersectionForElement(b);_ds.H(this.eventHandler)}};try{window.customElements.define("devsite-heading-link",b2)}catch(a){console.warn("Unrecognized DevSite custom element - DevsiteHeadingLink",a)};})(_ds_www);
