import React from 'react';
import PropTypes from 'prop-types';

export default class Child extends React.Component{
    static propTypes = {
      counter: PropTypes.number,
    };

    constructor(props) {
        super(props);
        console.log("Child will mount");
    }

    componentDidMount() {
        console.log("Child did mount");
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("Child did update");
    }

    render() {
        console.log("Child render");
        return (
            <h1>Child Component. Counter {this.props.counter}</h1>
        );
    }
}