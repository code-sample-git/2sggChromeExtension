chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  document.getElementById('shortenBtn').addEventListener('click', function() {
    const urlToShorten = tabs[0].url;
    fetch('https://2s.gg/api/urls/shorturl', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ "url": urlToShorten })
    })
    .then(response => response.json())
    .then(data => {
      // Copy the shortened URL to the clipboard
      navigator.clipboard.writeText(data.short).then(function() {
        // Update the text to indicate the URL has been copied
        document.getElementById('result').textContent = `Shortened URL (copied to clipboard): ${data.short}`;
      }, function(err) {
        console.error('Could not copy text: ', err);
      });
    })
    .catch(error => {
      console.error('Error:', error);
    });
  });
});
