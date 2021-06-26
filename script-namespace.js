const changeFontApp = {
  $addText: $('.addText'),
  $textArea: $('textarea'),

  decreaseFont: function () {
    // decrease font size
    $('#fontDec').on('click', function () {
      let userTextSize = parseInt($('.addText').css('font-size'));
      userTextSize -= 1;
      changeFontApp.$addText.css({ 'font-size': userTextSize });
    });
  },

  increaseFont: function () {
    // increase font size
    $('#fontInc').on('click', function () {
      let userTextSize = parseInt($('.addText').css('font-size'));
      userTextSize += 1;
      changeFontApp.$addText.css({ 'font-size': userTextSize });
    });
  },

  fontFamily: function () {
    // change font family
    $('#font').on('change', function () {
      changeFontApp.$addText.css('font-family', $(this).val());
    });
  },

  increaseLetterSpacing: function () {
    // change letter spacing
    $('#fontSpace').on('click', function () {
      let userTextSpace = parseInt($('.addText').css('letter-spacing'));
      userTextSpace += 1;
      changeFontApp.$addText.css({ 'letter-spacing': userTextSpace });
    });
  },

  fontColor: function () {
    // change font color
    $('#color').on('change', function () {
      changeFontApp.$addText.css('color', $(this).val());
    });
  },

  userInput: function () {
    // user input text
    $('form').on('submit', function (event) {
      event.preventDefault();
      const text = changeFontApp.$textArea.val().trim();
      if (text !== '') {
        changeFontApp.$addText.append(`<p>${text}</p><br />`);
      }
      changeFontApp.$textArea.val('');
    });
  },

  reset: function () {
    // reset
    $('#fontReset').on('click', function () {
      changeFontApp.$addText.css({
        'font-size': changeFontApp.$originalFontSize,
      });
      changeFontApp.$addText.css({
        'letter-spacing': changeFontApp.$originalFontSpacing,
      });
      changeFontApp.$addText.css({
        'font-family': changeFontApp.$originalFontFamily,
      });
      changeFontApp.$addText.css({ color: changeFontApp.$originalFontColor });
    });
  },

  showFontOption: function () {
    //show font family options
    $('#fontFamily').on('click', function () {
      $('.fontMenu').toggle('slow');
    });
  },

  showColorOption: function () {
    // show font color options
    $('#fontColor').on('click', function () {
      $('.colorMenu').toggle('slow');
    });
  },

  delete: function () {
    // delete user inputs
    $('#fontDelete').on('click', function (event) {
      event.preventDefault();
      changeFontApp.$addText.empty();
    });
  },

  init: function () {
    changeFontApp.$originalFontFamily = $('body').css('font-family');
    changeFontApp.$originalFontColor = $('body').css('color');
    changeFontApp.$originalFontSize = $('body').css('font-size');
    changeFontApp.$originalFontSpacing = $('body').css('letter-spacing');

    changeFontApp.decreaseFont();
    changeFontApp.increaseFont();
    changeFontApp.fontFamily();
    changeFontApp.increaseLetterSpacing();
    changeFontApp.fontColor();
    changeFontApp.userInput();
    changeFontApp.reset();
    changeFontApp.showFontOption();
    changeFontApp.showColorOption();
    changeFontApp.delete();
  },
};

$('document').ready(function () {
  changeFontApp.init();
});
