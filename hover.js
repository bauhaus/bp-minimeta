jQuery(document).ready(function($){

	$("div.entry div.[id^=]").hover(
		function () {
		$(this).addClass("ohmy").show("fast");
	},
	function () {
		$(this).removeClass("ohmy").show("fast");
	}
	 );

});