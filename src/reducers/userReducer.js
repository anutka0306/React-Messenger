import update from 'react-addons-update';

const initialStore = {
    user:{
        name: 'Anna',
    },
};

export default function userReducer(store = initialStore, action) {
    switch (action.type) {

        default:
            return store;
    }
}