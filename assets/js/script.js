$('#modal1').on('shown.bs.modal', function () {
    $('#video1')[0].play();
  })

  $('#modal1').on('hidden.bs.modal', function () {
    $('#video1')[0].pause();
  })