import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {NotifyPop} from "./NotifyPop";

type iProps={
    selectedUser: (s:any)=>any
}

export class MembersList extends React.Component<iProps> {

    private userData= {users: [
            {
                userId: 3,
                userName: "nikil",
                token: "99ff738379098d62517575165c2nikhil",
                lastActivity: "2019-05-22 12:18:39",
                history:[
                    {
                        date:"2019-05-22 12:18:39",
                        message:"hi",
                        mode:true
                    },
                    {
                        date:"2019-05-22 12:18:37",
                        message:"hello",
                        mode:false
                    }
                ]
            },
        {
                userId: 1,
                userName: "jeff",
                token: "bd2bbd8768c2c570da4bedc2e5f2jeff",
                lastActivity: "2019-05-22 12:38:52",
                history:[
                    {
                        date:"2019-05-22 12:18:29",
                        message:"hi",
                        mode:true
                    },
                    {
                        date:"2019-05-22 12:18:49",
                        message:"hello",
                        mode:false
                    }
                ]
            },
            {
                userId: 2,
                userName: "binubalan",
                token: "99ff738379098d62517575165c2a9626",
                lastActivity: "2019-05-22 12:18:39",
                history:[
                    {
                        date:"2019-05-22 12:18:39",
                        message:"hi",
                        mode:true
                    },
                    {
                        date:"2019-05-22 12:18:37",
                        message:"hello",
                        mode:false
                    }
                ]
            }
        ]};

    constructor(props:iProps)
    {
        super(props)
    }

    componentDidMount(): void {
        this.props.selectedUser(this.userData.users[0]);
    }

    render() {
        return (
            <div className='mem-list-container'>

                <ul>
                    {this.userData.users.map((u:any)=>this.load_members(u))}
                </ul>

                <NotifyPop message={'New Message Popup.New Message Popup.New Message Popup.New Message ' +
                'Popup New Message Popup New Message Popup New Message Popup'} statusChange={1}/>
            </div>
        )
    }

    load_members(u:any)
    {
        return(
            <li onClick={e=> this.loadChatHistory(u.userId)} key={u.userId}>
                <div className='thumb'>
                    <span>{u.userName.charAt(0).toUpperCase()}</span>
                </div>

                <div className='details'>
                    <h2>{u.userName}</h2>
                </div>
            </li>
        )
    }



    loadChatHistory(user_id:number)
    {
        {this.userData.users.map((u:any)=>{
            if(u.userId == user_id)
            {
                this.props.selectedUser(u);
                localStorage.setItem("selectedUser",u);
                console.log("History for "+u.userName)
            }
        })}
    }
}

