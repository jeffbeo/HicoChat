import * as React from 'react'
import {LoginService} from './login_service'

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
                <h1>hiChat</h1>

                <input type="text"
                       placeholder='Username'
                       name='username'
                       id='loginText'
                       onChange={e=> this.setLoggedInUsername(e)}
                />

                <button onClick={e=> {
                    let _this = this;
                    let loggedInStatus = false;
                    _this.props.onLogin(loggedInStatus);

                    if (this.state.user_name) {

                        console.log("username =" + this.state.user_name);

                        let loginService = new LoginService();

                        loginService.submitLogin(this,(status:boolean,token:string,username:string)=>
                        {
                            if(status)
                            {
                                localStorage.setItem("userName", username);
                                localStorage.setItem("userToken", token);
                            }
                            _this.props.onLogin(status);
                        });
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