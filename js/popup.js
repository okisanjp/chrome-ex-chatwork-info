$(function(){
  chrome.tabs.query({currentWindow: true, pinned: false}, function (tabs) {
    var i = 0;

    tabs.forEach(function(tab) {
      var c = "";
      if (tab.selected) {
        c = " checked";
        var link = '[info][title]' + tab.title + '[/title]' + tab.url + '[/info]\n';
        var currentContent = $('#postContent').val();
        $('#postContent').val(currentContent + link);
      }
      $('tbody#linkList').append(
        '<tr><td><label><input type="checkbox" id="' +
        i + '"' + c + '>&nbsp;&nbsp;' + tab.title + '</label></td></tr>'
      );
      i++;
    });

    $('input').on('change', function(){
      var id = $(this).attr("id");
      var link = '[info][title]' + tabs[id].title + '[/title]' + tabs[id].url + '[/info]\n';
      var currentContent = $('#postContent').val();
      if ($(this).prop('checked')) {
        $('#postContent').val(currentContent + link);
      } else {
        currentContent = currentContent.replace(link, '');
        $('#postContent').val(currentContent);
      }
    });
  });

  var clipboard = new Clipboard('.btn');
  clipboard.on('success', function(e) {
    window.close();
  });
});
