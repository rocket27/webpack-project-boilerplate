import * as React from 'react';
import DIRECTION from './configs/direction';
import ITEMS_ALIGNMENT from './configs/itemsAlignment';
import CONTENT_ALIGNMENT from './configs/contentAlignment';
import SELF_ALIGNMENT from './configs/selfAlignment';
import GROW from './configs/flexboxGrow';
import SHRINK from './configs/shrink';
import FLEXBOX_PROPS from './enums/flexboxProps';
import { IFlexboxExtendedConfigValue } from './interfaces/flexboxExtendedConfigValue';
import './styles/index.scss';

interface IFlexBoxProps<T> extends React.AllHTMLAttributes<T> {
    row?: Alignment;
    rowWrap?: Alignment;
    rowRev?: Alignment;
    rowWrapRev?: Alignment;
    column?: Alignment;
    columnWrap?: Alignment;
    columnRev?: Alignment;
    columnWrapRev?: Alignment;
    grow?: Columns;
    shrink?: Columns;
    dataTemplate?: string;
    node?: keyof HTMLElementTagNameMap;
    contentAlign?: boolean;
    alignSelf?: string;
    noShrinkWrap?: boolean;
    /**
     * Legacy props
     */
    flex?: boolean;
}

interface IFlexBoxState {
    classList: string[];
    props: any;
}

interface IFlexBox<T> {
    props: IFlexBoxProps<T>;
    state: IFlexBoxState;

    classList: string[];
    defaultDomNode: string;

    getReqClassName(source: IFlexboxExtendedConfigValue[], searchParam: string): void;
}

class FlexBox<T = HTMLDivElement> extends React.Component<IFlexBoxProps<T>, IFlexBoxState> implements IFlexBox<T> {
    state = {
        classList: [],
        props: {},
    };

    classList = [];
    defaultDomNode = 'div';
    directionKeys = Object.values(DIRECTION).map(item => item.value);
    itemsAlignments = Object.values(ITEMS_ALIGNMENT);
    contentAlignments = Object.values(CONTENT_ALIGNMENT);
    selfAlignments = Object.values(SELF_ALIGNMENT);
    growClasses = Object.values(GROW);
    shrinkClasses = Object.values(SHRINK);
    customPropsKeys = Object.keys(FLEXBOX_PROPS);
    align = '';


    componentDidMount() {
        this.buildComponentClassList();
    }

    componentWillReceiveProps() {
        this.buildComponentClassList();
    }

    /**
     * Ищем нужный класс и добавляем его в общий массив
     * @param source
     * @param searchParam
     */
    getReqClassName = (source: IFlexboxExtendedConfigValue[], searchParam: string): void => {
        source.forEach((item: IFlexboxExtendedConfigValue) => {
            if (searchParam === item.value || searchParam === item.shortValue) {
                this.classList.push(item.class);
            }
        });
    };

    /**
     * Построение списка классов компонента
     */
    buildComponentClassList() {
        this.classList = [];
        this.directionKeys.forEach(key => {
            if (this.props.hasOwnProperty(key)) {
                this.align = this.props[key];
                this.classList.push(DIRECTION[key].class);
            }
        });

        if (this.props.contentAlign === true) {
            this.getReqClassName(this.contentAlignments, this.align);
        }
        else {
            this.getReqClassName(this.itemsAlignments, this.align);
        }

        if (this.props.alignSelf) {
            this.getReqClassName(this.selfAlignments, this.props.alignSelf);
        }

        if (this.props.grow || this.props.grow === '0') {
            this.getReqClassName(this.growClasses, this.props.grow);
        }

        if (this.props.shrink || this.props.shrink === '0') {
            this.getReqClassName(this.shrinkClasses, this.props.shrink);
        }

        if (this.props.flex) {
            this.classList.push(GROW.grow1.class);
        }

        this.setState({ classList: this.classList });
    }

    /**
     * Построение свойств компонента
     */
    buildComponentProps() {
        let props = {};

        Object.keys(this.props).forEach(key => {
            if (!this.customPropsKeys.some(customPropKey => customPropKey === key)) {
                props[key] = this.props[key];
            }
        });

        return props;
    }

    /**
     * Изменяем пропсы детей, если надо
     * @param {*} children
     */
    changeChildren(children) {
        if (!this.props.noShrinkWrap) {
            return children;
        }

        return React.Children.map(children, child => React.cloneElement(child, { shrink: (child.props.shrink || child.props.shrink === '0') ? child.props.shrink : '0' }));
    }

    render() {
        const node = this.props.node ? this.props.node : this.defaultDomNode;

        return (
            React.createElement(node, {
                ...this.buildComponentProps(),
                className: this.props.className ? `${this.state.classList.join(' ')} ${this.props.className}` : this.state.classList.join(' '),
                ['data-template']: this.props.dataTemplate,
            }, this.changeChildren(this.props.children))
        );
    }
}

export default FlexBox;
