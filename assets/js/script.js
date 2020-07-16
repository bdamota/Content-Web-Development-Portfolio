  var videoSrc = $("#modal1 video").attr("src");
  $("#modal1").on("hide.bs.modal", function(e) {
    // a poor man's stop video
    $("#video").attr("src", videoSrc);
  });