# WebGL Games Integration

This folder contains WebGL builds of games that can be played directly in the browser on project pages.

## Structure

```
assets/webgl/
├── memorize/          # Memorize game WebGL build
├── solopong/          # SoloPong game WebGL build  
├── reflexion/         # Reflexion game WebGL build
└── README.md          # This file
```

## How to Add Unity WebGL Builds

1. **Build your Unity game for WebGL:**
   - In Unity, go to File → Build Settings
   - Select "WebGL" platform
   - Click "Build" and choose a folder (e.g., `memorize_webgl_build`)

2. **Copy the build files:**
   - Copy all files from your Unity WebGL build folder
   - Paste them into the appropriate project folder (e.g., `assets/webgl/memorize/`)
   - The main file should be named `index.html`

3. **Update the project page:**
   - The iframe in the project page will automatically load your Unity WebGL build
   - No additional changes needed if you keep the `index.html` filename

## Example Unity WebGL Build Structure

```
assets/webgl/memorize/
├── index.html         # Main HTML file (Unity generates this)
├── Build/             # Unity build files
│   ├── memorize.data
│   ├── memorize.framework.js
│   ├── memorize.loader.js
│   └── memorize.wasm
└── TemplateData/      # Unity template files
    ├── UnityProgress.js
    └── ...
```

## Current Demo

The `memorize/index.html` file contains a simple HTML5 Canvas game demo that shows how WebGL games can be integrated. Replace this with your actual Unity WebGL build.

## Notes

- Unity WebGL builds are typically large files (several MB)
- Consider compressing assets and using Unity's compression settings
- Test the build in different browsers for compatibility
- The iframe approach works well for embedding games in Jekyll pages
