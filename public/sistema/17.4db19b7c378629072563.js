(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{oPZH:function(l,n,u){"use strict";u.r(n);var t=u("CcnG"),e=u("mrSG"),i=u("AxkA"),s=u("H+bZ"),o=u("ZZ/e"),a=u("kzlf"),r=function(){function l(l,n,u,t,e,i,s){this.route=l,this.router=n,this.loadingCtrl=u,this.alertCtrl=t,this.toastCtrl=e,this.api=i,this.banco=s,this.resposta=null}return l.prototype.ionViewDidEnter=function(){var l=this.route.snapshot.paramMap.get("id");this.abrirResposta(l)},l.prototype.ngOnInit=function(){return e.b(this,void 0,void 0,(function(){var l,n;return e.e(this,(function(u){switch(u.label){case 0:return this.textoView=new a("#textoView",{theme:"snow",modules:{toolbar:l=[[{font:[]}],["bold","italic","underline","strike"],[{color:[]},{background:[]}],[{list:"ordered"},{list:"bullet"}],[{script:"sub"},{script:"super"}],[{indent:"-1"},{indent:"+1"}],[{size:["small",!1,"large","huge"]}],[{header:[1,2,3,4,5,6,!1]}],[{align:[]}],["clean"]]}}),this.sinteseView=new a("#sinteseView",{theme:"snow",modules:{toolbar:l}}),this.avaliacaoEditor=new a("#avaliacaoEditor",{theme:"snow",modules:{toolbar:l}}),n=this,[4,this.banco.get("user-credentials")];case 1:return n.usuario=u.sent(),[2]}}))}))},l.prototype.abrirResposta=function(l){return e.b(this,void 0,void 0,(function(){var n,u;return e.e(this,(function(t){switch(t.label){case 0:return[4,this.loadingCtrl.create({message:"Buscando atividades..."})];case 1:return(n=t.sent()).present(),[4,this.api.post({query:"\n            query {\n                buscarRespostas(id_resposta: "+l+"){\n                    id\n                    sintese\n                    atividade{\n                        id\n                        texto\n                    }\n                }\n            }\n        "})];case 2:return u=t.sent(),n.dismiss(),!u.data.buscarRespostas||u.errors?[3,3]:(console.log("this.resposta: ",this.resposta),this.resposta=u.data.buscarRespostas[0],this.processaDados(),[3,5]);case 3:return this.router.navigate(["/atividades/respostas"]),[4,this.alertCtrl.create({header:"Ocorreu um erro",message:"Tente novamente, ou contate o suporte."})];case 4:t.sent().present(),t.label=5;case 5:return[2]}}))}))},l.prototype.processaDados=function(){this.textoView.setContents(JSON.parse(this.resposta.atividade.texto)),document.getElementById("textoViewHTML").innerHTML=this.textoView.root.innerHTML,this.sinteseView.setContents(JSON.parse(this.resposta.sintese)),document.getElementById("sinteseViewHTML").innerHTML=this.sinteseView.root.innerHTML},l.prototype.salvarAvaliacao=function(){return e.b(this,void 0,void 0,(function(){var l,n,u;return e.e(this,(function(t){switch(t.label){case 0:return[4,this.loadingCtrl.create({message:"Salvando avalia\xe7\xe3o..."})];case 1:return(l=t.sent()).present(),n="\n            mutation {\n                novaAvaliacao(\n                    id_usuario: "+this.usuario.id+"\n                    id_resposta: "+this.resposta.id+"\n                    comentario_sintese: "+JSON.stringify(JSON.stringify(this.avaliacaoEditor.getContents()))+"\n                ){\n                    id\n                }\n            }\n        ",[4,this.api.post({query:n})];case 2:return u=t.sent(),l.dismiss(),!u.data||u.errors?[3,4]:[4,this.toastCtrl.create({message:"Avalia\xe7\xe3o cadastrada com sucesso",duration:3e3})];case 3:return t.sent().present(),this.router.navigate(["/atividades/respostas"]),[3,6];case 4:return[4,this.alertCtrl.create({header:"Ocorreu um erro",message:"Tente novamente, ou contate o suporte."})];case 5:t.sent().present(),t.label=6;case 6:return[2]}}))}))},l}(),b=function(){return function(){}}(),c=u("pMnS"),d=u("oBZk"),h=u("ZYCi"),p=t.rb({encapsulation:0,styles:[[".cabecalho[_ngcontent-%COMP%]{display:-webkit-box;display:flex;-webkit-box-pack:end;justify-content:flex-end;padding-right:15px}"]],data:{}});function v(l){return t.Kb(0,[(l()(),t.tb(0,0,null,null,16,"ion-header",[],null,null,null,d.Q,d.n)),t.sb(1,49152,null,0,o.z,[t.h,t.k,t.z],null,null),(l()(),t.tb(2,0,null,0,14,"ion-toolbar",[],null,null,null,d.fb,d.C)),t.sb(3,49152,null,0,o.Ab,[t.h,t.k,t.z],null,null),(l()(),t.tb(4,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,d.G,d.d)),t.sb(5,49152,null,0,o.j,[t.h,t.k,t.z],null,null),(l()(),t.tb(6,0,null,0,1,"ion-menu-button",[],null,null,null,d.X,d.v)),t.sb(7,49152,null,0,o.P,[t.h,t.k,t.z],null,null),(l()(),t.tb(8,0,null,0,8,"div",[["class","cabecalho"]],null,null,null,null,null)),(l()(),t.tb(9,0,null,null,2,"ion-title",[],null,null,null,d.eb,d.B)),t.sb(10,49152,null,0,o.yb,[t.h,t.k,t.z],null,null),(l()(),t.Jb(-1,0,["Avaliar Atividade"])),(l()(),t.tb(12,0,null,null,4,"ion-button",[],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.salvarAvaliacao()&&t),t}),d.F,d.c)),t.sb(13,49152,null,0,o.i,[t.h,t.k,t.z],null,null),(l()(),t.tb(14,0,null,0,1,"ion-icon",[["name","save"],["slot","start"]],null,null,null,d.R,d.o)),t.sb(15,49152,null,0,o.A,[t.h,t.k,t.z],{name:[0,"name"]},null),(l()(),t.Jb(-1,0,[" Salvar "])),(l()(),t.tb(17,0,null,null,52,"ion-content",[],null,null,null,d.N,d.k)),t.sb(18,49152,null,0,o.s,[t.h,t.k,t.z],null,null),(l()(),t.tb(19,0,null,0,50,"ion-grid",[["fixed",""]],null,null,null,d.P,d.m)),t.sb(20,49152,null,0,o.y,[t.h,t.k,t.z],{fixed:[0,"fixed"]},null),(l()(),t.tb(21,0,null,0,48,"ion-row",[],null,null,null,d.ab,d.x)),t.sb(22,49152,null,0,o.hb,[t.h,t.k,t.z],null,null),(l()(),t.tb(23,0,null,0,16,"ion-col",[["size-lg","4"],["size-sm","12"]],null,null,null,d.M,d.j)),t.sb(24,49152,null,0,o.r,[t.h,t.k,t.z],null,null),(l()(),t.tb(25,0,null,0,14,"ion-card",[],null,null,null,d.L,d.e)),t.sb(26,49152,null,0,o.k,[t.h,t.k,t.z],null,null),(l()(),t.tb(27,0,null,0,7,"ion-card-header",[],null,null,null,d.I,d.g)),t.sb(28,49152,null,0,o.m,[t.h,t.k,t.z],null,null),(l()(),t.tb(29,0,null,0,5,"ion-card-title",[],null,null,null,d.K,d.i)),t.sb(30,49152,null,0,o.o,[t.h,t.k,t.z],null,null),(l()(),t.tb(31,0,null,0,3,"ion-text",[["color","dark"]],null,null,null,d.cb,d.z)),t.sb(32,49152,null,0,o.vb,[t.h,t.k,t.z],{color:[0,"color"]},null),(l()(),t.tb(33,0,null,0,1,"h2",[],null,null,null,null,null)),(l()(),t.Jb(-1,null,["Texto Original"])),(l()(),t.tb(35,0,null,0,4,"ion-card-content",[],null,null,null,d.H,d.f)),t.sb(36,49152,null,0,o.l,[t.h,t.k,t.z],null,null),(l()(),t.tb(37,0,[["textoViewHTML",1]],0,0,"div",[["id","textoViewHTML"]],null,null,null,null,null)),(l()(),t.tb(38,0,null,0,1,"div",[["hidden",""]],null,null,null,null,null)),(l()(),t.tb(39,0,[["textoView",1]],null,0,"div",[["hidden",""],["id","textoView"]],null,null,null,null,null)),(l()(),t.tb(40,0,null,0,16,"ion-col",[["size-lg","4"],["size-sm","12"]],null,null,null,d.M,d.j)),t.sb(41,49152,null,0,o.r,[t.h,t.k,t.z],null,null),(l()(),t.tb(42,0,null,0,14,"ion-card",[],null,null,null,d.L,d.e)),t.sb(43,49152,null,0,o.k,[t.h,t.k,t.z],null,null),(l()(),t.tb(44,0,null,0,7,"ion-card-header",[],null,null,null,d.I,d.g)),t.sb(45,49152,null,0,o.m,[t.h,t.k,t.z],null,null),(l()(),t.tb(46,0,null,0,5,"ion-card-title",[],null,null,null,d.K,d.i)),t.sb(47,49152,null,0,o.o,[t.h,t.k,t.z],null,null),(l()(),t.tb(48,0,null,0,3,"ion-text",[["color","dark"]],null,null,null,d.cb,d.z)),t.sb(49,49152,null,0,o.vb,[t.h,t.k,t.z],{color:[0,"color"]},null),(l()(),t.tb(50,0,null,0,1,"h2",[],null,null,null,null,null)),(l()(),t.Jb(-1,null,["S\xedntese do Aluno"])),(l()(),t.tb(52,0,null,0,4,"ion-card-content",[],null,null,null,d.H,d.f)),t.sb(53,49152,null,0,o.l,[t.h,t.k,t.z],null,null),(l()(),t.tb(54,0,null,0,1,"div",[["hidden",""]],null,null,null,null,null)),(l()(),t.tb(55,0,[["sinteseView",1]],null,0,"div",[["hidden",""],["id","sinteseView"]],null,null,null,null,null)),(l()(),t.tb(56,0,[["sinteseViewHTML",1]],0,0,"div",[["id","sinteseViewHTML"]],null,null,null,null,null)),(l()(),t.tb(57,0,null,0,12,"ion-col",[["size-lg","4"],["size-sm","12"]],null,null,null,d.M,d.j)),t.sb(58,49152,null,0,o.r,[t.h,t.k,t.z],null,null),(l()(),t.tb(59,0,null,0,9,"ion-card",[],null,null,null,d.L,d.e)),t.sb(60,49152,null,0,o.k,[t.h,t.k,t.z],null,null),(l()(),t.tb(61,0,null,0,7,"ion-card-header",[],null,null,null,d.I,d.g)),t.sb(62,49152,null,0,o.m,[t.h,t.k,t.z],null,null),(l()(),t.tb(63,0,null,0,5,"ion-card-title",[],null,null,null,d.K,d.i)),t.sb(64,49152,null,0,o.o,[t.h,t.k,t.z],null,null),(l()(),t.tb(65,0,null,0,3,"ion-text",[["color","dark"]],null,null,null,d.cb,d.z)),t.sb(66,49152,null,0,o.vb,[t.h,t.k,t.z],{color:[0,"color"]},null),(l()(),t.tb(67,0,null,0,1,"h2",[],null,null,null,null,null)),(l()(),t.Jb(-1,null,["Avalia\xe7\xe3o"])),(l()(),t.tb(69,0,[["avaliacaoEditor",1]],0,0,"div",[["id","avaliacaoEditor"]],null,null,null,null,null))],(function(l,n){l(n,15,0,"save"),l(n,20,0,""),l(n,32,0,"dark"),l(n,49,0,"dark"),l(n,66,0,"dark")}),null)}function k(l){return t.Kb(0,[(l()(),t.tb(0,0,null,null,1,"app-avaliar-atividade",[],null,null,null,v,p)),t.sb(1,114688,null,0,r,[h.a,h.m,o.Eb,o.a,o.Lb,s.a,i.a],null,null)],(function(l,n){l(n,1,0)}),null)}var m=t.pb("app-avaliar-atividade",r,k,{},{},[]),z=u("Ip0R"),g=u("gIcY");u.d(n,"AvaliarAtividadePageModuleNgFactory",(function(){return f}));var f=t.qb(b,[],(function(l){return t.Bb([t.Cb(512,t.j,t.bb,[[8,[c.a,m]],[3,t.j],t.x]),t.Cb(4608,z.k,z.j,[t.u,[2,z.q]]),t.Cb(4608,g.p,g.p,[]),t.Cb(4608,o.b,o.b,[t.z,t.g]),t.Cb(4608,o.Fb,o.Fb,[o.b,t.j,t.q]),t.Cb(4608,o.Ib,o.Ib,[o.b,t.j,t.q]),t.Cb(1073742336,z.b,z.b,[]),t.Cb(1073742336,g.o,g.o,[]),t.Cb(1073742336,g.e,g.e,[]),t.Cb(1073742336,o.Cb,o.Cb,[]),t.Cb(1073742336,h.o,h.o,[[2,h.t],[2,h.m]]),t.Cb(1073742336,b,b,[]),t.Cb(1024,h.k,(function(){return[[{path:"",component:r}]]}),[])])}))}}]);