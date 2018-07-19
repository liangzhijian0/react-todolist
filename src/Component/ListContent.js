import React, { Component } from 'react';

export default class ListContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
          status: 'read'
        };
    } 

    changeToEditable() {
        this.setState({ status: 'write' });
    }
    
    updateItem(e, id, name) {
        if (e.keyCode === 13) {
            this.props.updateItemContent(id, name);
            this.setState({ status: 'read' });
        }
    }
    
        
    toggleActive = (id) => {
        this.setState({ status: 'read' });
        this.props.toggleActiveHandler(id);
    }



    render() {
        let {todos} = this.props; 

        return (
            <li className = {todos.isComplete ? 'checked':''}>          
                <input
                    type="checkbox"
                    className="done-todo"
                    defaultChecked={todos.isComplete}
                    onClick={e => this.toggleActive(todos.id)}
                />
            
                <span onDoubleClick={e => this.changeToEditable(e)}>
                    {this.state.status === 'read' ? (
                        todos.name
                    ) : (
                        <input
                        autoFocus
                        className="edit-input"
                        defaultValue={todos.name}
                        onKeyUp={e =>
                            this.updateItem(e, todos.id, e.currentTarget.value)
                        }
                        />
                    )}
                </span>
            </li>     
        );
    }
}
