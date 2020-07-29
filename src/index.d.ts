import * as React from 'react';

export interface IWsVoiceButtonProps {
    buttonLabel?: string;
    stretch?: boolean;
}

export interface IWsVoiceButton {
    props: IWsVoiceButtonProps;
}

export class WsVoiceButton extends React.Component<IWsVoiceButtonProps, any> implements IWsVoiceButton {}
