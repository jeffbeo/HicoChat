import * as React from "react";
import * as ReactDOM from 'react-dom';
import {Login} from "./components/Login/Login";
import {ChatContainer} from "./components/GroupChat/ChatContainer";


interface IAppState {
    loggedIn:boolean

}

export class App extends React.Component<{},IAppState>
{
    public static init(element: HTMLElement)
    {
        ReactDOM.render(<App />, element);
    }

    constructor(props:{})
    {
        super(props);

        this.state = {
            loggedIn: false
        }
    }



    render()
    {
        let userName = localStorage.getItem("userName");
        console.log("localstorage="+userName);
        if(userName)
        {
            return(<div>
                <ChatContainer onLogout={(logout:any)=>{
                    localStorage.removeItem("userName");
                    this.setState({
                        loggedIn:false
                    })

                }}/>
            </div>)

        }
        else
        {
            return(<div>
                <Login onLogin={(user:any)=>{
                    console.log("logged in "+user);
                    this.setState({
                        loggedIn:true
                    })

                 }} />
            </div>)
        }

    }
}