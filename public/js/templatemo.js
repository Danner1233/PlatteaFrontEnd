/* eslint-disable no-undef */

$(document).ready(function() {

    // Accordion
    const allPanels = $('.templatemo-accordion > li > ul').hide();
    const allToggles = $('.accordion-toggle');

    function toggleAccordion(target) {
        if (!target.hasClass('active')) {
            allPanels.removeClass('active').slideUp();
            allToggles.html('&#9660;'); // Flecha hacia abajo
            target.addClass('active').slideDown();
            target.prev().find('.accordion-toggle').html('&#9650;'); // Flecha hacia arriba
        } else {
            target.removeClass('active').slideUp();
            target.prev().find('.accordion-toggle').html('&#9660;'); // Flecha hacia abajo
        }
    }

    $('.templatemo-accordion > li > a').click(function() {
        const target = $(this).next();
        toggleAccordion(target);
        return false;
    });
    // End accordion

    // Product detail
    $('.product-links-wap a').click(function() {
        const thisSrc = $(this).children('img').attr('src');
        $('#product-detail').attr('src', thisSrc);
        return false;
    });

    $('#btn-minus').click(function() {
        let val = parseInt($("#var-value").html(), 10);
        if (val > 1) {
            val--;
        }
        $("#var-value").html(val);
        $("#product-quanity").val(val);
        return false;
    });

    $('#btn-plus').click(function() {
        let val = parseInt($("#var-value").html(), 10);
        val++;
        $("#var-value").html(val);
        $("#product-quanity").val(val);
        return false;
    });

    $('.btn-size').click(function() {
        const thisVal = $(this).html();
        $("#product-size").val(thisVal);
        $(".btn-size").removeClass('btn-secondary').addClass('btn-success');
        $(this).removeClass('btn-success').addClass('btn-secondary');
        return false;
    });
    // End product detail

});
