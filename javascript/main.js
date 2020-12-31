$(document).ready(function() {

    $("span").hover(
        function () {
            $(this).addClass("hoverState");
        },
        function () {
            $(this).delay(10000).queue(function() {
                $(this).removeClass("hoverState");
                $(this).dequeue();
             });
        }
      );

      $("a").hover(
        function () {
            $(this).addClass("hoverState");
        },
        function () {
            $(this).delay(3000).queue(function() {
                $(this).removeClass("hoverState");
                $(this).dequeue();
             });
        }
      );

      $(".superscript").hover(
        function () {
            $(this).addClass("hoverState");
        },
        function () {
            $(this).delay(3000).queue(function() {
                $(this).removeClass("hoverState");
                $(this).dequeue();
             });
        }
      );

});