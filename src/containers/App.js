import React from 'react';
import Router from './Router';
import Menu from "./Menu";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {BrowserRouter} from "react-router-dom";
import {ConnectedRouter} from "connected-react-router";
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import initStore, {history} from "../utils/store";

const { store, persistor } = initStore();

export default class App extends React.Component{

    render() {
        console.log("Render");
        return (
            <Provider store={store}>
                <PersistGate loading={ null } persistor={ persistor }>
                    <ConnectedRouter history={history}>
                        <MuiThemeProvider>
                            <Menu/>
                            <Router />
                        </MuiThemeProvider>
                    </ConnectedRouter>
                </PersistGate>
            </Provider>

        );
    }
}
