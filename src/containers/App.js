import React from 'react';
import Router from './Router';
import Menu from "./Menu";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {BrowserRouter} from "react-router-dom";
import { Provider } from 'react-redux';
import initStore from "../utils/store";

export default class App extends React.Component{

    render() {
        console.log("Render");
        return (
            <Provider store={initStore()}>
                <BrowserRouter>
                    <MuiThemeProvider>
                        <Menu/>
                        <Router />
                    </MuiThemeProvider>
                </BrowserRouter>
            </Provider>

        );
    }
}
