AOS.init();

// menu
$(".header_menu").click(function(){
    $(".header_nav").slideToggle(300);
})

// top
$(".btn-top").click(function(){
    $("html,body").animate({ scrollTop:0 },300)
})