import * as React from 'react';
import * as ReactDOM from 'react-dom';

type IProps ={
    onHeaderLogout: (s:boolean)=>any
}
export class ChatHeader extends React.Component<IProps> {
    constructor(props:IProps)
    {
        super(props);
    }

   render() {
        return (
            <div className='chat-header'>
                <h2>hiChat</h2>
                <button onClick={e=>{
                    this.props.onHeaderLogout(false);
                }} title='Logout'>
                    <i className="fas fa-power-off"></i>
                </button>
            </div>
        )
    }

    // logout()
    // {
    //     localStorage.removeItem("userName");
    //     this.props.onHeaderLogout(false);
    // }

}