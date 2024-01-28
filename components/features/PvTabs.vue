<template>
	<div @click="tabClicked($event)">
		<slot></slot>
	</div>
</template>

<script>
export default {
	methods: {
		tabClicked: function ( e ) {
			if ( e.target.getAttribute( 'data-toggle' ) === 'tab' ) {
				e.preventDefault();
				// active nav-link
				let target = e.target;
				target.closest( '.nav' ).querySelector( '.nav-link.active' ).classList.remove( 'active' );
				target.classList.add( 'active' );

				// active tab-pane
				let tabPane = document.querySelector( target.getAttribute( 'href' ) );

				tabPane.parentNode.querySelector( '.tab-pane.show' ).classList.remove( 'show' );
				tabPane.classList.add( 'show' );

				setTimeout( () => {
					tabPane.parentNode.querySelector( '.tab-pane.active' ).classList.remove( 'active' );
					tabPane.classList.add( 'active' );
				}, 150 );
			}
		}
	}
}
</script>