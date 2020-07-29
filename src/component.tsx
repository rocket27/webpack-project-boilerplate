import classnames from 'classnames';
import * as React from 'react';
import './styles/index.scss';

interface IWsVoiceButtonProps {
    buttonLabel?: string;
    stretch?: boolean;
}

interface IWsVoiceButton {
    props: IWsVoiceButtonProps;
}

export class WsVoiceButton extends React.Component<IWsVoiceButtonProps, any> implements IWsVoiceButton {
    render(): JSX.Element | false {
        return (
            <button
                className={classnames(
                    'ws-voice-button',
                )}
            >
                {this.props.buttonLabel ?? 'Push me'}
            </button>
        );
    }
}

export default WsVoiceButton;
