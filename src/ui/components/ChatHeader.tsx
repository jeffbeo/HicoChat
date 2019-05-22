import * as React from 'react';
import * as ReactDOM from 'react-dom';
export class ChatHeader extends React.Component {

    render() {
        return (
            <div className='chat-header'>
                <h2>trueChat</h2>
                <button onClick={this.logout} title='Logout'>
                    <i className="fas fa-power-off"></i>
                </button>
            </div>
        )
    }

    logout()
    {
        alert('logout');
    }

}