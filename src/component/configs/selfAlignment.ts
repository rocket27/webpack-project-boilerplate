import { IFlexboxSelfAlignment } from '../interfaces/flexboxSelfAlignment';

const SELF_ALIGNMENT: IFlexboxSelfAlignment = {
    start: {
        value: 'start',
        class: 'ws-align-self-start',
    },
    baseline: {
        value: 'baseline',
        shortValue: 'bl',
        class: 'ws-align-self-baseline',
    },
    center: {
        value: 'center',
        shortValue: 'ctr',
        class: 'ws-align-self-center',
    },
    stretch: {
        value: 'stretch',
        class: 'ws-align-self-stretch',
    },
    end: {
        value: 'end',
        class: 'ws-align-self-end',
    },
};

export default SELF_ALIGNMENT;
