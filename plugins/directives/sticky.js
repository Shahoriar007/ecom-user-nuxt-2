import Vue from 'vue';

let element;
let top = 300;
let offset = 0;

function stickyHanlder () {
    let height = 0;

    if ( element ) {
        height = element.offsetHeight + 20;
    }

    let stickyType = element.classList.contains( 'mobile-sticky' ) ? 'mobile' : 'desktop';
    let isSticky = true;

    if ( stickyType === 'mobile' && window.innerWidth >= 992 || stickyType === 'desktop' && window.innerWidth < 992 ) isSticky = false;
    else isSticky = true;

    if ( window.pageYOffset >= top && isSticky ) {
        if ( element ) {
            element.classList.add( 'fixed' );
            element.style.top = offset + 'px';
            if ( !element.parentNode.classList.contains( 'sticky-wrapper' ) ) {
                let newNode = document.createElement( "div" );
                newNode.className = "sticky-wrapper";
                if ( element.parentNode ) element.parentNode.insertBefore( newNode, element );
                newNode.insertAdjacentElement( 'beforeend', element );
                newNode.setAttribute( "style", "height: " + height + "px" );
            } else {
                if ( !element.parentNode.getAttribute( "style" ) ) {
                    element.parentNode.setAttribute( "style", "height: " + height + "px" );
                }
            }
        }
    } else {
        if ( element ) {
            element.classList.remove( 'fixed' );
        }

        if ( element.parentNode.classList.contains( 'sticky-wrapper' ) ) {
            element.parentNode.removeAttribute( "style" );
        }
    }
}

Vue.directive( 'sticky', {
    inserted: function ( el ) {
        element = el;
        top = el.getAttribute( 'data-start-top' ) ? parseInt( el.getAttribute( 'data-start-top' ) ) : 300;
        offset = el.getAttribute( 'data-offset-top' ) ? parseInt( el.getAttribute( 'data-offset-top' ) ) : 0;
        window.addEventListener( 'scroll', stickyHanlder, { passive: true } );
        window.addEventListener( 'resize', stickyHanlder );
    },
    unbind: function () {
        window.removeEventListener( 'scroll', stickyHanlder, { passive: true } );
        window.removeEventListener( 'resize', stickyHanlder );
    }
} )