$( document ).ready(function(){


  //initialize
  $('.page').hide();
  $('#home').show();

  //toggle views
  var links = $('.links');
  links.click(function(e){
    e.preventDefault();
    $('.page').hide();
    $('.nav-parent').removeClass('active');

    var
        $this = $(this),
        pageId = $this.attr('href'),
        parentEl = $this.parent();

    parentEl.addClass('active');
    $(pageId).show();
  });

});
