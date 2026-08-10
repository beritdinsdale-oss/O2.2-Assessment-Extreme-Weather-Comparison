Extreme Weather: Change the View — GitHub package

Upload index.html, styles.css, app.js, and your actual Garden-Frost-Adobe-Stock-Ann.jpeg to the repository root.

This rebuild uses one interaction metaphor: learners change location, climate lens, season, and time scale. It intentionally avoids drag-and-drop and a conventional final multiple-choice quiz.

Title image:
- Visible credit: Photo: Ann / Adobe Stock
- Alt text stays in the HTML image alt attribute and is not shown as a caption.

Videos load only on request and are removed when navigating away, which stops playback.

Important: the Over Time graph is a conceptual illustration of variability vs. trend, not a plotted scientific dataset. It should be replaced with sourced data if you want learners to interpret quantitative evidence.

V2 Climate Lens revision
------------------------
The Climate Lens now mirrors the explanation visually.

Extreme heat:
- OFF: cooler temperature distribution with a small portion near the extreme zone.
- ON: the whole distribution visibly shifts warmer while the extreme threshold stays fixed.

Heavy precipitation:
- OFF: cooler air contains fewer visible water-vapor droplets and produces moderate rain.
- ON: warmer air visibly contains more moisture and rainfall becomes heavier.

The learner no longer has to infer which variable changed; the variable named in the explanation is the variable that visibly changes in the simulation.

V3 CACHE + CONTROL FIX
----------------------
Use ALL files from this package together.

The CSS and JavaScript have new unique names:
- change-view-v3.css
- change-view-v3.js

This prevents an older app.js/styles.css from being served from browser or GitHub Pages cache.

The Climate Lens now has two explicit buttons:
- Weather view
- Climate lens ON

Selecting either button immediately updates the active heat/rain visual and the matching explanation.

V4 revisions
------------
Climate Lens:
- Replaced abstract animated diagrams with clear side-by-side BEFORE / AFTER comparisons.
- Weather view highlights the earlier/cooler state.
- Climate Lens ON highlights the warmer/changed state.
- The variable named in the explanation is visibly different in the paired visual.

Build Your View:
- The dropdowns are now fully wired.
- Changing location, season, or time scale updates the scene, interpretation, and takeaway.

Use all v4 files together:
- index.html
- change-view-v4.css
- change-view-v4.js
- README.txt
- Garden-Frost-Adobe-Stock-Ann.jpeg

V5 — Published Climate Central visuals
--------------------------------------
The custom Climate Lens graphics were removed.

Extreme heat:
- Uses Climate Central's animated climate bell curve.
- Local file: climate-central-heat-bell-curve.gif
- Source: The Season of Extreme Heat: New Climate Bell Curve
- License: CC BY 4.0

Heavy precipitation:
- Uses a Climate Central graphic showing the relationship between warming,
  atmospheric moisture, evaporation, and precipitation.
- Local file: climate-central-warmer-air-moisture.jpg
- Climate Central materials are reused with attribution under CC BY 4.0.

The image files are included locally in this package so they do not depend on
external embeds loading inside Canvas or GitHub Pages.

Use all v5 files together.

V7 — Real data + course journal integration
-------------------------------------------
OVER TIME
The placeholder/conceptual graph has been removed.
The chart now uses real observed EPA/NOAA heat-wave data:
- EPA Climate Change Indicators
- Data source: NOAA, 2024
- 50 large U.S. metropolitan areas
- Decadal averages, 1961–2023
- Learners can switch among frequency, duration, season length, and intensity.

EXPLORE YOUR REGION
The duplicate in-activity notebook has been removed.
Learners use NOAA Storm Events and Climate at a Glance, then return to
My Garden Observation Journal in Canvas to complete an Extreme Weather entry.

REPOSITORY CLEANUP
For the cleanest GitHub Pages deployment, remove the older activity files first,
then upload only the files from this ZIP plus:
Garden-Frost-Adobe-Stock-Ann.jpeg

Do not keep old change-view-v*.css or change-view-v*.js files in the repository
unless you intentionally want archived versions.
