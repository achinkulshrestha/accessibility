// Background page -- background.js
chrome.runtime.onConnect.addListener(function(connection) {
    // assign the listener function to a variable so we can remove it later
    var devToolsListener = function(message, sender, sendResponse) {
        // Inject a content script into the identified tab
        switch(message.type) {
            case "bglog":
                console.log(message.obj);
            break;
        }
        chrome.tabs.executeScript(message.tabId,
              { file: message.scriptToInject });
        sendResponse({msg_from_background: "injected content script"});
    }
    // add the listener
    connection.onMessage.addListener(devToolsListener);

    connection.onDisconnect.addListener(function() {
         connection.onMessage.removeListener(devToolsListener);
    });


});
