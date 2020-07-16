

  // $(document).ready(function() {
  //   $('#modal1').on('hidden.bs.modal', function() {
  //     var $this = $(this).find('iframe');
  //     tempSrc = $this.attr('src');
  //         $this.attr('src', "");
  //   });
  

  //   $(document).ready(function() {
  //       $('#modal1').on('shown.bs.modal', function() {
  //         var $this = $(this).find('iframe'),
  //           tempSrc = $this.attr('src');
  //         $this.attr('src', tempSrc);
  //       })});
  //   })
      
  var videoSrc = $("#modal1 iframe").attr("src");

  $('#modal1').on('show.bs.modal', function () { // on opening the modal
    // set the video to autostart
    $("#modal1 iframe").attr("src", videoSrc);
  });
  
  $("#modal1").on('hidden.bs.modal', function (e) { // on closing the modal
    // stop the video
    $("#modal1 iframe").attr("src", null);
  });