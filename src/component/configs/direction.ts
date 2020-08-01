import { IFlexboxDirection } from '../interfaces/flexboxDirection';

const DIRECTION: IFlexboxDirection = {
    row: {
        value: 'row',
        class: 'ws-layout-row'
    },
    rowWrap: {
        value: 'rowWrap',
        class: 'ws-layout-row-wrap'
    },
    rowRev: {
        value: 'rowRev',
        class: 'ws-layout-row-reverse'
    },
    rowWrapRev: {
        value: 'rowWrapRev',
        class: 'ws-layout-row-wrap-reverse'
    },
    column: {
        value: 'column',
        class: 'ws-layout-column'
    },
    columnWrap: {
        value: 'columnWrap',
        class: 'ws-layout-column-wrap'
    },
    columnRev: {
        value: 'columnRev',
        class: 'ws-layout-column-reverse'
    },
    columnWrapRev: {
        value: 'columnWrapRev',
        class: 'ws-layout-column-wrap-reverse'
    }
};

export default DIRECTION;
