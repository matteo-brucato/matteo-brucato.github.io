$(document).ready(function() {
    var slide_toggle = $(".slide-toggle");
    slide_toggle.mouseover(function() {
        $(this).css("cursor", "pointer");
    });
    slide_toggle.click(function () {
        $(this).next().slideToggle();
    });

    var pub_list = $("#publication-list");
    var n_items = pub_list.find("ol li").size();
    pub_list.find("ol").css("counter-reset", "item " + (n_items + 1));
});