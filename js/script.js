(function(){
"use strict";
const S=window.SITE||{}, $$=(s,r=document)=>Array.from(r.querySelectorAll(s));
function text(el,v){if(el&&v!=null)el.textContent=v}
document.addEventListener("DOMContentLoaded",function(){
 document.title=S.brand||document.title;
 $$("h1")[0] && S.hero?.title && ($$("h1")[0].innerHTML=S.hero.title);
 const ps=$$("p"); const hd=ps.find(p=>/Signature beauty|features, occasion/i.test(p.textContent||""));
 if(hd&&S.hero?.description) text(hd,S.hero.description);
 const svc=S.services||[];
 const sh=$$("h3");
 svc.forEach((x,i)=>{let h=sh[i];if(!h)return;text(h,x.title);let c=h.closest("article,.service-card,.service,[class*='service']")||h.parentElement;let p=c&&c.querySelector("p");if(p)text(p,x.text)});
 const c=S.contact||{};
 $$("a[href^='mailto:']").forEach(a=>{if(c.email){a.href="mailto:"+c.email;text(a,c.email)}});
 $$("a").forEach(a=>{let t=(a.textContent||"").toLowerCase();if(c.messenger&&(t.includes("messenger")||a.href.includes("m.me")))a.href=c.messenger;if(c.facebook&&t.includes("facebook"))a.href=c.facebook;if(c.instagram&&t.includes("instagram"))a.href=c.instagram;if(c.whatsapp&&t.includes("whatsapp"))a.href=c.whatsapp});
 $$("body *").forEach(e=>{if(!e.children.length&&(e.textContent||"").trim()==="Barishal, Bangladesh"&&c.location)text(e,c.location)});
});
})();
