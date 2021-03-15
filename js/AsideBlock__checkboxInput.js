let brands = [];
let checkboxes = $('.AsideBlock__checkboxLabel');

$.each(checkboxes, function (index, checkbox) {
  console.log(checkbox);
  $(checkbox).on('click', function() {
    $(this).toggleClass('AsideBlock__checkboxInputActive');
    brands.push(this.previousElementSibling.id);
  });
});