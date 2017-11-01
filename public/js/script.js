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

    //colocar uma cor na navbar, ao rolar pra baixo
    $(window).on("scroll", function() {
      if($(window).scrollTop() > 100) {
        $(".showcase-nav").addClass("backblack");
      } else {
        $(".showcase-nav").removeClass("backblack");
      }
    });

    //codigo utilizado nos radiobuttons da isca
    $('label').on('click', function(){
      $('label').each(function(index){
        $(this).css('background-color', '#1c1c1c');
        $(this).css('border', '2px solid #fff');
      });
      $(this).css('background-color', '#fff');
    })

    //codigo utilizado no checkbox da isca
    $('.check_pgp').on('click', function(){
      if($(this).hasClass('fa-square-o')){
        $(this).removeClass('fa-square-o');
        $(this).addClass('fa-square');
        //o campo checkbox não existe no HTML, mas caso existisse poderia dar o check nele aqui pelo js
      }else{
        $(this).addClass('fa-square-o');
        $(this).removeClass('fa-square');
      }
    });

    //codigo utilizado nos botes de controle do carousel
    $('a').on('click', function(){
      if(!$(this).hasClass('carousel-control-prev') && !$(this).hasClass('carousel-control-next')){
        return false;
      }
    })

    //codigo utilizado na navbar responsiva
    $('.resp').on('click', function(){
      if($(this).parent().parent().hasClass('responsivo')){
        $(this).parent().parent().removeClass('responsivo');
      }else{
        $(this).parent().parent().addClass('responsivo');
      }
    });

    //codigo utilizado ao clickar sobre alguma versão
    $('.vers').on('click', function(){
      $('p.vers').each(function(index){
        $(this).removeClass('ativo');
      });
      $(this).addClass('ativo');
    })

    //codigo utilizado nos botoes de controle do carousel
    $('.corousel-control-prev').on('click', function(){
      console.log('prev');
      $('#carousel').carousel('prev');
    });

    $('.corousel-control-next').on('click', function(){
      console.log('next');
      $('#carousel').carousel('next');
    });
  });