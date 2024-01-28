import Vue from 'vue';
import { parseOptions } from '~/utils';

let element;

function parallaxHandler() {
    let yPos, parallaxSpeed = 1;
    parallaxSpeed = parseInt( parseOptions( element.getAttribute( 'data-parallax' ) ).speed );
    yPos = ( element.offsetTop - window.pageYOffset ) * 200 * parallaxSpeed / element.offsetTop + 50;

    element.style.backgroundPosition = "50% " + yPos + "%";
}

Vue.directive( 'parallax', {
    inserted: function ( el ) {
        element = el;
        window.addEventListener( 'scroll', parallaxHandler, { passive: true } );
    },
    unbind: function () {
        window.removeEventListener( 'scroll', parallaxHandler, { passive: true } );
    }
} )