# FaceSwap Studio

Mobile-first prototype for preparing a two-person video face-swap job.

## Current status

This first commit contains the interface and local media previews only. It does **not** detect faces, replace faces, process video, or export a rendered MP4 yet.

## Prototype features

- Select a source video.
- Select two separate face reference photos.
- Preview selected media locally in the browser.
- Choose which detected person each reference photo should represent (manual assignment UI placeholder).
- Responsive layout designed for iPhone.

## Run locally

Open `index.html` in a modern browser, or serve this folder with any static HTTP server.

## Next engineering steps

1. Add a consent and rights confirmation before processing.
2. Add a backend job API with authentication, upload limits, progress reporting, and automatic source-file deletion.
3. Integrate a compatible face detection/tracking and face-swap engine.
4. Preserve the original audio stream and encode the output as MP4.
5. Test on iPhone Safari and Android Chrome.

## Privacy and consent

Only upload media you own or have permission to use. Do not upload identity documents. Use an ordinary face photo instead. This prototype keeps preview URLs in the browser and does not upload media anywhere.

## License

No third-party face-swap engine or model is bundled in this repository. Review the license of any engine and model before integrating or deploying it, especially for commercial use.
