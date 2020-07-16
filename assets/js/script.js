

  $(document).ready(function() {
    $('#modal1').on('hidden.bs.modal', function() {
      var $this = $(this).find('iframe');
      tempSrc = $this.attr('src');
          $this.attr('src', "");
    });
  

    $(document).ready(function() {
        $('#modal1').on('shown.bs.modal', function() {
          var $this = $(this).find('iframe'),
            tempSrc = $this.attr('src');
          $this.attr('src', tempSrc);
        })});
    })
      