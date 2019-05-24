import * as React from 'react'
import * as ReactDOM from 'react-dom';

type IProps = {
    message: string,
    statusChange: number
}

export class NotifyPop extends React.Component<IProps, {}> {

    constructor(props: IProps) {
        super(props);
    }

    render() {
        return (
            <div
                className={'notify-wrpr ' + ((this.props.statusChange == 0) ? 'move-bottom': '')} >
                <div className='popTitleWrapper'>
                    <div className='popSubject'>New Message</div>
                    <div className='popUpClose'><span className='fa fa-times' title='Close'></span> </div>
                </div>
                <div className='popBobdy'>
                    <p>{this.props.message}</p>
                </div>

            </div>
        )
    };
};