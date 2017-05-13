$(function(){
  chrome.tabs.query( {active: true, lastFocusedWindow: true}, function (tabs) {
    var tab = tabs[0];
    var link = '[info][title]' + tab.title + '[/title]' + tab.url + '[/info]\n';
    $('#link').val(link);
    var clipboard = new Clipboard('.btn');
  });
  clipboard.on('success', function(e) {
    e.clearSelection();
  });
});
