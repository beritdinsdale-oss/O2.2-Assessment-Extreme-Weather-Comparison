Extreme Weather: Change the View — v9

New hub-and-path structure:
1. Title page
2. Choose Your Path hub
   - Extreme Weather: Different Regions
   - Extreme Weather: Same Region, Different Seasons
   - Extreme Weather: The Big Picture

The activity is no longer primarily linear. Each section has a Back to choices control.

Climate Lens:
- only one published Climate Central visual is displayed at a time
- heat mechanism explicitly shows Warmer average -> threshold reached more often -> more extreme heat
- precipitation mechanism shows Warmer air -> more moisture available -> heavier downpours possible

Seasons:
- rebuilt from a clean JavaScript handler
- four photo choices: Ice storm, Mild spring, Extreme heat, Fall rain
- large SAME REGION, DIFFERENT SEASONS heading

Big Picture:
- real EPA Climate Change Indicators / NOAA data
- 50 large U.S. metropolitan areas, 1961-2023
- frequency, duration, season length, intensity

Explore Your Region ends with a direct Canvas button to My Garden Observation Journal.

Required local title image: Garden-Frost-Adobe-Stock-Ann.jpeg
Some decorative/event photographs are loaded from NASA and Unsplash. Essential content does not depend on the images loading.

V11 — Regional Big Picture
--------------------------
The Big Picture now mirrors the geographic examples used earlier in the activity.

EXTREME HEAT — NORTHWEST
- Region: Oregon, Washington, Idaho
- Metric: percent area experiencing extremely warm summer days
- Definition: daytime highs in the top 10% of the historical record
- Record: 1910–2020
- Source: NOAA Climate Extremes Index
- NOAA summary used in activity: in the first 90 years of the record, >50% regional
  extreme-heat footprint occurred 3 times; in the final 20 years, it occurred 6 times.

HEAVY PRECIPITATION — SOUTHEAST
- Metric: total precipitation falling on the heaviest 1% of days
- Period: 1958–2021
- Observed change: +37%
- Source: Fifth National Climate Assessment / NOAA Climate.gov

These two displays intentionally use different regional indicators because the most useful
published observed datasets for heat and precipitation are not identical metrics.

V12
---
- April and October now use actual 2021 conditions from the NWS Portland annual Eugene climate report.
- Removed the February / SAME REGION / June bar.
- Added cinemagraph-style motion overlays to seasonal imagery, with reduced-motion support.
- Replaced the abstract Northwest footprint graphic with a normalized frequency comparison:
  3 of first 90 summers (~3%) versus 6 of final 20 summers (30%).
- Replaced precipitation's confusing 100/137 index graphic with the actual reported statistic:
  +37% change in the amount of precipitation falling on the heaviest 1% of days.

V13
---
- Removed both 'different hazard, different region—same question' bridge treatments.
- Removed learner-facing 'No 100 inches here' troubleshooting language.
- Expanded the heavy-precipitation definition: the heaviest 1% means the wettest 1 out of every 100 precipitation days, ranked within the regional historical record.
- Clarified that +37% is percent change in precipitation contributed by those exceptionally wet days, not inches.
- April and October are now presented as representative Willamette Valley seasonal climate patterns based on NOAA 1991–2020 normals rather than Eugene-specific 2021 weather.
- February and June remain 2021 extreme-event examples.
- October now has a built-in animated rainy valley scene, so it no longer depends on an external photo loading.

V14
---
- Seasonal cards are now Winter / Spring / Summer / Fall.
- Spring and fall describe actual 2021 regional conditions rather than climate normals.
- Local real-image posters are bundled for every season; fake CSS rain/heat animation removed.
- The feature area is prepared for genuine muted looping MP4 cinemagraphs. If a clip is unavailable, the real local poster remains visible.
- Different Regions now has an event-specific climate-connection button. Heat opens only the heat explanation; rainfall opens only precipitation.
- Removed the blue '100' circle from Southeast precipitation.
- Expanded the +37% explanation in plain language.

WORKING BUILD
-------------
This build uses stable filenames (index.html, styles.css, app.js) for easier local iteration.
Four user-selected seasonal MP4 loops are bundled locally and compressed for web use.
Poster JPGs are bundled for reduced-motion/fallback display.

Climate pathway fix
-------------------
The event-specific climate connection no longer displays heat/precipitation choice tabs.
Selecting the Northwest heat event opens only the heat climate explanation.
Selecting the Tennessee rainfall event opens only the precipitation climate explanation.

Season thumbnail fix
--------------------
The four seasonal choice cards now use the bundled poster images:
winter-poster.jpg, spring-poster.jpg, summer-poster.jpg, fall-poster.jpg.

Navigation fix
--------------
Removed an orphaned fragment from the retired Climate Lens tab handler.
That JavaScript error stopped the script during page load and prevented the
Choose a path button from working.
