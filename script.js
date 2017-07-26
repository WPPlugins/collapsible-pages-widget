
(function($){
	$(function(){
		$(".widget_collapsible_pages_widget .icon-plus").click(function(evt){
			var target = $(evt.currentTarget);

			target.parent().siblings("ul.children").removeClass("hidden").show(200);
			target.hide();
			target.siblings('.icon-minus').removeClass("hidden").show();

		});

		$(".widget_collapsible_pages_widget .icon-minus").click(function(evt){
			var target = $(evt.currentTarget);

			target.parent().siblings("ul.children").addClass("hidden").hide(200);
			target.hide();
			target.siblings('.icon-plus').removeClass("hidden").show();

		});
		$(document).trigger("collapsible_pages_ready");
    });
})(jQuery);


function expand_to_page(id){
	(function($){
		var li = $(".widget_collapsible_pages_widget [data-page-id='" + id + "']");
		var parent = li.parent("ul.children");
		while(parent.length > 0) {
            parent.siblings(".toggle-item").children(".icon-plus").click();
			parent = parent.parent().parent("ul.children");
		}
	})(jQuery);
}