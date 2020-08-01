export interface IFlexboxPropsEnum {
    [value: string]: string;
}

const FLEXBOX_PROPS: IFlexboxPropsEnum = {
    row: 'row',
    rowWrap: 'rowWrap',
    rowRev: 'rowRev',
    rowWrapRev: 'rowWrapRev',
    column: 'column',
    columnWrap: 'columnWrap',
    columnRev: 'columnRev',
    columnWrapRev: 'columnWrapRev',
    grow: 'grow',
    shrink: 'shrink',
    dataTemplate: 'dataTemplate',
    node: 'node',
    contentAlign: 'contentAlign',
    alignSelf: 'alignSelf',
    noShrinkWrap: 'noShrinkWrap',
    flex: 'flex',
};

export default FLEXBOX_PROPS;
