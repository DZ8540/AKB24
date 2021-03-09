let checkboxes = $('.AsideBlock__checkboxLabel');
$.each(checkboxes, function (index, checkbox) {
  $(checkbox).on('click', function() {
    $(this).toggleClass('AsideBlock__checkboxInputActive');
  });
});