import update from 'react-addons-update';
import { SEND_MESSAGE } from "../actions/messageActions";

const initialStore = {
    messages: {
        1: { text: "Привет!", sender: "Robot" },
        2: { text: "Здравствуйте!", sender: "Robot" },
        3: {text: "Hola", sender: "Robot"},
        4: {text: "Hi", sender: "Robot"},

    },
};

export default function messageReducer(store = initialStore, action) {
    switch (action.type) {
        case SEND_MESSAGE:{
            return update(store,{
                messages: { $merge: {
                    [action.messageId]:{
                        text: action.text,
                        sender: action.sender
                    }
                    }}
            });

        }
        default:
            return store;
    }
}