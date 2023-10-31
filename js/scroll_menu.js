$(function () {
  var $menu = $("#top_menu ul li"),
    $contents = $("#contents > div");

  console.log($menu);

  $menu.click(function (e) {
    // 리스트 색상변경
    e.preventDefault();
    // $menu.removeClass("on");
    // $(this).addClass("on");
    // $(this).addClass("on").siblings().removeClass("on");

    // 리스트의 해당 값 불러오기
    var idx = $(this).index();
    console.log(idx);

    // 거리 계산
    var section = $contents.eq(idx);
    var sectionDistance = section.offset().top;
    console.log(sectionDistance);

    $("html, body").stop().animate({ scrollTop: sectionDistance }, 500);
  });

  // 리스트 색상변경(.on추가)
  $(window).scroll(function () {
    $contents.each(function () {
      if ($(this).offset().top <= $(window).scrollTop()) {
        var idx = $(this).index();
        $menu.removeClass("on");
        $menu.eq(idx).addClass("on");
      }
    });
  });
});
