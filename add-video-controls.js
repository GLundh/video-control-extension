function f(srcUrl) {
  var v = document.getElementsByTagName("video");
  for (var i = 0; i < v.length; i++) {
    var s = v[i].getElementsByTagName("source");
    for (var j = 0; j < s.length; j++) {
      if (s[j].src == srcUrl) {
        v[i].setAttribute("controls", "true");
      }
    }
  }
  return true;
}

chrome.extension.onMessage.addListener(function (message, sender, callback) {
    if (message.functiontoInvoke == "showControls") {
        f(message.srcUrl);
    }
});
