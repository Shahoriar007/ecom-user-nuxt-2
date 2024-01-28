export const ADD_TO_WISHLIST = 'ADD_TO_WISHLIST';
export const REMOVE_FROM_WISHLIST = 'REMOVE_FROM_WISHLIST';

export const state = () => (
    {
        data: []
    }
);

export const getters = {
    wishList: state => {
        return state.data;
    }
}

export const actions = {
    addToWishlist: function ( { commit }, payload ) {
        commit( ADD_TO_WISHLIST, payload );
    },
    removeFromWishlist: function ( { commit }, payload ) {
        commit( REMOVE_FROM_WISHLIST, payload );
    }
}

export const mutations = {
    [ ADD_TO_WISHLIST ]( state, payload ) {
        let isAdded = state.data.findIndex( item => item.name === payload.product.name ) > -1;
        if ( !isAdded ) {
            state.data.push( payload.product );
        }
    },
    [ REMOVE_FROM_WISHLIST ]( state, payload ) {
        let index = state.data.findIndex( item => item.id === payload.id )
        state.data.splice( index, 1 );
    }
}