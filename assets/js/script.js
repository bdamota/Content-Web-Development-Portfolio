      
  var videoSrc = $("#modal1 video").attr("src");

  // $('#modal1').on('show.bs.modal', function () { // on opening the modal
  //   // set the video to autostart
  //   $("#modal1 video").attr("src", videoSrc);
  // });
  
  $("#modal1").on('hidden.bs.modal', function (e) { // on closing the modal
    // stop the video
    $("#modal1 video").attr("src", null);
  });