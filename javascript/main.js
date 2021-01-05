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

      $("#bk-arw").click(function(){
        $("#bk-arw").toggle();
        $("#prm-text").toggle();
        $("#sd-text").toggle();
      });

      $("#bk-arw2").click(function(){
        $("#bk-arw2").toggle();
        $(".list").toggle();
        $(".content").toggle();
      });

      $("img").click(function(){
        $("#bk-arw").toggle();
        $("#prm-text").toggle();
        $("#sd-text").toggle();
      });

      $("#btm-rt").click(function(){
        $("#bk-arw2").toggle();
        $(".list").toggle();
        $(".content").toggle();
      });

});