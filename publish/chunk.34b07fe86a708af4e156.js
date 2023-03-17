(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{194:function(e,t,i){"use strict";var s=i(25),a=(i(23),i(1));var r=(e,t)=>{let[i]=t;i||(i=e.location.pathname);const s="string"==typeof i?i.slice(1):null,r="/"+e.storeId+"@"+s.replace(/\//g,"$")+".json";return Object(a.h)({url:r}).then((e=>{const t=e.data.GET;if(t){const[e,s]=t.split("@");if(s)return{path:i,resource:e,_id:s}}const s=new Error("Resource not found, invalid slug or store ID");throw s.response=e,s}))};var n=(e,t)=>{let[i]=t;return new Promise(((t,s)=>{const{storeId:r}=e,{resource:n,_id:o}=i;if(n&&o)Object(a.g)({url:`/${n}/${o}.json`,storeId:r}).then((e=>{let{data:i}=e;t({resource:n,body:i})})).catch(s);else{const e=new Error("Invalid route resource or object ID");e.response={},s(e)}}))},o=(i(4),e=>new Promise(((t,i)=>{const{storeId:s}=e,r=[],n=[];["products","categories","collections","brands"].forEach((e=>{r.push(Object(a.g)({url:`/${e}.json`,storeId:s}).then((t=>{const{result:i}=t.data;Array.isArray(i)&&i.forEach((t=>{let{_id:i,slug:s,name:a,sku:r}=t;if(s){const t="/"+s;n.find((e=>e.path===t))||n.push({resource:e,_id:i,path:t,name:a,sku:r})}}))})))})),Promise.all(r).then((()=>t(n))).catch(i)}))),c=i(3);var l=(e,t)=>{let[i,s=!0]=t;i||(i=e.location.hostname);const r="/domains/"+i+".json";return Object(a.e)({url:r}).then((t=>{let{data:i}=t;if(s){["store_id","store_object_id","channel_id"].forEach((e=>c.a.set(e,i[e])));const e=i.default_lang;e&&(c.a.set("lang",e),c.a.set("country_code",e.replace(/^[a-z]{2}_/,"").toUpperCase()),"pt_br"===e&&(c.a.set("currency","BRL"),c.a.set("currency_symbol","R$")))}return e.storeId=i.store_id,i}))};t.a=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"object"==typeof window&&window.location;const i=this;this.storeId=e||s.$ecomConfig.get("store_id"),this.location=t,this.map=function(){return r(i,arguments)},this.resolve=function(){return n(i,arguments)},this.list=function(){return o(i,arguments)},this.setupStore=function(){return l(i,arguments)}}},237:function(e,t,i){var s=i(245);s.__esModule&&(s=s.default),"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);(0,i(173).default)("38cce0f6",s,!0,{})},240:function(e,t,i){"use strict";t.a=(e,t)=>e.sort(((e,i)=>{if(e.app_id===i.app_id)return 0;const s=t.indexOf(e.app_id),a=t.indexOf(i.app_id);return s>-1?a>-1?s<a?-1:1:s>-1?-1:1:a>-1?1:0}))},244:function(e,t,i){"use strict";i(237)},245:function(e,t,i){(t=i(172)(!0)).push([e.i,".shipping-calculator__input{max-width:150px}.shipping-calculator__services{font-size:var(--font-size-sm);max-width:370px}.shipping-calculator__services .active{cursor:auto}.shipping-calculator__option{display:flex;justify-content:space-between;width:100%}.shipping-calculator__option>small{min-width:70px;text-align:right}@media(min-width:1200px){.shipping-calculator__option{display:block;position:relative}.shipping-calculator__option>small{position:absolute;right:-5px;top:-5px}}.shipping-calculator__free-from-value{margin-top:var(--spacer-2)}.shipping-calculator__free-from-value .progress{height:1.5rem;margin-top:var(--spacer-1)}.shipping-calculator__free-from-value .progress-bar{background-color:var(--info)}","",{version:3,sources:["ShippingCalculator.scss"],names:[],mappings:"AAAA,4BAA4B,eAAe,CAAC,+BAA+B,6BAA6B,CAAC,eAAe,CAAC,uCAAuC,WAAW,CAAC,6BAA6B,YAAY,CAAC,6BAA6B,CAAC,UAAU,CAAC,mCAAmC,cAAc,CAAC,gBAAgB,CAAC,yBAAyB,6BAA6B,aAAa,CAAC,iBAAiB,CAAC,mCAAmC,iBAAiB,CAAC,UAAU,CAAC,QAAQ,CAAC,CAAC,sCAAsC,0BAA0B,CAAC,gDAAgD,aAAa,CAAC,0BAA0B,CAAC,oDAAoD,4BAA4B",file:"ShippingCalculator.scss",sourcesContent:[".shipping-calculator__input{max-width:150px}.shipping-calculator__services{font-size:var(--font-size-sm);max-width:370px}.shipping-calculator__services .active{cursor:auto}.shipping-calculator__option{display:flex;justify-content:space-between;width:100%}.shipping-calculator__option>small{min-width:70px;text-align:right}@media(min-width:1200px){.shipping-calculator__option{display:block;position:relative}.shipping-calculator__option>small{position:absolute;right:-5px;top:-5px}}.shipping-calculator__free-from-value{margin-top:var(--spacer-2)}.shipping-calculator__free-from-value .progress{height:1.5rem;margin-top:var(--spacer-1)}.shipping-calculator__free-from-value .progress-bar{background-color:var(--info)}"]}]),e.exports=t},251:function(e,t,i){"use strict";i(4);var s=i(22),a=i(25),r=i(32),n=i(78),o=i(33),c=i(1),l=i(240),p=i(239),h=i.n(p),u=i(243);const d="object"==typeof window&&window.localStorage,g="shipping-to-zip",m=e=>{const t={};return["product_id","variation_id","sku","name","quantity","inventory","currency_id","currency_symbol","price","final_price","dimensions","weight"].forEach((i=>{void 0!==e[i]&&(t[i]=e[i])})),t};var f={name:"ShippingCalculator",components:{CleaveInput:h.a,ShippingLine:u.a},props:{zipCode:String,canSelectServices:Boolean,canInputZip:{type:Boolean,default:!0},countryCode:{type:String,default:a.$ecomConfig.get("country_code")},shippedItems:{type:Array,default:()=>[]},shippingResult:{type:Array,default:()=>[]},shippingData:{type:Object,default:()=>({})},shippingAppsSort:{type:Array,default:()=>window.ecomShippingApps||[]}},data:()=>({localZipCode:null,localShippedItems:[],amountSubtotal:null,shippingServices:[],selectedService:null,hasPaidOption:!1,freeFromValue:null,isScheduled:!1,retryTimer:null,isWaiting:!1,hasCalculated:!1}),computed:{i19add$1ToEarn:()=>Object(r.a)(s.j),i19calculateShipping:()=>Object(r.a)(s.D),i19zipCode:()=>Object(r.a)(s.se),i19freeShipping:()=>Object(r.a)(s.zb).toLowerCase(),cleaveOptions(){return"BR"===this.countryCode?{blocks:[5,3],delimiter:"-"}:{blocks:[30]}},freeFromPercentage(){return this.hasPaidOption&&this.amountSubtotal<this.freeFromValue?Math.round(100*this.amountSubtotal/this.freeFromValue):null},productionDeadline(){let e=0;return this.shippedItems.forEach((t=>{if(t.quantity&&t.production_time){const{days:i,cumulative:s}=t.production_time,a=s?i*t.quantity:i;a>e&&(e=a)}})),e}},methods:{formatMoney:n.a,updateZipCode(){this.$emit("update:zip-code",this.localZipCode)},parseShippingOptions(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];this.freeFromValue=null,this.shippingServices=[],e.length&&(e.forEach((e=>{const{validated:t,error:i,response:s}=e;if(t&&!i){s.shipping_services.forEach((t=>{this.shippingServices.push({app_id:e.app_id,...t})}));const t=s.free_shipping_from_value;t&&(!this.freeFromValue||this.freeFromValue>t)&&(this.freeFromValue=t)}})),this.shippingServices.length?(this.shippingServices=this.shippingServices.sort(((e,t)=>{const i=e.shipping_line.total_price-t.shipping_line.total_price;return i<0?-1:i>0?1:e.shipping_line.delivery_time&&t.shipping_line.delivery_time&&e.shipping_line.delivery_time.days<t.shipping_line.delivery_time.days?-1:1})),this.setSelectedService(0),this.hasPaidOption=Boolean(this.shippingServices.find((e=>e.shipping_line.total_price||e.shipping_line.price))),Array.isArray(this.shippingAppsSort)&&this.shippingAppsSort.length&&(this.shippingServices=Object(l.a)(this.shippingServices,this.shippingAppsSort))):t?this.scheduleRetry():this.fetchShippingServices(!0))},scheduleRetry(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1e4;clearTimeout(this.retryTimer),this.retryTimer=setTimeout((()=>{this.localZipCode&&!this.shippingServices.length&&this.shippedItems.length&&this.fetchShippingServices(!0)}),e)},fetchShippingServices(e){this.isScheduled||(this.isScheduled=!0,setTimeout((()=>{this.isScheduled=!1;const{storeId:t}=this,i={...this.shippingData,to:{zip:this.localZipCode,...this.shippingData.to}};this.localShippedItems.length&&(i.items=this.localShippedItems,i.subtotal=this.amountSubtotal),this.isWaiting=!0,Object(c.c)({url:"/calculate_shipping.json",method:"POST",storeId:t,data:i}).then((t=>{let{data:i}=t;return this.parseShippingOptions(i.result,e)})).catch((t=>{e||this.scheduleRetry(4e3),console.error(t)})).finally((()=>{this.hasCalculated=!0,this.isWaiting=!1}))}),this.hasCalculated?150:50))},submitZipCode(){this.updateZipCode(),d&&d.setItem(g,this.localZipCode),this.fetchShippingServices()},setSelectedService(e){this.canSelectServices&&(this.$emit("select-service",this.shippingServices[e]),this.selectedService=e)}},watch:{shippedItems:{handler(){setTimeout((()=>{this.localShippedItems=this.shippedItems.map(m);const{amountSubtotal:e}=this;this.amountSubtotal=this.shippedItems.reduce(((e,t)=>e+Object(o.a)(t)*t.quantity),0),this.hasCalculated&&(this.canSelectServices||e!==this.amountSubtotal||!this.shippingServices.length&&!this.isWaiting)&&this.fetchShippingServices()}),50)},deep:!0,immediate:!0},localZipCode(e){"BR"===this.countryCode&&8===e.replace(/\D/g,"").length&&this.submitZipCode()},zipCode:{handler(e){e&&(this.localZipCode=e)},immediate:!0},shippingResult:{handler(e){e.length&&this.parseShippingOptions(e)},immediate:!0}},created(){if(!this.zipCode&&d){const e=d.getItem(g);e&&(this.localZipCode=e)}}},_=f,v=(i(244),i(43)),A=Object(v.a)(_,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"shipping-calculator"},[e.canInputZip?i("form",{staticClass:"shipping-calculator__form",on:{submit:function(t){return t.preventDefault(),e.submitZipCode.apply(null,arguments)}}},[i("div",{staticClass:"form-group"},[i("label",{attrs:{for:"shipping-calculator-zip"}},[e._v(" "+e._s(e.i19calculateShipping)+" ")]),i("div",{staticClass:"input-group"},[i("cleave-input",{staticClass:"form-control shipping-calculator__input",attrs:{type:"tel",id:"shipping-calculator-zip",placeholder:e.i19zipCode,"aria-label":e.i19zipCode,options:e.cleaveOptions},model:{value:e.localZipCode,callback:function(t){e.localZipCode=t},expression:"localZipCode"}}),i("div",{staticClass:"input-group-append"},[i("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"submit","aria-label":e.i19calculateShipping}},[i("i",{staticClass:"i-shipping-fast"})])])],1)])]):e._e(),i("div",{staticClass:"shipping-calculator__services"},[i("transition-group",{attrs:{"enter-active-class":"animated fadeInDown","leave-active-class":"animated position-absolute fadeOutUp"}},[e.isWaiting?i("div",{key:"waiting",staticClass:"spinner-border spinner-border-sm",attrs:{role:"status"}},[i("span",{staticClass:"sr-only"},[e._v("Loading...")])]):i("div",{key:"services",staticClass:"list-group"},e._l(e.shippingServices,(function(t,s){return i(e.canSelectServices?"a":"div",{key:s,tag:"component",staticClass:"list-group-item",class:{"list-group-item-action":e.canSelectServices,active:e.canSelectServices&&e.selectedService===s},attrs:{href:e.canSelectServices&&"#"},on:{click:function(t){return t.preventDefault(),e.setSelectedService(s)}}},[i("span",{staticClass:"shipping-calculator__option"},[e._t("option",(function(){return[i("shipping-line",{attrs:{"shipping-line":t.shipping_line,"production-deadline":e.productionDeadline,"data-service-code":t.service_code}}),i("small",[e._v(e._s(t.label))])]}),null,{service:t})],2)])})),1)]),i("transition",{attrs:{"enter-active-class":"animated fadeInUp","leave-active-class":"animated fadeOutDown"}},[e.freeFromPercentage?i("div",{staticClass:"shipping-calculator__free-from-value"},[e._t("free-from-value",(function(){return[i("span",[e._v(" "+e._s(e.i19add$1ToEarn.replace("$1",e.formatMoney(e.freeFromValue-e.amountSubtotal)))+" "),i("strong",[e._v(e._s(e.i19freeShipping))])]),e.freeFromPercentage>=33?i("div",{staticClass:"progress"},[i("div",{staticClass:"progress-bar progress-bar-striped",style:"width: "+e.freeFromPercentage+"%",attrs:{role:"progressbar","aria-valuenow":e.freeFromPercentage,"aria-valuemin":"0","aria-valuemax":"100"}},[i("span",[e._v(" "+e._s(e.i19freeShipping)+" "),i("i",{staticClass:"i-truck mx-1"}),i("strong",[e._v(e._s(e.freeFromPercentage)+"%")])])])]):e._e()]}),null,{amountSubtotal:e.amountSubtotal,freeFromValue:e.freeFromValue,freeFromPercentage:e.freeFromPercentage})],2):e._e()])],1)])}),[],!1,null,null,null);t.a=A.exports},372:function(e,t,i){"use strict";i.r(t);var s=i(32),a=i(194),r=i(0),n=i(24),o=i(267),c=i(269);const l=Object(r.$)("#fallback-404");if(l.length){let e=new URLSearchParams(window.location.search).get("url");if(!e&&document.cookie){const t=document.cookie.split("; ").find((e=>e.startsWith("referrerUrl=")));t&&(e=t.split("=")[1])}if(e){const t=new a.a;l.html('<div class="spinner-border" role="status"></div>');const i=()=>{l.html(Object(r.$)("<h3>",{class:"my-4",html:['<i class="text-muted i-exclamation-triangle mr-3"></i>',Object(s.a)({pt_br:"Página não encontrada",en_us:"Page not found"})]})),t.list().then((e=>{l.append([Object(r.$)("<p>",{class:"lead",html:Object(s.a)({pt_br:"Mapa do site:",en_us:"Sitemap:"})}),Object(r.$)("<ul>",{html:e.map((e=>{let{path:t}=e;return`<li><a href="${t}">${t}</a></li>`}))})])})).catch(console.error)};t.map(e).then((e=>{const{resource:i,_id:s}=e;switch(i){case"products":return new n.a({render:e=>e(o.default,{props:{productId:s}})});case"brands":case"categories":return t.resolve(e).then((e=>{let{body:t}=e;return new n.a({render:e=>e(c.a,{props:{[i]:[t.name]}})})}))}})).then((e=>{e?e.$mount(l[0]):i()})).catch((e=>{console.error(e),i()}))}}}},0,[33,34]]);