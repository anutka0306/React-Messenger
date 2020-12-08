import React from 'react';
import Child from "./Child";
import MessageField from "./MessageField";

export default class App extends React.Component{
    state = {
        text: "My first Component",
        counter: 0
    };
    constructor(props) {
        super(props);
        console.log("Will Mount");
    }
    componentDidMount() {
        console.log("Comp did mount");
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("Did update");
    }

    handleClick = () => {
        this.setState({'counter': this.state.counter + 1})
    };

    render() {
        console.log("Render");
        return (
            <MessageField />
        );
    }
}
