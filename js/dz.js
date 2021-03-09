$("#priceSlider").slider({
  animate: "slow",
  max: 100,
  min: 0,
  range: true,
  values: [0, 100],
  value: 50
});

$('#tagsHeaderFilter').on('click blur', function() {
  $(this).toggleClass('tagsHeader__filterActive');
});

let tags = $('#section4 .tagsLi');
$.each(tags, function(index, value) {
  $(value).on('click', function() {
    let tagValue = this.innerHTML;
    $('#section4 .tagsTag').text(tagValue);
    UIkit.dropdown('#section4 .tags__dropdown').hide(0);
  });
});

$('#navSearchClose').on('click', function() {
  UIkit.drop('#section1 .navbar__search').hide(0);
});

$('#section4 #priceFrom').val($("#priceSlider").slider('values', 0));
$('#section4 #priceTo').val($("#priceSlider").slider('values', 1));
$("#section4 #priceSlider").on("slidechange slidecreate slide", function( event, ui ) {
  $('#section4 #priceFrom').val($("#priceSlider").slider('values', 0));
  $('#section4 #priceTo').val($("#priceSlider").slider('values', 1));
});

$('#section10 .product__sliderLi').on('mouseenter', function() {
  $(this).css('overflow', 'visible');
  $('#section10 .product__sliderList').css('overflow', 'visible');
  $('#section10 .product__buy').css('z-index', '-1');
});

$('#section10 .product__sliderLi').on('mouseleave', function() {
  $(this).css('overflow', 'hidden');
  $('#section10 .product__sliderList').css('overflow', 'hidden');
  $('#section10 .product__buy').css('z-index', '0');
});

if ($(document).width() <= 500) {
  UIkit.sticky('#header');
  try {
    $('#section11 .table__body').removeClass('uk-grid-medium');
    $('#section11 .table__body').addClass('uk-grid-small');
  } catch (error) {
    console.log(error);
  }
}

if ($(document).width() < 500) {
  $('#productSlider').css('display', 'none');
}