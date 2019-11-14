$('.spoiler').on('click', function (event) {
    console.log(event);
    //spoiler.fadeIn(1000);
    /*$button.fadeOut(1000);*/
    $(this).prev().show();
    $(this).hide();
});


const spoiler = $('.spoiler span');
  const $button = $('<button> Reveal Spoiler</button>');
  spoiler.hide();



  $('.spoiler').append($button);

 /* button.click(function () {
      console.log('clicked');
      spoiler.fadeIn(1000);
      button.fadeOut(1000);
  });*/



 // use event delegation to add event listener to the parent





