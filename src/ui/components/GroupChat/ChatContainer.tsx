import {Component} from "react";
import * as React from 'react'
import {ChatArea} from "./ChatArea";
import {MembersList} from "../MembersList";
import {ChatHeader} from "../ChatHeader";

export class ChatContainer extends Component {
    render() {
        return (
                <div className='chat-container'>
                    <ChatHeader />
                    <div className='chat-body'>
                        <MembersList />
                        <ChatArea />
                    </div>

                </div>
       );
    }
}