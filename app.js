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
