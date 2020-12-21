import React from 'react';
import PropTypes from 'prop-types';

export default class User extends React.Component{
    static propTypes = {
      name:PropTypes.string.isRequired,
    };

    render() {
        return (
            <div className='userInfo'>
                <ul>
                    <li>Name: {this.props.name}</li>
                </ul>
            </div>
        );
    }
}