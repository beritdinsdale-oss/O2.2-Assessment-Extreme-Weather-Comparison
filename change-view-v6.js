const hero=document.querySelector(".hero"),panels=[...document.querySelectorAll(".panel")],tabs=[...document.querySelectorAll(".tabs button")],prev=document.querySelector("#prev"),next=document.querySelector("#next"),pos=document.querySelector("#pos");let page=0;const names=["Start","Where","Climate lens","When","Over time","Your view"];
function stop(){document.querySelectorAll(".video").forEach(v=>v.innerHTML="")}
function show(n){page=Math.max(0,Math.min(5,n));stop();hero.style.display=page===0?"grid":"none";panels.forEach((p,i)=>p.classList.toggle("active",i===page-1));tabs.forEach((b,i)=>b.classList.toggle("active",i===page));prev.disabled=page===0;next.disabled=page===5;pos.textContent=names[page];scrollTo(0,0)}
document.querySelectorAll("[data-go]").forEach(b=>b.onclick=()=>show(+b.dataset.go));prev.onclick=()=>show(page-1);next.onclick=()=>show(page+1);
document.querySelectorAll(".loc").forEach(b=>b.onclick=()=>{document.querySelectorAll(".loc").forEach(x=>x.classList.remove("active"));b.classList.add("active");document.querySelectorAll(".scene").forEach(x=>x.classList.remove("active"));document.querySelector("#"+b.dataset.id).classList.add("active")});
document.querySelectorAll(".videoBtn").forEach(b=>b.onclick=()=>{let box=b.nextElementSibling;if(box.innerHTML){box.innerHTML="";b.textContent="▶ Watch event video"}else{box.innerHTML=`<iframe src="https://www.youtube-nocookie.com/embed/${b.dataset.video}" title="Event video" allowfullscreen></iframe>`;b.textContent="Hide video"}});
document.querySelectorAll(".lens").forEach(b=>b.onclick=()=>{document.querySelectorAll(".lens").forEach(x=>x.classList.remove("active"));b.classList.add("active");document.querySelectorAll(".lensPanel").forEach(x=>x.classList.remove("active"));document.querySelector("#"+b.dataset.id).classList.add("active")});
const ss=[["❄️","FEBRUARY","Ice storm","Freezing rain coated trees, roads, and power lines with damaging ice.","linear-gradient(#dceaf3,#eaf0ec)"],["🌱","APRIL","Spring transition","Milder spring conditions return as the seasonal cycle moves forward.","linear-gradient(#d9eef4,#eaf6df)"],["☀️","JUNE","Extreme heat","Exceptional heat affected the same broader region only a few months later.","linear-gradient(#cfeaf5,#ffe4b7)"],["🍂","OCTOBER","Autumn","The seasonal cycle continues with a different range of typical weather.","linear-gradient(#dbe9ee,#f3d7ad)"]];
document.querySelector("#zoom").oninput=e=>{let v=+e.target.value,c=document.querySelector("#chart"),t=document.querySelector("#zoomText");c.className=v===1?"mid":v===2?"long":"";t.innerHTML=v===0?"<b>One year:</b> mostly weather. A single year cannot establish a climate trend.":v===1?"<b>Several years:</b> variability dominates, but a possible direction begins to emerge.":"<b>Decades:</b> the long-term pattern becomes visible through year-to-year variability."};
const f={heat:"<b>Extreme heat:</b> long-term U.S. records show heat waves becoming more frequent, longer, and more intense.",rain:"<b>Heavy precipitation:</b> heavy precipitation has increased overall across the contiguous U.S., with regional differences.",cold:"<b>Extreme cold:</b> extreme cold events have generally become less frequent and less intense across much of the U.S."};document.querySelectorAll(".trendBtn").forEach(b=>b.onclick=()=>{document.querySelectorAll(".trendBtn").forEach(x=>x.classList.remove("active"));b.classList.add("active");document.querySelector("#trendText").innerHTML=f[b.dataset.t]});show(0);


const whereFinal=document.querySelector("#whereFinal");
const whenFinal=document.querySelector("#whenFinal");
const scaleFinal=document.querySelector("#scaleFinal");

function updateFinalView(){
  if(!whereFinal||!whenFinal||!scaleFinal) return;
  const where=whereFinal.value, when=whenFinal.value, scale=scaleFinal.value;
  const place=where==="pnw"?"Pacific Northwest":"Tennessee";
  const season=when==="winter"?"Winter":"Summer";
  const time=scale==="event"?"One event":"Decades";

  const combos={
    "pnw-summer":["☀️","Extreme heat","Summer heat is one important Pacific Northwest extreme."],
    "pnw-winter":["❄️","Winter ice/cold","Winter hazards still occur in a warming climate."],
    "tn-summer":["🌧️","Heavy rainfall","Warm-season storms can produce extreme rainfall in Tennessee."],
    "tn-winter":["🌧️","Winter precipitation","Tennessee winter weather reflects a different seasonal setting."]
  };
  const [icon,hazard,eventText]=combos[`${where}-${when}`];

  document.querySelector("#finalIcon").textContent=icon;
  document.querySelector("#finalKicker").textContent=`${place} · ${season} · ${time}`;

  if(scale==="event"){
    document.querySelector("#finalHeading").textContent="You are looking at weather.";
    document.querySelector("#finalBody").textContent=`${eventText} A single event tells you what happened at one place and time, but not whether that hazard is changing over the long term.`;
    document.querySelector("#scaleMeaning").textContent="One event shows weather, not a climate trend.";
    document.querySelector("#finalTakeaway").textContent="To see climate, zoom out from one event and look for a pattern across many years.";
  }else{
    document.querySelector("#finalHeading").textContent="You are looking for a climate pattern.";
    document.querySelector("#finalBody").textContent=`For ${hazard.toLowerCase()}, decades of observations allow scientists to evaluate changes in frequency, intensity, duration, or timing.`;
    document.querySelector("#scaleMeaning").textContent="Decades reveal long-term climate patterns.";
    document.querySelector("#finalTakeaway").textContent="Climate emerges when many weather observations are viewed across place, season, and time.";
  }

  document.querySelector("#whereMeaning").textContent=
    where==="pnw"
      ?"The Pacific Northwest has its own regional mix of heat, winter ice, and precipitation extremes."
      :"Tennessee has a different regional climate and different patterns of extreme rainfall and storms.";

  document.querySelector("#whenMeaning").textContent=
    when==="winter"
      ?"Winter changes the atmospheric setup and the kinds of hazards that can occur."
      :"Summer changes the atmospheric setup and the kinds of hazards that can occur.";
}

[whereFinal,whenFinal,scaleFinal].forEach(control=>control?.addEventListener("change",updateFinalView));

updateClimateLensV4();
updateFinalView();

document.querySelectorAll(".lens").forEach(button=>{
  button.addEventListener("click",()=>{
    document.querySelectorAll(".lens").forEach(b=>{
      b.setAttribute("aria-selected",String(b===button));
    });
  });
});


document.querySelectorAll(".climate-resource-tabs .lens").forEach(btn=>btn.addEventListener("click",()=>{document.querySelectorAll(".climate-resource-tabs .lens").forEach(x=>{let on=x===btn;x.classList.toggle("active",on);x.setAttribute("aria-selected",String(on))});document.querySelectorAll(".published-lens").forEach(x=>x.classList.toggle("active",x.id===btn.dataset.id))}));
const stories=[["winter","FEBRUARY","Ice storm","Freezing rain coated trees, roads, and power lines with damaging ice."],["spring","APRIL","Spring transition","Milder conditions return as the seasonal cycle changes the atmospheric setup."],["summer","JUNE","Extreme heat","Exceptional heat affected the same broader region only a few months after the winter ice storm."],["fall","OCTOBER","Autumn transition","The seasonal cycle shifts again, bringing a different range of typical weather."]];
document.querySelectorAll(".seasonStop").forEach(btn=>btn.addEventListener("click",()=>{let s=stories[+btn.dataset.s],p=document.querySelector("#storyPhoto");document.querySelectorAll(".seasonStop").forEach(x=>x.classList.toggle("active",x===btn));p.className="storyPhoto "+s[0];document.querySelector("#storyMonth").textContent=s[1];document.querySelector("#storyTitle").textContent=s[2];document.querySelector("#storyText").textContent=s[3]}));
["regionName","eventNotes","trendNotes","evidenceNotes"].forEach(id=>{let f=document.getElementById(id);if(!f)return;try{f.value=localStorage.getItem("ew-"+id)||""}catch(e){}f.addEventListener("input",()=>{try{localStorage.setItem("ew-"+id,f.value)}catch(e){}})});
