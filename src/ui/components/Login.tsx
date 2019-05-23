import {ChangeEvent, Component, Props} from "react";
import * as React from 'react'


type AppState =
    {
        user_name: string
    }

type IProps ={
    onLogin: (s:any)=>any
}

export class Login extends React.Component<IProps,AppState>
{
    constructor(props:IProps)
    {
        super(props);

        this.state = {
            user_name : ""
        }
    }

    render() {

        return(

            <div className='login-container'>
                <h1>trueChat</h1>

                <input type="text"
                       placeholder='Username'
                       name='username'
                       id='loginText'
                       onChange={e=> this.setLoggedInUsername(e)}
                />

                <button onClick={e=> {
                    var _this = this;
                    _this.props.onLogin(false);

                    if (this.state.user_name) {

                        console.log("username =" + this.state.user_name);

                        var xhttp = new XMLHttpRequest();
                        xhttp.open("POST", "http://11.100.109.22:8080/api", true);
                        xhttp.setRequestHeader("Content-type", "application/json");

                        xhttp.send("{\"username\":\"" + this.state.user_name + "\", \"context\":\"NEWUSER\"}");

                        xhttp.onreadystatechange = function () {
                            if (this.readyState == 4 && this.status == 200) {
                                console.log("responseText=" + this.responseText);
                                let responseText = JSON.parse(this.responseText);

                                if (responseText.status == 1)
                                {
                                    _this.props.onLogin(responseText);

                                }
                            }
                        };
                    }
                }}>JOIN</button>
            </div>

        )
    }

    setLoggedInUsername(event: React.ChangeEvent<HTMLInputElement>)
    {
        let user_name = ((event.target) as any).value;
        this.setState({
            user_name: user_name
        });



    }



}