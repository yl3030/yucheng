AOS.init();

// menu
$(".header_menu").click(function(){
    $(".header_nav").slideToggle(300);
})

// top
$(".btn-top").click(function(){
    $("html,body").animate({ scrollTop:0 },300)
})


// 品牌代理下拉選單
$(".brand_listContent_kind-m-active").click(function(){
    $(this).parents(".brand_listContent_kind-m").find(".brand_listContent_kind-m-list").slideToggle(300);
})
$(document).click(function (event) {
    var area = $(".brand_listContent_kind-m");
    if (!area.is(event.target) && area.has(event.target).length === 0) {
        $(".brand_listContent_kind-m-list").slideUp(300);
    }
});