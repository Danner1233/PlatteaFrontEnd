import React from "react";
import { useEffect } from 'react';
import $ from 'jquery';

import Filtro from "./Filtro";
import Filtrodos from "./Filtrodos";
import Filtrotres from "./Filtrotres";
import Productogeneralinit from "./Productogeneralinit";
import Cambiodehoja from "./Cambiodehoja";

const Products = () => {
  useEffect(() => {
    // Accordion
    const allPanels = $('.templatemo-accordion > li > ul').hide();

    $('.templatemo-accordion > li > a').click(function () {
        const target = $(this).next();
        if (!target.hasClass('active')) {
            allPanels.removeClass('active').slideUp();
            target.addClass('active').slideDown();
        } else {
            target.removeClass('active').slideUp();
        }
        return false;
    });
    // End accordion

    // Product detail
    $('.product-links-wap a').click(function () {
        const thisSrc = $(this).children('img').attr('src');
        $('#product-detail').attr('src', thisSrc);
        return false;
    });

    $('#btn-minus').click(function () {
        let val = parseInt($("#var-value").html());
        if (val > 1) {
            val--;
        }
        $("#var-value").html(val);
        $("#product-quanity").val(val);
        return false;
    });

    $('#btn-plus').click(function () {
        let val = parseInt($("#var-value").html());
        val++;
        $("#var-value").html(val);
        $("#product-quanity").val(val);
        return false;
    });

    $('.btn-size').click(function () {
        const thisVal = $(this).html();
        $("#product-size").val(thisVal);
        $(".btn-size").removeClass('btn-secondary').addClass('btn-success');
        $(this).removeClass('btn-success').addClass('btn-secondary');
        return false;
    });
    // End product detail

}, []);
// Empty dependency array means this effect runs once after the initial render
  return (
    <div className="container py-5">
      <div className="row">
        <Filtro/>
        <div className="col-lg-9">
          <div className="row">
            <Filtrodos />
            <Filtrotres />
            
          </div>
          <div className="row">
            <Productogeneralinit />
            <Productogeneralinit />
            <Productogeneralinit />
            <Productogeneralinit />
            <Productogeneralinit />
            <Productogeneralinit />
            <Productogeneralinit />
            <Productogeneralinit />
            <Productogeneralinit />

          </div>
          <div div="row">
            <Cambiodehoja />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
