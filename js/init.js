$(document).ready(function(){

    // NavButton Collapse
    $(".button-collapse").sideNav();
    //$('.collapsible').collapsible();

    // Tooltip
    $('.tooltipped').tooltip({delay: 50});

    // ScrollSpy
    $('.scrollspy').scrollSpy();

    // Verificar scroll e modificar header
    function check_scroll() {
	    if($(document).scrollTop() > 10)
	    	$(".navbar-fixed .navbar-color").addClass('navbar-color-bg');
	    else
	    	$(".navbar-fixed .navbar-color").removeClass('navbar-color-bg');
	}
	$(document).on('scroll', check_scroll);
	check_scroll(); // end Verificar Scroll e modificar header

	// Verificar scroll e aplicar botão de voltar
    function check_scroll_btn() {
	    if($(document).scrollTop() > 1400)
	    	$(".fixed-action-btn .btn-floating").addClass('btn-show');
	    else
	    	$(".fixed-action-btn .btn-floating").removeClass('btn-show');
	}
	$(document).on('scroll', check_scroll_btn);
	check_scroll_btn(); // end Verificar Scroll e aplicar botão de voltar

	// Âncoras
	$("a[href*=\\#]:not([href=\\#])").click(function() {
        if (location.pathname.replace(/^\//,"") == this.pathname.replace(/^\//,"") && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $("[name=" + this.hash.slice(1) +"]");
            if (target.length) {
                $("html,body").animate({
                scrollTop: target.offset().top - 60
            }, 1000);
            return false;
            }
        }
    }); // end Âncoras

    // Floating-Fixed table of contents
    setTimeout(function() {
      var tocWrapperHeight = 260; // Max height of ads.
      var tocHeight = $('.toc-wrapper .table-of-contents').length ? $('.toc-wrapper .table-of-contents').height() : 0;
      var socialHeight = 95; // Height of unloaded social media in footer.
      var footerOffset = $('body > footer').first().length ? $('body > footer').first().offset().top : 0;
      var bottomOffset = footerOffset - socialHeight - tocHeight - tocWrapperHeight;

      if ($('nav').length) {
        $('.toc-wrapper').pushpin({
          top: $('nav').height(),
          bottom: bottomOffset
        });
      }
      else if ($('#index-banner').length) {
        $('.toc-wrapper').pushpin({
          top: $('#index-banner').height(),
          bottom: bottomOffset
        });
      }
      else {
        $('.toc-wrapper').pushpin({
          top: 0,
          bottom: bottomOffset
        });
      }
    }, 100);

}); // end of document ready

