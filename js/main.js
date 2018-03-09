$(document).ready(function() {
    $('.header').height($(window).height());

    $('.navbar a').click(function() {
        $("body,html").animate({
            scrollTop:$("#" + $(this).data('value')).offset().top
        },1000);
    });

    $.getJSON("https://cpv2api.com/pens/public/bhenri666", function(json) {
        if (json["success"] == 'true') {
            let penPics = json["data"].length;

            for (var i=0; i<penPics; ++i) {
                $("#codePens").append('<div class="col-lg-4 col-md-4 col-sm-12"><img src"'
                + json["data"][i].images["small"] + '" class="img-fluid"></div>');
            }
        }
    });

});
