(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"1Olu":function(n,l,t){"use strict";t.r(l);var u=t("CcnG"),i=t("mrSG"),o=t("AxkA"),e=t("H+bZ"),a=t("ZZ/e"),r=function(){function n(n,l,t,u,i){this.router=n,this.api=l,this.loadingCtrl=t,this.alertCtrl=u,this.bancoLocal=i,this.textos=[{titulo:"Soneto VII",autor:"Greg\xf3rio de Matos"},{titulo:"Soneto",autor:"Cl\xe1udio Manoel da Costa"},{titulo:"Amor",autor:"\xc1lvares de Azevedo"},{titulo:"Deixe que o Olhar",autor:"Olavo Bilac"},{titulo:"O Quinze",autor:"Rachel de Queiroz"},{titulo:"Oceano",autor:"Djavan"},{titulo:"Soneto",autor:"Alphonsus de Guimaraens"}],this.atividades=[]}return n.prototype.ngOnInit=function(){return i.b(this,void 0,void 0,(function(){return i.e(this,(function(n){switch(n.label){case 0:return[4,this.bancoLocal.get("user-credentials")];case 1:return n.sent()?this.buscarAtividades():this.router.navigate(["home"]),[2]}}))}))},n.prototype.adicionarAtividade=function(){console.log("Nova Atividade"),this.router.navigate(["/atividades/nova-atividade"])},n.prototype.buscarAtividades=function(){return i.b(this,void 0,void 0,(function(){var n,l;return i.e(this,(function(t){switch(t.label){case 0:return[4,this.loadingCtrl.create({message:"Buscando atividades..."})];case 1:return(n=t.sent()).present(),[4,this.api.get("\n            query {\n                buscarAtividades{\n                    id\n                    titulo\n                    autor\n                }\n            }\n        ")];case 2:return l=t.sent(),n.dismiss(),console.log("retorno: ",l),l.errors||!l.data.buscarAtividades?[3,3]:(this.atividades=l.data.buscarAtividades,[3,5]);case 3:return[4,this.alertCtrl.create({header:"Erro",message:"Ocorreu um erro, tente novamente."})];case 4:t.sent().present(),t.label=5;case 5:return[2]}}))}))},n.prototype.abrirAtividade=function(n){return i.b(this,void 0,void 0,(function(){return i.e(this,(function(l){return this.router.navigate(["atividades/responder-atividade/"+n.id]),[2]}))}))},n}(),c=function(){return function(){}}(),s=t("pMnS"),d=t("oBZk"),b=t("Ip0R"),h=t("ZYCi"),v=u.rb({encapsulation:0,styles:[[".cabecalho[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-pack:end;justify-content:flex-end;padding-right:15px}.adicionar-header[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{padding-right:5px}.adicionar-footer[_ngcontent-%COMP%]{display:none}.adicionar-footer[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{padding-right:5px}@media (max-width:600px){.adicionar-header[_ngcontent-%COMP%]{display:none}.adicionar-footer[_ngcontent-%COMP%]{display:block}}"]],data:{}});function p(n){return u.Nb(0,[(n()(),u.tb(0,0,null,null,4,"ion-item",[],null,[[null,"click"]],(function(n,l,t){var u=!0;return"click"===l&&(u=!1!==n.component.abrirAtividade(n.context.$implicit)&&u),u}),d.X,d.q)),u.sb(1,49152,null,0,a.H,[u.h,u.k,u.z],null,null),(n()(),u.tb(2,0,null,0,2,"ion-label",[],null,null,null,d.Y,d.r)),u.sb(3,49152,null,0,a.N,[u.h,u.k,u.z],null,null),(n()(),u.Lb(4,0,["Texto "," - "," - ",""]))],null,(function(n,l){n(l,4,0,l.context.index+1,l.context.$implicit.titulo,l.context.$implicit.autor)}))}function k(n){return u.Nb(0,[(n()(),u.tb(0,0,null,null,16,"ion-header",[],null,null,null,d.U,d.n)),u.sb(1,49152,null,0,a.B,[u.h,u.k,u.z],null,null),(n()(),u.tb(2,0,null,0,14,"ion-toolbar",[],null,null,null,d.nb,d.G)),u.sb(3,49152,null,0,a.Cb,[u.h,u.k,u.z],null,null),(n()(),u.tb(4,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,d.K,d.d)),u.sb(5,49152,null,0,a.l,[u.h,u.k,u.z],null,null),(n()(),u.tb(6,0,null,0,1,"ion-menu-button",[],null,null,null,d.bb,d.v)),u.sb(7,49152,null,0,a.R,[u.h,u.k,u.z],null,null),(n()(),u.tb(8,0,null,0,8,"div",[["class","cabecalho"]],null,null,null,null,null)),(n()(),u.tb(9,0,null,null,2,"ion-title",[],null,null,null,d.mb,d.F)),u.sb(10,49152,null,0,a.Ab,[u.h,u.k,u.z],null,null),(n()(),u.Lb(-1,0,["Minhas Atividades"])),(n()(),u.tb(12,0,null,null,4,"ion-button",[["class","adicionar-header"]],null,[[null,"click"]],(function(n,l,t){var u=!0;return"click"===l&&(u=!1!==n.component.adicionarAtividade()&&u),u}),d.J,d.c)),u.sb(13,49152,null,0,a.k,[u.h,u.k,u.z],null,null),(n()(),u.tb(14,0,null,0,1,"ion-icon",[["name","add-circle"]],null,null,null,d.V,d.o)),u.sb(15,49152,null,0,a.C,[u.h,u.k,u.z],{name:[0,"name"]},null),(n()(),u.Lb(-1,0,[" Adicionar Atividade "])),(n()(),u.tb(17,0,null,null,9,"ion-content",[],null,null,null,d.R,d.k)),u.sb(18,49152,null,0,a.u,[u.h,u.k,u.z],null,null),(n()(),u.tb(19,0,null,0,3,"ion-text",[["class","ion-text-center"],["color","dark"]],null,null,null,d.kb,d.D)),u.sb(20,49152,null,0,a.xb,[u.h,u.k,u.z],{color:[0,"color"]},null),(n()(),u.tb(21,0,null,0,1,"h1",[],null,null,null,null,null)),(n()(),u.Lb(-1,null,["Escolha uma Atividade"])),(n()(),u.tb(23,0,null,0,3,"ion-list",[],null,null,null,d.ab,d.s)),u.sb(24,49152,null,0,a.O,[u.h,u.k,u.z],null,null),(n()(),u.ib(16777216,null,0,1,null,p)),u.sb(26,278528,null,0,b.i,[u.O,u.L,u.s],{ngForOf:[0,"ngForOf"]},null),(n()(),u.tb(27,0,null,null,8,"ion-footer",[],null,null,null,d.S,d.l)),u.sb(28,49152,null,0,a.z,[u.h,u.k,u.z],null,null),(n()(),u.tb(29,0,null,0,6,"ion-toolbar",[],null,null,null,d.nb,d.G)),u.sb(30,49152,null,0,a.Cb,[u.h,u.k,u.z],null,null),(n()(),u.tb(31,0,null,0,4,"ion-button",[["class","adicionar-footer"]],null,[[null,"click"]],(function(n,l,t){var u=!0;return"click"===l&&(u=!1!==n.component.adicionarAtividade()&&u),u}),d.J,d.c)),u.sb(32,49152,null,0,a.k,[u.h,u.k,u.z],null,null),(n()(),u.tb(33,0,null,0,1,"ion-icon",[["name","add-circle"]],null,null,null,d.V,d.o)),u.sb(34,49152,null,0,a.C,[u.h,u.k,u.z],{name:[0,"name"]},null),(n()(),u.Lb(-1,0,[" Adicionar Atividade "]))],(function(n,l){var t=l.component;n(l,15,0,"add-circle"),n(l,20,0,"dark"),n(l,26,0,t.atividades),n(l,34,0,"add-circle")}),null)}function f(n){return u.Nb(0,[(n()(),u.tb(0,0,null,null,1,"app-minhas-atividades",[],null,null,null,k,v)),u.sb(1,114688,null,0,r,[h.m,e.a,a.Gb,a.b,o.a],null,null)],(function(n,l){n(l,1,0)}),null)}var C=u.pb("app-minhas-atividades",r,f,{},{},[]),g=t("gIcY");t.d(l,"MinhasAtividadesPageModuleNgFactory",(function(){return m}));var m=u.qb(c,[],(function(n){return u.Bb([u.Cb(512,u.j,u.bb,[[8,[s.a,C]],[3,u.j],u.x]),u.Cb(4608,b.l,b.k,[u.u,[2,b.r]]),u.Cb(4608,g.b,g.b,[]),u.Cb(4608,g.p,g.p,[]),u.Cb(4608,a.c,a.c,[u.z,u.g]),u.Cb(4608,a.Hb,a.Hb,[a.c,u.j,u.q]),u.Cb(4608,a.Kb,a.Kb,[a.c,u.j,u.q]),u.Cb(1073742336,b.b,b.b,[]),u.Cb(1073742336,g.o,g.o,[]),u.Cb(1073742336,g.l,g.l,[]),u.Cb(1073742336,a.Eb,a.Eb,[]),u.Cb(1073742336,h.o,h.o,[[2,h.t],[2,h.m]]),u.Cb(1073742336,c,c,[]),u.Cb(1024,h.k,(function(){return[[{path:"",component:r}]]}),[])])}))}}]);