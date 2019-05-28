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
    private ws:WebSocket|null = null;

    constructor(props: IProps)
    {
        super(props);

        this.state={
            selectedUser: null,
        };

        this.ws = new WebSocket("ws://11.100.109.22:8080/wschat");

        this.ws.onopen = function()
        {
            let message =
                {
                    "message": '',
                    "token": localStorage.getItem("userToken"),
                    "context": "ONCONNECTION"
                };
            let stringified_message:string = JSON.stringify(message);

            this.send(stringified_message);
            //alert("Message is sent...");
        };

        this.ws.onmessage = function (evt)
        {
            let received_msg = evt.data;
            //alert("Message is received..."+received_msg);
            console.log(received_msg);


        };

        this.ws.onclose = function()
        {
            //alert("Connection is closed...");
        };

        this.ws.onerror = function()
        {
            //alert("Connection error...");
        };


    }

    render() {
        return (
                <div className='chat-container'>
                    <ChatHeader onHeaderLogout={(status:boolean)=>{
                       this.props.onLogout(status);
                    }}/>
                    <div className='chat-body'>
                        <MembersList selectedUser={(user:any)=>{
                            this.setState({
                                selectedUser: user
                            })
                        }} />
                        {(this.state.selectedUser)?<ChatArea currentUser={this.state.selectedUser} webSocket={m=>{this.submitChat(m)}}/> : null}
                    </div>
                </div>
       );
    }

    submitChat(msg:string) {
        let selectedUserToken = this.state.selectedUser.token;
        if ("WebSocket" in window)
        {
            let submitChatRocket = document.getElementById("submitChatRocket");
            if(submitChatRocket)
            {
                submitChatRocket.classList.add("sending");
            }

            let message =
                {
                    "message": msg,
                    "token": localStorage.getItem("userToken"),
                    "toToken": selectedUserToken,
                    "context": "ONMESSAGE"
                };
                let stringified_message:string = JSON.stringify(message);
                if(this.ws)
                {
                    this.ws.send(stringified_message);

                }
        }
        else
        {
            alert("WebSocket NOT supported by your Browser!");
        }
    }
}