import * as React from 'react';
import * as ReactDOM from 'react-dom';


export class MembersList extends React.Component {

    render() {
        return (
            <div className='mem-list-container'>
                <ul>
                    <li>
                        <div className='thumb'>
                            <span>J</span>
                        </div>

                        <div className='details'>
                            <h2>Jules Winfield</h2>
                            <h3>Online</h3>
                        </div>
                    </li>

                    <li>
                        <div className='thumb'>
                            <span>V</span>
                        </div>

                        <div className='details'>
                            <h2>Vincent Vega</h2>
                            <h3>Offline</h3>
                        </div>
                    </li>

                </ul>

            </div>

        )

    }

}

