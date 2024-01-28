import createPersistedState from 'vuex-persistedstate';
import { currentDemo } from '~/api';

export default function ( { store } ) {
    let storage = localStorage.getItem( 'porto-vue' );

    if ( localStorage.currentDemo && localStorage.currentDemo != currentDemo ) {
        localStorage.clear();
    }

    localStorage.setItem( 'currentDemo', currentDemo );

    window.onNuxtReady( () => {
        createPersistedState( {
            key: 'porto-vue',
            paths: []
        } )( store )
    } )
}