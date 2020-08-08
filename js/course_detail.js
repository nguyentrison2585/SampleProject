$(document).ready(function(){
  if ($(window).width() > 992) {
    $(window).scroll(function fix_element() {
      var hT = $('#course-detail').offset().top,
      hH = $('#course-detail').outerHeight(),
      lT = $('#list-course').offset().top;
      if ($(window).scrollTop() > (hT - 60)) {
        $('#block-buy').css({ 'position': 'fixed', 'top': '70px' });
        if ($(window).scrollTop() > lT - 60) {
          $('#block-buy').css({ 'position': 'relative', 'top': lT-hT});
        }
      }
      else {
        $('#block-buy').css({ 'position': 'relative', 'top': 'auto' });
      }
      return fix_element;
    }());
  }
});
