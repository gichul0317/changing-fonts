$(document).ready(function () {
  // default font styles
  let originalFontFamily = $('body').css('font-family');
  let originalFontColor = $('body').css('color');
  let originalFontSize = $('body').css('font-size');
  let originalFontSpacing = $('body').css('letter-spacing');

  // decrease font size
  $('#fontDec').on('click', function () {
    let userTextSize = parseInt($('.addText').css('font-size'));
    userTextSize -= 1;
    $('.addText').css({ 'font-size': userTextSize });
  });

  // increase font size
  $('#fontInc').on('click', function () {
    let userTextSize = parseInt($('.addText').css('font-size'));
    userTextSize += 1;
    $('.addText').css({ 'font-size': userTextSize });
  });

  // change font family
  $('#font').on('change', function () {
    $('.addText').css('font-family', $(this).val());
  });

  // change letter spacing
  $('#fontSpace').on('click', function () {
    let userTextSpace = parseInt($('.addText').css('letter-spacing'));
    userTextSpace += 1;
    $('.addText').css({ 'letter-spacing': userTextSpace });
  });

  // change font color
  $('#color').on('change', function () {
    $('.addText').css('color', $(this).val());
  });

  // user input text
  $('form').on('submit', function (event) {
    event.preventDefault();
    const text = $('textarea').val();
    if (text !== '') {
      $('.addText').append(`<p>${text}</p><br />`);
    }
    $('textarea').val('');
  });

  // reset
  $('#fontReset').on('click', function () {
    $('.addText').css({ 'font-size': originalFontSize });
    $('.addText').css({ 'letter-spacing': originalFontSpacing });
    $('.addText').css({ 'font-family': originalFontFamily });
    $('.addText').css({ color: originalFontColor });
  });

  //show font family options
  $('#fontFamily').on('click', function () {
    $('.fontMenu').toggle('slow');
  });

  // show font color options
  $('#fontColor').on('click', function () {
    $('.colorMenu').toggle('slow');
  });

  // delete user inputs
  $('#fontDelete').on('click', function (event) {
    event.preventDefault();
    $('.addText').empty();
  });
});
