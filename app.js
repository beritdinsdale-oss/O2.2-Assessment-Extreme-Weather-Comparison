const screens=[...document.querySelectorAll(".screen")];
const screenAliases={season:"seasons",seasons:"seasons",regions:"regions",bigpicture:"bigpicture",mechanism:"bigpicture",challenge:"challenge",roadmap:"roadmap",journal:"journal",intro:"intro"};
function show(id){
  const resolved=screenAliases[id]||id;
  const target=document.getElementById(resolved);
  if(!target){console.warn("Navigation target not found:",id);return;}
  screens.forEach(s=>s.hidden=s!==target);
  window.scrollTo(0,0);
}
document.addEventListener("click",e=>{
  const b=e.target.closest("[data-go]");
  if(b){e.preventDefault();show(b.dataset.go);}
});
const regionData={
 heat:{
  title:"Pacific Northwest extreme heat",
  text:"Late June 2021 brought extraordinary heat across the Pacific Northwest, with temperatures far beyond the region’s historical experience.",
  rating:"STRONG",needle:"90%",
  why:"Human-caused warming is increasing the likelihood and intensity of extreme heat.",
  link:"https://www.worldweatherattribution.org/western-north-american-extreme-heat-virtually-impossible-without-human-caused-climate-change/",
  cls:"heat-visual",
  video:"TcU8YNYQmGg",
  videoLabel:"heat",
  caption:"Pacific Northwest · June 2021 — Unprecedented heat wave"
 },
 rain:{
  title:"Tennessee heavy rainfall",
  text:"In August 2021, exceptionally heavy rainfall produced devastating flash flooding around Waverly, Tennessee.",
  rating:"STRONG",needle:"82%",
  why:"A warmer atmosphere can hold more moisture, and observations show increases in heavy precipitation, although climate change does not explain every individual flood.",
  link:"https://www.epa.gov/climatechange-science/extreme-precipitation",
  cls:"rain-visual",
  video:"gDvWd8uphXk",
  videoLabel:"rainfall",
  caption:"Waverly, Tennessee · August 2021 — Record rainfall and flash flooding"
 }
};
let currentRegion="heat";
function updateRegion(key){
 currentRegion=key;
 document.querySelectorAll("[data-region]").forEach(x=>x.classList.toggle("active",x.dataset.region===key));
 const d=regionData[key];
 regionTitle.textContent=d.title;
 regionText.textContent=d.text;
 regionRating.textContent=d.rating;
 regionNeedle.style.left=d.needle;
 regionWhy.textContent=d.why;
 regionScience.href=d.link;
 regionVisual.className="event-visual "+d.cls;
 // Always close/remove the previous event video when switching events.
 regionVideoPanel.hidden=true;
 regionVideoFrame.src="";
 regionVideoButton.textContent="▶ Watch the "+d.videoLabel+" event video";
 regionVideoCaption.textContent=d.caption;
}
document.querySelectorAll("[data-region]").forEach(b=>b.addEventListener("click",()=>updateRegion(b.dataset.region)));
regionVideoButton.addEventListener("click",()=>{
 const d=regionData[currentRegion];
 if(regionVideoPanel.hidden){
   regionVideoFrame.src="https://www.youtube-nocookie.com/embed/"+d.video;
   regionVideoCaption.textContent=d.caption;
   regionVideoPanel.hidden=false;
   regionVideoButton.textContent="Hide event video";
 }else{
   regionVideoFrame.src="";
   regionVideoPanel.hidden=true;
   regionVideoButton.textContent="▶ Watch the "+d.videoLabel+" event video";
 }
});
updateRegion("heat");

const seasons={
winter:{title:"Winter: damaging ice storm",text:"In February 2021, freezing rain coated parts of the Willamette Valley in ice, damaging trees and disrupting power.",status:"EXTREME EVENT",fact:"This was a damaging, unusual winter weather event.",rating:"UNCERTAIN",ratingCls:"",needle:"20%",event:"Uncertain",future:"Uncertain",why:"The science is not clear about how climate change influenced this particular ice storm. Future changes in damaging ice storms in the Willamette Valley are also uncertain because these events are relatively uncommon and the processes that create them are complex.",cls:"winter",label:"ICE STORM",link:"https://www.climate.gov/"},
spring:{title:"Spring: exceptional dryness",text:"Spring 2021 was exceptionally dry across the Pacific Northwest, including Oregon.",status:"EXTREME CONDITIONS",fact:"Oregon, Washington, and Idaho recorded their second-driest spring since 1895, receiving about 45% of normal spring precipitation.",rating:"MODERATE",ratingCls:"moderate",needle:"58%",event:"Multiple drivers",future:"Increasing drying risk",why:"The extreme dryness was real, but drought develops from several interacting factors. Warming can increase evaporative demand, accelerate snowmelt, and intensify dry conditions; precipitation variability also remains important.",cls:"spring",label:"EXCEPTIONAL DRYNESS",link:"https://www.drought.gov/drought-status-updates/drought-status-update-pacific-northwest-2021-07-08"},
summer:{title:"Summer: record-shattering heat",text:"In late June 2021, extraordinary heat spread across the Pacific Northwest, including the Willamette Valley.",status:"EXTREME EVENT",fact:"Portland reached 116°F on June 28, breaking its previous all-time temperature record.",rating:"STRONG",ratingCls:"strong",needle:"91%",event:"Strong evidence",future:"Increasing heat risk",why:"Attribution research found that heat of this magnitude would have been virtually impossible without human-caused climate change. Continued warming makes severe heat more likely and more intense.",cls:"summer",label:"EXTREME HEAT",link:"https://www.worldweatherattribution.org/western-north-american-extreme-heat-virtually-impossible-without-human-caused-climate-change/"},
fall:{title:"Fall: wet weather returns",text:"Wet weather returned to the Willamette Valley in fall 2021 after the exceptionally dry spring and hot summer.",status:"N/A",fact:"No extreme weather event is highlighted for this season.",rating:"N/A",ratingCls:"na",needle:"0%",event:"N/A",future:"N/A",why:"",cls:"fall",label:"WET WEATHER",link:""}
};
document.querySelectorAll("[data-season]").forEach(b=>b.onclick=()=>{document.querySelectorAll("[data-season]").forEach(x=>x.classList.toggle("active",x===b));let d=seasons[b.dataset.season];seasonTitle.textContent=d.title;seasonText.textContent=d.text;seasonStatus.textContent=d.status;seasonStatus.className="status-pill "+(d.rating==="N/A"?"context":"");seasonFact.querySelector("p").innerHTML="<b>What the weather record tells us</b><br>"+d.fact;seasonRating.textContent=d.rating;seasonRating.className=d.ratingCls;seasonNeedle.style.left=d.needle;eventInfluence.textContent=d.event;futureRisk.textContent=d.future;seasonWhy.textContent=d.why;seasonScience.href=d.link||"#";seasonScience.style.display=d.link?"inline-block":"none";
 seasonWhy.style.display=d.why?"block":"none";
 document.querySelector(".two-questions").style.display=d.rating==="N/A"?"none":"grid";
 seasonVisual.className="season-visual "+d.cls;seasonVisualLabel.textContent=d.label;document.querySelector(".mini-scale").style.visibility=d.rating==="N/A"?"hidden":"visible"});
// Big Climate Picture cinema tabs
document.querySelectorAll(".cinema-tab").forEach(tab=>tab.addEventListener("click",()=>{
 document.querySelectorAll(".cinema-tab").forEach(x=>x.classList.remove("active"));
 document.querySelectorAll(".cinema-panel").forEach(x=>x.classList.remove("active"));
 tab.classList.add("active");
 const panel=document.getElementById("cinema-"+tab.dataset.cinema);
 if(panel) panel.classList.add("active");
}));

const hazards=[
 {name:"Extreme heat",icon:"🌡️",meter:"high",meterText:"Strong",
  evidence:`<p><b>Evidence to review:</b> Warming shifts the temperature distribution so very hot conditions occur more often. The 2021 Pacific Northwest heat wave was found to have been virtually impossible without human-caused warming.</p><a href="https://www.climate.gov/media/13232" target="_blank" rel="noopener">Review heat animation ↗</a>`,
  q:"How strong is the evidence that extreme heat should be part of long-term Willamette Valley garden planning?",
  opts:[["a","Strong enough to plan for"],["b","Too uncertain to use"],["c","Only relevant if another 2021 heat dome occurs"]],correct:"a",
  feedback:"The evidence for increasing extreme heat with continued warming is strong."},
 {name:"Precipitation",icon:"🌧️",meter:"high",meterText:"Strong, but seasonal",
  evidence:`<p><b>Evidence to review:</b> The monthly pattern matters. The graph below represents projected monthly precipitation change across the Willamette growing year. Look for differences among months rather than treating the year as one condition.</p>
  <div class="monthly-mini">${[38,42,35,28,22,14,8,6,10,18,31,40].map((v,i)=>`<div style="height:${v*3}px"><small>${["Oct","Nov","Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep"][i]}</small></div>`).join("")}</div>
  <p class="data-note">Monthly display is a simplified instructional rendering of the Willamette Water 2100 projected seasonal/monthly pattern; use the source for model detail.</p><a href="https://inr.oregonstate.edu/ww2100/analysis-topic/future-climate" target="_blank" rel="noopener">Review OSU source ↗</a>`,
  q:"What is the most useful conclusion for the garden?",
  opts:[["a","Treat future precipitation as the same problem in every month"],["b","Use month-by-month evidence because water-management needs can differ across the growing year"],["c","Assume more annual precipitation eliminates summer water concerns"]],correct:"b",
  feedback:"Monthly evidence is useful because a seasonal or annual total can hide conditions that matter during the gardening months."},
 {name:"Ice storms",icon:"🧊",meter:"medium",meterText:"More uncertain",
  evidence:`<p><b>Evidence to review:</b> Freezing rain requires a specific vertical temperature profile: frozen precipitation melts in warm air aloft, then encounters shallow subfreezing air near the surface. Oregon experienced a severe ice storm in January 2024, but a damaging event by itself does not establish a clear future trend.</p><a href="https://www.nesdis.noaa.gov/about/k-12-education/atmosphere/what-precipitation" target="_blank" rel="noopener">Review freezing-rain animation ↗</a>`,
  q:"What does the evidence justify saying about future ice-storm preparedness?",
  opts:[["a","Ice storms will definitely become more frequent, so they should be the highest priority"],["b","The science is uncertain enough that preparedness is a judgment call rather than a confident trend-based prediction"],["c","Uncertainty proves ice storms will become less common"]],correct:"b",
  feedback:"The event is real and preparedness may still be worthwhile, but the future trend is less certain than it is for extreme heat."}
];
let hazardIndex=0,phase="evidence";
function renderHazard(){
 let z=hazards[hazardIndex]; hazardProgress.textContent=`Evidence ${hazardIndex+1} of 3 · ${z.name}`;
 hazardEvidence.innerHTML=`<article class="hazard-evidence-card"><header><div><p class="eyebrow">${z.icon} ${z.name.toUpperCase()}</p><h2>Review the evidence</h2></div><div class="evidence-meter"><span>${z.meterText}</span><div class="meter-track"><div class="meter-fill ${z.meter}"></div></div></div></header><div class="evidence-data">${z.evidence}</div></article>`;
 questionPanel.innerHTML=`<div class="question-card"><p class="question-kicker">INTERPRET THE EVIDENCE</p><h3>${z.q}</h3><div class="answer-list">${z.opts.map(o=>`<label class="answer"><input type="radio" name="stepAnswer" value="${o[0]}"><span>${o[1]}</span></label>`).join("")}</div></div>`;
 questionFeedback.hidden=true;checkStep.hidden=false;nextStep.hidden=true;checkStep.disabled=true;checkStep.textContent="Check answer";phase="evidence";
 document.querySelectorAll('input[name="stepAnswer"]').forEach(x=>x.onchange=()=>checkStep.disabled=false);
}
function renderPriority(){
 let z=hazards[hazardIndex];
 questionPanel.innerHTML=`<div class="question-card"><p class="question-kicker">MAKE A PLANNING JUDGMENT</p><h3>Given this evidence, how much weight would you give ${z.name.toLowerCase()} in the community garden’s long-term plans?</h3><p>There is no single correct answer.</p><div class="decision-cards">${[["priority","Make it a priority"],["flex","Build in flexibility"],["aware","Be aware for now"]].map(o=>`<label class="answer"><input type="radio" name="stepAnswer" value="${o[0]}"><span>${o[1]}</span></label>`).join("")}</div></div>`;
 questionFeedback.hidden=true;checkStep.hidden=false;nextStep.hidden=true;checkStep.disabled=true;checkStep.textContent="Continue";phase="priority";
 document.querySelectorAll('input[name="stepAnswer"]').forEach(x=>x.onchange=()=>checkStep.disabled=false);
}
checkStep.onclick=()=>{
 let ans=document.querySelector('input[name="stepAnswer"]:checked')?.value;if(!ans)return;let z=hazards[hazardIndex];
 if(phase==="evidence"){let ok=ans===z.correct;questionFeedback.hidden=false;questionFeedback.className="question-feedback "+(ok?"":"review");questionFeedback.innerHTML=ok?`<b>Supported by the evidence.</b> ${z.feedback}`:`<b>Take another look at the evidence.</b>`;if(ok){checkStep.hidden=true;nextStep.hidden=false;nextStep.textContent="Set your priority →"}}
 else{questionFeedback.hidden=false;questionFeedback.className="question-feedback";questionFeedback.innerHTML="<b>Your planning judgment.</b> The evidence informs this choice, but the garden’s crops, site, resources, and tolerance for risk also matter.";checkStep.hidden=true;nextStep.hidden=false;nextStep.textContent=hazardIndex===2?"Finish challenge →":"Next evidence →"}
};
nextStep.onclick=()=>{
 if(phase==="evidence"){renderPriority();return}
 if(hazardIndex<2){hazardIndex++;renderHazard();window.scrollTo({top:0,behavior:"smooth"})}
 else{challengePlay.hidden=true;challengeComplete.hidden=false;window.scrollTo({top:0,behavior:"smooth"})}
};
backChallengeStep.onclick=()=>{if(phase==="priority"){renderHazard()}else if(hazardIndex>0){hazardIndex--;renderPriority()}else{challengePlay.hidden=true;challengeLanding.hidden=false}};
function startChallenge(){hazardIndex=0;challengeLanding.hidden=true;challengePlay.hidden=false;challengeComplete.hidden=true;renderHazard()}
beginChallenge.onclick=startChallenge;resetChallenge.onclick=startChallenge;restartChallenge.onclick=()=>{challengeComplete.hidden=true;challengeLanding.hidden=false;challengePlay.hidden=true};
