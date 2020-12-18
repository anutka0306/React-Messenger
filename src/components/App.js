import React from 'react';
import Child from "./Child";
import MessageField from "./MessageField";
import Router from './Router';
import Menu from "./Menu";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {BrowserRouter} from "react-router-dom";

export default class App extends React.Component{

    render() {
        console.log("Render");
        return (
            <BrowserRouter>
                <MuiThemeProvider>
                    <Menu/>
                    <Router />
                </MuiThemeProvider>
            </BrowserRouter>

        );
    }
}
