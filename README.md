# Youtube Anti-SI

Browser extension(s) to automatically remove the `si` parameter from share urls on `*.youtube.com`  domains.

## Firefox

The Firefox extension is published at [addons.mozilla.org](https://addons.mozilla.org/en-US/firefox/addon/youtube-anti-si/).

### Installing Manually / Testing

1. Clone this repo
2. Open Firefox
3. Enter "[about:debugging](about:debugging)" in the URL bar
4. Click "This Firefox"
5. Click "Load Temporary Add-on"
6. Open the [extension's directory](/Firefox%20Extension/) and select any file inside the extension.

This will unfortunately unload once you close firefox, so the published version is recommended.

## Chromium

An extension like this obviously won't pass inspection by Google, so there is no published release.

### Installing Manually / Testing

1. Clone this repo
2. Open the Chromium browser of your choice
3. Enter [chrome://extensions/](chrome://extensions/) in the URL bar
4. Turn on "Developer Mode"
5. Click "Load Unpacked"
6. Select [manifest.json](/Chromium%20Extension/manifest.json)

Unlike Firefox this should stay active even after you close your browser. If it does not you can navigate back to [chrome://extensions/](chrome://extensions/) and toggle the extension back on. If you move the repo directory you will need to remove the extension and add it again using the steps above.