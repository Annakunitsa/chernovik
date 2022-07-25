var t=1;$(window).scroll((function(){$("#counter").each((function(){$(this).offset().top<$(window).scrollTop()+100&&t<2&&$("div").each((function(){var n=1,o=$(this).data("num"),c=2e3/o,i=$(this),a=setInterval((function(){n<=o?i.html(n):(t+=2,clearInterval(a)),n++}),c)}))}))}));
//# sourceMappingURL=index.94971d74.js.map
