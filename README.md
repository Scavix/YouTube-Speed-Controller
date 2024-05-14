# YouTube Speed Controller

A simple Chrome extension that allows you to speed up YouTube videos using a button.

## Features

- Increase the playback speed of YouTube videos by 0.25x with a single click.
- Works on any YouTube video page where the video player is accessible.

## Installation

1. Clone or download this repository.
2. Open Google Chrome and navigate to `chrome://extensions/`.
3. Enable "Developer mode" by toggling the switch in the top right corner.
4. Click "Load unpacked" and select the directory containing the extension files.

## Usage

1. Navigate to a YouTube video page.
2. Click the extension's icon (a speedometer or similar icon) in the Chrome toolbar.
3. Click the "Speed Up" button in the extension popup to increase the video's playback speed by 0.25x.
4. Repeat step 3 to further increase the playback speed.
5. Do the same to slow down by using the slow down button

## Notes

- This extension modifies the `playbackRate` property of the video element, which is a standard HTML5 feature supported by most modern browsers.
- The extension currently increases the playback speed by a fixed amount (0.25x) with each click. You can modify the `popup.js` file to change this behavior if desired.
- If YouTube's DOM structure changes in the future, the `speedUpVideo` function in `popup.js` may need to be updated to select the video player correctly.
- This is intended to be a tool for myself, you are free to modify or change whatever you want

## Contributing

Contributions are welcome! Please open an issue or submit a pull request if you have any improvements or bug fixes.

## License

This project is licensed under the [MIT License](LICENSE).
