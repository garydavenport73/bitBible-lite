(function(_ds){var window=this;var Zca=function(a){a.eventHandler.listen(a,"DropdownItemClicked",b=>{Yca(a,b)})},Yca=async function(a,b){const c=b.Fa.detail.id;b=a.querySelector(".devsite-dialog-contents");const d=a.querySelector(`#date-section-${c}`);let e,f,g,h;const k=(null!=(g=null==d?void 0:null==(e=d.getBoundingClientRect())?void 0:e.top)?g:0)-(null!=(h=null==b?void 0:null==(f=b.getBoundingClientRect())?void 0:f.top)?h:0);d&&b&&b.scrollBy({top:k,behavior:"smooth"});let l,m;a.Nh=null!=(m=null==(l=a.Li.find(n=>n.id===c))?void 0:
l.title)?m:"";a.g.Oa(a.Nh)},ada=function(a){const b=new IntersectionObserver(c=>{c.forEach(d=>{$ca(a,0<d.intersectionRatio,d)})},{root:a.querySelector(".devsite-dialog-contents")});a.querySelectorAll(".release-note-date-section .release-note").forEach(c=>{b.observe(c)})},$ca=function(a,b,c){let d,e;const f={id:null!=(d=c.target.getAttribute("id"))?d:"",type:null!=(e=c.target.getAttribute("type"))?e:"NOTE_TYPE_UNSPECIFIED"};if(b){let g;a.dg=[...(null!=(g=a.dg)?g:[]),f]}else a.dg=[...a.dg.filter(g=>
g.id!==f.id)]},bda=function(a){switch(a){case "NOTE_TYPE_FEATURE":return{title:"Feature",color:"green"};case "NOTE_TYPE_SERVICE_ANNOUNCEMENT":return{title:"Announcement",color:"yellow"};case "NOTE_TYPE_NON_BREAKING_CHANGE":return{title:"Change",color:"yellow"};case "NOTE_TYPE_LIBRARIES":return{title:"Libraries",color:"blue"};case "NOTE_TYPE_FIX":return{title:"Fixed",color:"blue"};case "NOTE_TYPE_BREAKING_CHANGE":return{title:"Breaking",color:"red"};case "NOTE_TYPE_DEPRECATION":return{title:"Deprecated",
color:"red"};case "NOTE_TYPE_ISSUE":return{title:"Issue",color:"red"};case "NOTE_TYPE_SECURITY_BULLETIN":return{title:"Security",color:"orange"};default:return{title:"Unspecified",color:"grey"}}},L8=function(a,b){b=bda(b);return(0,_ds.Z)`
        <span class="release-note-type-chip
          ${a} ${b.color}">
          ${"large"===a?b.title.toUpperCase():b.title}
        </span>`},cda=function(a,b){let c;return(0,_ds.Z)`
        <div class="release-note-date-section"
        id="date-section-${b.replace(/,?\s/g,"")}">
          <h3 class="release-note-date-header">${b}</h3>
          ${[...(null!=(c=a.releaseNotes.get(b))?c:[])].map((d,e)=>{let f,g;return(0,_ds.Z)`
                <div class="release-note"
                    id="${`${b}-${e}`}"
                    type="${null!=(f=d.noteType)?f:"NOTE_TYPE_UNSPECIFIED"}">
                  ${L8("large",d.noteType)}
                  <div class="release-note-content">
                  ${d.descriptionHtml?(0,_ds.cK)(_ds.ae(null!=(g=d.descriptionHtml)?g:"")):(0,_ds.Z)`<p>${d.description}</p>`}
                  </div>
                </div>`})}
        </div>
    `},M8=class extends _ds.ZH{constructor(){super(["devsite-dialog","devsite-dropdown-list"]);this.eventHandler=new _ds.G;this.releaseNotes=new Map;this.Nh="";this.Li=[];this.dg=[];this.g=new _ds.am(async a=>{this.La({category:"Site-Wide Custom Events",action:"release notes: view old note",label:`${await _ds.fp(_ds.F().href)} : ${a}`})},100)}jb(){return this}async connectedCallback(){super.connectedCallback();this.Nh=[...this.releaseNotes.keys()][0];this.Li=[...this.releaseNotes.keys()].map(a=>({id:a.replace(/,?\s/g,
""),title:a}));Zca(this)}disconnectedCallback(){super.disconnectedCallback()}cc(a){super.cc(a);ada(this)}render(){return(0,_ds.Z)`
      <div class="devsite-dialog-header">
        <div>
          <h3 class="no-link title">
            Release note
          </h3>
          <div class="chip-wrapper">
            ${[...(new Set(this.dg.map(a=>a.type)))].map(a=>L8("small",a))}
          </div>
        </div>
        <devsite-dropdown-list
            .listItems=${this.Li}>
          <p slot="toggle" class="selected-date-toggle">${this.Nh}</p>
        </devsite-dropdown-list>
      </div>
      <div class="devsite-dialog-contents">
        ${[...this.releaseNotes.keys()].map(a=>cda(this,a))}
      </div>
      <div class="devsite-dialog-footer devsite-dialog-buttons">
        <button class="button devsite-dialog-close">
          Close
        </button>
      </div>`}};_ds.x([_ds.M({type:Map}),_ds.y(Object)],M8.prototype,"releaseNotes",void 0);_ds.x([_ds.O(),_ds.y(Object)],M8.prototype,"Nh",void 0);_ds.x([_ds.O(),_ds.y(Array)],M8.prototype,"Li",void 0);_ds.x([_ds.O(),_ds.y(Array)],M8.prototype,"dg",void 0);try{window.customElements.define("devsite-view-release-notes-dialog",M8)}catch(a){console.warn("devsite.app.customElement.DevsiteViewReleaseNotesDialog",a)};})(_ds_www);
