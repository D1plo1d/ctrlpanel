chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('/index.html', {
    width: 1200,
    height: 700,
    minWidth: 800,
    minHeight: 600,
    left: 100,
    top: 100,
    type: 'shell'
  });
});