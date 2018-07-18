import React, { Component } from 'react';

export default class FilterList extends React.Component {
    render() {
        return (
            <div>
                <ul id="filters">
                    <li>
                        <a href="#" data-filter="all" className="selected" >ALL</a>
                    </li>
                    <li>
                        <a href="#" data-filter="active" className="">Active</a>
                    </li>
                    <li>
                        <a href="#" data-filter="complete" className="">Complete</a>
                    </li>
                </ul>
            </div>
        );
    }
}