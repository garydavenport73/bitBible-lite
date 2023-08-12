(function(_ds){var window=this;var N8=class extends _ds.ZH{constructor(){super(["devsite-dialog","devsite-dropdown-list","devsite-view-release-notes-dialog"]);this.Hn=!1;this.releaseNotes=new Map;this.g=null;this.path="";this.label="View Release Notes";this.disableAutoOpen=!1}jb(){return this}async connectedCallback(){super.connectedCallback();try{this.path||(this.path=await _ds.fp(_ds.F().href));let a,b=null!=(a=await _ds.dz(new _ds.Ty,this.path))?a:[];b=b.map(c=>{var d,e=Object,f=e.assign,g=null!=(d=c.publishedAt)?d:"";d=new Date(null!=
g?g:"");g=d.toDateString().split(/\s+/);return f.call(e,{},c,{publishedAt:4===g.length?`${g[1]} ${Number(g[2])}, ${g[3]}`:d.toDateString()})});b.forEach(c=>{let d;const e=null!=(d=c.publishedAt)?d:"";let f;this.releaseNotes.set(e,[...(null!=(f=this.releaseNotes.get(e))?f:[]),c])})}catch(a){}0===this.releaseNotes.size?this.remove():(this.Hn=!0,this.disableAutoOpen||"#release__notes"!==location.hash||this.h())}disconnectedCallback(){super.disconnectedCallback();let a;null==(a=this.g)||a.remove();this.g=
null}h(a){a&&(a.preventDefault(),a.stopPropagation());let b;null==(b=this.g)||b.remove();this.g=document.createElement("devsite-dialog");this.g.classList.add("devsite-view-release-notes-dialog-container");_ds.uH((0,_ds.Z)`
      <devsite-view-release-notes-dialog
        .releaseNotes=${this.releaseNotes}>
      </devsite-view-release-notes-dialog>
    `,this.g);document.body.appendChild(this.g);this.g.open=!0;this.La({category:"Site-Wide Custom Events",action:"release notes: view note",label:`${this.path}`})}render(){return this.Hn?(0,_ds.Z)`
      <a class="view-notes-link"
         href="#"
         @click="${this.h}">
        ${this.label}
      </a>
    `:(0,_ds.Z)``}};_ds.x([_ds.O(),_ds.y(Object)],N8.prototype,"Hn",void 0);_ds.x([_ds.M({type:String}),_ds.y(Object)],N8.prototype,"path",void 0);_ds.x([_ds.M({type:String}),_ds.y(Object)],N8.prototype,"label",void 0);_ds.x([_ds.M({type:Boolean,Ga:"disable-auto-open"}),_ds.y(Object)],N8.prototype,"disableAutoOpen",void 0);try{window.customElements.define("devsite-view-release-notes",N8)}catch(a){console.warn("devsite.app.customElement.DevsiteViewReleaseNotes",a)};})(_ds_www);
