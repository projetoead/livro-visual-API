(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{Jrg7:function(l,n,t){"use strict";t.r(n);var u=t("CcnG"),e=t("mrSG"),o=t("jo0e"),i=t("AxkA"),r=t("H+bZ"),a=t("ZZ/e"),s=t("kzlf"),c=function(){function l(l,n,t,u,e,o,i,r,a,s){this.loadingCtrl=l,this.route=n,this.alertCtrl=t,this.toastCtrl=u,this.router=e,this.actionSheetCtrl=o,this.modalCtrl=i,this.banco=r,this.api=a,this.platform=s,this.slideAtual=1,this.atividade=null,this.listaPontos=[],this.listaPontosInfo=[],this.pontoFocal="",this.liberarPonto=!1,this.currentRange=null,this.currentPonto=null,this.imagens=0}return l.prototype.ionViewDidEnter=function(){var l=this.route.snapshot.paramMap.get("id");this.abrirAtividade(l)},l.prototype.ngOnInit=function(){return e.b(this,void 0,void 0,(function(){var l,n,t=this;return e.e(this,(function(u){switch(u.label){case 0:return l=[[{font:[]}],[{size:["small",!1,"large","huge"]}],["bold","italic","underline",{align:[]}]],this.editorView=new s("#editorView",{theme:"snow",modules:{toolbar:null}}),this.editorView.enable(!1),this.editor=new s("#editorSintese",{theme:"snow",modules:{toolbar:l},placeholder:"Digite sua s\xedntese"}),this.editor.on("selection-change",(function(l,n,t){console.log("Range: ",l),console.log("oldRange: ",n)})),this.editorView.on("selection-change",(function(l,n,u){console.log("Range: ",l),console.log("oldRange: ",n),l&&(l.length?(t.currentRange&&t.editorView.formatText(t.currentRange.index,t.currentRange.length,"background","rgb(255, 255, 255)"),t.currentRange=l,t.liberarPonto=!0,t.editorView.formatText(l.index,l.length,"background","rgb(145, 255, 77)")):t.liberarPonto=!1,console.log("this.liberarPonto ==> ",t.liberarPonto))})),n=this,[4,this.banco.get("user-credentials")];case 1:return n.usuario=u.sent(),[2]}}))}))},l.prototype.abrirAtividade=function(l){return e.b(this,void 0,void 0,(function(){var n,t;return e.e(this,(function(u){switch(u.label){case 0:return[4,this.loadingCtrl.create({message:"Buscando atividades..."})];case 1:return(n=u.sent()).present(),[4,this.api.get("\n            query {\n                retornarAtividade(id_atividade: "+l+"){\n                    id\n                    titulo\n                    autor\n                    texto\n                }\n            }\n        ")];case 2:return t=u.sent(),n.dismiss(),!t.errors&&t.data.retornarAtividade&&(this.atividade=t.data.retornarAtividade,this.processarDados()),[2]}}))}))},l.prototype.processarDados=function(){console.log("Texto: ",JSON.parse(this.atividade.texto)),this.editorView.setContents(JSON.parse(this.atividade.texto)),document.getElementById("textoView").innerHTML=this.editorView.root.innerHTML},l.prototype.avancar=function(){return e.b(this,void 0,void 0,(function(){return e.e(this,(function(l){switch(l.label){case 0:return 1!=this.slideAtual||this.listaPontos.length?[3,2]:[4,this.toastCtrl.create({message:"Entre com no m\xednimo um ponto focal",duration:2e3})];case 1:return l.sent().present(),[3,5];case 2:return 2!=this.slideAtual||0==this.imagens?[3,4]:[4,this.toastCtrl.create({message:"Selecione uma imagem para cada ponto focal",duration:2e3})];case 3:return l.sent().present(),[3,5];case 4:this.slideAtual++,l.label=5;case 5:return[2]}}))}))},l.prototype.voltar=function(){this.slideAtual--},l.prototype.adicionarPonto=function(){return e.b(this,void 0,void 0,(function(){return e.e(this,(function(l){switch(l.label){case 0:return this.pontoFocal?[3,2]:[4,this.toastCtrl.create({message:"Digite uma palavra ou ora\xe7\xe3o que represente o ponto focal",duration:1500})];case 1:return l.sent().present(),[3,3];case 2:this.listaPontos.push(JSON.parse(JSON.stringify(this.pontoFocal))),this.imagens++,this.listaPontosInfo.push({texto:JSON.parse(JSON.stringify(this.pontoFocal))}),this.pontoFocal="",l.label=3;case 3:return[2]}}))}))},l.prototype.concluir=function(){return e.b(this,void 0,void 0,(function(){var l,n,t,u,o,i;return e.e(this,(function(e){switch(e.label){case 0:return[4,this.loadingCtrl.create({message:"Salvando..."})];case 1:for((l=e.sent()).present(),n=[],t=0,u=this.listaPontosInfo;t<u.length;t++)n.push(u[t].imagem);return o="\n            mutation {\n                novaResposta(\n                    id_usuario: "+this.usuario.id+"\n                    id_atividade: "+this.atividade.id+"\n                    sintese: "+JSON.stringify(JSON.stringify(this.editor.getContents()))+"\n                    frases: "+JSON.stringify(JSON.stringify(this.listaPontos))+",\n                    imagens: "+JSON.stringify(n).replace(/\"baixa_resolucao\"/g,"baixa_resolucao")+"\n                ){\n                    id\n                }\n            }\n        ",[4,this.api.post({query:o})];case 2:return i=e.sent(),l.dismiss(),!i.data||i.errors?[3,4]:[4,this.toastCtrl.create({message:"Resposta cadastrada com sucesso",duration:3e3})];case 3:return e.sent().present(),this.router.navigate(["/atividades/minhas-atividades"]),[3,6];case 4:return[4,this.alertCtrl.create({header:"Ocorreu um erro",message:"Tente novamente, ou contate o suporte."})];case 5:e.sent().present(),e.label=6;case 6:return[2]}}))}))},l.prototype.selecao=function(){var l=this.editor.getSelection(),n=this.editor.getContents();console.log("Selection ==> ",l),console.log("conteudo ==> ",n)},l.prototype.removerItem=function(l){var n=this.listaPontosInfo[l].range;this.listaPontos.splice(l,1),this.listaPontosInfo.splice(l,1),this.editorView.formatText(n.index,n.length,{background:"rgb(255, 255, 255)",bold:!1})},l.prototype.blink=function(l){var n=this,t=this.listaPontosInfo[l].range;this.editorView.formatText(t.index,t.length,{color:"rgb(255, 255, 255)"}),setTimeout((function(){n.editorView.formatText(t.index,t.length,{color:"rgb(0, 0, 0)"})}),500)},l.prototype.blinkImage=function(l){},l.prototype.buscarImagem=function(l){return e.b(this,void 0,void 0,(function(){var n=this;return e.e(this,(function(t){switch(t.label){case 0:return this.currentPonto=l,[4,this.actionSheetCtrl.create({buttons:[{text:"Selecionar Imagem",icon:"folder",handler:function(){n.platform.is("capacitor")?n.abreImagemCapacitor():document.getElementById("imagePicker").click()}},{text:"Buscar no Google",icon:"logo-google",handler:function(){return e.b(n,void 0,void 0,(function(){var l,n,t,u=this;return e.e(this,(function(i){switch(i.label){case 0:return[4,this.modalCtrl.create({component:o.a,cssClass:"modal-pequeno"})];case 1:return[4,(l=i.sent()).present()];case 2:return i.sent(),[4,l.onWillDismiss()];case 3:return n=i.sent().data,console.log("dataModa ==> ",n),n.imagem&&((t=new Image).crossOrigin="Anonymous",t.src=n.imagem,t.onload=function(){return e.b(u,void 0,void 0,(function(){var l,t;return e.e(this,(function(u){switch(u.label){case 0:return[4,this.comprimir(n.imagem,!0)];case 1:return l=u.sent(),t={baixa_resolucao:l},console.log("imagem: ",t),this.imagens--,this.listaPontosInfo[this.currentPonto].imagem=t,[2]}}))}))},t.onerror=function(){return e.b(u,void 0,void 0,(function(){return e.e(this,(function(l){switch(l.label){case 0:return[4,this.toastCtrl.create({message:"Imagem bloqueada, selecione outra imagem.",duration:3e3})];case 1:return l.sent().present(),[2]}}))}))}),[2]}}))}))}}]})];case 1:return t.sent().present(),[2]}}))}))},l.prototype.abreImagemCapacitor=function(){},l.prototype.abreArquivo=function(l){var n=this,t=l.target.files;if(t.length)for(var u=0,o=t;u<o.length;u++){var i=o[u];console.log("imagem");var r=new FileReader;r.onload=function(l){var t=new Image;t.src=l.target.result,t.onload=function(){return e.b(n,void 0,void 0,(function(){var n,t;return e.e(this,(function(u){switch(u.label){case 0:return[4,this.comprimir(l.target.result)];case 1:return n=u.sent(),t={baixa_resolucao:n},console.log("imagem: ",t),this.imagens--,this.listaPontosInfo[this.currentPonto].imagem=t,this.currentPonto=null,[2]}}))}))}},r.readAsDataURL(i)}},l.prototype.comprimir=function(l,n){return new Promise((function(t){var u=null,e=new Image;n&&(e.crossOrigin="Anonymous"),e.src=l,e.onload=function(){var l=document.createElement("canvas"),n=l.getContext("2d");if(l.width=e.naturalWidth,l.height=e.naturalHeight,l.width>1080&&l.width>l.height){console.log("width bigger:",l.width,l.height);var o=108e3/l.width/100;l.width=Math.round(e.naturalWidth*o),l.height=Math.round(e.naturalHeight*o)}else l.height>1080&&l.height>l.width&&(console.log("height bigger:",l.height,l.width),o=108e3/l.height/100,l.height=Math.round(e.naturalHeight*o),l.width=Math.round(e.naturalWidth*o));console.log("width/height:",l.width,l.height),n.drawImage(e,0,0,l.width,l.height),u=l.toDataURL("image/jpeg",.3),t(u)}}))},l.prototype.setarImagem=function(){},l}(),b=function(){return function(){}}(),d=t("pMnS"),h=t("oBZk"),g=t("Ip0R"),m=t("gIcY"),p=t("ZYCi"),f=u.rb({encapsulation:0,styles:[[".conteudo[_ngcontent-%COMP%]{padding:0 25px}.footer-buttons[_ngcontent-%COMP%]{width:100%;display:-webkit-box;display:flex;justify-content:space-around}.btn-pequeno[_ngcontent-%COMP%]{display:none}.altered-input[_ngcontent-%COMP%]{--inner-padding-end:0px;--padding-start:0px}.altered-input[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{margin:0 5px -5px;background-color:#fff;z-index:10;max-width:-webkit-fit-content;max-width:-moz-fit-content;max-width:fit-content;padding:0 10px;font-size:22px}.altered-input[_ngcontent-%COMP%]   ion-input[_ngcontent-%COMP%]{border:1px solid;border-radius:5px}.input-imagens[_ngcontent-%COMP%]{display:-webkit-box;display:flex;width:100%}.input-imagens[_ngcontent-%COMP%]   .icone[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-pack:center;justify-content:center}.input-imagens[_ngcontent-%COMP%]   .textos[_ngcontent-%COMP%]{width:100%;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}@media screen and (max-width:600px){.btn-pequeno[_ngcontent-%COMP%]{display:block}.btn-normal[_ngcontent-%COMP%]{display:none}.texto[_ngcontent-%COMP%]{font-size:small}.conteudo[_ngcontent-%COMP%]{padding:0}span.mobile[_ngcontent-%COMP%]{display:none}ion-button.mobile[_ngcontent-%COMP%]{--padding-start:0;--padding-end:0}ion-item.mobile[_ngcontent-%COMP%]{--inner-padding-end:5px;--padding-start:5px}}"]],data:{}});function k(l){return u.Kb(0,[(l()(),u.tb(0,0,null,null,4,"ion-button",[],null,[[null,"click"]],(function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.voltar()&&u),u}),h.H,h.c)),u.sb(1,49152,null,0,a.k,[u.h,u.k,u.z],null,null),(l()(),u.tb(2,0,null,0,1,"ion-icon",[["name","arrow-back"],["slot","start"]],null,null,null,h.T,h.o)),u.sb(3,49152,null,0,a.C,[u.h,u.k,u.z],{name:[0,"name"]},null),(l()(),u.Jb(-1,0,[" Voltar "]))],(function(l,n){l(n,3,0,"arrow-back")}),null)}function v(l){return u.Kb(0,[(l()(),u.tb(0,0,null,null,4,"ion-button",[],null,[[null,"click"]],(function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.avancar()&&u),u}),h.H,h.c)),u.sb(1,49152,null,0,a.k,[u.h,u.k,u.z],null,null),(l()(),u.tb(2,0,null,0,1,"ion-icon",[["name","arrow-forward"]],null,null,null,h.T,h.o)),u.sb(3,49152,null,0,a.C,[u.h,u.k,u.z],{name:[0,"name"]},null),(l()(),u.Jb(-1,0,[" Avan\xe7ar "]))],(function(l,n){l(n,3,0,"arrow-forward")}),null)}function x(l){return u.Kb(0,[(l()(),u.tb(0,0,null,null,2,"ion-button",[["color","success"]],null,[[null,"click"]],(function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.concluir()&&u),u}),h.H,h.c)),u.sb(1,49152,null,0,a.k,[u.h,u.k,u.z],{color:[0,"color"]},null),(l()(),u.Jb(-1,0,[" Concluir "]))],(function(l,n){l(n,1,0,"success")}),null)}function z(l){return u.Kb(0,[(l()(),u.tb(0,0,null,null,9,"ion-item",[],null,null,null,h.V,h.q)),u.sb(1,49152,null,0,a.H,[u.h,u.k,u.z],null,null),(l()(),u.tb(2,0,null,0,2,"ion-label",[["class","texto"]],null,null,null,h.W,h.r)),u.sb(3,49152,null,0,a.N,[u.h,u.k,u.z],null,null),(l()(),u.Jb(4,0,["",""])),(l()(),u.tb(5,0,null,0,4,"div",[],null,null,null,null,null)),(l()(),u.tb(6,0,null,null,3,"ion-button",[],null,[[null,"click"]],(function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.removerItem(l.context.index)&&u),u}),h.H,h.c)),u.sb(7,49152,null,0,a.k,[u.h,u.k,u.z],null,null),(l()(),u.tb(8,0,null,0,1,"ion-icon",[["name","close"]],null,null,null,h.T,h.o)),u.sb(9,49152,null,0,a.C,[u.h,u.k,u.z],{name:[0,"name"]},null)],(function(l,n){l(n,9,0,"close")}),(function(l,n){l(n,4,0,n.context.index+1+" - "+n.context.$implicit)}))}function w(l){return u.Kb(0,[(l()(),u.tb(0,0,null,null,3,"ion-text",[["color","danger"]],null,null,null,h.gb,h.B)),u.sb(1,49152,null,0,a.xb,[u.h,u.k,u.z],{color:[0,"color"]},null),(l()(),u.tb(2,0,null,0,1,"small",[["class","ion-padding-start"],["color","danger"]],null,null,null,null,null)),(l()(),u.Jb(-1,null,["Entre com um ponto focal."]))],(function(l,n){l(n,1,0,"danger")}),null)}function C(l){return u.Kb(0,[(l()(),u.tb(0,0,null,null,1,"ion-icon",[["color","danger"],["name","radio-button-off"],["slot","icon-only"]],null,null,null,h.T,h.o)),u.sb(1,49152,null,0,a.C,[u.h,u.k,u.z],{color:[0,"color"],name:[1,"name"]},null)],(function(l,n){l(n,1,0,"danger","radio-button-off")}),null)}function O(l){return u.Kb(0,[(l()(),u.tb(0,0,null,null,1,"ion-icon",[["color","success"],["name","checkmark-circle-outline"],["slot","icon-only"]],null,null,null,h.T,h.o)),u.sb(1,49152,null,0,a.C,[u.h,u.k,u.z],{color:[0,"color"],name:[1,"name"]},null)],(function(l,n){l(n,1,0,"success","checkmark-circle-outline")}),null)}function I(l){return u.Kb(0,[(l()(),u.tb(0,0,null,null,22,"ion-item",[["class","mobile"]],null,null,null,h.V,h.q)),u.sb(1,49152,null,0,a.H,[u.h,u.k,u.z],null,null),(l()(),u.tb(2,0,null,0,20,"div",[["class","input-imagens"]],null,null,null,null,null)),(l()(),u.tb(3,0,null,null,6,"div",[["class","icone"]],null,null,null,null,null)),(l()(),u.tb(4,0,null,null,5,"ion-button",[["class","mobile"],["fill","clear"]],null,null,null,h.H,h.c)),u.sb(5,49152,null,0,a.k,[u.h,u.k,u.z],{fill:[0,"fill"]},null),(l()(),u.ib(16777216,null,0,1,null,C)),u.sb(7,16384,null,0,g.i,[u.O,u.L],{ngIf:[0,"ngIf"]},null),(l()(),u.ib(16777216,null,0,1,null,O)),u.sb(9,16384,null,0,g.i,[u.O,u.L],{ngIf:[0,"ngIf"]},null),(l()(),u.tb(10,0,null,null,12,"div",[["class","textos"]],null,null,null,null,null)),(l()(),u.tb(11,0,null,null,2,"ion-label",[],null,null,null,h.W,h.r)),u.sb(12,49152,null,0,a.N,[u.h,u.k,u.z],null,null),(l()(),u.Jb(13,0,["",""])),(l()(),u.tb(14,0,null,null,8,"div",[],null,null,null,null,null)),(l()(),u.tb(15,0,null,null,0,"input",[["accept","image/*"],["hidden",""],["id","imagePicker"],["multiple","false"],["src",""],["type","file"]],null,[[null,"change"]],(function(l,n,t){var u=!0;return"change"===n&&(u=!1!==l.component.abreArquivo(t)&&u),u}),null,null)),(l()(),u.tb(16,0,null,null,6,"ion-button",[["color","light"],["expand","full"]],null,[[null,"click"]],(function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.buscarImagem(l.context.index)&&u),u}),h.H,h.c)),u.sb(17,49152,null,0,a.k,[u.h,u.k,u.z],{color:[0,"color"],expand:[1,"expand"]},null),(l()(),u.tb(18,0,null,0,1,"ion-icon",[["size","large"],["slot","end"],["src","assets/images/icons/image-search.svg"]],null,null,null,h.T,h.o)),u.sb(19,49152,null,0,a.C,[u.h,u.k,u.z],{size:[0,"size"],src:[1,"src"]},null),(l()(),u.Jb(-1,0,[" Buscar "])),(l()(),u.tb(21,0,null,0,1,"span",[["class","mobile"]],null,null,null,null,null)),(l()(),u.Jb(-1,null,["\xa0 Imagem"]))],(function(l,n){var t=n.component;l(n,5,0,"clear"),l(n,7,0,!t.listaPontosInfo[n.context.index].imagem),l(n,9,0,t.listaPontosInfo[n.context.index].imagem),l(n,17,0,"light","full"),l(n,19,0,"large","assets/images/icons/image-search.svg")}),(function(l,n){l(n,13,0,n.context.index+1+" - "+n.context.$implicit)}))}function P(l){return u.Kb(0,[(l()(),u.tb(0,0,null,null,6,"ion-col",[["size-md","6"],["size-xs","12"]],null,null,null,h.O,h.j)),u.sb(1,49152,null,0,a.t,[u.h,u.k,u.z],null,null),(l()(),u.tb(2,0,null,0,4,"div",[["class","imagens"]],null,null,null,null,null)),(l()(),u.tb(3,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),u.Jb(4,null,["","."])),(l()(),u.tb(5,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),u.tb(6,0,null,null,0,"img",[["class","imagem"]],[[8,"src",4]],null,null,null,null))],null,(function(l,n){l(n,4,0,n.parent.context.index+1),l(n,6,0,n.parent.context.$implicit.imagem.baixa_resolucao)}))}function y(l){return u.Kb(0,[(l()(),u.ib(16777216,null,null,1,null,P)),u.sb(1,16384,null,0,g.i,[u.O,u.L],{ngIf:[0,"ngIf"]},null),(l()(),u.ib(0,null,null,0))],(function(l,n){l(n,1,0,n.context.$implicit.imagem)}),null)}function A(l){return u.Kb(0,[(l()(),u.tb(0,0,null,null,3,"ion-col",[["size-md","6"],["size-xs","12"]],null,null,null,h.O,h.j)),u.sb(1,49152,null,0,a.t,[u.h,u.k,u.z],null,null),(l()(),u.tb(2,0,null,0,1,"div",[["class","imagens"]],null,null,null,null,null)),(l()(),u.tb(3,0,null,null,0,"img",[["class","imagem"]],[[8,"src",4]],null,null,null,null))],null,(function(l,n){l(n,3,0,n.parent.context.$implicit.imagem.baixa_resolucao)}))}function J(l){return u.Kb(0,[(l()(),u.ib(16777216,null,null,1,null,A)),u.sb(1,16384,null,0,g.i,[u.O,u.L],{ngIf:[0,"ngIf"]},null),(l()(),u.ib(0,null,null,0))],(function(l,n){l(n,1,0,n.context.$implicit.imagem)}),null)}function M(l){return u.Kb(0,[(l()(),u.tb(0,0,null,null,3,"ion-row",[],null,null,null,h.cb,h.x)),u.sb(1,49152,null,0,a.jb,[u.h,u.k,u.z],null,null),(l()(),u.ib(16777216,null,0,1,null,J)),u.sb(3,278528,null,0,g.h,[u.O,u.L,u.s],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){l(n,3,0,n.component.listaPontosInfo)}),null)}function _(l){return u.Kb(0,[(l()(),u.tb(0,0,null,null,4,"ion-button",[],null,[[null,"click"]],(function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.voltar()&&u),u}),h.H,h.c)),u.sb(1,49152,null,0,a.k,[u.h,u.k,u.z],null,null),(l()(),u.tb(2,0,null,0,1,"ion-icon",[["name","arrow-back"],["slot","start"]],null,null,null,h.T,h.o)),u.sb(3,49152,null,0,a.C,[u.h,u.k,u.z],{name:[0,"name"]},null),(l()(),u.Jb(-1,0,[" Voltar "]))],(function(l,n){l(n,3,0,"arrow-back")}),null)}function S(l){return u.Kb(0,[(l()(),u.tb(0,0,null,null,4,"ion-button",[],null,[[null,"click"]],(function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.avancar()&&u),u}),h.H,h.c)),u.sb(1,49152,null,0,a.k,[u.h,u.k,u.z],null,null),(l()(),u.tb(2,0,null,0,1,"ion-icon",[["name","arrow-forward"]],null,null,null,h.T,h.o)),u.sb(3,49152,null,0,a.C,[u.h,u.k,u.z],{name:[0,"name"]},null),(l()(),u.Jb(-1,0,[" Avan\xe7ar "]))],(function(l,n){l(n,3,0,"arrow-forward")}),null)}function j(l){return u.Kb(0,[(l()(),u.tb(0,0,null,null,2,"ion-button",[["color","success"]],null,[[null,"click"]],(function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.concluir()&&u),u}),h.H,h.c)),u.sb(1,49152,null,0,a.k,[u.h,u.k,u.z],{color:[0,"color"]},null),(l()(),u.Jb(-1,0,[" Concluir "]))],(function(l,n){l(n,1,0,"success")}),null)}function V(l){return u.Kb(0,[(l()(),u.tb(0,0,null,null,19,"ion-header",[],null,null,null,h.S,h.n)),u.sb(1,49152,null,0,a.B,[u.h,u.k,u.z],null,null),(l()(),u.tb(2,0,null,0,17,"ion-toolbar",[],null,null,null,h.jb,h.E)),u.sb(3,49152,null,0,a.Cb,[u.h,u.k,u.z],null,null),(l()(),u.tb(4,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,h.I,h.d)),u.sb(5,49152,null,0,a.l,[u.h,u.k,u.z],null,null),(l()(),u.tb(6,0,null,0,1,"ion-menu-button",[],null,null,null,h.Z,h.v)),u.sb(7,49152,null,0,a.R,[u.h,u.k,u.z],null,null),(l()(),u.tb(8,0,null,0,11,"div",[["class","cabecalho-menu"]],null,null,null,null,null)),(l()(),u.tb(9,0,null,null,2,"ion-title",[],null,null,null,h.ib,h.D)),u.sb(10,49152,null,0,a.Ab,[u.h,u.k,u.z],null,null),(l()(),u.Jb(-1,0,["Responder Atividade"])),(l()(),u.tb(12,0,null,null,7,"ion-buttons",[["slot","start"]],null,null,null,h.I,h.d)),u.sb(13,49152,null,0,a.l,[u.h,u.k,u.z],null,null),(l()(),u.ib(16777216,null,0,1,null,k)),u.sb(15,16384,null,0,g.i,[u.O,u.L],{ngIf:[0,"ngIf"]},null),(l()(),u.ib(16777216,null,0,1,null,v)),u.sb(17,16384,null,0,g.i,[u.O,u.L],{ngIf:[0,"ngIf"]},null),(l()(),u.ib(16777216,null,0,1,null,x)),u.sb(19,16384,null,0,g.i,[u.O,u.L],{ngIf:[0,"ngIf"]},null),(l()(),u.tb(20,0,null,null,86,"ion-content",[],null,null,null,h.P,h.k)),u.sb(21,49152,null,0,a.u,[u.h,u.k,u.z],null,null),(l()(),u.tb(22,0,null,0,84,"div",[["class","conteudo"]],null,null,null,null,null)),(l()(),u.tb(23,0,null,null,83,"div",[["class","slide-um"]],null,null,null,null,null)),(l()(),u.tb(24,0,null,null,43,"div",[],[[8,"hidden",0]],null,null,null,null)),(l()(),u.tb(25,0,null,null,42,"ion-grid",[],null,null,null,h.R,h.m)),u.sb(26,49152,null,0,a.A,[u.h,u.k,u.z],null,null),(l()(),u.tb(27,0,null,0,40,"ion-row",[],null,null,null,h.cb,h.x)),u.sb(28,49152,null,0,a.jb,[u.h,u.k,u.z],null,null),(l()(),u.tb(29,0,null,0,9,"ion-col",[["size","6"]],null,null,null,h.O,h.j)),u.sb(30,49152,null,0,a.t,[u.h,u.k,u.z],{size:[0,"size"]},null),(l()(),u.tb(31,0,null,0,5,"ion-text",[["color","dark"]],null,null,null,h.gb,h.B)),u.sb(32,49152,null,0,a.xb,[u.h,u.k,u.z],{color:[0,"color"]},null),(l()(),u.tb(33,0,null,0,1,"h1",[],null,null,null,null,null)),(l()(),u.Jb(34,null,["",""])),(l()(),u.tb(35,0,null,0,1,"h3",[],null,null,null,null,null)),(l()(),u.Jb(36,null,["",""])),(l()(),u.tb(37,0,[["textoView",1]],0,0,"div",[["class","texto"],["id","textoView"]],null,null,null,null,null)),(l()(),u.tb(38,0,[["editorView",1]],0,0,"div",[["hidden",""],["id","editorView"]],null,null,null,null,null)),(l()(),u.tb(39,0,null,0,28,"ion-col",[["size","6"]],null,null,null,h.O,h.j)),u.sb(40,49152,null,0,a.t,[u.h,u.k,u.z],{size:[0,"size"]},null),(l()(),u.tb(41,0,null,0,3,"ion-text",[["class","ion-text-center"],["color","dark"]],null,null,null,h.gb,h.B)),u.sb(42,49152,null,0,a.xb,[u.h,u.k,u.z],{color:[0,"color"]},null),(l()(),u.tb(43,0,null,0,1,"h1",[],null,null,null,null,null)),(l()(),u.Jb(-1,null,["Pontos Focais"])),(l()(),u.tb(45,0,null,0,3,"ion-list",[],null,null,null,h.Y,h.s)),u.sb(46,49152,null,0,a.O,[u.h,u.k,u.z],null,null),(l()(),u.ib(16777216,null,0,1,null,z)),u.sb(48,278528,null,0,g.h,[u.O,u.L,u.s],{ngForOf:[0,"ngForOf"]},null),(l()(),u.ib(16777216,null,0,1,null,w)),u.sb(50,16384,null,0,g.i,[u.O,u.L],{ngIf:[0,"ngIf"]},null),(l()(),u.tb(51,0,null,0,11,"ion-item",[["class","altered-input"]],null,null,null,h.V,h.q)),u.sb(52,49152,null,0,a.H,[u.h,u.k,u.z],null,null),(l()(),u.tb(53,0,null,0,2,"ion-label",[["position","stacked"]],null,null,null,h.W,h.r)),u.sb(54,49152,null,0,a.N,[u.h,u.k,u.z],{position:[0,"position"]},null),(l()(),u.Jb(-1,0,["Novo Ponto Focal"])),(l()(),u.tb(56,0,null,0,6,"ion-input",[["placeholder","Digite o ponto focal"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"keyup.enter"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,t){var e=!0,o=l.component;return"ionBlur"===n&&(e=!1!==u.Eb(l,57)._handleBlurEvent(t.target)&&e),"ionChange"===n&&(e=!1!==u.Eb(l,57)._handleInputEvent(t.target)&&e),"ngModelChange"===n&&(e=!1!==(o.pontoFocal=t)&&e),"keyup.enter"===n&&(e=!1!==o.adicionarPonto()&&e),e}),h.U,h.p)),u.sb(57,16384,null,0,a.Mb,[u.k],null,null),u.Gb(1024,null,m.g,(function(l){return[l]}),[a.Mb]),u.sb(59,671744,null,0,m.k,[[8,null],[8,null],[8,null],[6,m.g]],{model:[0,"model"]},{update:"ngModelChange"}),u.Gb(2048,null,m.h,null,[m.k]),u.sb(61,16384,null,0,m.i,[[4,m.h]],null,null),u.sb(62,49152,null,0,a.G,[u.h,u.k,u.z],{placeholder:[0,"placeholder"],type:[1,"type"]},null),(l()(),u.tb(63,0,null,0,4,"ion-button",[["expand","full"],["shape","round"]],null,[[null,"click"]],(function(l,n,t){var u=!0;return"click"===n&&(u=!1!==l.component.adicionarPonto()&&u),u}),h.H,h.c)),u.sb(64,49152,null,0,a.k,[u.h,u.k,u.z],{expand:[0,"expand"],shape:[1,"shape"]},null),(l()(),u.tb(65,0,null,0,1,"ion-icon",[["name","add"],["slot","start"]],null,null,null,h.T,h.o)),u.sb(66,49152,null,0,a.C,[u.h,u.k,u.z],{name:[0,"name"]},null),(l()(),u.Jb(-1,0,[" Adicionar "])),(l()(),u.tb(68,0,null,null,24,"div",[],[[8,"hidden",0]],null,null,null,null)),(l()(),u.tb(69,0,null,null,23,"ion-row",[],null,null,null,h.cb,h.x)),u.sb(70,49152,null,0,a.jb,[u.h,u.k,u.z],null,null),(l()(),u.tb(71,0,null,0,10,"ion-col",[["no-padding",""],["size","6"]],null,null,null,h.O,h.j)),u.sb(72,49152,null,0,a.t,[u.h,u.k,u.z],{size:[0,"size"]},null),u.sb(73,16384,null,0,a.e,[u.k],null,null),(l()(),u.tb(74,0,null,0,3,"ion-text",[["class","ion-text-center"],["color","dark"]],null,null,null,h.gb,h.B)),u.sb(75,49152,null,0,a.xb,[u.h,u.k,u.z],{color:[0,"color"]},null),(l()(),u.tb(76,0,null,0,1,"h1",[],null,null,null,null,null)),(l()(),u.Jb(-1,null,["Pontos Focais"])),(l()(),u.tb(78,0,null,0,3,"ion-list",[],null,null,null,h.Y,h.s)),u.sb(79,49152,null,0,a.O,[u.h,u.k,u.z],null,null),(l()(),u.ib(16777216,null,0,1,null,I)),u.sb(81,278528,null,0,g.h,[u.O,u.L,u.s],{ngForOf:[0,"ngForOf"]},null),(l()(),u.tb(82,0,null,0,10,"ion-col",[["no-padding",""],["size","6"]],null,null,null,h.O,h.j)),u.sb(83,49152,null,0,a.t,[u.h,u.k,u.z],{size:[0,"size"]},null),u.sb(84,16384,null,0,a.e,[u.k],null,null),(l()(),u.tb(85,0,null,0,3,"ion-text",[["class","ion-text-center"],["color","dark"]],null,null,null,h.gb,h.B)),u.sb(86,49152,null,0,a.xb,[u.h,u.k,u.z],{color:[0,"color"]},null),(l()(),u.tb(87,0,null,0,1,"h1",[],null,null,null,null,null)),(l()(),u.Jb(-1,null,["Imagens"])),(l()(),u.tb(89,0,null,0,3,"ion-row",[],null,null,null,h.cb,h.x)),u.sb(90,49152,null,0,a.jb,[u.h,u.k,u.z],null,null),(l()(),u.ib(16777216,null,0,1,null,y)),u.sb(92,278528,null,0,g.h,[u.O,u.L,u.s],{ngForOf:[0,"ngForOf"]},null),(l()(),u.tb(93,0,null,null,13,"div",[],[[8,"hidden",0]],null,null,null,null)),(l()(),u.tb(94,0,null,null,12,"ion-grid",[],null,null,null,h.R,h.m)),u.sb(95,49152,null,0,a.A,[u.h,u.k,u.z],null,null),(l()(),u.tb(96,0,null,0,10,"ion-row",[],null,null,null,h.cb,h.x)),u.sb(97,49152,null,0,a.jb,[u.h,u.k,u.z],null,null),(l()(),u.tb(98,0,null,0,4,"ion-col",[["no-padding",""],["size","6"]],null,null,null,h.O,h.j)),u.sb(99,49152,null,0,a.t,[u.h,u.k,u.z],{size:[0,"size"]},null),u.sb(100,16384,null,0,a.e,[u.k],null,null),(l()(),u.ib(16777216,null,0,1,null,M)),u.sb(102,16384,null,0,g.i,[u.O,u.L],{ngIf:[0,"ngIf"]},null),(l()(),u.tb(103,0,null,0,3,"ion-col",[["no-padding",""],["size","6"]],null,null,null,h.O,h.j)),u.sb(104,49152,null,0,a.t,[u.h,u.k,u.z],{size:[0,"size"]},null),u.sb(105,16384,null,0,a.e,[u.k],null,null),(l()(),u.tb(106,0,[["editorSintese",1]],0,0,"div",[["id","editorSintese"]],null,null,null,null,null)),(l()(),u.tb(107,0,null,null,11,"ion-footer",[["class","footer-mobile"]],null,null,null,h.Q,h.l)),u.sb(108,49152,null,0,a.z,[u.h,u.k,u.z],null,null),(l()(),u.tb(109,0,null,0,9,"ion-toolbar",[],null,null,null,h.jb,h.E)),u.sb(110,49152,null,0,a.Cb,[u.h,u.k,u.z],null,null),(l()(),u.tb(111,0,null,0,7,"ion-buttons",[["class","footer-buttons"],["slot","start"]],null,null,null,h.I,h.d)),u.sb(112,49152,null,0,a.l,[u.h,u.k,u.z],null,null),(l()(),u.ib(16777216,null,0,1,null,_)),u.sb(114,16384,null,0,g.i,[u.O,u.L],{ngIf:[0,"ngIf"]},null),(l()(),u.ib(16777216,null,0,1,null,S)),u.sb(116,16384,null,0,g.i,[u.O,u.L],{ngIf:[0,"ngIf"]},null),(l()(),u.ib(16777216,null,0,1,null,j)),u.sb(118,16384,null,0,g.i,[u.O,u.L],{ngIf:[0,"ngIf"]},null)],(function(l,n){var t=n.component;l(n,15,0,1!=t.slideAtual),l(n,17,0,3!=t.slideAtual),l(n,19,0,3==t.slideAtual),l(n,30,0,"6"),l(n,32,0,"dark"),l(n,40,0,"6"),l(n,42,0,"dark"),l(n,48,0,t.listaPontos),l(n,50,0,!t.pontoFocal),l(n,54,0,"stacked"),l(n,59,0,t.pontoFocal),l(n,62,0,"Digite o ponto focal","text"),l(n,64,0,"full","round"),l(n,66,0,"add"),l(n,72,0,"6"),l(n,75,0,"dark"),l(n,81,0,t.listaPontos),l(n,83,0,"6"),l(n,86,0,"dark"),l(n,92,0,t.listaPontosInfo),l(n,99,0,"6"),l(n,102,0,t.atividade),l(n,104,0,"6"),l(n,114,0,1!=t.slideAtual),l(n,116,0,3!=t.slideAtual),l(n,118,0,3==t.slideAtual)}),(function(l,n){var t=n.component;l(n,24,0,1!=t.slideAtual),l(n,34,0,t.atividade?t.atividade.titulo:"Sem Titulo"),l(n,36,0,t.atividade?t.atividade.autor:"Sem Autor"),l(n,56,0,u.Eb(n,61).ngClassUntouched,u.Eb(n,61).ngClassTouched,u.Eb(n,61).ngClassPristine,u.Eb(n,61).ngClassDirty,u.Eb(n,61).ngClassValid,u.Eb(n,61).ngClassInvalid,u.Eb(n,61).ngClassPending),l(n,68,0,2!=t.slideAtual),l(n,93,0,3!=t.slideAtual)}))}function H(l){return u.Kb(0,[(l()(),u.tb(0,0,null,null,1,"app-responder-atividade",[],null,null,null,V,f)),u.sb(1,114688,null,0,c,[a.Gb,p.a,a.b,a.Nb,p.m,a.a,a.Hb,i.a,r.a,a.Jb],null,null)],(function(l,n){l(n,1,0)}),null)}var E=u.pb("app-responder-atividade",c,H,{},{},[]);t.d(n,"ResponderAtividadePageModuleNgFactory",(function(){return F}));var F=u.qb(b,[],(function(l){return u.Bb([u.Cb(512,u.j,u.bb,[[8,[d.a,E]],[3,u.j],u.x]),u.Cb(4608,g.k,g.j,[u.u,[2,g.q]]),u.Cb(4608,m.p,m.p,[]),u.Cb(4608,a.c,a.c,[u.z,u.g]),u.Cb(4608,a.Hb,a.Hb,[a.c,u.j,u.q]),u.Cb(4608,a.Kb,a.Kb,[a.c,u.j,u.q]),u.Cb(1073742336,g.b,g.b,[]),u.Cb(1073742336,m.o,m.o,[]),u.Cb(1073742336,m.e,m.e,[]),u.Cb(1073742336,a.Eb,a.Eb,[]),u.Cb(1073742336,p.o,p.o,[[2,p.t],[2,p.m]]),u.Cb(1073742336,b,b,[]),u.Cb(1024,p.k,(function(){return[[{path:"",component:c}]]}),[])])}))}}]);