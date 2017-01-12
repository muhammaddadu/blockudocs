/**
 * Home
 */
import * as $ from 'jquery';
import '../node_modules/bootstrap-sass/assets/javascripts/bootstrap.js';
import 'jquery.easing';

$( document ).ready(() => {
    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        let $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body')['scrollspy']({
        target: '.navbar-fixed-top',
        offset: 100
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(() => $('.navbar-toggle:visible').click());

    // Offset for Main Navigation
    $('#mainNav')['affix']({
        offset: {
            top: 50
        }
    });
});
