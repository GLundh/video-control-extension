function genericOnClick(info, tab) {
  chrome.tabs.query({
         "active": true,
         "currentWindow": true
     }, function (tabs) {
         chrome.tabs.sendMessage(tabs[0].id, {
             "functiontoInvoke": "showControls",
             "srcUrl": info.srcUrl
         });
     });
}

var id = chrome.contextMenus.create({
  "title": "Show video controls",
  "contexts":["video"],
  "onclick": genericOnClick
}, function() { console.log("Created \"Show Controls\" context menu item.")});
