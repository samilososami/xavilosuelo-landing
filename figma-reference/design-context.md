# Figma Reference: We Like Country Landing Page

Source: `https://www.figma.com/design/DjUOKpkT0LLrbxVQfg0tSc/Untitled?node-id=1-2&t=LOHEVWgDyUJrxzMB-1`  
File key: `DjUOKpkT0LLrbxVQfg0tSc`  
Node: `1:2`, `MacBook Air - 1`

## Frame

- Canvas/frame size: `1280 x 6469`.
- Background: `#fff1e6`.
- Layout is a single tall landing page, built from absolute-positioned text, rounded rectangles, photo crops, and decorative PNG/SVG assets.
- Screenshot saved as `screenshot.png`.
- Screenshot export: `811 x 4096` PNG, scaled from original `1280 x 6469`.
- Full node export from `download_assets`: `assets/figma-node-export.pdf`.

## Visual System

Colors observed from `get_design_context`:

- Page background: `#fff1e6`.
- Nav glass: `rgba(255,250,249,0.88)`, border `rgba(0,0,0,0.2)`, blur `3.35px`.
- Primary orange/red: `#ff3300` / `#f30`, `#ff3b00`, `#ff5900`.
- CTA orange: `#fd941d`.
- CTA border/yellow: `#fbd98d`.
- Warm yellow: `#ffb938`, `rgb(253,208,29)`.
- Input fill: `#ffe5c8`, border `rgba(255,51,0,0.38)`.
- Nav text muted brown: `#886056`.
- Body text: `rgba(0,0,0,0.69)`, `rgba(0,0,0,0.78)`.
- Secondary bio text: `rgba(109,49,16,0.67)`.

Typography observed:

- `Alfa Slab One`: main logo, display headings, arched lettering, "¡NO TE LO PIERDAS!".
- `Instrument Serif`: nav labels, small section subtitles, final signup supporting copy.
- `Inter`: body copy, nav CTA, buttons, language selector.
- `Apple Garamond`: section headings and feature cards.
- `Antonio`: artist names.

Notable type treatments:

- Main logo text uses gradient fill: cream/yellow/red, with letter spacing around `3.1px-4.45px`.
- Hero location line: `Alfa Slab One`, `42.193px`, `#ffb938`, centered, text shadow `0 4.219px 0.633px rgba(0,0,0,0.17)`.
- Button labels: `Inter Semi Bold`, `16px`, `#fd941d`, tracking `-0.8px`.
- Nav labels: `Instrument Serif`, `16px`, `#886056`, tracking `0.48px`.

## Sections And Layout

### Header / Navigation

- Nav glass rectangle: node `4:2`, x `25.65`, y `16`, size `1135.05 x 42`, radius `13`, border `rgba(0,0,0,0.2)`.
- Nav links:
  - `Inicio`, x `469.46`, y `29`.
  - `Sobre el evento`, x `542.89`, y `29`.
  - `Estrellas`, x `665.18`, y `29`.
  - `Ubicación`, x `752.54`, y `29`.
- Header CTA:
  - Button shell node `13:42`, x `1040.43`, y `23.20`, size `112.20 x 27.21`, fill white, border `#fbd98d`, radius `6`.
  - Text `Apuntarme`, x `1049.36`, y `26.10`, `Inter Regular 14px`, `#fd941d`.
  - Arrow icon node `13:46`, x `1123.66`, y `27.50`, size `18.60 x 18.60`.
- Language selector:
  - Frame node `119:9`, x `1171`, y `13`, size `85 x 48`.
  - Contains globe icon, text `ES`, and dropdown vector.

### Hero

- Top decorative image node `38:2`, x `258.50`, y `2.40`, size `851.88 x 466.90`.
- Large decorative branch/cactus assets sit partly outside both sides of the viewport.
- Main logo group node `8:36`, x `432.37`, y `211.32`, size `458 x 161`.
  - Text lines: `WE LIKE` and `COUNTRY`.
  - Font: `Alfa Slab One`; sizes `89.967px` and `77.668px`.
  - Gradient: cream/yellow/red.
- Curved slogan group node `14:969`, x `402.91`, y `454.63`, size `536.36 x 132.54`.
  - White upper text: `El mejor evento country`.
  - Red lower text: `INTERNACIONAL`.
  - Built as individually rotated letters.
- Location headline node `18:2`: `¡En BARCELONA!`, x `474.48`, y `587.16`, size `386.41 x 57.42`.
- Hero body node `4:6`, centered near x `663.45`, y `668.35`, size `459.91 x 82.49`.
  - Text: `Música en directo, baile, espectáculos western y auténtico espíritu country llegan a Barcelona en un evento internacional. Un evento único donde el country se vive, se baila y se siente.`
  - `Barcelona` and `internacional` are bold and orange/red.
- Cactus left foreground node `4:52`, x `-52.12`, y `324.24`, size `440.51 x 507.58`.
- Barrel/plant decorative node `8:2`, x `961.47`, y `598.74`, size `267.13 x 345.71`.

### Hero Photo Mosaic

Photo cards use `14px` radius.

- Node `4:45` / Rectangle 7: x `85.53`, y `793.11`, size `528.21 x 174.67`.
- Node `4:50` / Rectangle 11: x `85.53`, y `982.44`, size `528.21 x 322.67`.
- Node `4:46` / Rectangle 8: x `628.25`, y `793.11`, size `311.01 x 302.67`.
- Node `4:51` / Rectangle 12: x `628.25`, y `1110.42`, size `311.01 x 194.70`.
- Node `4:49` / Rectangle 10: x `953.77`, y `793.11`, size `282.53 x 512`.

### First Signup Block

- Subtitle node `12:15`: `Mantente informado del evento`, x `547.45`, y `1347.38`.
- Supporting text node `4:9`: `Déjanos tu email y no te pierdas ninguna novedad`, x `368.66`, y `1380.49`, size `595.60 x 48.32`.
- Input rectangle node `4:8`: x `366.02`, y `1428.81`, size `581.35 x 41`, fill `#ffe5c8`, border `rgba(255,51,0,0.38)`, radius `5`.
- CTA rectangle node `4:11`: x `535.48`, y `1497.83`, size `253.95 x 55.02`, fill white, border `#fbd98d`, radius `10`.
- CTA text node `4:12`: `Quiero estar informado`, x `562.78`, y `1515.59`.
- Arrow icon node `13:47`, x `740`, y `1511`, size `32.27 x 32.27`.
- Left/right decorative vehicle assets overlap this region.

### About Event

- Title node `4:13`: `Sobre el evento`, centered around x `661.14`, y `1667.89`, `Apple Garamond 35px`.
- Body node `4:15`, x `459.18`, y `1734.74`, size `411.91 x 94.36`.
  - Text: `We Like Country es una experiencia completa para amantes del country y del western. Un evento donde se unen la música en directo, el baile, los espectáculos y la comunidad country internacional.`
- Subtitle node `4:16`: `Durante el evento podrás disfrutar de:`, x `519.52`, y `1838.45`.
- Three image cards:
  - Rectangle 18: x `64`, y `1903`, size `365.18 x 250.22`, radius `30`.
  - Rectangle 19: x `457`, y `1903`, size `365.18 x 250.22`, radius `30`.
  - Rectangle 20: x `850`, y `1903`, size `365.18 x 250.22`, radius `30`.
- Three feature pills:
  - `Actuaciones country en directo`, box x `129.14`, y `2180.19`, size `234.10 x 64.36`.
  - `Grandes pistas para bailar country`, box x `519.52`, y `2180.19`, size `247.73 x 64.36`.
  - `Espectáculos y ambientación western`, box x `909.94`, y `2180.19`, size `247.73 x 64.36`.
  - Boxes: white, border `#ff3b00`, blur `1.5px`, radius `10`.

### Event Stars

- Section title node `8:4`: `¡Estrellas del evento!`, x `547.99`, y `2395.06`.
- Artist display group node `13:21`, x `417.92`, y `2464.56`, size `506 x 154`.
  - Text: `Pol F Ryan` and `David Villellas`.
  - `Alfa Slab One`, `61.971px`, gradient cream/yellow/red.
- Intro node `8:8`, x `415.04`, y `2645.47`, size `511.75 x 55.88`.
  - Text: `We Like Country contará con la presencia de dos referentes del country actual, artistas que harán vibrar el escenario principal con música en directo y auténtico espíritu western.`
- David Villellas content:
  - Name node `8:12`, x `721.44`, y `2814.33`, `Antonio 30px`, `#ff5900`, right aligned.
  - Bio node `8:13`, x `583.33`, y `2865.83`, size `285.11 x 144.98`, right aligned.
  - Text: `Coreógrafo y referente del country en nuestro país, con más de 29 años de experiencia. Ha sido uno de los grandes precursores del movimiento country aquí, impulsando su crecimiento y evolución desde sus inicios hasta hoy.`
  - Large portrait asset node `8:6`, x `1733.61`, y `2263.13`, size `849.67 x 1230.90`, transformed into view by rotation/flip.
- Pol F Ryan content:
  - Name node `8:10`, x `464.73`, y `3099.99`, `Antonio 30px`, `#ff5900`.
  - Bio node `8:11`, x `464.73`, y `3149.58`, size `306.18 x 136.97`.
  - Text: `Pol F. Ryan es una figura destacada en el mundo del country line dance. Es conocido por diseñar y coreografiar numerosas coreografías de line dance que se bailan en festivales, talleres y clases de country de todo el continente.`
  - Large portrait asset node `14:1033`, x `480.60`, y `2212.37`, size `775.82 x 1294.99`, transformed into view by rotation/flip.
- Decorative strips:
  - Node `16:1072`, x `-382.37`, y `3423.33`, size `940.26 x 121.39`.
  - Node `16:1073`, x `1628.87`, y `3423.33`, size `940.26 x 121.39`, transformed into view.

### Location

- Large empty vertical spacing between star section and map region.
- Location headline node `8:17`: `¡En BARCELONA!`, centered at y `4565.01`, `Alfa Slab One 40px`, white.
- Map panel node `8:14`: x `121.25`, y `4633.14`, size `1037.49 x 318.92`, radius `39`, border `#f30`, border width `3`.
- Map image source: `context-rectangle-13-map.png`, cropped inside the rounded panel.
- Decorative vehicle image appears below/behind the map region.

### Final Signup / Footer Visual

- Decorative top image node `20:21`: x `421.33`, y `5115.65`, size `459.84 x 306.71`, flipped vertically.
- Heading node `17:14`: `¡NO TE LO PIERDAS!`, x `384.25`, y `5104.85`, `Alfa Slab One 45.736px`, `#fd941d`, slight rotation `0.44deg`.
- Supporting text node `8:25`, x `358.90`, y `5188.07`, size `570 x 27.06`.
  - Text: `Sé de los primeros en enterarte de todas las novedades de We Like Country.`
- Input rectangle node `8:26`: x `349.33`, y `5240.48`, size `581.35 x 64.35`, white, border `#fbd98d`, radius `14`.
- CTA rectangle node `13:23`: x `502.84`, y `5332.39`, size `253.95 x 55.02`, white, border `#fbd98d`, radius `10`.
- CTA text node `13:48`: `Apuntarme`, x `576.43`, y `5350.14`.
- Arrow icon node `13:49`, x `663.54`, y `5345.51`, size `32.27 x 32.27`.
- Bottom decorative image node `8:31`: x `11.53`, y `5584.67`, size `1345.57 x 914.75`.

## Asset Inventory

All local files are under `figma-reference/assets/`.

### Context Assets From `get_design_context`

- `context-chatgpt-image-31-ene-2026.png` - `3390 x 1858`; top hero sign/hat art.
- `context-earth-planet.png` - `90 x 90`; language selector globe.
- `context-el-gat-amb-botes-country-shop.png` - `641 x 1024`; David Villellas portrait/art.
- `context-forward-button.png` - `90 x 90`; CTA arrow icon.
- `context-gemini-generated-image-strip.png` - `2688 x 3456`; decorative strip used near y `3423`.
- `context-pngegg-2026-02-03t180349-522-1.png` - `1000 x 667`; final section decorative image.
- `context-pngegg-2026-02-03t180355-808-1.png` - `987 x 597`; vehicle/decorative asset near signup.
- `context-pngegg-3-1.png` - `1024 x 542`; vehicle/decorative asset.
- `context-pngegg-78-1-2.png` - `771 x 983`; cactus/plant decorative asset.
- `context-pngegg-79-1.png` - `904 x 1146`; barrel/plant decorative asset.
- `context-pngegg-88-1.png` - `2362 x 1624`; bottom beer/barrel footer image.
- `context-pngegg-91-6-7-5-4.png` - `1024 x 843`; branch decor reused at top and star section.
- `context-pngegg-95-3-4.png` - `644 x 1245`; palm/leaf decorative asset.
- `context-rectangle-10.png` - `507 x 860`; hero mosaic image.
- `context-rectangle-11.png` - `1200 x 630`; hero mosaic image.
- `context-rectangle-12.png` - `686 x 386`; hero mosaic image.
- `context-rectangle-13-map.png` - `1920 x 1080`; map panel image.
- `context-rectangle-18.png` - `2048 x 1152`; about-event card image.
- `context-rectangle-19.png` - `1280 x 720`; about-event card image.
- `context-rectangle-20.png` - `700 x 700`; about-event card image.
- `context-rectangle-7.png` - `828 x 567`; hero mosaic image.
- `context-rectangle-8.png` - `1024 x 538`; hero mosaic image.
- `context-screenshot-2-upscayl.png` - `822 x 1024`; Pol F Ryan portrait/art.
- `context-vector-1.svg` - dropdown chevron for language selector.

### Assets From `download_assets`

- `figma-node-export.pdf` - full node export, PDF, about `20.5 MB`.
- `raw-image-01.png` through `raw-image-20.png` - original uploaded source images returned by Figma MCP.
- `download_assets` reported `rawImagesTruncated: true`; the node contains more than 20 source images, and the MCP returned only the first 20. The referenced assets from `get_design_context` above were also downloaded separately.

Raw image dimensions:

- `raw-image-01.png` - `987 x 597`.
- `raw-image-02.png` - `90 x 90`.
- `raw-image-03.png` - `1920 x 1080`.
- `raw-image-04.png` - `1000 x 667`.
- `raw-image-05.png` - `494 x 299`.
- `raw-image-06.png` - `215 x 344`.
- `raw-image-07.png` - `480 x 270`.
- `raw-image-08.png` - `500 x 334`.
- `raw-image-09.png` - `2688 x 3456`.
- `raw-image-10.png` - `296 x 203`.
- `raw-image-11.png` - `336 x 432`.
- `raw-image-12.png` - `386 x 492`.
- `raw-image-13.png` - `904 x 1146`.
- `raw-image-14.png` - `1200 x 630`.
- `raw-image-15.png` - `771 x 983`.
- `raw-image-16.png` - `300 x 158`.
- `raw-image-17.png` - `512 x 288`.
- `raw-image-18.png` - `2175 x 2712`.
- `raw-image-19.png` - `686 x 386`.
- `raw-image-20.png` - `644 x 1245`.

## Implementation Notes

- Treat the Figma-generated React/Tailwind output as a reference only. It uses absolute pixel positioning and temporary Figma asset URLs.
- The target implementation should use the local assets in this folder or copy them into the project's normal asset path when implementation begins.
- Preserve the tall editorial structure, western/country imagery density, warm paper background, orange/yellow CTAs, and large decorative off-canvas assets.
- Several apparent repeated assets are intentional reuse of a single source image with different flips/rotations.
- The curved hero text is made from individual rotated letters in Figma; implementation can use either SVG/text-on-path or a rasterized equivalent if exact matching is required.
