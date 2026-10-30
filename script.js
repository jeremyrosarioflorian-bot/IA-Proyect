(function(){
var d=document,R=d.documentElement,g=window.gsap,S=window.SplitType,lang="es",ctx,splits=[];
var EN={"Sobre mí":"About","Trayectoria":"Journey","Habilidades":"Skills","Certificados":"Certificates","Contacto":"Contact",
"Estudiante de Ingeniería de Software y Bachiller Técnico en Soporte de Redes.":"Software Engineering student and Network Support Technical Bachelor.",
"Programo, configuro redes y compito en robótica. También creo contenido de tecnología como Dev J. Participé en la FIRST Robotics Competition en Florida, EE. UU., en 2025 y 2026.":"I code, set up networks and compete in robotics. I also create tech content as Dev J. I took part in the FIRST Robotics Competition in Florida, USA, in 2025 and 2026.",
"Ver mis certificados":"See my certificates","Contáctame":"Contact me","FRC 2025 y 2026":"FRC 2025 & 2026",
"Formación técnica, mentalidad de equipo.":"Technical training, team mindset.",
"Estudiante meritorio por más de 4 años consecutivos. Trabajo en equipo y de forma individual, resuelvo problemas con calma y entrego trabajos precisos y concisos.":"Honor student for more than 4 years in a row. I work well in a team and on my own, solve problems calmly and deliver precise, concise work.",
"años como estudiante meritorio":"years as an honor student","promedios en los últimos 2 años":"grade averages in the last 2 years","participaciones en FRC, Florida":"FRC participations, Florida","horas de pasantía en INDOTEL":"internship hours at INDOTEL",
"Mi trayectoria hasta hoy.":"My journey so far.","Actual":"Current","Estudiante de Ingeniería de Software":"Software Engineering student","Agosto 2026":"August 2026",
"Bachiller Técnico en Soporte de Redes y Sistemas Informáticos":"Technical Bachelor in Network Support and Computer Systems",
"Politécnico Celeste Argentina Beltré Melo. Certificado del Ministerio de Educación, año escolar 2025–2026.":"Politécnico Celeste Argentina Beltré Melo. Ministry of Education certificate, 2025–2026 school year.",
"Abril 2026":"April 2026","Segunda participación con Team Merengue 10635, en Coral Gables, Florida.":"Second participation with Team Merengue 10635, in Coral Gables, Florida.",
"Primera participación internacional con Team Merengue 10635, en Miami, Florida, con reconocimientos y premios en Estados Unidos.":"First international participation with Team Merengue 10635, in Miami, Florida, earning recognitions and awards in the United States.",
"Jun – Ago 2025":"Jun – Aug 2025","Pasante en INDOTEL":"Intern at INDOTEL","Dirección de Tecnología de la Información y Comunicación. Soporte técnico en redes y sistemas informáticos, 360 horas laborables.":"Information and Communication Technology Department. Technical support for networks and computer systems, 360 working hours.",
"Lo que sé hacer.":"What I can do.","Lenguajes de programación":"Programming languages","Python y Java para programar, HTML y CSS a nivel básico para la web.":"Python and Java for programming, basic HTML and CSS for the web.","Básico":"Basic",
"Procesador":"Processor","Gráfica":"GPU","Memoria RAM":"RAM","Almacenamiento":"Storage","Redes":"Networks","Laptops":"Laptops","Hardware y redes":"Hardware and networks",
"Reparación de computadoras y laptops, soporte en redes y contenido sobre componentes.":"Computer and laptop repair, network support and content about components.",
"Redes y soporte":"Networks and support","Soporte técnico en redes":"Network technical support","Seguridad Hikvision":"Hikvision security","Herramientas":"Tools","Robótica en FRC":"FRC robotics","Redes sociales":"Social media",
"Competencias":"Skills and strengths","Trabajo en equipo":"Teamwork","Colaboración":"Collaboration","Responsabilidad y puntualidad":"Responsibility and punctuality","Resolución de problemas":"Problem solving","Inglés A1":"English A1",
"Dev J: tecnología, hardware e IA.":"Dev J: tech, hardware and AI.",
"Mi proyecto de contenido en redes sociales sobre inteligencia artificial, hardware y componentes, análisis y comparativas, y tutoriales de optimización.":"My social media content project about artificial intelligence, hardware and components, analysis and comparisons, and optimization tutorials.",
"Inteligencia artificial":"Artificial intelligence","Hardware y componentes":"Hardware and components","Análisis y comparativas":"Analysis and comparisons","Tutoriales y optimización":"Tutorials and optimization",
"seguidores en Facebook":"Facebook followers","seguidores en Instagram":"Instagram followers","suscriptores en YouTube":"YouTube subscribers",
"visualizaciones en Facebook, últimos 28 días (octubre 2026)":"Facebook views, last 28 days (October 2026)","interacciones con el contenido, mismo período":"content interactions, same period",
"Certificados y constancias.":"Certificates and letters.","Ministerio de Educación de la República Dominicana":"Ministry of Education of the Dominican Republic","Constancia de pasantía":"Internship letter",
"INDOTEL, Dirección de TIC. 360 horas.":"INDOTEL, ICT Department. 360 hours.","Agosto 2025":"August 2025","Certificado de participación, South Florida Regional":"Certificate of participation, South Florida Regional",
"Válido hasta enero 2031":"Valid until January 2031","Diciembre 2024":"December 2024","Programación para todos (Introducción a Python)":"Programming for Everybody (Getting Started with Python)",
"University of Michigan, vía Coursera":"University of Michigan, via Coursera","Julio 2026":"July 2026","Asesor de energías renovables":"Renewable energy advisor","Capacítate para el Empleo. 122 horas.":"Capacítate para el Empleo. 122 hours.",
"Septiembre 2025":"September 2025","Instalador de paneles solares":"Solar panel installer","Capacítate para el Empleo. 64 horas.":"Capacítate para el Empleo. 64 hours.","Octubre 2025":"October 2025",
"Trabajemos juntos.":"Let’s work together.","Llamar al 849-270-3063":"Call 849-270-3063","Santo Domingo Este, República Dominicana.":"Santo Domingo Este, Dominican Republic.","Reparación de computadoras y laptops":"Computer and laptop repair"};
var els=[].slice.call(d.querySelectorAll("[data-i]")),counters=[].slice.call(d.querySelectorAll("[data-count]")),lgb=d.getElementById("lg");
els.forEach(function(e){e.dataset.es=e.textContent.trim()});
function fmt(el,v){var s=el.dataset.dec?v.toFixed(1):String(Math.round(v));if(lang==="es")s=s.replace(".",",");el.textContent=s+(lang==="en"&&el.dataset.sufen!==undefined?el.dataset.sufen:(el.dataset.suf||""))}
function setLang(l){lang=l;R.lang=l;els.forEach(function(e){e.textContent=(l==="en"&&EN[e.dataset.es])||e.dataset.es});counters.forEach(function(c){fmt(c,+c.dataset.count)});lgb.textContent=l==="en"?"ES":"EN";try{localStorage.setItem("lg",l)}catch(e){}}
try{var t=localStorage.getItem("th");if(t)R.dataset.theme=t}catch(e){}
d.getElementById("th").onclick=function(){var c=R.dataset.theme||(matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),n=c==="dark"?"light":"dark";R.dataset.theme=n;try{localStorage.setItem("th",n)}catch(e){}};
d.getElementById("y").textContent=new Date().getFullYear();
var nv=d.querySelector(".nav"),mn=d.getElementById("mn");
mn.onclick=function(){var o=nv.classList.toggle("open");mn.setAttribute("aria-expanded",o)};
d.querySelectorAll(".lk a").forEach(function(a){a.addEventListener("click",function(){nv.classList.remove("open");mn.setAttribute("aria-expanded","false")})});
d.querySelectorAll('a[href^="#"]').forEach(function(a){a.onclick=function(e){var el=d.querySelector(a.getAttribute("href"));if(el){e.preventDefault();el.scrollIntoView({behavior:"smooth"})}}});
d.querySelectorAll(".card").forEach(function(c){c.addEventListener("pointermove",function(e){var r=c.getBoundingClientRect();c.style.setProperty("--mx",e.clientX-r.left+"px");c.style.setProperty("--my",e.clientY-r.top+"px")})});
var ok=g&&S&&window.ScrollTrigger&&!matchMedia("(prefers-reduced-motion: reduce)").matches;
function sp(el,o){var s=new S(el,o);splits.push(s);return s}
function build(intro){ctx=g.context(function(){
var h1=sp(".hero h1 span",{types:"words,chars"}),role=sp("[data-role]",{types:"words"});
if(intro){g.set(".photo",{clipPath:"inset(100% 0% 0% 0%)"});
 g.timeline({defaults:{ease:"power4.out"}})
 .from(h1.chars,{yPercent:115,rotate:8,duration:1.2,stagger:.035})
 .from(".disc",{scale:0,duration:1.6,ease:"elastic.out(1,.6)"},.1)
 .from(".ring",{scale:.4,opacity:0,duration:1.8},.2)
 .to(".photo",{clipPath:"inset(0% 0% 0% 0%)",duration:1.5,ease:"expo.inOut"},.35)
 .from(".photo img",{yPercent:12,scale:1.2,duration:1.8},.35)
 .from(role.words,{y:26,opacity:0,duration:.8,stagger:.05},"-=1.2")
 .from(".hl .lead,.hl .btn",{y:22,opacity:0,duration:.8,stagger:.1},"-=.8")
 .from(".badge",{scale:0,rotate:-24,duration:.9,ease:"back.out(2.2)",stagger:.15},"-=.5");}
g.to(".ring",{rotation:360,duration:60,ease:"none",repeat:-1});
g.to(".b1",{y:-12,duration:2.4,ease:"sine.inOut",yoyo:true,repeat:-1});g.to(".b2",{y:12,duration:2.9,ease:"sine.inOut",yoyo:true,repeat:-1});
var hs={trigger:".hero",start:"top top",end:"bottom top",scrub:true};
g.to(".photo",{yPercent:6,ease:"none",scrollTrigger:hs});g.to(".hl",{yPercent:-10,ease:"none",scrollTrigger:hs});
d.querySelectorAll(".fl").forEach(function(f){var k=+f.dataset.s;g.to(f,{y:-160*k,rotation:30*k,ease:"none",scrollTrigger:hs})});
g.to(".bar",{scaleX:1,ease:"none",scrollTrigger:{start:0,end:"max",scrub:.3}});
d.querySelectorAll("[data-head]").forEach(function(h){var s=sp(h,{types:"words"});g.from(s.words,{yPercent:110,rotate:4,duration:1,ease:"power4.out",stagger:.07,scrollTrigger:{trigger:h,start:"top 85%"}})});
var rd=sp("#read",{types:"words"});
g.fromTo(rd.words,{opacity:.14},{opacity:1,stagger:.1,ease:"none",scrollTrigger:{trigger:"#read",start:"top 80%",end:"bottom 45%",scrub:true}});
counters.forEach(function(el){var o={v:0},n=+el.dataset.count;g.to(o,{v:n,duration:1.8,ease:"power2.out",scrollTrigger:{trigger:el,start:"top 92%",once:true},onUpdate:function(){fmt(el,o.v)}})});
g.fromTo(".ln i",{scaleY:0},{scaleY:1,ease:"none",scrollTrigger:{trigger:".tl",start:"top 70%",end:"bottom 70%",scrub:true}});
g.from(".ti",{x:-30,opacity:0,duration:.9,ease:"power3.out",stagger:.15,scrollTrigger:{trigger:".tl",start:"top 75%"}});
var tw=g.to(".track",{xPercent:-50,duration:32,ease:"none",repeat:-1});
ScrollTrigger.create({onUpdate:function(s){var v=Math.min(Math.abs(s.getVelocity())/220,7);g.killTweensOf(tw);g.to(tw,{timeScale:1+v,duration:.25}).then(function(){g.to(tw,{timeScale:1,duration:1.2})});g.to(".track",{skewX:Math.max(-12,Math.min(12,-s.getVelocity()/160)),duration:.3,overwrite:"auto"})}});
g.from(".lang",{y:70,rotation:-10,scale:.5,opacity:0,duration:1,ease:"back.out(1.8)",stagger:.14,scrollTrigger:{trigger:".langs",start:"top 85%"}});
g.from(".lang .ic",{rotation:-180,scale:0,duration:1.1,ease:"elastic.out(1,.55)",stagger:.14,scrollTrigger:{trigger:".langs",start:"top 85%"}});
g.from(".ow",{scale:.2,opacity:0,rotation:-140,duration:1.6,ease:"expo.out",scrollTrigger:{trigger:".ow",start:"top 85%"}});
g.to(".orbit",{rotation:360,duration:36,ease:"none",repeat:-1});g.to(".ico",{rotation:-360,duration:36,ease:"none",repeat:-1});
g.to(".core",{scale:1.08,duration:1.4,ease:"sine.inOut",yoyo:true,repeat:-1});
g.from(".sk .card",{y:60,opacity:0,duration:.9,ease:"power3.out",stagger:.12,scrollTrigger:{trigger:".sk",start:"top 85%"}});
g.fromTo(".bigj",{xPercent:18},{xPercent:-22,ease:"none",scrollTrigger:{trigger:".dev",start:"top bottom",end:"bottom top",scrub:true}});
g.from(".pills li",{scale:.6,opacity:0,y:20,duration:.7,ease:"back.out(2)",stagger:.1,scrollTrigger:{trigger:".pills",start:"top 88%"}});
g.from(".soc .card",{y:80,rotation:function(i){return(i-1)*6},opacity:0,duration:1,ease:"power3.out",stagger:.15,scrollTrigger:{trigger:".soc",start:"top 85%"}});
g.from(".soc .ic",{scale:0,rotation:-90,duration:.9,ease:"back.out(2.4)",stagger:.15,scrollTrigger:{trigger:".soc",start:"top 85%"}});
g.from(".cert",{rotationX:-60,y:60,opacity:0,transformPerspective:900,transformOrigin:"50% 0",duration:1,ease:"power3.out",stagger:.09,scrollTrigger:{trigger:".cg",start:"top 82%"}});
g.from(".contact h2",{scale:.85,ease:"none",scrollTrigger:{trigger:".contact",start:"top 85%",end:"top 25%",scrub:true}});
});ScrollTrigger.refresh()}
function teardown(){if(ctx)ctx.revert();splits.forEach(function(s){s.revert()});splits=[]}
lgb.onclick=function(){var l=lang==="es"?"en":"es";if(ok)teardown();setLang(l);if(ok)build(false)};
try{var sl=localStorage.getItem("lg");if(sl==="en")setLang("en")}catch(e){}
if(!ok)return;
g.registerPlugin(ScrollTrigger);
build(true);
addEventListener("load",function(){ScrollTrigger.refresh()});
/* interacciones */
var pw=d.querySelector(".pw");
d.querySelector(".hero").addEventListener("pointermove",function(e){var x=e.clientX/innerWidth-.5,y=e.clientY/innerHeight-.5;g.to(".disc",{x:x*-30,y:y*-20,duration:.8});g.to(".photo",{x:x*16,duration:.8});g.to(".badge",{x:x*40,duration:1})});
d.querySelectorAll(".cert").forEach(function(c){c.addEventListener("pointermove",function(e){var r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;g.to(c,{rotationY:x*10,rotationX:-y*10,transformPerspective:800,duration:.4})});c.addEventListener("pointerleave",function(){g.to(c,{rotationX:0,rotationY:0,duration:.6})})});
var m=d.getElementById("mag");
m.addEventListener("pointermove",function(e){var r=m.getBoundingClientRect();g.to(m,{x:(e.clientX-r.left-r.width/2)*.3,y:(e.clientY-r.top-r.height/2)*.4,duration:.4})});
m.addEventListener("pointerleave",function(){g.to(m,{x:0,y:0,duration:.8,ease:"elastic.out(1,.4)"})});
if(matchMedia("(pointer:fine)").matches){var cu=d.querySelector(".cur");cu.classList.add("on");var qx=g.quickTo(cu,"x",{duration:.25}),qy=g.quickTo(cu,"y",{duration:.25});addEventListener("pointermove",function(e){qx(e.clientX);qy(e.clientY)});
d.querySelectorAll("a,button,.card").forEach(function(a){a.addEventListener("pointerenter",function(){g.to(cu,{scale:2.4,duration:.3})});a.addEventListener("pointerleave",function(){g.to(cu,{scale:1,duration:.3})})})}
})();
