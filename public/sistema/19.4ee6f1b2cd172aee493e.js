(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{wqgs:function(l,n,t){"use strict";t.r(n);var u=t("CcnG"),e=t("mrSG"),i=t("AxkA"),o=t("ZZ/e"),r=t("gIcY"),a=t("kzlf"),s=t("H+bZ"),b=function(){function l(l,n,t,u,e,i,o,a){this.formBuilder=l,this.platform=n,this.alertCtrl=t,this.loadingCtrl=u,this.toastCtrl=e,this.router=i,this.banco=o,this.api=a,this.imagens=[],this.atividadeForm=l.group({titulo:["",r.n.compose([r.n.required,r.n.minLength(10)])],autor:["",r.n.compose([r.n.required,r.n.minLength(6)])],descricao:[""]})}return l.prototype.ngOnInit=function(){return e.b(this,void 0,void 0,(function(){var l;return e.e(this,(function(n){switch(n.label){case 0:return this.editor=new a("#editor",{theme:"snow",modules:{toolbar:[[{font:[]}],["bold","italic","underline","strike"],[{color:[]},{background:[]}],[{list:"ordered"},{list:"bullet"}],[{script:"sub"},{script:"super"}],[{indent:"-1"},{indent:"+1"}],[{size:["small",!1,"large","huge"]}],[{header:[1,2,3,4,5,6,!1]}],[{align:[]}],["clean"]]}}),l=this,[4,this.banco.get("user-credentials")];case 1:return l.usuario=n.sent(),console.log("usuario: ",this.usuario),[2]}}))}))},l.prototype.selecionarImagens=function(){this.platform.is("capacitor")?this.abreImagemCapacitor():document.getElementById("imagePicker").click()},l.prototype.abreImagemCapacitor=function(){},l.prototype.abreArquivo=function(l){l.target.files[0]&&((new FileReader).onload=function(l){new Image})},l.prototype.abreArquivos=function(l){var n=this,t=l.target.files;if(t.length)for(var u=0,i=t;u<i.length;u++){var o=i[u];console.log("imagem");var r=new FileReader;r.onload=function(l){var t=new Image;t.src=l.target.result,t.onload=function(){return e.b(n,void 0,void 0,(function(){var n,t;return e.e(this,(function(u){switch(u.label){case 0:return[4,this.comprimir(l.target.result)];case 1:return n=u.sent(),t={baixa_resolucao:n},console.log("imagem: ",t),this.imagens.push(t),[2]}}))}))}},r.readAsDataURL(o)}},l.prototype.comprimir=function(l){return new Promise((function(n){var t=null,u=new Image;u.src=l,u.onload=function(){var l=document.createElement("canvas"),e=l.getContext("2d");if(l.width=u.naturalWidth,l.height=u.naturalHeight,l.width>1080&&l.width>l.height){console.log("width bigger:",l.width,l.height);var i=108e3/l.width/100;l.width=Math.round(u.naturalWidth*i),l.height=Math.round(u.naturalHeight*i)}else l.height>1080&&l.height>l.width&&(console.log("height bigger:",l.height,l.width),i=108e3/l.height/100,l.height=Math.round(u.naturalHeight*i),l.width=Math.round(u.naturalWidth*i));console.log("width/height:",l.width,l.height),e.drawImage(u,0,0,l.width,l.height),t=l.toDataURL("image/jpeg",.3),n(t)}}))},l.prototype.removerImagem=function(l){return e.b(this,void 0,void 0,(function(){var n=this;return e.e(this,(function(t){switch(t.label){case 0:return[4,this.alertCtrl.create({subHeader:"Deseja remover esta imagem?",buttons:[{text:"N\xe3o"},{text:"Sim",handler:function(){n.imagens.splice(l,1),console.log("imagens",n.imagens)}}]})];case 1:return t.sent().present(),[2]}}))}))},l.prototype.changedEditor=function(l){},l.prototype.salvar=function(){return e.b(this,void 0,void 0,(function(){var l,n,t;return e.e(this,(function(u){switch(u.label){case 0:return[4,this.loadingCtrl.create({message:"Salvando..."})];case 1:return(l=u.sent()).present(),n="\n            mutation {\n                novaAtividade(\n                    id_usuario: "+this.usuario.id+'\n                    titulo: "'+this.atividadeForm.value.titulo+'",\n                    autor: "'+this.atividadeForm.value.autor+'",\n                    descricao: "'+this.atividadeForm.value.descricao+'",\n                    texto: '+JSON.stringify(JSON.stringify(this.editor.getContents()))+"\n                ){\n                    id\n                }\n            }\n        ",[4,this.api.post({query:n})];case 2:return t=u.sent(),l.dismiss(),!t.data||t.errors?[3,4]:[4,this.toastCtrl.create({message:"Cadastro realizado com sucesso",duration:3e3})];case 3:return u.sent().present(),this.router.navigate(["/atividades/minhas-atividades"]),[3,6];case 4:return[4,this.alertCtrl.create({header:"Ocorreu um erro",message:"Tente novamente, ou contate o suporte."})];case 5:u.sent().present(),u.label=6;case 6:return[2]}}))}))},l}(),d=function(){return function(){}}(),c=t("pMnS"),g=t("oBZk"),h=t("ZYCi"),p=u.rb({encapsulation:0,styles:[[".cabecalho[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-pack:end;justify-content:flex-end;padding-right:15px}.formulario[_ngcontent-%COMP%]{padding:10px 20px 0;margin-left:30px}.imagens[_ngcontent-%COMP%]{position:relative;z-index:1;height:100%}.imagens[_ngcontent-%COMP%]   .imagem[_ngcontent-%COMP%]{z-index:2}.imagens[_ngcontent-%COMP%]   .remover[_ngcontent-%COMP%]{position:relative;top:-25px;z-index:3;display:-webkit-box;display:flex;-webkit-box-pack:end;justify-content:flex-end;padding-right:25px}#editor[_ngcontent-%COMP%]{height:320px}.adicionar-imagem[_ngcontent-%COMP%]{width:100%;border:2px solid grey;border-radius:5px;padding:50px 0}.adicionar-imagem[_ngcontent-%COMP%]   ion-text[_ngcontent-%COMP%]{-webkit-box-pack:center;justify-content:center;display:-webkit-box;display:flex}"]],data:{}});function m(l){return u.Kb(0,[(l()(),u.tb(0,0,null,null,12,"ion-header",[],null,null,null,g.S,g.n)),u.sb(1,49152,null,0,o.A,[u.h,u.k,u.z],null,null),(l()(),u.tb(2,0,null,0,10,"ion-toolbar",[],null,null,null,g.jb,g.E)),u.sb(3,49152,null,0,o.Bb,[u.h,u.k,u.z],null,null),(l()(),u.tb(4,0,null,0,8,"div",[["class","cabecalho"]],null,null,null,null,null)),(l()(),u.tb(5,0,null,null,2,"ion-title",[],null,null,null,g.ib,g.D)),u.sb(6,49152,null,0,o.zb,[u.h,u.k,u.z],null,null),(l()(),u.Jb(-1,0,["Nova Atividade"])),(l()(),u.tb(8,0,null,null,4,"ion-button",[],null,[[null,"click"]],(function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.salvar()&&u),u}),g.H,g.c)),u.sb(9,49152,null,0,o.j,[u.h,u.k,u.z],{disabled:[0,"disabled"]},null),(l()(),u.tb(10,0,null,0,1,"ion-icon",[["name","save"],["slot","start"]],null,null,null,g.T,g.o)),u.sb(11,49152,null,0,o.B,[u.h,u.k,u.z],{name:[0,"name"]},null),(l()(),u.Jb(-1,0,[" Salvar "])),(l()(),u.tb(13,0,null,null,76,"ion-content",[],null,null,null,g.P,g.k)),u.sb(14,49152,null,0,o.t,[u.h,u.k,u.z],null,null),(l()(),u.tb(15,0,null,0,74,"ion-card",[],null,null,null,g.N,g.e)),u.sb(16,49152,null,0,o.l,[u.h,u.k,u.z],null,null),(l()(),u.tb(17,0,null,0,8,"ion-card-header",[],null,null,null,g.K,g.g)),u.sb(18,49152,null,0,o.n,[u.h,u.k,u.z],null,null),(l()(),u.tb(19,0,null,0,2,"ion-card-title",[],null,null,null,g.M,g.i)),u.sb(20,49152,null,0,o.p,[u.h,u.k,u.z],null,null),(l()(),u.Jb(-1,0,["Informa\xe7\xf5es da Atividade"])),(l()(),u.tb(22,0,null,0,3,"ion-card-subtitle",[],null,null,null,g.L,g.h)),u.sb(23,49152,null,0,o.o,[u.h,u.k,u.z],null,null),(l()(),u.tb(24,0,null,0,1,"small",[],null,null,null,null,null)),(l()(),u.Jb(-1,null,["Campos com * s\xe3o obrigat\xf3rios."])),(l()(),u.tb(26,0,null,0,63,"ion-card-content",[],null,null,null,g.J,g.f)),u.sb(27,49152,null,0,o.m,[u.h,u.k,u.z],null,null),(l()(),u.tb(28,0,null,0,61,"div",[["class","teste"]],null,null,null,null,null)),(l()(),u.tb(29,0,null,null,50,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],(function(l,n,t){var e=!0;return"submit"===n&&(e=!1!==u.Eb(l,31).onSubmit(t)&&e),"reset"===n&&(e=!1!==u.Eb(l,31).onReset()&&e),e}),null,null)),u.sb(30,16384,null,0,r.r,[],null,null),u.sb(31,540672,null,0,r.d,[[8,null],[8,null]],{form:[0,"form"]},null),u.Gb(2048,null,r.a,null,[r.d]),u.sb(33,16384,null,0,r.j,[[4,r.a]],null,null),(l()(),u.tb(34,0,null,null,16,"ion-item",[],null,null,null,g.V,g.q)),u.sb(35,49152,null,0,o.G,[u.h,u.k,u.z],null,null),(l()(),u.tb(36,0,null,0,5,"ion-label",[["position","floating"]],null,null,null,g.W,g.r)),u.sb(37,49152,null,0,o.M,[u.h,u.k,u.z],{position:[0,"position"]},null),(l()(),u.Jb(-1,0,["T\xedtulo "])),(l()(),u.tb(39,0,null,0,2,"ion-text",[["color","danger"]],null,null,null,g.gb,g.B)),u.sb(40,49152,null,0,o.wb,[u.h,u.k,u.z],{color:[0,"color"]},null),(l()(),u.Jb(-1,0,["*"])),(l()(),u.tb(42,0,null,0,8,"ion-input",[["formControlName","titulo"],["required",""]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,t){var e=!0;return"ionBlur"===n&&(e=!1!==u.Eb(l,45)._handleBlurEvent(t.target)&&e),"ionChange"===n&&(e=!1!==u.Eb(l,45)._handleInputEvent(t.target)&&e),e}),g.U,g.p)),u.sb(43,16384,null,0,r.m,[],{required:[0,"required"]},null),u.Gb(1024,null,r.f,(function(l){return[l]}),[r.m]),u.sb(45,16384,null,0,o.Lb,[u.k],null,null),u.Gb(1024,null,r.g,(function(l){return[l]}),[o.Lb]),u.sb(47,671744,null,0,r.c,[[3,r.a],[6,r.f],[8,null],[6,r.g],[2,r.q]],{name:[0,"name"]},null),u.Gb(2048,null,r.h,null,[r.c]),u.sb(49,16384,null,0,r.i,[[4,r.h]],null,null),u.sb(50,49152,null,0,o.F,[u.h,u.k,u.z],{required:[0,"required"]},null),(l()(),u.tb(51,0,null,null,16,"ion-item",[],null,null,null,g.V,g.q)),u.sb(52,49152,null,0,o.G,[u.h,u.k,u.z],null,null),(l()(),u.tb(53,0,null,0,5,"ion-label",[["position","floating"]],null,null,null,g.W,g.r)),u.sb(54,49152,null,0,o.M,[u.h,u.k,u.z],{position:[0,"position"]},null),(l()(),u.Jb(-1,0,["Autor "])),(l()(),u.tb(56,0,null,0,2,"ion-text",[["color","danger"]],null,null,null,g.gb,g.B)),u.sb(57,49152,null,0,o.wb,[u.h,u.k,u.z],{color:[0,"color"]},null),(l()(),u.Jb(-1,0,["*"])),(l()(),u.tb(59,0,null,0,8,"ion-input",[["formControlName","autor"],["required",""]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,t){var e=!0;return"ionBlur"===n&&(e=!1!==u.Eb(l,62)._handleBlurEvent(t.target)&&e),"ionChange"===n&&(e=!1!==u.Eb(l,62)._handleInputEvent(t.target)&&e),e}),g.U,g.p)),u.sb(60,16384,null,0,r.m,[],{required:[0,"required"]},null),u.Gb(1024,null,r.f,(function(l){return[l]}),[r.m]),u.sb(62,16384,null,0,o.Lb,[u.k],null,null),u.Gb(1024,null,r.g,(function(l){return[l]}),[o.Lb]),u.sb(64,671744,null,0,r.c,[[3,r.a],[6,r.f],[8,null],[6,r.g],[2,r.q]],{name:[0,"name"]},null),u.Gb(2048,null,r.h,null,[r.c]),u.sb(66,16384,null,0,r.i,[[4,r.h]],null,null),u.sb(67,49152,null,0,o.F,[u.h,u.k,u.z],{required:[0,"required"]},null),(l()(),u.tb(68,0,null,null,11,"ion-item",[],null,null,null,g.V,g.q)),u.sb(69,49152,null,0,o.G,[u.h,u.k,u.z],null,null),(l()(),u.tb(70,0,null,0,2,"ion-label",[["position","floating"]],null,null,null,g.W,g.r)),u.sb(71,49152,null,0,o.M,[u.h,u.k,u.z],{position:[0,"position"]},null),(l()(),u.Jb(-1,0,["Descri\xe7\xe3o"])),(l()(),u.tb(73,0,null,0,6,"ion-textarea",[["formControlName","descricao"],["rows","2"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionBlur"],[null,"ionChange"]],(function(l,n,t){var e=!0;return"ionBlur"===n&&(e=!1!==u.Eb(l,74)._handleBlurEvent(t.target)&&e),"ionChange"===n&&(e=!1!==u.Eb(l,74)._handleInputEvent(t.target)&&e),e}),g.hb,g.C)),u.sb(74,16384,null,0,o.Lb,[u.k],null,null),u.Gb(1024,null,r.g,(function(l){return[l]}),[o.Lb]),u.sb(76,671744,null,0,r.c,[[3,r.a],[8,null],[8,null],[6,r.g],[2,r.q]],{name:[0,"name"]},null),u.Gb(2048,null,r.h,null,[r.c]),u.sb(78,16384,null,0,r.i,[[4,r.h]],null,null),u.sb(79,49152,null,0,o.xb,[u.h,u.k,u.z],{rows:[0,"rows"]},null),(l()(),u.tb(80,0,null,null,8,"ion-list-header",[],null,null,null,g.X,g.t)),u.sb(81,49152,null,0,o.O,[u.h,u.k,u.z],null,null),(l()(),u.tb(82,0,null,0,6,"ion-text",[["color","dark"]],null,null,null,g.gb,g.B)),u.sb(83,49152,null,0,o.wb,[u.h,u.k,u.z],{color:[0,"color"]},null),(l()(),u.tb(84,0,null,0,4,"h1",[],null,null,null,null,null)),(l()(),u.Jb(-1,null,["Texto para An\xe1lise "])),(l()(),u.tb(86,0,null,null,2,"ion-text",[["color","danger"]],null,null,null,g.gb,g.B)),u.sb(87,49152,null,0,o.wb,[u.h,u.k,u.z],{color:[0,"color"]},null),(l()(),u.Jb(-1,0,["*"])),(l()(),u.tb(89,0,null,null,0,"div",[["id","editor"]],null,null,null,null,null))],(function(l,n){var t=n.component;l(n,9,0,!t.atividadeForm.valid),l(n,11,0,"save"),l(n,31,0,t.atividadeForm),l(n,37,0,"floating"),l(n,40,0,"danger"),l(n,43,0,""),l(n,47,0,"titulo"),l(n,50,0,""),l(n,54,0,"floating"),l(n,57,0,"danger"),l(n,60,0,""),l(n,64,0,"autor"),l(n,67,0,""),l(n,71,0,"floating"),l(n,76,0,"descricao"),l(n,79,0,"2"),l(n,83,0,"dark"),l(n,87,0,"danger")}),(function(l,n){l(n,29,0,u.Eb(n,33).ngClassUntouched,u.Eb(n,33).ngClassTouched,u.Eb(n,33).ngClassPristine,u.Eb(n,33).ngClassDirty,u.Eb(n,33).ngClassValid,u.Eb(n,33).ngClassInvalid,u.Eb(n,33).ngClassPending),l(n,42,0,u.Eb(n,43).required?"":null,u.Eb(n,49).ngClassUntouched,u.Eb(n,49).ngClassTouched,u.Eb(n,49).ngClassPristine,u.Eb(n,49).ngClassDirty,u.Eb(n,49).ngClassValid,u.Eb(n,49).ngClassInvalid,u.Eb(n,49).ngClassPending),l(n,59,0,u.Eb(n,60).required?"":null,u.Eb(n,66).ngClassUntouched,u.Eb(n,66).ngClassTouched,u.Eb(n,66).ngClassPristine,u.Eb(n,66).ngClassDirty,u.Eb(n,66).ngClassValid,u.Eb(n,66).ngClassInvalid,u.Eb(n,66).ngClassPending),l(n,73,0,u.Eb(n,78).ngClassUntouched,u.Eb(n,78).ngClassTouched,u.Eb(n,78).ngClassPristine,u.Eb(n,78).ngClassDirty,u.Eb(n,78).ngClassValid,u.Eb(n,78).ngClassInvalid,u.Eb(n,78).ngClassPending)}))}function v(l){return u.Kb(0,[(l()(),u.tb(0,0,null,null,1,"app-nova-atividade",[],null,null,null,m,p)),u.sb(1,114688,null,0,b,[r.b,o.Ib,o.b,o.Fb,o.Mb,h.m,i.a,s.a],null,null)],(function(l,n){l(n,1,0)}),null)}var f=u.pb("app-nova-atividade",b,v,{},{},[]),C=t("Ip0R"),k={toolbar:[["bold","italic","underline","strike"],["blockquote","code-block"],[{header:1},{header:2}],[{list:"ordered"},{list:"bullet"}],[{script:"sub"},{script:"super"}],[{indent:"-1"},{indent:"+1"}],[{direction:"rtl"}],[{size:["small",!1,"large","huge"]}],[{header:[1,2,3,4,5,6,!1]}],[{color:[]},{background:[]}],[{font:[]}],[{align:[]}],["clean"],["link","image","video"]]},w=new u.p("config"),E=function(){function l(){}var n;return n=l,l.forRoot=function(l){return{ngModule:n,providers:[{provide:w,useValue:l||{modules:k}}]}},l}();t.d(n,"NovaAtividadePageModuleNgFactory",(function(){return x}));var x=u.qb(d,[],(function(l){return u.Bb([u.Cb(512,u.j,u.bb,[[8,[c.a,f]],[3,u.j],u.x]),u.Cb(4608,C.k,C.j,[u.u,[2,C.q]]),u.Cb(4608,r.b,r.b,[]),u.Cb(4608,r.p,r.p,[]),u.Cb(4608,o.c,o.c,[u.z,u.g]),u.Cb(4608,o.Gb,o.Gb,[o.c,u.j,u.q]),u.Cb(4608,o.Jb,o.Jb,[o.c,u.j,u.q]),u.Cb(1073742336,C.b,C.b,[]),u.Cb(1073742336,r.o,r.o,[]),u.Cb(1073742336,r.l,r.l,[]),u.Cb(1073742336,o.Db,o.Db,[]),u.Cb(1073742336,h.o,h.o,[[2,h.t],[2,h.m]]),u.Cb(1073742336,E,E,[]),u.Cb(1073742336,d,d,[]),u.Cb(1024,h.k,(function(){return[[{path:"",component:b}]]}),[]),u.Cb(256,w,{modules:k},[])])}))}}]);