  //codigo jquery utilizado
  $(document).ready(function($) {
    //utilizando objeto jquery para tratar o iframe (deixar mudo)
    $("#video").vimeo("setVolume", 0);

    //codigo utilizado no menu de telefones 
    $('.tel-item').on('click', function(){
      $(this).parent().find('ul').toggle('slow');
      $(this).parent().find('ul li span.nome').css('font-weight', 300);
      if($($(this).children()[1]).hasClass('fa-angle-down')){
        $($(this).children()[1]).removeClass('fa-angle-down');
        $($(this).children()[1]).addClass('fa-angle-up');
      }else{
        $($(this).children()[1]).addClass('fa-angle-down');
        $($(this).children()[1]).removeClass('fa-angle-up');
      }
    });

    $(window).on("scroll", function() {
      if($(window).scrollTop() > 100) {
        $(".showcase-nav").addClass("backblack");
      } else {
        $(".showcase-nav").removeClass("backblack");
      }
  });
  });