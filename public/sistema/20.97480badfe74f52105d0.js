(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{Jrg7:function(l,n,t){"use strict";t.r(n);var u=t("CcnG"),o=t("mrSG"),i=t("jo0e"),e=t("AxkA"),r=t("H+bZ"),s=t("ZZ/e"),a=t("kzlf"),c=function(){function l(l,n,t,u,o,i,e,r,s,a){this.loadingCtrl=l,this.route=n,this.alertCtrl=t,this.toastCtrl=u,this.router=o,this.actionSheetCtrl=i,this.modalCtrl=e,this.banco=r,this.api=s,this.platform=a,this.slideAtual=1,this.atividade=null,this.listaPontos=[],this.listaPontosInfo=[],this.pontoFocal="",this.liberarPonto=!1,this.currentRange=null,this.currentPonto=null,this.imagens=0}return l.prototype.ionViewDidEnter=function(){var l=this.route.snapshot.paramMap.get("id");this.abrirAtividade(l)},l.prototype.ngOnInit=function(){return o.b(this,void 0,void 0,(function(){var l,n,t=this;return o.e(this,(function(u){switch(u.label){case 0:return l=[[{font:[]}],[{size:["small",!1,"large","huge"]}],["bold","italic","underline",{align:[]}]],this.editorView=new a("#editorView",{theme:"snow",modules:{toolbar:null}}),this.editorView.enable(!1),this.editor=new a("#editorSintese",{theme:"snow",modules:{toolbar:l}}),this.editor.on("selection-change",(function(l,n,t){console.log("Range: ",l),console.log("oldRange: ",n)})),this.editorView.on("selection-change",(function(l,n,u){console.log("Range: ",l),console.log("oldRange: ",n),l&&(l.length?(t.currentRange&&t.editorView.formatText(t.currentRange.index,t.currentRange.length,"background","rgb(255, 255, 255)"),t.currentRange=l,t.liberarPonto=!0,t.editorView.formatText(l.index,l.length,"background","rgb(145, 255, 77)")):t.liberarPonto=!1,console.log("this.liberarPonto ==> ",t.liberarPonto))})),n=this,[4,this.banco.get("user-credentials")];case 1:return n.usuario=u.sent(),[2]}}))}))},l.prototype.abrirAtividade=function(l){return o.b(this,void 0,void 0,(function(){var n,t;return o.e(this,(function(u){switch(u.label){case 0:return[4,this.loadingCtrl.create({message:"Buscando atividades..."})];case 1:return(n=u.sent()).present(),[4,this.api.get("\n            query {\n                retornarAtividade(id_atividade: "+l+"){\n                    id\n                    titulo\n                    autor\n                    texto\n                }\n            }\n        ")];case 2:return t=u.sent(),n.dismiss(),!t.errors&&t.data.retornarAtividade&&(this.atividade=t.data.retornarAtividade,this.processarDados()),[2]}}))}))},l.prototype.processarDados=function(){console.log("Texto: ",JSON.parse(this.atividade.texto)),this.editorView.setContents(JSON.parse(this.atividade.texto)),document.getElementById("textoView").innerHTML=this.editorView.root.innerHTML},l.prototype.avancar=function(){this.slideAtual++},l.prototype.voltar=function(){this.slideAtual--},l.prototype.adicionarPonto=function(){this.listaPontos.push(JSON.parse(JSON.stringify(this.pontoFocal))),this.imagens++,this.listaPontosInfo.push({texto:JSON.parse(JSON.stringify(this.pontoFocal))}),this.pontoFocal=""},l.prototype.concluir=function(){return o.b(this,void 0,void 0,(function(){var l,n,t,u,i,e;return o.e(this,(function(o){switch(o.label){case 0:return[4,this.loadingCtrl.create({message:"Salvando..."})];case 1:for((l=o.sent()).present(),n=[],t=0,u=this.listaPontosInfo;t<u.length;t++)n.push(u[t].imagem);return i="\n            mutation {\n                novaResposta(\n                    id_usuario: "+this.usuario.id+"\n                    id_atividade: "+this.atividade.id+"\n                    sintese: "+JSON.stringify(JSON.stringify(this.editor.getContents()))+"\n                    frases: "+JSON.stringify(JSON.stringify(this.listaPontos))+",\n                    imagens: "+JSON.stringify(n).replace(/\"baixa_resolucao\"/g,"baixa_resolucao")+"\n                ){\n                    id\n                }\n            }\n        ",[4,this.api.post({query:i})];case 2:return e=o.sent(),l.dismiss(),!e.data||e.errors?[3,4]:[4,this.toastCtrl.create({message:"Resposta cadastrada com sucesso",duration:3e3})];case 3:return o.sent().present(),this.router.navigate(["/atividades/minhas-atividades"]),[3,6];case 4:return[4,this.alertCtrl.create({header:"Ocorreu um erro",message:"Tente novamente, ou contate o suporte."})];case 5:o.sent().present(),o.label=6;case 6:return[2]}}))}))},l.prototype.selecao=function(){var l=this.editor.getSelection(),n=this.editor.getContents();console.log("Selection ==> ",l),console.log("conteudo ==> ",n)},l.prototype.removerItem=function(l){var n=this.listaPontosInfo[l].range;this.listaPontos.splice(l,1),this.listaPontosInfo.splice(l,1),this.editorView.formatText(n.index,n.length,{background:"rgb(255, 255, 255)",bold:!1})},l.prototype.blink=function(l){var n=this,t=this.listaPontosInfo[l].range;this.editorView.formatText(t.index,t.length,{color:"rgb(255, 255, 255)"}),setTimeout((function(){n.editorView.formatText(t.index,t.length,{color:"rgb(0, 0, 0)"})}),500)},l.prototype.blinkImage=function(l){},l.prototype.buscarImagem=function(l){return o.b(this,void 0,void 0,(function(){var n=this;return o.e(this,(function(t){switch(t.label){case 0:return this.currentPonto=l,[4,this.actionSheetCtrl.create({buttons:[{text:"Selecionar Imagem",icon:"folder",handler:function(){n.platform.is("capacitor")?n.abreImagemCapacitor():document.getElementById("imagePicker").click()}},{text:"Buscar no Google",icon:"logo-google",handler:function(){return o.b(n,void 0,void 0,(function(){var l,n,t,u=this;return o.e(this,(function(e){switch(e.label){case 0:return[4,this.modalCtrl.create({component:i.a,cssClass:"modal-pequeno"})];case 1:return[4,(l=e.sent()).present()];case 2:return e.sent(),[4,l.onWillDismiss()];case 3:return n=e.sent().data,console.log("dataModa ==> ",n),n.imagem&&((t=new Image).crossOrigin="Anonymous",t.src=n.imagem,t.onload=function(){return o.b(u,void 0,void 0,(function(){var l,t;return o.e(this,(function(u){switch(u.label){case 0:return[4,this.comprimir(n.imagem,!0)];case 1:return l=u.sent(),t={baixa_resolucao:l},console.log("imagem: ",t),this.imagens--,this.listaPontosInfo[this.currentPonto].imagem=t,[2]}}))}))},t.onerror=function(){return o.b(u,void 0,void 0,(function(){return o.e(this,(function(l){switch(l.label){case 0:return[4,this.toastCtrl.create({message:"Imagem bloqueada, selecione outra imagem.",duration:3e3})];case 1:return l.sent().present(),[2]}}))}))}),[2]}}))}))}}]})];case 1:return t.sent().present(),[2]}}))}))},l.prototype.abreImagemCapacitor=function(){},l.prototype.abreArquivo=function(l){var n=this,t=l.target.files;if(t.length)for(var u=0,i=t;u<i.length;u++){var e=i[u];console.log("imagem");var r=new FileReader;r.onload=function(l){var t=new Image;t.src=l.target.result,t.onload=function(){return o.b(n,void 0,void 0,(function(){var n,t;return o.e(this,(function(u){switch(u.label){case 0:return[4,this.comprimir(l.target.result)];case 1:return n=u.sent(),t={baixa_resolucao:n},console.log("imagem: ",t),this.imagens--,this.listaPontosInfo[this.currentPonto].imagem=t,this.currentPonto=null,[2]}}))}))}},r.readAsDataURL(e)}},l.prototype.comprimir=function(l,n){return new Promise((function(t){var u=null,o=new Image;n&&(o.crossOrigin="Anonymous"),o.src=l,o.onload=function(){var l=document.createElement("canvas"),n=l.getContext("2d");if(l.width=o.naturalWidth,l.height=o.naturalHeight,l.width>1080&&l.width>l.height){console.log("width bigger:",l.width,l.height);var i=108e3/l.width/100;l.width=Math.round(o.naturalWidth*i),l.height=Math.round(o.naturalHeight*i)}else l.height>1080&&l.height>l.width&&(console.log("height bigger:",l.height,l.width),i=108e3/l.height/100,l.height=Math.round(o.naturalHeight*i),l.width=Math.round(o.naturalWidth*i));console.log("width/height:",l.width,l.height),n.drawImage(o,0,0,l.width,l.height),u=l.toDataURL("image/jpeg",.3),t(u)}}))},l.prototype.setarImagem=function(){},l}(),b=function(){return function(){}}(),d=t("pMnS"),h=t("oBZk"),g=t("Ip0R"),m=t("gIcY"),f=t("ZYCi"),p=u.rb({encapsulation:0,styles:[[".conteudo[_ngcontent-%COMP%]{padding:0 25px}.footer-buttons[_ngcontent-%COMP%]{width:100%;display:-webkit-box;display:flex;justify-content:space-around}.btn-pequeno[_ngcontent-%COMP%]{display:none}@media (max-width:600px){.btn-pequeno[_ngcontent-%COMP%]{display:block}.btn-normal[_ngcontent-%COMP%]{display:none}.texto[_ngcontent-%COMP%]{font-size:small}}"]],data:{}});function v(l){return u.Kb(0,[(l()(),u.tb(0,0,null,null,4,"ion-button",[],null,[[null,"click"]],(function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.voltar()&&u),u}),h.H,h.c)),u.sb(1,49152,null,0,s.j,[u.h,u.k,u.z],null,null),(l()(),u.tb(2,0,null,0,1,"ion-icon",[["name","arrow-back"],["slot","start"]],null,null,null,h.T,h.o)),u.sb(3,49152,null,0,s.B,[u.h,u.k,u.z],{name:[0,"name"]},null),(l()(),u.Jb(-1,0,[" Voltar "]))],(function(l,n){l(n,3,0,"arrow-back")}),null)}function k(l){return u.Kb(0,[(l()(),u.tb(0,0,null,null,4,"ion-button",[],null,[[null,"click"]],(function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.avancar()&&u),u}),h.H,h.c)),u.sb(1,49152,null,0,s.j,[u.h,u.k,u.z],null,null),(l()(),u.tb(2,0,null,0,1,"ion-icon",[["name","arrow-forward"]],null,null,null,h.T,h.o)),u.sb(3,49152,null,0,s.B,[u.h,u.k,u.z],{name:[0,"name"]},null),(l()(),u.Jb(-1,0,[" Avan\xe7ar "]))],(function(l,n){l(n,3,0,"arrow-forward")}),null)}function z(l){return u.Kb(0,[(l()(),u.tb(0,0,null,null,2,"ion-button",[["color","success"]],null,[[null,"click"]],(function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.concluir()&&u),u}),h.H,h.c)),u.sb(1,49152,null,0,s.j,[u.h,u.k,u.z],{color:[0,"color"]},null),(l()(),u.Jb(-1,0,[" Concluir "]))],(function(l,n){l(n,1,0,"success")}),null)}function w(l){return u.Kb(0,[(l()(),u.tb(0,0,null,null,9,"ion-item",[],null,null,null,h.V,h.q)),u.sb(1,49152,null,0,s.G,[u.h,u.k,u.z],null,null),(l()(),u.tb(2,0,null,0,2,"ion-label",[["class","texto"]],null,null,null,h.W,h.r)),u.sb(3,49152,null,0,s.M,[u.h,u.k,u.z],null,null),(l()(),u.Jb(4,0,["",""])),(l()(),u.tb(5,0,null,0,4,"div",[],null,null,null,null,null)),(l()(),u.tb(6,0,null,null,3,"ion-button",[],null,[[null,"click"]],(function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.removerItem(l.context.index)&&u),u}),h.H,h.c)),u.sb(7,49152,null,0,s.j,[u.h,u.k,u.z],null,null),(l()(),u.tb(8,0,null,0,1,"ion-icon",[["name","close"]],null,null,null,h.T,h.o)),u.sb(9,49152,null,0,s.B,[u.h,u.k,u.z],{name:[0,"name"]},null)],(function(l,n){l(n,9,0,"close")}),(function(l,n){l(n,4,0,n.context.index+1+" - "+n.context.$implicit)}))}function x(l){return u.Kb(0,[(l()(),u.tb(0,0,null,null,10,"ion-item",[],null,null,null,h.V,h.q)),u.sb(1,49152,null,0,s.G,[u.h,u.k,u.z],null,null),(l()(),u.tb(2,0,null,0,2,"ion-label",[["class","texto"]],null,null,null,h.W,h.r)),u.sb(3,49152,null,0,s.M,[u.h,u.k,u.z],null,null),(l()(),u.Jb(4,0,["",""])),(l()(),u.tb(5,0,null,0,5,"div",[],null,null,null,null,null)),(l()(),u.tb(6,0,null,null,0,"input",[["accept","image/*"],["hidden",""],["id","imagePicker"],["multiple","false"],["src",""],["type","file"]],null,[[null,"change"]],(function(l,n,t){var u=!0;return"change"===n&&(u=!1!==l.component.abreArquivo(t)&&u),u}),null,null)),(l()(),u.tb(7,0,null,null,3,"ion-button",[],null,[[null,"click"]],(function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.buscarImagem(l.context.index)&&u),u}),h.H,h.c)),u.sb(8,49152,null,0,s.j,[u.h,u.k,u.z],null,null),(l()(),u.tb(9,0,null,0,1,"ion-icon",[["name","image"]],null,null,null,h.T,h.o)),u.sb(10,49152,null,0,s.B,[u.h,u.k,u.z],{name:[0,"name"]},null)],(function(l,n){l(n,10,0,"image")}),(function(l,n){l(n,4,0,n.context.index+1+" - "+n.context.$implicit)}))}function C(l){return u.Kb(0,[(l()(),u.tb(0,0,null,null,3,"ion-col",[["size-md","6"],["size-xs","12"]],null,null,null,h.O,h.j)),u.sb(1,49152,null,0,s.s,[u.h,u.k,u.z],null,null),(l()(),u.tb(2,0,null,0,1,"div",[["class","imagens"]],null,null,null,null,null)),(l()(),u.tb(3,0,null,null,0,"img",[["class","imagem"]],[[8,"src",4]],null,null,null,null))],null,(function(l,n){l(n,3,0,n.parent.context.$implicit.imagem.baixa_resolucao)}))}function I(l){return u.Kb(0,[(l()(),u.ib(16777216,null,null,1,null,C)),u.sb(1,16384,null,0,g.i,[u.O,u.L],{ngIf:[0,"ngIf"]},null),(l()(),u.ib(0,null,null,0))],(function(l,n){l(n,1,0,n.context.$implicit.imagem)}),null)}function O(l){return u.Kb(0,[(l()(),u.tb(0,0,null,null,3,"ion-col",[["size-md","6"],["size-xs","12"]],null,null,null,h.O,h.j)),u.sb(1,49152,null,0,s.s,[u.h,u.k,u.z],null,null),(l()(),u.tb(2,0,null,0,1,"div",[["class","imagens"]],null,null,null,null,null)),(l()(),u.tb(3,0,null,null,0,"img",[["class","imagem"]],[[8,"src",4]],null,null,null,null))],null,(function(l,n){l(n,3,0,n.parent.context.$implicit.imagem.baixa_resolucao)}))}function y(l){return u.Kb(0,[(l()(),u.ib(16777216,null,null,1,null,O)),u.sb(1,16384,null,0,g.i,[u.O,u.L],{ngIf:[0,"ngIf"]},null),(l()(),u.ib(0,null,null,0))],(function(l,n){l(n,1,0,n.context.$implicit.imagem)}),null)}function P(l){return u.Kb(0,[(l()(),u.tb(0,0,null,null,3,"ion-row",[],null,null,null,h.cb,h.x)),u.sb(1,49152,null,0,s.ib,[u.h,u.k,u.z],null,null),(l()(),u.ib(16777216,null,0,1,null,y)),u.sb(3,278528,null,0,g.h,[u.O,u.L,u.s],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){l(n,3,0,n.component.listaPontosInfo)}),null)}function A(l){return u.Kb(0,[(l()(),u.tb(0,0,null,null,4,"ion-button",[],null,[[null,"click"]],(function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.voltar()&&u),u}),h.H,h.c)),u.sb(1,49152,null,0,s.j,[u.h,u.k,u.z],null,null),(l()(),u.tb(2,0,null,0,1,"ion-icon",[["name","arrow-back"],["slot","start"]],null,null,null,h.T,h.o)),u.sb(3,49152,null,0,s.B,[u.h,u.k,u.z],{name:[0,"name"]},null),(l()(),u.Jb(-1,0,[" Voltar "]))],(function(l,n){l(n,3,0,"arrow-back")}),null)}function J(l){return u.Kb(0,[(l()(),u.tb(0,0,null,null,4,"ion-button",[],null,[[null,"click"]],(function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.avancar()&&u),u}),h.H,h.c)),u.sb(1,49152,null,0,s.j,[u.h,u.k,u.z],null,null),(l()(),u.tb(2,0,null,0,1,"ion-icon",[["name","arrow-forward"]],null,null,null,h.T,h.o)),u.sb(3,49152,null,0,s.B,[u.h,u.k,u.z],{name:[0,"name"]},null),(l()(),u.Jb(-1,0,[" Avan\xe7ar "]))],(function(l,n){l(n,3,0,"arrow-forward")}),null)}function j(l){return u.Kb(0,[(l()(),u.tb(0,0,null,null,2,"ion-button",[["color","success"]],null,[[null,"click"]],(function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.concluir()&&u),u}),h.H,h.c)),u.sb(1,49152,null,0,s.j,[u.h,u.k,u.z],{color:[0,"color"]},null),(l()(),u.Jb(-1,0,[" Concluir "]))],(function(l,n){l(n,1,0,"success")}),null)}function S(l){return u.Kb(0,[(l()(),u.tb(0,0,null,null,19,"ion-header",[],null,null,null,h.S,h.n)),u.sb(1,49152,null,0,s.A,[u.h,u.k,u.z],null,null),(l()(),u.tb(2,0,null,0,17,"ion-toolbar",[],null,null,null,h.jb,h.E)),u.sb(3,49152,null,0,s.Bb,[u.h,u.k,u.z],null,null),(l()(),u.tb(4,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,h.I,h.d)),u.sb(5,49152,null,0,s.k,[u.h,u.k,u.z],null,null),(l()(),u.tb(6,0,null,0,1,"ion-menu-button",[],null,null,null,h.Z,h.v)),u.sb(7,49152,null,0,s.Q,[u.h,u.k,u.z],null,null),(l()(),u.tb(8,0,null,0,11,"div",[["class","cabecalho-menu"]],null,null,null,null,null)),(l()(),u.tb(9,0,null,null,2,"ion-title",[],null,null,null,h.ib,h.D)),u.sb(10,49152,null,0,s.zb,[u.h,u.k,u.z],null,null),(l()(),u.Jb(-1,0,["Responder Atividade"])),(l()(),u.tb(12,0,null,null,7,"ion-buttons",[["slot","start"]],null,null,null,h.I,h.d)),u.sb(13,49152,null,0,s.k,[u.h,u.k,u.z],null,null),(l()(),u.ib(16777216,null,0,1,null,v)),u.sb(15,16384,null,0,g.i,[u.O,u.L],{ngIf:[0,"ngIf"]},null),(l()(),u.ib(16777216,null,0,1,null,k)),u.sb(17,16384,null,0,g.i,[u.O,u.L],{ngIf:[0,"ngIf"]},null),(l()(),u.ib(16777216,null,0,1,null,z)),u.sb(19,16384,null,0,g.i,[u.O,u.L],{ngIf:[0,"ngIf"]},null),(l()(),u.tb(20,0,null,null,76,"ion-content",[],null,null,null,h.P,h.k)),u.sb(21,49152,null,0,s.t,[u.h,u.k,u.z],null,null),(l()(),u.tb(22,0,null,0,74,"div",[["class","conteudo"]],null,null,null,null,null)),(l()(),u.tb(23,0,null,null,73,"div",[["class","slide-um"]],null,null,null,null,null)),(l()(),u.tb(24,0,null,null,41,"div",[],[[8,"hidden",0]],null,null,null,null)),(l()(),u.tb(25,0,null,null,40,"ion-grid",[],null,null,null,h.R,h.m)),u.sb(26,49152,null,0,s.z,[u.h,u.k,u.z],null,null),(l()(),u.tb(27,0,null,0,38,"ion-row",[],null,null,null,h.cb,h.x)),u.sb(28,49152,null,0,s.ib,[u.h,u.k,u.z],null,null),(l()(),u.tb(29,0,null,0,9,"ion-col",[["size","6"]],null,null,null,h.O,h.j)),u.sb(30,49152,null,0,s.s,[u.h,u.k,u.z],{size:[0,"size"]},null),(l()(),u.tb(31,0,null,0,5,"ion-text",[["color","dark"]],null,null,null,h.gb,h.B)),u.sb(32,49152,null,0,s.wb,[u.h,u.k,u.z],{color:[0,"color"]},null),(l()(),u.tb(33,0,null,0,1,"h1",[],null,null,null,null,null)),(l()(),u.Jb(34,null,["",""])),(l()(),u.tb(35,0,null,0,1,"h3",[],null,null,null,null,null)),(l()(),u.Jb(36,null,["",""])),(l()(),u.tb(37,0,[["textoView",1]],0,0,"div",[["class","texto"],["id","textoView"]],null,null,null,null,null)),(l()(),u.tb(38,0,[["editorView",1]],0,0,"div",[["hidden",""],["id","editorView"]],null,null,null,null,null)),(l()(),u.tb(39,0,null,0,26,"ion-col",[["size","6"]],null,null,null,h.O,h.j)),u.sb(40,49152,null,0,s.s,[u.h,u.k,u.z],{size:[0,"size"]},null),(l()(),u.tb(41,0,null,0,3,"ion-text",[["class","ion-text-center"],["color","dark"]],null,null,null,h.gb,h.B)),u.sb(42,49152,null,0,s.wb,[u.h,u.k,u.z],{color:[0,"color"]},null),(l()(),u.tb(43,0,null,0,1,"h1",[],null,null,null,null,null)),(l()(),u.Jb(-1,null,["Pontos Focais"])),(l()(),u.tb(45,0,null,0,3,"ion-list",[],null,null,null,h.Y,h.s)),u.sb(46,49152,null,0,s.N,[u.h,u.k,u.z],null,null),(l()(),u.ib(16777216,null,0,1,null,w)),u.sb(48,278528,null,0,g.h,[u.O,u.L,u.s],{ngForOf:[0,"ngForOf"]},null),(l()(),u.tb(49,0,null,0,11,"ion-item",[],null,null,null,h.V,h.q)),u.sb(50,49152,null,0,s.G,[u.h,u.k,u.z],null,null),(l()(),u.tb(51,0,null,0,2,"ion-label",[["position","floating"]],null,null,null,h.W,h.r)),u.sb(52,49152,null,0,s.M,[u.h,u.k,u.z],{position:[0,"position"]},null),(l()(),u.Jb(-1,0,["Novo Ponto Focal"])),(l()(),u.tb(54,0,null,0,6,"ion-input",[["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"keyup.enter"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,t){var o=!0,i=l.component;return"ionBlur"===n&&(o=!1!==u.Eb(l,55)._handleBlurEvent(t.target)&&o),"ionChange"===n&&(o=!1!==u.Eb(l,55)._handleInputEvent(t.target)&&o),"ngModelChange"===n&&(o=!1!==(i.pontoFocal=t)&&o),"keyup.enter"===n&&(o=!1!==i.adicionarPonto()&&o),o}),h.U,h.p)),u.sb(55,16384,null,0,s.Lb,[u.k],null,null),u.Gb(1024,null,m.g,(function(l){return[l]}),[s.Lb]),u.sb(57,671744,null,0,m.k,[[8,null],[8,null],[8,null],[6,m.g]],{model:[0,"model"]},{update:"ngModelChange"}),u.Gb(2048,null,m.h,null,[m.k]),u.sb(59,16384,null,0,m.i,[[4,m.h]],null,null),u.sb(60,49152,null,0,s.F,[u.h,u.k,u.z],{type:[0,"type"]},null),(l()(),u.tb(61,0,null,0,4,"ion-button",[],null,[[null,"click"]],(function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.adicionarPonto()&&u),u}),h.H,h.c)),u.sb(62,49152,null,0,s.j,[u.h,u.k,u.z],null,null),(l()(),u.tb(63,0,null,0,1,"ion-icon",[["name","add"],["slot","start"]],null,null,null,h.T,h.o)),u.sb(64,49152,null,0,s.B,[u.h,u.k,u.z],{name:[0,"name"]},null),(l()(),u.Jb(-1,0,[" Adicionar "])),(l()(),u.tb(66,0,null,null,18,"div",[],[[8,"hidden",0]],null,null,null,null)),(l()(),u.tb(67,0,null,null,17,"ion-row",[],null,null,null,h.cb,h.x)),u.sb(68,49152,null,0,s.ib,[u.h,u.k,u.z],null,null),(l()(),u.tb(69,0,null,0,9,"ion-col",[["size","6"]],null,null,null,h.O,h.j)),u.sb(70,49152,null,0,s.s,[u.h,u.k,u.z],{size:[0,"size"]},null),(l()(),u.tb(71,0,null,0,3,"ion-text",[["class","ion-text-center"],["color","dark"]],null,null,null,h.gb,h.B)),u.sb(72,49152,null,0,s.wb,[u.h,u.k,u.z],{color:[0,"color"]},null),(l()(),u.tb(73,0,null,0,1,"h1",[],null,null,null,null,null)),(l()(),u.Jb(-1,null,["Pontos Focais"])),(l()(),u.tb(75,0,null,0,3,"ion-list",[],null,null,null,h.Y,h.s)),u.sb(76,49152,null,0,s.N,[u.h,u.k,u.z],null,null),(l()(),u.ib(16777216,null,0,1,null,x)),u.sb(78,278528,null,0,g.h,[u.O,u.L,u.s],{ngForOf:[0,"ngForOf"]},null),(l()(),u.tb(79,0,null,0,5,"ion-col",[["size","6"]],null,null,null,h.O,h.j)),u.sb(80,49152,null,0,s.s,[u.h,u.k,u.z],{size:[0,"size"]},null),(l()(),u.tb(81,0,null,0,3,"ion-row",[],null,null,null,h.cb,h.x)),u.sb(82,49152,null,0,s.ib,[u.h,u.k,u.z],null,null),(l()(),u.ib(16777216,null,0,1,null,I)),u.sb(84,278528,null,0,g.h,[u.O,u.L,u.s],{ngForOf:[0,"ngForOf"]},null),(l()(),u.tb(85,0,null,null,11,"div",[],[[8,"hidden",0]],null,null,null,null)),(l()(),u.tb(86,0,null,null,10,"ion-grid",[],null,null,null,h.R,h.m)),u.sb(87,49152,null,0,s.z,[u.h,u.k,u.z],null,null),(l()(),u.tb(88,0,null,0,8,"ion-row",[],null,null,null,h.cb,h.x)),u.sb(89,49152,null,0,s.ib,[u.h,u.k,u.z],null,null),(l()(),u.tb(90,0,null,0,3,"ion-col",[["size","6"]],null,null,null,h.O,h.j)),u.sb(91,49152,null,0,s.s,[u.h,u.k,u.z],{size:[0,"size"]},null),(l()(),u.ib(16777216,null,0,1,null,P)),u.sb(93,16384,null,0,g.i,[u.O,u.L],{ngIf:[0,"ngIf"]},null),(l()(),u.tb(94,0,null,0,2,"ion-col",[["size","6"]],null,null,null,h.O,h.j)),u.sb(95,49152,null,0,s.s,[u.h,u.k,u.z],{size:[0,"size"]},null),(l()(),u.tb(96,0,[["editorSintese",1]],0,0,"div",[["id","editorSintese"]],null,null,null,null,null)),(l()(),u.tb(97,0,null,null,11,"ion-footer",[["class","footer-mobile"]],null,null,null,h.Q,h.l)),u.sb(98,49152,null,0,s.y,[u.h,u.k,u.z],null,null),(l()(),u.tb(99,0,null,0,9,"ion-toolbar",[],null,null,null,h.jb,h.E)),u.sb(100,49152,null,0,s.Bb,[u.h,u.k,u.z],null,null),(l()(),u.tb(101,0,null,0,7,"ion-buttons",[["class","footer-buttons"],["slot","start"]],null,null,null,h.I,h.d)),u.sb(102,49152,null,0,s.k,[u.h,u.k,u.z],null,null),(l()(),u.ib(16777216,null,0,1,null,A)),u.sb(104,16384,null,0,g.i,[u.O,u.L],{ngIf:[0,"ngIf"]},null),(l()(),u.ib(16777216,null,0,1,null,J)),u.sb(106,16384,null,0,g.i,[u.O,u.L],{ngIf:[0,"ngIf"]},null),(l()(),u.ib(16777216,null,0,1,null,j)),u.sb(108,16384,null,0,g.i,[u.O,u.L],{ngIf:[0,"ngIf"]},null)],(function(l,n){var t=n.component;l(n,15,0,1!=t.slideAtual),l(n,17,0,4!=t.slideAtual),l(n,19,0,4==t.slideAtual),l(n,30,0,"6"),l(n,32,0,"dark"),l(n,40,0,"6"),l(n,42,0,"dark"),l(n,48,0,t.listaPontos),l(n,52,0,"floating"),l(n,57,0,t.pontoFocal),l(n,60,0,"text"),l(n,64,0,"add"),l(n,70,0,"6"),l(n,72,0,"dark"),l(n,78,0,t.listaPontos),l(n,80,0,"6"),l(n,84,0,t.listaPontosInfo),l(n,91,0,"6"),l(n,93,0,t.atividade),l(n,95,0,"6"),l(n,104,0,1!=t.slideAtual),l(n,106,0,4!=t.slideAtual),l(n,108,0,4==t.slideAtual)}),(function(l,n){var t=n.component;l(n,24,0,1!=t.slideAtual),l(n,34,0,t.atividade?t.atividade.titulo:"Sem Titulo"),l(n,36,0,t.atividade?t.atividade.autor:"Sem Autor"),l(n,54,0,u.Eb(n,59).ngClassUntouched,u.Eb(n,59).ngClassTouched,u.Eb(n,59).ngClassPristine,u.Eb(n,59).ngClassDirty,u.Eb(n,59).ngClassValid,u.Eb(n,59).ngClassInvalid,u.Eb(n,59).ngClassPending),l(n,66,0,2!=t.slideAtual),l(n,85,0,3!=t.slideAtual)}))}function M(l){return u.Kb(0,[(l()(),u.tb(0,0,null,null,1,"app-responder-atividade",[],null,null,null,S,p)),u.sb(1,114688,null,0,c,[s.Fb,f.a,s.b,s.Mb,f.m,s.a,s.Gb,e.a,r.a,s.Ib],null,null)],(function(l,n){l(n,1,0)}),null)}var V=u.pb("app-responder-atividade",c,M,{},{},[]);t.d(n,"ResponderAtividadePageModuleNgFactory",(function(){return B}));var B=u.qb(b,[],(function(l){return u.Bb([u.Cb(512,u.j,u.bb,[[8,[d.a,V]],[3,u.j],u.x]),u.Cb(4608,g.k,g.j,[u.u,[2,g.q]]),u.Cb(4608,m.p,m.p,[]),u.Cb(4608,s.c,s.c,[u.z,u.g]),u.Cb(4608,s.Gb,s.Gb,[s.c,u.j,u.q]),u.Cb(4608,s.Jb,s.Jb,[s.c,u.j,u.q]),u.Cb(1073742336,g.b,g.b,[]),u.Cb(1073742336,m.o,m.o,[]),u.Cb(1073742336,m.e,m.e,[]),u.Cb(1073742336,s.Db,s.Db,[]),u.Cb(1073742336,f.o,f.o,[[2,f.t],[2,f.m]]),u.Cb(1073742336,b,b,[]),u.Cb(1024,f.k,(function(){return[[{path:"",component:c}]]}),[])])}))}}]);