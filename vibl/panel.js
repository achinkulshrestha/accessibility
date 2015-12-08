// This one acts in the context of the panel in the Dev Tools
//
// Can use
// chrome.devtools.*
// chrome.extension.*
//
document.querySelector('#runAudit').addEventListener('click', function() {
    sendObjectToInspectedPage({action: "runAudit", content: "content_for_audit"});
}, false);

document.querySelector('#insertscript').addEventListener('click', function() {
    sendObjectToInspectedPage({action: "script", content: "axs_testing.js"});
}, false);

// document.querySelector('#insertmessagebutton').addEventListener('click', function() {
//     sendObjectToInspectedPage({action: "code", content: "document.body.innerHTML='<button>Send message to DevTools</button>'"});
//     sendObjectToInspectedPage({action: "script", content: "messageback-script.js"});
// }, false);
