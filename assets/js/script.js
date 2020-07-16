      
  var videoSrc = $("#modal1 iframe").attr("src");

  $('#modal1').on('show.bs.modal', function () { // on opening the modal
    // set the video to autostart
    $("#modal1 iframe").attr("src", videoSrc+"&amp;autoplay=0");
  });
  
  $("#modal1").on('hidden.bs.modal', function (e) { // on closing the modal
    // stop the video
    $("#modal1 iframe").attr("src", null);
  });