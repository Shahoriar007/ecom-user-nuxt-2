import Vue from 'vue';

let delay = 1000;
let duration = 1200;
let keyframes = "fadeIn";
let elements = [];

function addCss ( item ) {
    if ( item.getAttribute( 'data-animation-delay' ) ) delay = parseInt( item.getAttribute( 'data-animation-delay' ) );
    if ( item.getAttribute( 'data-animation-duration' ) ) duration = parseInt( item.getAttribute( 'data-animation-duration' ) );
    if ( item.getAttribute( 'data-animation-name' ) ) keyframes = item.getAttribute( 'data-animation-name' );

    item.classList.add( keyframes, 'animated', 'appear-animation-visible' );
    item.style.animationDelay = delay + 'ms';
    item.style.animationDuration = duration + 'ms';
}

function removeCss ( item ) {
    if ( item.getAttribute( 'data-animation-name' ) ) keyframes = item.getAttribute( 'data-animation-name' );

    item.classList.remove( keyframes, 'animated', 'appear-animation-visible' );
}

function addNormalCss () {
    for ( let i = 0; i < elements.length; i++ ) {
        let element = elements[ i ];

        let top = element.getBoundingClientRect().top;
        let bottom = element.getBoundingClientRect().bottom;

        if ( ( top > 0 && window.innerHeight > top ) || window.pageYOffset > bottom ) {
            addCss( element );
        }
    }
}

function addSlideCss ( slideEl ) {
    let animateNodes = slideEl.querySelectorAll( '.appear-animate' );
    for ( let i = 0; i < animateNodes.length; i++ ) {
        addCss( animateNodes[ i ] );
    }
}

function removeSlideCss ( slideEl ) {
    let animateNodes = slideEl.querySelectorAll( '.appear-animate' );
    for ( let i = 0; i < animateNodes.length; i++ ) {
        removeCss( animateNodes[ i ] );
    }
}

Vue.directive( 'animate', {
    inserted: function ( el, binding, vnode ) {
        if ( el.classList.contains( 'slide-animate' ) ) {
            let activeIndex = vnode.componentInstance.swiper.activeIndex;

            addSlideCss( el.querySelectorAll( '.swiper-slide' )[ activeIndex ] );

            vnode.componentInstance.swiper.on( 'transitionEnd', function () {
                activeIndex = vnode.componentInstance.swiper.activeIndex;
                addSlideCss( el.querySelectorAll( '.swiper-slide' )[ activeIndex ] );

                if ( el.querySelectorAll( '.swiper-slide' )[ activeIndex - 1 ] ) {
                    removeSlideCss( el.querySelectorAll( '.swiper-slide' )[ activeIndex - 1 ] );
                }
                if ( el.querySelectorAll( '.swiper-slide' )[ activeIndex + 1 ] ) {
                    removeSlideCss( el.querySelectorAll( '.swiper-slide' )[ activeIndex + 1 ] );
                }
            } )
        } else if ( !el.classList.contains( 'animated' ) && !el.closest( '.slide-animate' ) ) {
            if ( el.getBoundingClientRect().top >= 0 && window.innerHeight > el.getBoundingClientRect().top ) {
                addCss( el );
            } else {
                elements.push( el );
                window.addEventListener( 'scroll', addNormalCss, { passive: true } );
            }
        }
    },
    unbind: function () {
        window.removeEventListener( 'scroll', addNormalCss, { passive: true } );
    }
} )