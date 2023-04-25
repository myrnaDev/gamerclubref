!(function($) {
	$('.tos-button').click(function() {
        var $menu = $('.tos-show');
        if ($menu.is(':visible')) {
            // Slide away
            $menu.animate({left: -($menu.outerWidth() + 2)}, function() {
                $menu.hide();
            });
        }
        else {
            // Slide in
            $menu.show().animate({left: 0});
        }
    });
})(jQuery);