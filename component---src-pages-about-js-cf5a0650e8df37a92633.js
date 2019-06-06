(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{133:function(t,a,e){"use strict";e.r(a);var n=e(491),i=e(140),s=(e(180),e(149)),o=e(145),l=e(139),r=e(146),u=e(150),m=e(163),k=e(243),c=e(0),v=e.n(c),p=e(162),h=e(255),d=e.n(h);a.default=function(){return v.a.createElement(m.a,null,v.a.createElement(p.a,{title:"Kurssista",keywords:["fullstack","course","helsingin yliopisto","tietojenkäsittelytieteen osasto","mooc","mooc.fi","full stack","web-sovelluskehitys"]}),v.a.createElement(i.StaticQuery,{query:"1243363599",render:function(t){var a=t.allAboutJson.edges[0].node,e=a.intro;return a.info,v.a.createElement(v.a.Fragment,null,v.a.createElement(s.a,{style:{paddingBottom:0,overflow:"hidden"}},v.a.createElement("div",{style:{display:"flex",justifyContent:"center",marginBottom:"-70px"},className:"container"},v.a.createElement(u.a,{className:"col-4 push-right-2",contain:!0,style:{margin:0},alt:"Stacked cubes with React logo and JavaScript text",src:d.a}))),v.a.createElement(l.a,{className:"container spacing spacing--mobile--large"},v.a.createElement(l.a,{className:"col-8 push-right-1"},v.a.createElement(o.a,{heading:{level:"h1",title:"Yleistä"},headingFontSize:"2.3rem"}),v.a.createElement(l.a,{flex:!0,spaceBetween:!0},v.a.createElement("div",{className:"col-10 spacing--after"},v.a.createElement(o.a,{text:e,className:"link",headingFont:!0}),v.a.createElement(o.a,{className:"link",headingFont:!0,text:["Osallistujilta edellytetään vahvaa ohjelmointirutiinia, web-ohjelmoinnin ja tietokantojen perustuntemusta, git-versionhallintajärjestelmän peruskäytön hallintaa, kykyä pitkäjänteiseen työskentelyyn sekä valmiutta omatoimiseen tiedonhakuun ja ongelmanratkaisuun.","Osallistuminen ei kuitenkaan edellytä kurssilla käsiteltävien tekniikoiden tai Javascript-kielen hallintaa.","Varaudu käyttämään aikaa noin 10-15 tuntia viikossa koko periodin ajan.","Kurssin sisällöstä ja suoritustavasta kerrotaan materiaalissa osassa 0, lue ne huolella."]}))))),!1,v.a.createElement(k.a,null))},data:n}),v.a.createElement(r.a,null))}},146:function(t,a,e){"use strict";e(147);var n=e(139),i=e(150),s=e(140),o=e(0),l=e.n(o),r=e(152),u=e.n(r),m=e(164),k=e(153),c=[{src:e.n(k).a,alt:"Helsingin yliopiston logo",href:"https://www.helsinki.fi/"},{src:u.a,alt:"Houston inc. logo",href:"https://www.houston-inc.com/"}];a.a=function(){return l.a.createElement(n.a,{id:"footer",className:"container spacing--after-small spacing--mobile",flex:!0},l.a.createElement(n.a,{className:"col-5 col-10--mobile order-2--mobile order-2--tablet footer__links",flex:!0,spaceBetween:!0},c.map(function(t){return l.a.createElement("a",{key:t.alt,href:t.href,className:"col-5 col-4--mobile spacing--mobile"},l.a.createElement(i.a,{contain:!0,src:t.src,alt:t.alt,className:"col-6"}))})),l.a.createElement(n.a,{flex:!0,className:"col-5 col-5--mobile order-1--mobile order-1--tablet footer__navigation"},l.a.createElement("div",{className:"footer__navigation-link-container"},m.b.map(function(t){return l.a.createElement(s.Link,{key:t.path,to:t.path,className:"footer__navigation-link nav-item-hover",style:{marginLeft:"4.5rem"}},t.text)}))))}},147:function(t,a,e){},151:function(t,a){t.exports={0:{a:"Yleistä",b:"Web-sovelluksen toimintaperiaatteita"},1:{a:"Reactin alkeet",b:"Javascriptiä",c:"Komponentin tila ja tapahtumankäsittely",d:"Monimutkaisempi tila, Reactin debuggaus"},2:{a:"Kokoelmien renderöinti ja moduulit",b:"Lomakkeiden käsittely",c:"Palvelimella olevan datan hakeminen",d:"Palvelimella olevan datan muokkaaminen",e:"Tyylien lisääminen React-sovellukseen"},3:{a:"Node.js ja Express",b:"Sovellus internetiin",c:"Tietojen tallettaminen MongoDB-tietokantaan",d:"Validointi ja ESLint"},4:{a:"Sovelluksen rakenne ja testauksen alkeet",b:"Backendin testaaminen",c:"Käyttäjien hallinta",d:"Token-perustainen kirjautuminen"},5:{a:"Kirjautuminen frontendissä",b:"props.children ja proptypet",c:"React-sovellusten testaaminen",d:"Custom hookit"},6:{a:"Flux-arkkitehtuuri ja Redux",b:"Monta reduseria, connect",c:"Redux-sovelluksen kommunikointi palvelimen kanssa"},7:{a:"React-router",b:"Lisää tyyleistä",c:"Webpack",d:"Luokkakomponentit, E2E-testaus",e:"Sekalaista",f:"Tehtäviä: blogilistan laajennus"},8:{a:"GraphQL-palvelin",b:"React ja GraphQL",c:"Tietokanta ja käyttäjien hallinta",d:"Kirjautuminen ja välimuistin päivitys",e:"Fragmentit ja subskriptiot"}}},155:function(t,a,e){var n=e(30),i=e(29);e(170)("keys",function(){return function(t){return i(n(t))}})},170:function(t,a,e){var n=e(21),i=e(15),s=e(22);t.exports=function(t,a){var e=(i.Object||{})[t]||Object[t],o={};o[t]=a(e),n(n.S+n.F*s(function(){e(1)}),"Object",o)}},180:function(t,a,e){"use strict";var n=e(6),i=e.n(n),s=(e(181),e(140)),o=e(4),l=e.n(o),r=e(0),u=e.n(r),m=e(145),k=function(t){function a(a){var e;return(e=t.call(this,a)||this).state={isOpened:!1},e}i()(a,t);var e=a.prototype;return e.componentDidMount=function(){this.props.initiallyOpened&&this.setState({isOpened:!0})},e.render=function(){var t=this,a=this.props,e=a.title,n=a.content,i=a.className,o=a.containerClassName,l=a.list,r=a.titleStyle,k=this.state.isOpened;return u.a.createElement("div",{className:"accordion__container col-8 push-right-1 "+o},u.a.createElement("button",{className:"accordion accordion__title "+(k?"active":"")+" "+i,style:r,onClick:function(){return t.setState({isOpened:!k})}},e),u.a.createElement("div",{className:"panel",style:{padding:k?"2rem 18px":"",maxHeight:""+(k?"unset":0),transition:"max-height 0.2s ease-out"}},n&&u.a.createElement(m.a,{className:"col-8 push-right-1",text:n}),l&&u.a.createElement("ul",null,l.map(function(t){return u.a.createElement("li",{key:t.text},u.a.createElement(s.Link,{to:t.href},t.text))}))))},a}(r.Component);k.propTypes={title:l.a.string.isRequired,content:l.a.oneOfType([l.a.string,l.a.array]),list:l.a.array,className:l.a.string,containerClassName:l.a.string,initiallyOpened:l.a.bool,titleStyle:l.a.object},k.defaultProps={className:"",containerClassName:"",initiallyOpened:!1,titleStyle:{}},a.a=k},181:function(t,a,e){},243:function(t,a,e){"use strict";e.d(a,"a",function(){return m});e(67),e(46),e(155);var n=e(149),i=e(207),s=e(0),o=e.n(s),l=e(151),r=e.n(l),u=Object.keys(r.a),m=function(){return o.a.createElement(n.a,{className:"spacing spacing--after-small spacing--after-mobile offset",id:"course-contents"},o.a.createElement("div",{className:"container spacing flex-fix-aligning col-7--mobile"},u.map(function(t){var a=["Web-sovellusten toiminnan perusteet","Reactin perusteet","Palvelimen kanssa tapahtuva kommunikointi","Palvelimen ohjelmointi NodeJS:n Express-kirjastolla","Express-sovellusten testaaminen","React-sovelluksen testaaminen","Sovelluksen tilan hallinta Redux-kirjastolla","React router, tyylikirjastot ja webpack","GraphQL"];return o.a.createElement(i.a,{key:a[t],className:"col-3 col-10--mobile col-4--tablet",image:{src:e(244)("./part-"+t+".svg"),alt:a[t]},hoverImageSrc:e(254)("./part-"+t+"_ovr.svg"),name:"Osa "+t,summary:a[t],path:"/osa"+t})})))}},244:function(t,a,e){var n={"./part-0.svg":245,"./part-0_ovr.svg":184,"./part-1.svg":246,"./part-1_ovr.svg":185,"./part-2.svg":247,"./part-2_ovr.svg":186,"./part-3.svg":248,"./part-3_ovr.svg":187,"./part-4.svg":249,"./part-4_ovr.svg":188,"./part-5.svg":250,"./part-5_ovr.svg":189,"./part-6.svg":251,"./part-6_ovr.svg":190,"./part-7.svg":252,"./part-7_ovr.svg":191,"./part-8.svg":253,"./part-8_ovr.svg":192};function i(t){var a=s(t);return e(a)}function s(t){var a=n[t];if(!(a+1)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a}i.keys=function(){return Object.keys(n)},i.resolve=s,t.exports=i,i.id=244},254:function(t,a,e){var n={"./part-0_ovr.svg":184,"./part-1_ovr.svg":185,"./part-2_ovr.svg":186,"./part-3_ovr.svg":187,"./part-4_ovr.svg":188,"./part-5_ovr.svg":189,"./part-6_ovr.svg":190,"./part-7_ovr.svg":191,"./part-8_ovr.svg":192};function i(t){var a=s(t);return e(a)}function s(t){var a=n[t];if(!(a+1)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a}i.keys=function(){return Object.keys(n)},i.resolve=s,t.exports=i,i.id=254},491:function(t){t.exports={data:{allAboutJson:{edges:[{node:{id:"81f9cdd6-5402-5321-9a27-0d8abc9783ee",intro:["Kurssilla tutustutaan JavaScriptilla tapahtuvaan moderniin websovelluskehitykseen. Pääpaino on React-kirjaston avulla toteutettavissa single page -sovelluksissa, ja niitä tukevissa Node.js:llä toteutetuissa REST-rajapinnoissa. Kurssilla tutustutaan myös GraphQL:n eli REST:ille vaihtoehtoiseen rajapintojen toteutusperiaatteeseen","Kurssilla käsitellään myös sovellusten testaamista, konfigurointia ja suoritusympäristöjen hallintaa sekä NoSQL-tietokantoja.","Kurssin sisältö on sama kun Helsingin yliopiston tietojenkäsittelytieteen osaston keväällä 2019 pidetyllä kurssilla <a href='https://fullstack-hy2019.github.io/'>Full stack -websovelluskehitys.</>"],info:[{title:"Kurssimateriaali",content:['Kurssimateriaali on tarkoitettu luettavaksi osa kerrallaan "alusta loppuun". Materiaalin seassa on tehtäviä, jotka on sijoitettu siten, että kunkin tehtävän tekemiseen pitäisi olla riittävät tekniset valmiudet sitä edeltävässä materiaalissa. Voit siis tehdä tehtäviä sitä mukaan kun niitä tulee materiaalissa vastaan. Voi myös olla, että koko osan tehtävät kannattaa tehdä vasta luettuaan ensin osan alusta loppuun kertaalleen. Useissa osissa tehtävät ovat samaa ohjelmaa laajentavia pienistä osista koostuvia kokonaisuuksia. Muutamia tehtävien ohjelmia kehitetään eteenpäin useamman osan aikana.',"Materiaali perustuu muutamien osasta osaan vaihtuvien esimerkkiohjelmien asteittaiseen laajentamiseen. Materiaali toiminee parhaiten, jos kirjoitat samalla koodin myös itse ja teet koodiin myös pieniä modifikaatioita. Materiaalin käyttämien ohjelmien koodin eri vaiheiden tilanteita on tallennettu GitHubiin."]},{title:"Suoritustapa",content:["Kurssi koostuu kahdeksasta osasta, joista ensimmäinen on historiallisista syistä numero nolla. Kunkin osan tekemiseen kannattaa varata aikaa noin 5-25 tuntia.","Materiaalissa osasta n osaan n+1 eteneminen ei ole mielekästä ennen kuin riittävä osaaminen osan n asioista on saavutettu. Kurssilla sovelletaankin pedagogisin termein tavoiteoppimista, engl. mastery learning ja on tarkoitus, että etenet seuraavaan osaan vasta, kun riittävä määrä edellisen osan tehtävistä on tehty.","Oletuksena on, että teet kunkin osan tehtävistä ainakin ne jotka eivät ole merkattu tähdellä. Myös tähdellä merkatut tehtävät vaikuttavat arvosteluun, mutta niiden tekemättäjättäminen ei aiheuta liian suuria esteitä seuraavan osan (tähdellä merkkaamattomien) tehtävien tekemiseen.","Etenemisnopeus kurssilla on vapaa, tehtäviä voi palauttaa 10.1.2020. klo 23:59 asti.","Tämän kurssin eri osiin jo tehtyjen palautusten ajankäyttöstatistiikan näet tehtävien palautussivulta."]},{title:"Arvosteluperusteet",content:["Kurssi voidaan suorittaa joko 3 tai 5-8 opintopisteen laajuisena.","Laajuus ja arvosana määräytyy kaikkien tehtyjen tehtävien perusteella, myös tähdellä merkityt tehtävät siis vaikuttavat arvosanaan. Kurssin lopussa on koe, joka on suoritettava hyväksytysti. Koe ei kuitenkaan vaikuta arvosanaan.","Jos haluat kurssilta suorituksen, tallenna opiskelijanumerosi palautussovelluksen näkymään my submissions."]},{title:"Alkutoimet",content:["Tällä kurssilla suositellaan Chrome-selaimen käyttöä, sillä se tarjoaa parhaan välineistön web-sovelluskehitystä ajatellen.","Kurssin tehtävät palautetaan GitHubiin, joten Git tulee olla asennettuna ja sitä on syytä osata käyttää. Ohjeita Gitin käyttämiseen löytyy muunmuassa täältä.","Asenna myös joku järkevä webkoodausta tukeva tekstieditori, enemmän kuin suositeltava valinta on Visual studio code. Myös Atom on tarkoitukseen toimiva.","Älä koodaa nanolla, Notepadilla tai Geditillä. NetBeanskaan ei ole omimmillaan Web-koodauksessa ja se on myös turhan raskas verrattuna esim. Visual Studio Codeen.","Asenna koneeseesi heti myös Node.js. Materiaali on tehty versiolla 8.6, älä asenna mitään sitä vanhempaa versiota.","Asennusohjeita on koottu tänne.","Noden myötä koneelle asentuu myös Node package manager npm, jota tulemme tarvitsemaan kurssin aikana aktiivisesti. Tuoreen noden kera asentuu myös npx, jota tarvitaan myös muutaman kerran."]},{title:"Typoja materiaalissa",content:["Kurssilla on paljon materiaalia ja se on olosuhteiden pakosta kirjoitettu todella nopeasti. Materiaalissa on betatestauksesta ja oikoluvuista huolimatta kirjoitusvirheitä. Jos löydät kirjoitusvirheen tai joku asia on sanottu epäselvästi tai kielioppisääntöjen vastaisesti, tee pull request repositoriossa https://github.com/fullstackopen-2019/fullstackopen-2019.github.iok olevaan kurssimateriaaliin.","Pull requestin tekeminen on helppoa. Esim. jos tällä sivulla on typo, mene sivun “lähdekoodiin” https://github.com/fullstack-hy2019/fullstack-hy2019.github.io/edit/source/src/content/about/about.json klikkaa kynän kuvaa oikealta, tee muutokset ja klikkaa muutama kerta “vihreää” Ohtu-kurssin ohjeen mukaan."]}]}}]}}}}}]);
//# sourceMappingURL=component---src-pages-about-js-cf5a0650e8df37a92633.js.map