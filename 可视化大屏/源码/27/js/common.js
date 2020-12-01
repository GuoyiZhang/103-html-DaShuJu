/*青 岛 研 锦 网 络 科 技 有 限 公 司   版权所有*/
$(function () {
    $(".header_nav>ul>li>a").on("click",function () {
        $(this).addClass("nav_current").parent("li").siblings("li").children("a").removeClass("nav_current");
    })

    $(".header_nav>ul>li").hover(function () {
        $(this).children("ul").toggle();
    })

    $(".header>.header_nav>ul>li>ul>li").hover(function () {
        $(this).children("ul").toggle();
    })

    /*青 岛 研 锦 网 络 科 技 有 限 公 司   版权所有*/


    $("#add_ipt").on("click",function () {
        $('#modal_add').modal();
    })


    $("#date_ipt").on("click",function () {
        $('#myModal').modal();
    })

    $("#video_ipt").on("click",function () {
        $('#Modal').modal();
    })







})
