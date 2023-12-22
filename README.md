# URL Shortener Chrome Extension

## Overview
This Chrome Extension allows users to quickly and easily shorten URLs using the 2s.gg service directly from their browser. With just a click, the current webpage's URL is shortened, and the result is copied to the clipboard.

## Features
- **Easy to Use**: Simply click the extension icon to shorten the URL of the current tab.
- **Instant Copy**: The shortened URL is automatically copied to your clipboard.
- **Notification**: Users receive immediate feedback when the URL has been shortened and copied.

## Installation
1. **Download the Extension**: Download the latest version of the extension from the releases section.
2. **Load in Chrome**:
    - Open Chrome and navigate to `chrome://extensions/`.
    - Enable "Developer mode" at the top right.
    - Click "Load unpacked" and select the unzipped folder of the extension.

## Usage
- Navigate to the webpage you want to shorten.
- Click on the extension icon in your Chrome toolbar.
- The shortened URL will be automatically copied to your clipboard, and a message will confirm the action.

## Development
This extension was developed using HTML, JavaScript, and the Chrome Extensions API. The main files are:

- `manifest.json`: Contains metadata and settings for the extension.
- `popup.html`: The markup for the popup displayed when clicking the extension icon.
- `popup.js`: The script handling the shortening and clipboard operations.

## Contributing
Contributions are welcome! If you have suggestions or want to improve the extension, feel free to fork the repository and submit a pull request.

## License
This project is licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute the code as you see fit.

## Acknowledgements
- Thanks to 2s.gg for providing the URL shortening API.
- This extension is inspired by the need for quick, hassle-free URL shortening.

## Support
If you encounter any issues or have suggestions, please open an issue in the repository.

---

Enjoy using the URL Shortener Chrome Extension to make your browsing and sharing experience more efficient!
