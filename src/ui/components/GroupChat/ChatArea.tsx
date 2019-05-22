import * as React from 'react';
import * as ReactDOM from 'react-dom';



export class ChatArea extends React.Component {
    render() {
        return (
            <div className='chat-area-container'>
                <div className='chat-area'>
                    <ul>
                        <li>
                            <div className='avatar'></div>
                            <div className='message'>
                                <h2>Jules Winfield</h2>
                                <h4>12/10/1995 10:30</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Aspernatur ducimus, explicabo facere nemo nulla omnis quaerat
                                    rerum! Asperiores atque, deserunt dolorem id, maiores minus
                                   neque possimus quibusdam rem tenetur vitae.</p>
                            </div>
                        </li>

                        <li>
                            <div className='avatar'></div>
                            <div className='message'>
                                <h2>Jules Winfield</h2>
                                <h4>12/10/1995 10:30</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                    Aspernatur ducimus, explicabo facere nemo nulla omnis quaerat
                                    rerum! Asperiores atque, deserunt dolorem id, maiores minus
                                    neque possimus quibusdam rem tenetur vitae.</p>
                            </div>
                        </li>

                    </ul>

                    <div className='send-area'>
                        <input type="text" name='message' placeholder='Enter your messages here'/>
                        <button onClick={this.submitGroupChat} id='groupChatButton' title='Submit'>
                            <i className="fas fa-paper-plane" id='submitChatRocket'></i>
                        </button>
                    </div>

                </div>

            </div>

        )

    }

    submitGroupChat() {
        if ("WebSocket" in window) {
            var submitChatRocket = document.getElementById("submitChatRocket");
            if(submitChatRocket)
            {
                submitChatRocket.classList.add("sending");
            }

            // Let us open a web socket
            var ws = new WebSocket("wss://echo.websocket.org");

            ws.onopen = function() {
                var today = new Date();
                var dd = today.getDate();
                var mm = today.getMonth()+1;
                var yyyy = today.getFullYear();

                let message =
                    {
                        "type": "sent",
                        "from" : "jeff",
                        "content" : "Hello, whats up",
                        "time": dd+"/"+mm+"/"+yyyy

                    }
                let stringified_message:string = JSON.stringify(message);

                // Web Socket is connected, send data using send()
                ws.send(stringified_message)

                alert("Message is sent...");
            };

            ws.onmessage = function (evt) {
                var received_msg = evt.data;
                alert("Message is received...");
                console.log(received_msg);
                if(submitChatRocket)
                {
                    submitChatRocket.classList.remove("sending");
                }

            };

            ws.onclose = function() {

                // websocket is closed.
                alert("Connection is closed...");
            };
        } else {

            // The browser doesn't support WebSocket
            alert("WebSocket NOT supported by your Browser!");
        }
    }

}