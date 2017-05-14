$(function(){
  chrome.tabs.query({currentWindow: true, pinned: false}, function (tabs) {
    var i = 0;

    tabs.forEach(function(tab) {

      $('#linkList').append(
        '<div class="col-sm-12 linkContentItem"><input type="checkbox" id="' +
        i + '">&nbsp;&nbsp;<label for="' + i + '">' + tab.title + '</label></div>'
      );
      i++;
    });

    $('input').on('change', function(){
      var id = $(this).attr("id");
      var link = '[info][title]' + tabs[id].title + '[/title]' + tabs[id].url + '[/info]\n\n';
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
