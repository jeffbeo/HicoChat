import * as React from 'react';
import * as ReactDOM from 'react-dom';

type iProp = {
    currentUser: any
    webSocket: (s:any)=>any
}

type iState = {
    messageToBeSent : string
}

export class ChatArea extends React.Component<iProp,iState> {

    constructor(props:iProp)
    {
        super(props);
        this.state = {
            messageToBeSent : ""
        }
    }

    renderMessage(history:any,userName:string)
    {
        return(
            <li key={history.date}>
                <div className='messageWrapper'>
                    <div className='messageHeader'>
                        <div className='avatar'>
                            <img src={history.userImage} alt={history.userImage}/>
                        </div>
                        <div className='messageUser'>
                            <h2>{(history.mode)? localStorage.getItem("userName")+" (You)" : userName}</h2>
                            <h4>{history.date}  {history.mode}</h4>
                        </div>
                        <div className='messageOptions'>
                            <i className="attachment fas fa-paperclip" title='Attachment'></i>
                            <i className="fas fa-ellipsis-h" title='Options'></i>
                        </div>
                    </div>
                    <div className='messageContents'>
                        <p>{history.message}</p>
                    </div>
                </div>
            </li>
        )
    }

    render() {
        return (
            <div className='chat-area-container'>
                <div className='chat-area'>
                    <ul>
                        {this.props.currentUser.history.map((history:any)=>this.renderMessage(history,this.props.currentUser.userName))}
                    </ul>
                    <div className='send-area'>
                        <input type="text" name='message'
                               placeholder='Enter your messages here'
                               value={this.state.messageToBeSent}
                               onChange={e=> this.setMessageToBeSent(e)}/>

                        <button onClick={
                            e=>{
                                this.props.webSocket(this.state.messageToBeSent);
                            }
                        } id='groupChatButton' title='Submit'>
                            <i className="fas fa-paper-plane" id='submitChatRocket'></i>
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    setMessageToBeSent(event: React.ChangeEvent<HTMLInputElement>)
    {
        let message = ((event.target) as any).value;
        this.setState({
            messageToBeSent: message
        });
    }



}