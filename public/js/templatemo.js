/* eslint-disable no-undef */

// eslint-disable-next-line no-undef
$(window).on('load', function() {

    // Accordion
    var all_panels = $('.templatemo-accordion > li > ul').hide();

    // eslint-disable-next-line no-undef
    $('.templatemo-accordion > li > a').click(function() {
        var target = $(this).next();
        if (!target.hasClass('active')) {
            all_panels.removeClass('active').slideUp();
            target.addClass('active').slideDown();
        } else {
            target.removeClass('active').slideUp();
        }
        return false;
    });
    // End accordion

    // Product detail
    // eslint-disable-next-line no-undef
    $('.product-links-wap a').click(function(){
        var this_src = $(this).children('img').attr('src');
        $('#product-detail').attr('src', this_src);
        return false;
    });

    // eslint-disable-next-line no-undef
    $('#btn-minus').click(function(){
        var val = parseInt($("#var-value").html());
        if (val > 1) {
            val--;
        }
        $("#var-value").html(val);
        $("#product-quanity").val(val);
        return false;
    });

    $('#btn-plus').click(function(){
        var val = parseInt($("#var-value").html());
        val++;
        $("#var-value").html(val);
        $("#product-quanity").val(val);
        return false;
    });

    $('.btn-size').click(function(){
        var this_val = $(this).html();
        $("#product-size").val(this_val);
        $(".btn-size").removeClass('btn-secondary').addClass('btn-success');
        $(this).removeClass('btn-success').addClass('btn-secondary');
        return false;
    });
    // End product detail

});
