chrome.browserAction.onClicked.addListener(function(tab) {
prompt('' ,'[info][title]' + tab.title + '[/title]' + tab.url + '[/info]');
});
