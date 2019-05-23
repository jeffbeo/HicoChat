import {Component} from "react";
import * as React from 'react'
import {ChatArea} from "./ChatArea";
import {MembersList} from "../MembersList";
import {ChatHeader} from "../ChatHeader";

type IProps ={
    onLogout: (s:boolean)=>any
}

type IState ={
    selectedUser: any
}

export class ChatContainer extends Component<IProps,IState> {
    constructor(props: IProps)
    {
        super(props);

        this.state={
            selectedUser: null,

        }
    }
    render() {
        return (
                <div className='chat-container'>
                    <ChatHeader onHeaderLogout={(status:boolean)=>{
                       this.props.onLogout(status)
                    }}/>

                    <div className='chat-body'>
                        <MembersList selectedUser={(user:any)=>{
                            this.setState({
                                selectedUser: user
                            })
                        }} />
                        {(this.state.selectedUser)?<ChatArea currentUser={this.state.selectedUser}/> : null}

                    </div>

                </div>
       );
    }
}