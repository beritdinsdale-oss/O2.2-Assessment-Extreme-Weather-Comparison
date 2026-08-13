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
winter:{title:"Winter: damaging ice storm",text:"In February 2021, freezing rain coated parts of the Willamette Valley in ice, damaging trees and disrupting power.",status:"EXTREME EVENT",fact:"This was a damaging, unusual winter weather event.",rating:"UNCERTAIN",ratingCls:"",needle:"20%",event:"Uncertain",future:"Uncertain",why:"The science is not clear about how climate change influenced this particular ice storm. Future changes in damaging ice storms in the Willamette Valley are also uncertain because these events are relatively uncommon and the processes that create them are complex.",cls:"winter",label:"ICE STORM",link:"https://pdxscholar.library.pdx.edu/geog_fac/282/"},
spring:{title:"Spring: exceptional dryness",text:"Spring 2021 was exceptionally dry across the Pacific Northwest, including Oregon.",status:"EXTREME CONDITIONS",fact:"Oregon, Washington, and Idaho recorded their second-driest spring since 1895, receiving about 45% of normal spring precipitation.",rating:"MODERATE",ratingCls:"moderate",needle:"58%",event:"Multiple drivers",future:"Increasing drying risk",why:"The extreme dryness was real, but drought develops from several interacting factors. Warming can increase evaporative demand, accelerate snowmelt, and intensify dry conditions; precipitation variability also remains important.",cls:"spring",label:"EXCEPTIONAL DRYNESS",link:"https://extension.oregonstate.edu/catalog/em-9603-forests-changing-climate-how-much-will-climate-change-oregon-how-fast"},
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


// Big Climate Picture tabs
document.querySelectorAll(".cinema-tab").forEach(tab=>tab.addEventListener("click",()=>{
  document.querySelectorAll(".cinema-tab").forEach(x=>x.classList.remove("active"));
  document.querySelectorAll(".cinema-panel").forEach(x=>x.classList.remove("active"));
  tab.classList.add("active");
  const panel=document.getElementById("cinema-"+tab.dataset.cinema);
  if(panel) panel.classList.add("active");
}));


const challengeHazards=[
{
 name:"Extreme heat",icon:"☀️",
 evidenceHTML:`<div class="challenge-chart"><div class="chart-title">Projected days with heat index ≥90°F · April–October · selected Willamette Valley counties</div><div class="legend-row"><span><i class="legend-swatch legend-hist"></i>Historical 1971–2000</span><span><i class="legend-swatch legend-future"></i>Mid-century 2040–2069</span></div><div class="heat-compare">${[["Benton",4,25],["Lane",4,24],["Linn",3,22],["Marion",3,20],["Polk",4,23],["Yamhill",5,24]].map(r=>`<div class="heat-county"><div class="heat-county-name">${r[0]}</div><div class="double-bars"><div class="data-bar-row"><span>Historical</span><div class="bar-track"><div class="bar-fill hist" style="width:${r[1]/25*100}%"></div></div><span class="data-value">${r[1]} days</span></div><div class="data-bar-row"><span>Mid-century</span><div class="bar-track"><div class="bar-fill future" style="width:${r[2]/25*100}%"></div></div><span class="data-value">${r[2]} days</span></div></div></div>`).join("")}</div><p class="data-note">Multi-model means reported in the Fifth Oregon Climate Assessment under RCP 8.5.</p></div>`,
 certaintyHTML:`<div class="certainty-categories"><div class="certainty-choice"><b>LOWER CERTAINTY</b><small>limited or inconsistent evidence</small></div><div class="certainty-choice"><b>MODERATE CERTAINTY</b><small>some agreement, important uncertainty</small></div><div class="certainty-choice selected"><b>HIGHER CERTAINTY</b><small>strong, consistent evidence</small></div></div><p class="certainty-note">For increasing extreme heat, the evidence is strong and consistent.</p>`,
 question:"What conclusion is best supported by these projections?",
 options:[["a","Days with dangerous heat are projected to become substantially more common across these Willamette Valley counties."],["b","Future heat risk is too uncertain to show a consistent direction across the Valley."],["c","The projections show little change from the historical period."]],
 correct:"a",explanation:"All six counties show a large increase in projected days with a heat index of at least 90°F."
},
{
 name:"Heavy precipitation",icon:"🌧️",
 evidenceHTML:`<div class="challenge-chart"><div class="chart-title">Projected change in very heavy one-day precipitation · western Oregon</div><div class="precip-comparison"><div class="precip-main"><h4>How intense could a very heavy one-day event become?</h4><div class="legend-row"><span><i class="legend-swatch legend-hist"></i>Historical baseline</span><span><i class="legend-swatch" style="background:#557e91"></i>Mid-century projection</span></div><div class="precip-pair"><div class="precip-col"><div class="precip-block-wrap"><div class="precip-block hist"><strong>100%</strong></div></div><span>Historical</span><small>baseline intensity</small></div><div class="precip-col"><div class="precip-block-wrap"><div class="precip-block future"><strong>106%</strong></div></div><span>Mid-century</span><small>about 6% more intense</small></div></div><div class="precip-callout"><b>What is being compared?</b> The amount of precipitation falling during a very heavy one-day event—not total annual rainfall.</div></div><div class="season-variation"><h4>The projected change is not identical throughout the year</h4><div class="season-bars"><div class="season-box"><div class="season-column" style="height:55px"></div><b>Winter</b><small>increase</small></div><div class="season-box"><div class="season-column" style="height:42px"></div><b>Spring</b><small>smaller increase</small></div><div class="season-box"><div class="season-column" style="height:24px"></div><b>Summer</b><small>smallest signal</small></div><div class="season-box"><div class="season-column" style="height:88px"></div><b>Fall</b><small>largest signal in NW Oregon</small></div></div><p class="neutral-note">This seasonal mini-chart shows the relative pattern reported for northwestern Oregon; it is not a separate rainfall-total graph.</p></div></div></div>`,
 certaintyHTML:`<div class="certainty-categories"><div class="certainty-choice"><b>LOWER CERTAINTY</b><small>limited or inconsistent evidence</small></div><div class="certainty-choice"><b>MODERATE CERTAINTY</b><small>some agreement, important uncertainty</small></div><div class="certainty-choice selected"><b>HIGHER CERTAINTY</b><small>strong evidence for increasing heavy-event intensity</small></div></div><p class="certainty-note">The direction toward heavier extreme precipitation is well supported, while the size and timing of change vary by region and season.</p>`,
 question:"What does this evidence support?",
 options:[["a","Very heavy precipitation events are projected to become more intense, with the strongest seasonal signal in fall for northwestern Oregon."],["b","Every month in the Willamette Valley is expected to become uniformly wetter."],["c","Heavy precipitation is not projected to change in western Oregon."]],
 correct:"a",explanation:"The evidence supports increasing intensity of very heavy precipitation, with important seasonal variation."
},
{
 name:"Freezing rain / ice",icon:"🧊",
 evidenceHTML:`<div class="challenge-chart"><div class="chart-title">Northern Willamette Basin model projections under warming</div><div class="ice-trend-grid"><div><span>Lower elevations</span><strong>↓</strong><small>freezing-rain occurrence generally decreases</small></div><div><span>Higher elevations</span><strong>↑</strong><small>freezing-rain occurrence generally increases</small></div><div><span>Some future events</span><strong>↑ ice</strong><small>longer duration / greater ice accretion possible</small></div></div><p class="data-note">The model response differs by elevation, and event frequency is not the same thing as ice accumulation.</p></div>`,
 certaintyHTML:`<div class="certainty-categories"><div class="certainty-choice"><b>LOWER CERTAINTY</b><small>limited or inconsistent evidence</small></div><div class="certainty-choice selected"><b>MODERATE CERTAINTY</b><small>location-dependent evidence</small></div><div class="certainty-choice"><b>HIGHER CERTAINTY</b><small>strong, consistent evidence</small></div></div><p class="certainty-note">The evidence supports a complex, location-dependent response—not a simple Valley-wide increase in ice storms.</p>`,
 question:"Which statement best matches the evidence?",
 options:[["a","Severe ice storms are projected to become more frequent everywhere in the Willamette Valley."],["b","Future freezing-rain changes are location dependent; frequency may decrease in some places even while some future events accumulate more ice."],["c","Climate warming eliminates the possibility of freezing rain."]],
 correct:"b",explanation:"The study projects different changes by elevation and distinguishes event frequency from how much ice may accumulate."
}
];

let hazardIndex=0,challengePhase="evidence";
function renderHazard(){const h=challengeHazards[hazardIndex];hazardProgress.textContent=`Evidence ${hazardIndex+1} of 3 · ${h.name}`;hazardEvidence.innerHTML=`<article class="hazard-evidence-card"><header><div><p class="eyebrow">${h.icon} ${h.name.toUpperCase()}</p><h2>Review the future trend</h2></div></header>${h.evidenceHTML}<div class="certainty-panel"><b>Scientific certainty / consistency of evidence</b>${h.certaintyHTML}</div></article>`;questionPanel.innerHTML=`<div class="question-card"><p class="question-kicker">INTERPRET THE EVIDENCE</p><h3>${h.question}</h3><div class="answer-list">${h.options.map(o=>`<label class="answer"><input type="radio" name="stepAnswer" value="${o[0]}"><span>${o[1]}</span></label>`).join("")}</div></div>`;questionFeedback.hidden=true;checkStep.hidden=false;nextStep.hidden=true;checkStep.disabled=true;checkStep.textContent="Check answer";challengePhase="evidence";document.querySelectorAll('input[name="stepAnswer"]').forEach(x=>x.onchange=()=>checkStep.disabled=false);}
function renderPriority(){const h=challengeHazards[hazardIndex];questionPanel.innerHTML=`<div class="question-card"><p class="question-kicker">MAKE A PLANNING JUDGMENT</p><h3>Given the evidence and its certainty, how much weight would you give ${h.name.toLowerCase()} in the community garden’s long-term plans?</h3><p>There is no single correct answer.</p><div class="decision-cards">${[["priority","Make it a priority"],["flex","Build in flexibility"],["aware","Be aware for now"]].map(o=>`<label class="answer"><input type="radio" name="stepAnswer" value="${o[0]}"><span>${o[1]}</span></label>`).join("")}</div></div>`;questionFeedback.hidden=true;checkStep.hidden=false;nextStep.hidden=true;checkStep.disabled=true;checkStep.textContent="Continue";challengePhase="priority";document.querySelectorAll('input[name="stepAnswer"]').forEach(x=>x.onchange=()=>checkStep.disabled=false);}
checkStep.onclick=()=>{const ans=document.querySelector('input[name="stepAnswer"]:checked')?.value;if(!ans)return;const h=challengeHazards[hazardIndex];if(challengePhase==="evidence"){const ok=ans===h.correct;questionFeedback.hidden=false;questionFeedback.className="question-feedback "+(ok?"":"review");questionFeedback.innerHTML=ok?`<b>Supported by the evidence.</b> ${h.explanation}`:`<b>Take another look at the trend and certainty category.</b>`;if(ok){checkStep.hidden=true;nextStep.hidden=false;nextStep.textContent="Set your priority →";}}else{questionFeedback.hidden=false;questionFeedback.className="question-feedback";questionFeedback.innerHTML="<b>Your planning judgment.</b> Scientific evidence informs this decision, but crops, site conditions, resources, and tolerance for risk determine how much weight a gardener gives it.";checkStep.hidden=true;nextStep.hidden=false;nextStep.textContent=hazardIndex===2?"Finish challenge →":"Next hazard →";}};
nextStep.onclick=()=>{if(challengePhase==="evidence"){renderPriority();return;}if(hazardIndex<2){hazardIndex++;renderHazard();window.scrollTo({top:0,behavior:"smooth"});}else{challengePlay.hidden=true;challengeComplete.hidden=false;window.scrollTo({top:0,behavior:"smooth"});}};
backChallengeStep.onclick=()=>{if(challengePhase==="priority"){renderHazard();}else if(hazardIndex>0){hazardIndex--;renderPriority();}else{challengePlay.hidden=true;challengeLanding.hidden=false;}};
function startChallenge(){hazardIndex=0;challengeLanding.hidden=true;challengePlay.hidden=false;challengeComplete.hidden=true;renderHazard();}
beginChallenge.onclick=startChallenge;resetChallenge.onclick=startChallenge;restartChallenge.onclick=()=>{challengeComplete.hidden=true;challengeLanding.hidden=false;challengePlay.hidden=true;};
