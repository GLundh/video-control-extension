function findAndToggle(srcUrl) {
  var v = document.getElementsByTagName("video");
  for (var i = 0; i < v.length; i++) {
    if (v[i].src == srcUrl) {
      toggleElement(v[i]);
      continue;
    }
    var s = v[i].getElementsByTagName("source");
    for (var j = 0; j < s.length; j++) {
      if (s[j].src == srcUrl) {
        toggleElement(v[i]);
        break;
      }
    }
  }
  return true;
}

function toggleElement(e) {
  if (e.hasAttribute("controls")) {
    e.removeAttribute("controls");
  } else {
    e.setAttribute("controls", "");
  }
}

chrome.extension.onMessage.addListener(function (message, sender, callback) {
    if (message.functiontoInvoke == "showControls") {
        findAndToggle(message.srcUrl);
    }
});
