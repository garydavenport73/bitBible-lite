(function(_ds){var window=this;var x3=_ds.AH([':host{--mdc-line-height:var(--devsite-mdc-line-height,56px);--mdc-text-field-outlined-hover-border-color:#53585d;--mdc-text-field-outlined-focused-border-color:var(--devsite-link-color);--mdc-text-field-outlined-focused-label-color:var(--devsite-link-color);--mdc-text-field-padding:16px;--mdc-text-field-border-radius:4px;--mdc-text-field-error-color:#d93025;--mdc-text-field-warning-color:#e37400;--mdc-text-field-icon-width:24px;--mdc-text-field-icon-height:24px;--mdc-select-dropdown-icon-color:rgba(0,0,0,.54)}:host *{-moz-box-sizing:border-box;box-sizing:border-box}:host label{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;width:100%;position:relative;border:var(--devsite-input-border);border-radius:var(--mdc-text-field-border-radius);color:var(--devsite-input-color,var(--devsite-primary-text-color))}:host label:hover{border-color:var(--mdc-text-field-outlined-hover-border-color)}:host label:focus{outline:0}:host label.devsite-mwc--focused,:host label.devsite-mwc--focused:hover{border:1px solid var(--mdc-text-field-outlined-focused-border-color)}:host label.devsite-mwc--focused .devsite-mwc__label,:host label.devsite-mwc--focused:hover .devsite-mwc__label{color:var(--mdc-text-field-outlined-focused-label-color);font-weight:500}:host label.devsite-mwc--focused input,:host label.devsite-mwc--focused select,:host label.devsite-mwc--focused textarea,:host label.devsite-mwc--focused:hover input,:host label.devsite-mwc--focused:hover select,:host label.devsite-mwc--focused:hover textarea{border:1px solid var(--mdc-text-field-outlined-focused-border-color);border-radius:calc(var(--mdc-text-field-border-radius)/2)}:host label.devsite-mwc--invalid,:host label.devsite-mwc--invalid:hover{border-color:var(--mdc-text-field-error-color)}:host label.devsite-mwc--invalid input,:host label.devsite-mwc--invalid select,:host label.devsite-mwc--invalid textarea,:host label.devsite-mwc--invalid:hover input,:host label.devsite-mwc--invalid:hover select,:host label.devsite-mwc--invalid:hover textarea{border-color:var(--mdc-text-field-error-color)}:host label.devsite-mwc--invalid .devsite-mwc__label,:host label.devsite-mwc--invalid:hover .devsite-mwc__label{color:var(--mdc-text-field-error-color)}:host label.devsite-mwc--warning,:host label.devsite-mwc--warning:hover{border-color:var(--mdc-text-field-warning-color)}:host label.devsite-mwc--warning input,:host label.devsite-mwc--warning select,:host label.devsite-mwc--warning textarea,:host label.devsite-mwc--warning:hover input,:host label.devsite-mwc--warning:hover select,:host label.devsite-mwc--warning:hover textarea{border-color:var(--mdc-text-field-warning-color)}:host label.devsite-mwc--warning .devsite-mwc__label,:host label.devsite-mwc--warning:hover .devsite-mwc__label{color:var(--mdc-text-field-warning-color)}:host .devsite-mwc__label--required:after{-webkit-margin-start:1px;-moz-margin-start:1px;margin-inline-start:1px;-webkit-margin-end:0;-moz-margin-end:0;margin-inline-end:0;content:"*"}:host input,:host select,:host textarea{color:var(--devsite-input-color,var(--devsite-primary-text-color));background:var(--devsite-input-background);border:1px solid transparent;line-height:var(--mdc-line-height);min-height:var(--mdc-line-height);width:100%;padding-block:0;padding-inline:var(--mdc-text-field-padding);border-radius:var(--mdc-text-field-border-radius);font-family:var(--mdc-typography-subtitle1-font-family,var(--mdc-typography-font-family,Roboto,sans-serif));font-size:var(--mdc-typography-subtitle1-font-size,1rem);font-weight:var(--mdc-typography-subtitle1-font-weight,400);letter-spacing:var(--mdc-typography-subtitle1-letter-spacing,.009375em);text-transform:var(--mdc-typography-subtitle1-text-transform,inherit);-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:0;margin-block:0;margin-inline:0}:host input:active,:host input:focus,:host select:active,:host select:focus,:host textarea:active,:host textarea:focus{outline:0}:host textarea{overflow-x:hidden;overflow-y:auto;-moz-box-sizing:border-box;box-sizing:border-box;resize:none;line-height:1.5;padding-block:var(--mdc-text-field-padding);padding-inline:var(--mdc-text-field-padding)}:host .devsite-mwc__label{position:absolute;inset-block-start:50%;padding-block:0;padding-inline:0;inset-inline-start:var(--mdc-text-field-padding);-webkit-transform:translate3d(0,-50%,0) scale(1);transform:translate3d(0,-50%,0) scale(1);-webkit-transition:.15s cubic-bezier(.4,0,.2,1);transition:.15s cubic-bezier(.4,0,.2,1);-webkit-transform-origin:left center;transform-origin:left center;background:0 0;pointer-events:none}[dir=rtl] :host .devsite-mwc__label{-webkit-transform-origin:right center;transform-origin:right center}:host .devsite-mwc-text-area .devsite-mwc__label{inset-block-start:calc(13px + var(--mdc-text-field-padding))}:host .devsite-mwc-text-field__icon{width:24px;height:24px;position:absolute;inset-inline-start:var(--mdc-text-field-padding);inset-block-start:50%;-webkit-transform:translate3d(0,-50%,0);transform:translate3d(0,-50%,0);pointer-events:none}:host .devsite-mwc-text-field__icon img{max-width:100%}:host .devsite-mwc-text-field--with-leading-icon input{-webkit-padding-start:calc(var(--mdc-text-field-padding) + var(--mdc-text-field-icon-width) + 8px);-moz-padding-start:calc(var(--mdc-text-field-padding) + var(--mdc-text-field-icon-width) + 8px);padding-inline-start:calc(var(--mdc-text-field-padding) + var(--mdc-text-field-icon-width) + 8px)}:host .devsite-mwc-text-field--with-leading-icon .devsite-mwc__label{inset-inline-start:calc(var(--mdc-text-field-padding) + var(--mdc-text-field-icon-width) + 8px)}:host .devsite-mwc-select__dropdown-icon{position:absolute;inset-inline-end:var(--mdc-text-field-padding);inset-block-start:50%;-webkit-transform:translate3d(0,-50%,0);transform:translate3d(0,-50%,0);width:10px;height:5px;pointer-events:none;fill:var(--mdc-select-dropdown-icon-color)}:host .devsite-mwc-select__dropdown-icon svg{position:absolute;width:10px;height:5px}:host .devsite-mwc-select__dropdown-icon svg .devsite-mwc-select__dropdown-icon-inactive{fill:var(--devsite-secondary-text-color)}:host .devsite-mwc-character-counter{font-size:12px;color:#5f6368;margin-block:4px;margin-inline:var(--mdc-text-field-padding)}:host .devsite-mwc--floating .devsite-mwc__label{inset-block-start:0;inset-inline-start:var(--mdc-text-field-padding);padding-block:0;padding-inline:4px;-webkit-transform:translate3d(-3px,-50%,0) scale(.75);transform:translate3d(-3px,-50%,0) scale(.75);background:var(--devsite-input-background)}']);var y3=_ds.GJ(class extends _ds.HJ{constructor(a){super();if(3!==a.type&&1!==a.type&&4!==a.type)throw Error("The `live` directive is not allowed on child or event bindings");if(void 0!==a.Kb)throw Error("`live` bindings can only contain a single expression");}render(a){return a}update(a,[b]){if(b===_ds.xq||b===_ds.gH)return b;const c=a.element,d=a.name;if(3===a.type){if(b===c[d])return _ds.xq}else if(4===a.type){if(!!b===c.hasAttribute(d))return _ds.xq}else if(1===a.type&&c.getAttribute(d)===String(b))return _ds.xq;
_ds.EJ(a);return b}});var z3=function(a){return a.label?(0,_ds.Z)`<span class="devsite-mwc__label ${a.required?"devsite-mwc__label--required":""}">${a.label}</span>`:_ds.gH},A3=function(a){return a.icon?(0,_ds.Z)`<span class="devsite-mwc-text-field__icon">
          <img src="${a.staticPath}/images/icons/${a.icon}.svg">
        </span>`:_ds.gH},B3=function(a){return(0,_ds.Z)`
      <select aria-labelledby="label"
              class="devsite-mwc-select__input"
              .value="${y3(a.value)}"
              ?disabled="${a.disabled}"
              ?required="${a.required}"
              ?readonly="${a.readOnly}"
              name="${_ds.qQ(""===a.name?void 0:a.name)}"
              @change="${b=>{a.h(b);a.g(b)}}"
              @blur="${a.o}"
              @focus="${a.ra}">
        ${a.options.map(b=>(0,_ds.Z)`
          <option value="${b.value}"
                  ?disabled="${b.disabled}"
                  ?selected="${b.value.toUpperCase().trim()===a.value.toUpperCase().trim()}">
              ${b.text}
          </option>`)}
      </select>
      <span class="devsite-mwc-select__dropdown-icon">
        <svg class="devsite-mwc-select__dropdown-icon-graphic"
             viewBox="7 10 10 5"
             focusable="false">
          <polygon class="devsite-mwc-select__dropdown-icon-inactive"
                   stroke="none"
                   fill-rule="evenodd"
                   points="7 10 12 15 17 10">
          </polygon>
        </svg>
      </span>`},C3=class extends _ds.ZH{static get styles(){return x3}constructor(){super();this.readOnly=!1;this.kind="";this.type="text";this.disabled=this.warning=this.required=this.outlined=!1;this.name=this.value=this.placeholder=this.icon=this.label="";this.invalid=this.focused=!1;this.rows=2;this.cols=20;this.maxLength=this.minLength=-1;this.charCounter=!1;this.staticPath="";this.options=[]}cc(a){super.cc(a);(a=Array.from(this.querySelectorAll("option")).map(b=>({value:b.value,text:b.text,
disabled:b.disabled})))&&a.length&&""!==a[0].text&&""!==a[0].value&&a.unshift({value:"",text:"",disabled:!0});this.options=a;_ds.OH(this)}update(a){a.has("value")&&"string"!==typeof this.value&&(this.value=`${this.value}`);super.update(a)}o(a){this.value=a.target.value.trim();this.focused=!1;""===this.value&&(this.warning=!1)}ra(a){this.value=a.target.value.trim();this.focused=!0}h(a){this.value=a.target.value.trim();this.invalid=!1;this.required&&""===this.value?this.invalid=!0:this.value&&(0<this.minLength&&
this.value.length<this.minLength&&(this.invalid=!0),0<this.maxLength&&this.value.length>this.maxLength&&(this.invalid=!0))}g(a){const b=new CustomEvent("change");a&&(this.value=a.target.value.trim());this.dispatchEvent(b)}focus(){const a=new CustomEvent("focus");let b;null==(b=this.inputElement)||b.dispatchEvent(a);let c;null==(c=this.inputElement)||c.focus();let d;null==(d=this.ai)||d.dispatchEvent(a);let e;null==(e=this.ai)||e.focus();let f;null==(f=this.Rh)||f.dispatchEvent(a);let g;null==(g=this.Rh)||
g.focus()}blur(){const a=new CustomEvent("blur");let b;null==(b=this.inputElement)||b.dispatchEvent(a);let c;null==(c=this.inputElement)||c.blur();let d;null==(d=this.ai)||d.dispatchEvent(a);let e;null==(e=this.ai)||e.blur();let f;null==(f=this.Rh)||f.dispatchEvent(a);let g;null==(g=this.Rh)||g.blur()}select(){let a;null==(a=this.inputElement)||a.select();let b;null==(b=this.Rh)||b.select()}render(){switch(this.kind){case "textfield":var a=(0,_ds.rK)({"devsite-mwc-text-field--with-leading-icon":this.icon,
"devsite-mwc--no-label":!this.label,"devsite-mwc--outlined":this.outlined,"devsite-mwc--disabled":this.disabled,"devsite-mwc--focused":this.focused,"devsite-mwc--invalid":this.invalid,"devsite-mwc--warning":this.warning,"devsite-mwc--floating":""!==this.value||this.focused}),b=z3(this),c=A3(this);var d=-1===this.minLength?void 0:this.minLength;const e=-1===this.maxLength?void 0:this.maxLength;d=(0,_ds.Z)`
      <input
          aria-labelledby="label"
          class="devsite-mwc-text-field__input"
          type="${this.type}"
          .value="${y3(this.value)}"
          ?disabled="${this.disabled}"
          placeholder="${this.placeholder}"
          ?required="${this.required}"
          ?readonly="${this.readOnly}"
          minlength="${null!=d?d:_ds.gH}"
          maxlength="${null!=e?e:_ds.gH}"
          name="${_ds.qQ(""===this.name?void 0:this.name)}"
          @input="${this.h}"
          @blur="${this.o}"
          @focus="${this.ra}"
          @change="${this.g}">`;return(0,_ds.Z)`
        <label class="devsite-mwc-text-field ${a}">
        ${b}
        ${c}
        ${d}
      </label>
    `;case "select":a:{for(a of this.options)if(a.value.trim()===this.value.trim()){a=a.text.trim();break a}a=""}return(0,_ds.Z)`
        <label class="devsite-mwc-select ${(0,_ds.rK)({"devsite-mwc--disabled":this.disabled,"devsite-mwc--no-label":!this.label,"devsite-mwc--outlined":this.outlined,"devsite-mwc--focused":this.focused,"devsite-mwc--invalid":this.invalid,"devsite-mwc--floating":""!==a||this.focused})}">
        ${z3(this)}
        ${A3(this)}
        ${B3(this)}
      </label>
    `;case "textarea":return a=(0,_ds.rK)({"devsite-mwc--no-label":!this.label,"devsite-mwc--outlined":this.outlined,"devsite-mwc--disabled":this.disabled,"devsite-mwc--focused":this.focused,"devsite-mwc--invalid":this.invalid,"devsite-mwc--floating":""!==this.value||this.focused}),b=z3(this),c=-1===this.minLength?void 0:this.minLength,d=-1===this.maxLength?void 0:this.maxLength,c=(0,_ds.Z)`<textarea
          aria-labelledby="label"
          class="devsite-mwc-text-area__input"
          .value="${y3(this.value)}"
          ?disabled="${this.disabled}"
          ?required="${this.required}"
          ?readonly="${this.readOnly}"
          rows="${this.rows}"
          cols="${this.cols}"
          name="${_ds.qQ(""===this.name?void 0:this.name)}"
          minlength="${null!=c?c:_ds.gH}"
          maxlength="${null!=d?d:_ds.gH}"
          @input="${this.h}"
          @blur="${this.o}"
          @focus="${this.ra}"
          @change="${this.g}"></textarea>`,(0,_ds.Z)`
        <label class="devsite-mwc-text-area ${a}">
          ${b}
          ${c}
        </label>
        ${!this.charCounter&&this.maxLength?_ds.gH:(0,_ds.Z)`<span class="devsite-mwc-character-counter">${Math.min(this.value.length,this.maxLength)} / ${this.maxLength}</span>`}
    `;default:return(0,_ds.Z)`<span>Invalid element type</span>`}}};_ds.x([_ds.Fq("input"),_ds.y(HTMLInputElement)],C3.prototype,"inputElement",void 0);_ds.x([_ds.Fq("select"),_ds.y(HTMLSelectElement)],C3.prototype,"ai",void 0);_ds.x([_ds.Fq("textarea"),_ds.y(HTMLTextAreaElement)],C3.prototype,"Rh",void 0);_ds.x([_ds.M({type:Boolean}),_ds.y(Object)],C3.prototype,"readOnly",void 0);_ds.x([_ds.M({type:String}),_ds.y(Object)],C3.prototype,"kind",void 0);
_ds.x([_ds.M({type:String}),_ds.y(String)],C3.prototype,"type",void 0);_ds.x([_ds.M({type:Boolean}),_ds.y(Object)],C3.prototype,"outlined",void 0);_ds.x([_ds.M({type:Boolean,Za:!0}),_ds.y(Object)],C3.prototype,"required",void 0);_ds.x([_ds.M({type:Boolean,Za:!0}),_ds.y(Object)],C3.prototype,"warning",void 0);_ds.x([_ds.M({type:Boolean,Za:!0}),_ds.y(Object)],C3.prototype,"disabled",void 0);_ds.x([_ds.M({type:String}),_ds.y(Object)],C3.prototype,"label",void 0);
_ds.x([_ds.M({type:String}),_ds.y(Object)],C3.prototype,"icon",void 0);_ds.x([_ds.M({type:String}),_ds.y(Object)],C3.prototype,"placeholder",void 0);_ds.x([_ds.M({type:String}),_ds.y(Object)],C3.prototype,"value",void 0);_ds.x([_ds.M({type:String}),_ds.y(Object)],C3.prototype,"name",void 0);_ds.x([_ds.M({type:Boolean}),_ds.y(Object)],C3.prototype,"focused",void 0);_ds.x([_ds.M({type:Boolean,Za:!0}),_ds.y(Object)],C3.prototype,"invalid",void 0);
_ds.x([_ds.M({type:Number}),_ds.y(Object)],C3.prototype,"rows",void 0);_ds.x([_ds.M({type:Number}),_ds.y(Object)],C3.prototype,"cols",void 0);_ds.x([_ds.M({type:Number}),_ds.y(Object)],C3.prototype,"minLength",void 0);_ds.x([_ds.M({type:Number}),_ds.y(Object)],C3.prototype,"maxLength",void 0);_ds.x([_ds.M({type:Boolean}),_ds.y(Object)],C3.prototype,"charCounter",void 0);_ds.x([_ds.M({type:String,Za:!0}),_ds.y(Object)],C3.prototype,"staticPath",void 0);try{window.customElements.define("devsite-mwc",C3)}catch(a){console.warn("Unrecognized DevSite custom element - DevsiteMwc",a)};})(_ds_www);
