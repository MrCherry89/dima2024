$(document).ready(function () {
  $(".right-info .icon").on("click", function () {
    $(this).closest(".info").find(".info-wrap").addClass("show");
  });
  $(".info-wrap .close").on("click", function () {
    $(this).closest(".info-wrap").removeClass("show");
  });
  $(".date-btn").on("click", function () {
    $(this).find(".hide-img").toggleClass("show");
  });
});
