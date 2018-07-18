import React, { Component } from 'react';

export default class FilterList extends React.Component {
    render() {
        let status = this.props.status; 
        let {changeStatus} = this.props;

        return (
            <div>
                <ul id="filters">
                    <li onClick={ ev => changeStatus('all')}>
                        <a href="#" data-filter="all" className={status === 'all' ? 'selected' : ''} >ALL</a>
                    </li>
                    <li onClick={ ev => changeStatus('active')}>
                        <a href="#" data-filter="active" className={status === 'active' ? 'selected' : ''}>Active</a>
                    </li>
                    <li onClick={ ev => changeStatus('complete')}>
                        <a href="#" data-filter="complete" className={status === 'complete' ? 'selected' : ''}>Complete</a>
                    </li>
                </ul>
            </div>
        );
    }
}