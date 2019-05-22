import * as React from "react";
import * as ReactDOM from 'react-dom';
import {Login} from "./components/Login";
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
        if(this.state.loggedIn)
        {
            return(<div><ChatContainer /></div>)
        }
        else
        {
            return(<div>
                <Login onLogin={(loggedIn:boolean)=>{
                    this.setState({
                        loggedIn:loggedIn
                    })
                 }} />
            </div>)
        }

    }
}