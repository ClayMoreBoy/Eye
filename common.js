$(function () {
    var $article = $("#articles").find(".article"),
    $link = $("#content").find("a");
    $article.has(".thumb").addClass("hasimg").filter(":contains(\u005b\u89c6\u9891\u005d)").addClass("hasvid");
    $link.attr("target", "_blank").not("[href*='benyuanzu.com']").attr("rel", "nofollow");

    $("#menu").on('click', function () {
        $("#nav").slideToggle(300);
    });

    if ($(window).width() > 1260) {
        $("#sidebar").html("<iframe width='100%' height='612' class='share_self' frameborder='0' scrolling='no' src='//widget.weibo.com/weiboshow/index.php?language=&width=0&height=612&fansRow=1&ptype=1&speed=0&skin=5&isTitle=1&noborder=1&isWeibo=1&isFans=0&uid=3200195931&verifier=108c97b0&colors=eeeeee,ffffff,333333,0082cb,ffffff&dpc=1'></iframe>");
        $("#comments").html("<wb:comments border='n' width='auto' color='cccccc,ffffff,555555,00a3cf,cccccc,f0f0f0' appkey='840464270' ralateuid='3200195931'></wb:comments>");
        $.getScript("//tjs.sjs.sinajs.cn/open/api/js/wb.js?appkey=840464270");
    };
});