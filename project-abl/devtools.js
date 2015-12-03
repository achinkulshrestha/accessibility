// DevTools page -- devtools.js
// Create a connection to the background page
chrome.devtools.panels.create("My panel",
  "logo.PNG",
  "panel.html"
);

var backgroundPageConnection = chrome.runtime.connect({
    name: "devtools-page"
});

backgroundPageConnection.onMessage.addListener(function (message) {
    bglog(message);
    // Handle responses from the background page, if any
});

// Relay the tab ID to the background page
chrome.runtime.sendMessage({
    tabId: chrome.devtools.inspectedWindow.tabId,
    scriptToInject: "content_script.js"
});

// console.log in the background page
var bglog = function(obj) {
	if(chrome && chrome.runtime) {
		chrome.runtime.sendMessage({type: "bglog", obj: obj});
	}
}
//
// // Call the run method in the axs_testing.js file
//chrome.devtools.inspectedWindow.eval("axs.Audit.run()");
