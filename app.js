const screens=[...document.querySelectorAll(".screen")];function show(id){screens.forEach(s=>s.hidden=s.id!==id);window.scrollTo(0,0)}document.addEventListener("click",e=>{let b=e.target.closest("[data-go]");if(b)show(b.dataset.go)});
const regionData={heat:{title:"Pacific Northwest extreme heat",text:"Late June 2021 brought extraordinary heat across the Pacific Northwest, with temperatures far beyond the region’s historical experience.",rating:"STRONG",needle:"90%",why:"Human-caused warming is increasing the likelihood and intensity of extreme heat.",link:"https://www.worldweatherattribution.org/western-north-american-extreme-heat-virtually-impossible-without-human-caused-climate-change/",cls:"heat-visual"},rain:{title:"Tennessee heavy rainfall",text:"In August 2021, exceptionally heavy rainfall produced devastating flash flooding in Middle Tennessee.",rating:"STRONG",needle:"82%",why:"A warmer atmosphere can hold more moisture, and observations show increases in heavy precipitation, although climate change does not explain every individual flood.",link:"https://www.epa.gov/climatechange-science/extreme-precipitation",cls:"rain-visual"}};
document.querySelectorAll("[data-region]").forEach(b=>b.onclick=()=>{document.querySelectorAll("[data-region]").forEach(x=>x.classList.toggle("active",x===b));let d=regionData[b.dataset.region];regionTitle.textContent=d.title;regionText.textContent=d.text;regionRating.textContent=d.rating;regionNeedle.style.left=d.needle;regionWhy.textContent=d.why;regionScience.href=d.link;regionVisual.className="event-visual "+d.cls});
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
const mechanisms={
heat:{kicker:"EXTREME HEAT",title:"A warmer starting point changes the odds",intro:"Weather still varies from day to day. But when the whole temperature range shifts warmer, temperatures that once sat at the far edge of the curve are reached more often.",take:"A relatively small shift in average temperature can produce a much larger change in the frequency of extreme heat.",whereTitle:"The mechanism is broad; the size of the change is regional.",where:"Local climate, elevation, distance from the ocean, and weather patterns affect how much extreme heat changes from one place to another.",source:"https://www.climate.gov/news-features/understanding-climate/extreme-event-attribution-climate-versus-weather-blame-game",viz:"heat"},
rain:{kicker:"HEAVY PRECIPITATION",title:"Warmer air can carry more moisture",intro:"As air warms, evaporation increases and the atmosphere can contain more water vapor. When a storm has the right ingredients, that extra moisture can contribute to heavier precipitation.",take:"A warmer atmosphere can increase the potential for intense rainfall—but it does not make every place or every season equally wet.",whereTitle:"Moisture source, storm type, and season shape the result.",where:"Heavy-precipitation changes vary substantially across the United States. What counts as extreme also depends on the location and season.",source:"https://www.epa.gov/climatechange-science/extreme-precipitation",viz:"rain"},
dry:{kicker:"EXTREME DRYNESS",title:"Dryness is about water in—and water out",intro:"Low precipitation is only part of the story. Higher temperatures can increase evaporation and the atmosphere's demand for moisture, pulling more water from soils and plants.",take:"A warmer climate can intensify dry conditions even when precipitation alone does not explain the full change.",whereTitle:"Drought has several ingredients.",where:"Rain and snow, temperature, soil moisture, snowmelt timing, vegetation, and atmospheric demand interact differently from place to place and season to season.",source:"https://www.gfdl.noaa.gov/extremes/",viz:"dry"},
ice:{kicker:"ICE STORMS",title:"Freezing rain needs a narrow stack of temperatures",intro:"Snow can melt into rain in a warm layer aloft, then remain liquid while passing through a shallow layer of freezing air near the ground. It freezes when it hits cold surfaces.",take:"Warming can change several required temperature layers at once, which makes future freezing-rain changes more complicated than a simple warmer-equals-more relationship.",whereTitle:"Small temperature differences can change the precipitation type.",where:"Topography, cold-air drainage, storm tracks, and the depth of warm and cold layers can determine whether a location receives snow, freezing rain, or rain.",source:"https://www.oregon.gov/odf/forestbenefits/documents/oregon-climate-assessment.pdf",viz:"ice"}
};
function renderMechanism(d){
 mechKicker.textContent=d.kicker;mechTitle.textContent=d.title;mechIntro.textContent=d.intro;
 mechTakeaway.innerHTML="<b>The key idea:</b> "+d.take;whereTitle.textContent=d.whereTitle;whereText.textContent=d.where;mechSource.href=d.source;
 mechanismVisual.className="mechanism-visual";
 if(d.viz==="heat"){mechanismVisual.classList.add("heat-curve");mechanismVisual.innerHTML='<div class="threshold"><b>Extreme heat threshold</b></div><span class="curve-label past">Past climate</span><span class="curve-label warm">Warmer climate</span><span class="extreme-zone">More days cross<br>the threshold</span>'}
 if(d.viz==="rain"){mechanismVisual.classList.add("moisture-visual");mechanismVisual.innerHTML='<div class="air-box"><h4>Cooler air</h4><div class="droplets">'+Array(7).fill("<i></i>").join("")+'</div><p style="text-align:center">less water vapor capacity</p></div><div class="arrow-big">→</div><div class="air-box"><h4>Warmer air</h4><div class="droplets">'+Array(15).fill("<i></i>").join("")+'</div><p style="text-align:center">more moisture available to storms</p></div>'}
 if(d.viz==="dry"){mechanismVisual.classList.add("dry-visual");mechanismVisual.innerHTML='<div class="water-flow">🌧️<strong>Water in</strong><small>rain + snow</small></div><div class="water-flow">☀️<strong>Heat ↑</strong><small>evaporation + plant water loss</small></div><div class="water-flow">🌬️<strong>Demand ↑</strong><small>atmosphere pulls more moisture</small></div>'}
 if(d.viz==="ice"){mechanismVisual.classList.add("ice-layer");mechanismVisual.innerHTML='<div class="layer snow">❄️ Snow forms aloft</div><div class="layer warm">🌡️ Warm layer melts snow → rain</div><div class="layer cold">🥶 Shallow freezing air near ground</div><div class="ice-ground">🌧️ → 🧊 freezes on contact</div>'}
}
document.querySelectorAll("[data-mech]").forEach(b=>b.onclick=()=>{document.querySelectorAll("[data-mech]").forEach(x=>x.classList.toggle("active",x===b));renderMechanism(mechanisms[b.dataset.mech])});renderMechanism(mechanisms.heat);



// Robust navigation aliases
document.querySelectorAll("[data-go]").forEach(btn=>{
 btn.addEventListener("click",()=>{
   let target=btn.dataset.go;
   const aliases={bigpicture:"bigpicture",mechanism:"bigpicture",regions:"regions",season:"season",challenge:"challenge",roadmap:"roadmap"};
   let el=document.getElementById(aliases[target]||target);
   if(el){document.querySelectorAll(".screen").forEach(s=>s.hidden=true);el.hidden=false;window.scrollTo(0,0)}
 });
});

// Big Climate Picture cinema tabs
document.querySelectorAll(".cinema-tab").forEach(tab=>tab.addEventListener("click",()=>{
 document.querySelectorAll(".cinema-tab").forEach(x=>x.classList.remove("active"));
 document.querySelectorAll(".cinema-panel").forEach(x=>x.classList.remove("active"));
 tab.classList.add("active"); document.getElementById("cinema-"+tab.dataset.cinema)?.classList.add("active");
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
