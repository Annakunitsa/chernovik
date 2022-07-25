!function(){var n=1;$(window).scroll((function(){$("#counter").each((function(){$(this).offset().top<$(window).scrollTop()+100&&n<2&&$("div").each((function(){var t=1,o=$(this).data("num"),c=2e3/o,i=$(this),a=setInterval((function(){t<=o?i.html(t):(n+=2,clearInterval(a)),t++}),c)}))}))}))}();
//# sourceMappingURL=index.69f3471f.js.map
