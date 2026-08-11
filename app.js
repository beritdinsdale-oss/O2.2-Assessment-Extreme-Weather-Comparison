const screens=[...document.querySelectorAll('.screen')];function openScreen(id){document.querySelector('.hero').style.display=id==='start'?'grid':'none';screens.forEach(s=>{s.hidden=s.id!==id});document.querySelectorAll('iframe').forEach(f=>f.remove());window.scrollTo(0,0)}document.querySelectorAll('[data-open]').forEach(b=>b.addEventListener('click',()=>openScreen(b.dataset.open)));
const events={pnw:{place:'PACIFIC NORTHWEST · JUNE 2021',title:'Extreme heat',text:'A persistent heat dome pushed temperatures far beyond typical early-summer conditions across the Pacific Northwest.',video:'TcU8YNYQmGg'},tn:{place:'WAVERLY, TENNESSEE · AUGUST 2021',title:'Extreme rainfall',text:'Exceptionally heavy rainfall produced extreme flash flooding. More than 20 inches was recorded within 24 hours near the event area.',video:'gDvWd8uphXk'}};let currentEvent='pnw';document.querySelectorAll('.event-postcard').forEach(b=>b.addEventListener('click',()=>{currentEvent=b.dataset.event;document.querySelectorAll('.event-postcard').forEach(x=>x.classList.toggle('active',x===b));let e=events[currentEvent];eventPlace.textContent=e.place;eventTitle.textContent=e.title;eventText.textContent=e.text;videoBox.innerHTML='';eventVideo.textContent='▶ Watch event video';if(imageNote)imageNote.hidden=currentEvent!=='pnw';eventClimateButton.textContent=currentEvent==='pnw'?'See the heat climate connection →':'See the precipitation climate connection →'}));eventVideo.addEventListener('click',()=>{if(videoBox.innerHTML){videoBox.innerHTML='';eventVideo.textContent='▶ Watch event video'}else{videoBox.innerHTML=`<iframe src="https://www.youtube-nocookie.com/embed/${events[currentEvent].video}" title="Event video" allowfullscreen></iframe>`;eventVideo.textContent='Hide video'}});

const seasonData=[
{cls:'winter',month:'WINTER · FEBRUARY 2021',title:'Major ice storm',text:'A major ice storm affected parts of the Willamette Valley. Freezing rain accumulated on trees, roads, and power lines, creating a damaging winter extreme.',evidence:'Same region, winter conditions: precipitation fell while surface temperatures were cold enough for ice to build up.',poster:'winter-poster.jpg',video:'winter.mp4'},
{cls:'spring',month:'SPRING · MARCH–MAY 2021',title:'Exceptionally dry spring',text:'Spring turned unusually warm and dry. By April 19, precipitation across the Willamette was about 80% of normal, and rapid spring snowmelt followed.',evidence:'Willamette Basin snow-water equivalent fell from 118% of normal on April 1 to 45% by May 13.',poster:'spring-poster.jpg',video:'spring.mp4'},
{cls:'summer',month:'SUMMER · JUNE 2021',title:'Record-breaking extreme heat',text:'The late-June heat wave pushed temperatures far beyond the normal range across the Willamette Valley. Portland reached 116°F and Salem reached 117°F on June 28.',evidence:'Same region, summer conditions: an exceptional heat event replaced the cold-season hazards seen only months earlier.',poster:'summer-poster.jpg',video:'summer.mp4'},
{cls:'fall',month:'FALL · SEPTEMBER 2021',title:'Rain returns',text:'A series of atmospheric rivers brought substantial precipitation back to Oregon and the Pacific Northwest during the second half of September.',evidence:'Same region, fall conditions: the seasonal shift brought cooler, wetter weather after the exceptionally dry spring and hot summer.',poster:'fall-poster.jpg',video:'fall.mp4'}
];document.querySelectorAll('.season-card').forEach((b,i)=>b.addEventListener('click',()=>{let s=seasonData[i];document.querySelectorAll('.season-card').forEach(x=>x.classList.toggle('active',x===b));seasonFeatureImage.className='feature-image '+s.cls;seasonPoster.src=s.poster;seasonLoop.poster=s.poster;if(s.video){seasonLoop.src=s.video;seasonFeatureImage.classList.add('has-video');seasonLoop.play().catch(()=>seasonFeatureImage.classList.remove('has-video'))}else{seasonLoop.removeAttribute('src');seasonLoop.load();seasonFeatureImage.classList.remove('has-video')}seasonMonth.textContent=s.month;seasonTitle.textContent=s.title;seasonText.textContent=s.text;seasonEvidence.innerHTML=s.evidence}));

document.querySelectorAll('.hazard-choice-btn').forEach(btn=>btn.addEventListener('click',()=>{
  document.querySelectorAll('.hazard-choice-btn').forEach(b=>{
    const on=b===btn;
    b.classList.toggle('active',on);
    b.setAttribute('aria-selected',String(on));
  });
  document.querySelectorAll('.big-hazard-view').forEach(v=>v.classList.remove('active'));
  document.querySelector('#'+btn.dataset.hazard+'BigView').classList.add('active');
}));
openScreen('start');

eventClimateButton.addEventListener('click',()=>{
  openScreen('climate');
  const target=currentEvent==='pnw'?'heat':'rain';
  document.querySelectorAll('.climate-view').forEach(v=>v.classList.remove('active'));
  document.querySelector('#'+target+'Visual').classList.add('active');

  const label=document.querySelector('#climatePathLabel');
  if(label){
    label.textContent = target==='heat'
      ? 'Extreme heat: how a warmer baseline changes the odds.'
      : 'Heavy precipitation: how warmer air can increase available moisture.';
  }
});

const knowledgeChallenges=[
 {kicker:'CHALLENGE 1 · LOCATION',question:'Same summer, different places. What does that reveal?',prompt:'Build the strongest explanation by selecting two evidence tiles.',scene:'',tiles:[
  ['Location changes the hazards and conditions a region experiences.',true],
  ['Every region should experience the same extreme in the same season.',false],
  ['The same season can produce very different extremes in different places.',true],
  ['A single extreme event tells us the climate trend everywhere.',false]],feedback:'Exactly. Holding the season roughly constant while changing location reveals regional differences in extreme weather.'},
 {kicker:'CHALLENGE 2 · SEASON',question:'Same region, different seasons. What does that reveal?',prompt:'Choose two pieces of evidence that belong in the explanation.',scene:'season-scene',tiles:[
  ['A region can experience different hazards as conditions change through the year.',true],
  ['Extreme heat means winter extremes can no longer occur.',false],
  ['Season changes the background conditions in which an extreme develops.',true],
  ['Climate change makes every season behave the same way.',false]],feedback:'Right. Season matters: the same region can experience ice, dryness, heat, and heavy rain at different times of year.'},
 {kicker:'CHALLENGE 3 · CLIMATE',question:'Why do we zoom out from one event to decades?',prompt:'Choose the two statements that best complete the explanation.',scene:'climate-scene',tiles:[
  ['One event is weather; repeated observations over time reveal a climate pattern.',true],
  ['Climate change can shift the background conditions that influence some extremes.',true],
  ['One extreme event by itself proves climate change caused it.',false],
  ['If an extreme happened in the past, climate cannot affect it now.',false]],feedback:'Yes. Long records reveal changing patterns, while climate change can alter the background conditions in which individual weather events occur.'}
];
let knowledgeIndex=0,knowledgeSelected=[];
const challengeCard=document.querySelector('#challengeCard'),knowledgeComplete=document.querySelector('#knowledgeComplete');
function renderKnowledge(){
 const c=knowledgeChallenges[knowledgeIndex];knowledgeSelected=[];
 challengeScene.className='challenge-scene '+c.scene;challengeKicker.textContent=c.kicker;challengeQuestion.textContent=c.question;challengePrompt.textContent=c.prompt;
 selectedEvidence.textContent='Choose two pieces of evidence.';knowledgeFeedback.hidden=true;nextChallenge.hidden=true;checkEvidence.hidden=false;checkEvidence.disabled=true;
 evidenceTiles.innerHTML='';
 c.tiles.forEach((t,i)=>{const b=document.createElement('button');b.className='evidence-tile';b.textContent=t[0];b.addEventListener('click',()=>{if(b.classList.contains('selected')){b.classList.remove('selected');knowledgeSelected=knowledgeSelected.filter(x=>x!==i)}else if(knowledgeSelected.length<2){b.classList.add('selected');knowledgeSelected.push(i)}selectedEvidence.textContent=knowledgeSelected.length?knowledgeSelected.map(x=>c.tiles[x][0]).join(' + '):'Choose two pieces of evidence.';checkEvidence.disabled=knowledgeSelected.length!==2});evidenceTiles.appendChild(b)});
 document.querySelectorAll('.challenge-dot').forEach((d,i)=>{d.classList.toggle('active',i===knowledgeIndex);d.classList.toggle('done',i<knowledgeIndex)});
}
checkEvidence.addEventListener('click',()=>{const c=knowledgeChallenges[knowledgeIndex],ok=knowledgeSelected.every(i=>c.tiles[i][1]);knowledgeFeedback.hidden=false;knowledgeFeedback.classList.toggle('try-again',!ok);knowledgeFeedback.innerHTML=ok?'<b>Strong explanation.</b> '+c.feedback:'<b>Not quite.</b> Look for evidence that explains the pattern without claiming that one event proves climate change.';if(ok){checkEvidence.hidden=true;nextChallenge.hidden=false}});
nextChallenge.addEventListener('click',()=>{knowledgeIndex++;if(knowledgeIndex<knowledgeChallenges.length)renderKnowledge();else{challengeCard.hidden=true;knowledgeComplete.hidden=false;document.querySelectorAll('.challenge-dot').forEach(d=>{d.classList.remove('active');d.classList.add('done')})}});
document.querySelectorAll('[data-open="knowledge"]').forEach(b=>b.addEventListener('click',()=>{knowledgeIndex=0;challengeCard.hidden=false;knowledgeComplete.hidden=true;renderKnowledge()}));
