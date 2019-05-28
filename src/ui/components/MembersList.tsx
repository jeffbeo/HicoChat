import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {NotifyPop} from "./NotifyPop";

type iProps={
    selectedUser: (s:any)=>any
}

export class MembersList extends React.Component<iProps> {
    private lorem:string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    private userData= {users: [
            {
                userId: 3,
                userName: "nikil",
                token: "99ff738379098d62517575165c2nikhil",
                lastActivity: "05/03/2019, 12:18",
                history:[
                    {
                        date:"05/03/2019, 12:19",
                        message:"hi",
                        mode:true,
                        userImage: "../../../../src/profile/1.png",
                    },
                    {
                        date:"05/03/2019, 12:20",
                        message:"hello",
                        mode:false,
                        userImage: "../../../../src/profile/2.png",
                    },
                    {
                        date:"05/03/2019, 12:21",
                        message:this.lorem,
                        mode:true,
                        userImage: "../../../../src/profile/1.png",
                    },
                    {
                        date:"05/03/2019, 12:22",
                        message:this.lorem,
                        mode:false,
                        userImage: "../../../../src/profile/2.png",
                    }
                ]
            },
        {
                userId: 1,
                userName: "jeff",
                token: "bd2bbd8768c2c570da4bedc2e5f2jeff",
                lastActivity: "05/03/2019, 12:21",
                history:[
                    {
                        date:"05/03/2019, 12:22",
                        message:"hi",
                        mode:true,
                        userImage: "../../../../src/profile/1.png",
                    },
                    {
                        date:"05/03/2019, 12:23",
                        message:"hello",
                        mode:false,
                        userImage: "../../../../src/profile/1.png",
                    }
                ]
            },
            {
                userId: 2,
                userName: "binubalan",
                token: "99ff738379098d62517575165c2a9626",
                lastActivity: "05/03/2019, 12:24",
                history:[
                    {
                        date:"05/03/2019, 12:25",
                        message:"hi",
                        mode:true,
                        userImage: "../../../../src/profile/1.png",
                    },
                    {
                        date:"05/03/2019, 12:26",
                        message:"hello",
                        mode:false,
                        userImage: "../../../../src/profile/4.png",
                    }
                ]
            },
            {
                userId: 4,
                userName: "shinoj",
                token: "99ff738379098d62517575165c2nikhil",
                lastActivity: "05/03/2019, 12:27",
                history:[
                    {
                        date:"05/03/2019, 12:28",
                        message:"hi, lest start testing",
                        mode:true,
                        userImage: "../../../../src/profile/1.png",
                    },
                    {
                        date:"05/03/2019, 12:29",
                        message:"we have made a release :)",
                        mode:false,
                        userImage: "../../../../src/profile/3.png",
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
        let username = this.userData.users[0].userName;
        let element = document.getElementById(username+"ChatMember");
        if(element)
        {
            element.classList.add("selectedChat");
        }
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
            <li onClick={e=> this.loadChatHistory(u.userId)} key={u.userId} className='ChatMembers' id={u.userName+"ChatMember"}>
                <div className='thumb'>
                    <span>{u.userName.charAt(0).toUpperCase()}</span>

                </div>
                <div className='unRead'><span>5</span></div>


                <div className='details'>
                    <div className='userInfo'>
                        <h2>{u.userName}</h2>
                        <h3>01/02/19, 09:00</h3>
                    </div>

                    <i className="favourites selectedAsFavourite fas fa-star"></i>
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
                console.log("History for "+u.userName);


                let allChats = document.getElementsByClassName("ChatMembers");
                if(allChats)
                {
                    for (var i = 0; i < allChats.length; i++) {
                        allChats[i].classList.remove('selectedChat')
                    }
                }

                let element = document.getElementById(u.userName+"ChatMember");
                if(element)
                {
                    element.classList.add("selectedChat");
                }

            }
        })}
    }
}

