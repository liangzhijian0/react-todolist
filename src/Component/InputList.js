import React, { Component } from 'react';

export default class InputList extends React.Component {
    render() {
        return (
            <div>
                <input className="input-text" type="text" name="ListItem" />
                <div id="button">Add</div>
            </div>
        );
    }
}