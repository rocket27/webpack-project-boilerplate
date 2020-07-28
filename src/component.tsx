import classnames from 'classnames';
import * as React from 'react';
import './styles/index.scss';

export default class Component extends React.Component {
    render(): JSX.Element | false {
        return (
            <div
                className={classnames(
                    'component-class',
                )}
            >
                Component
            </div>
        );
    }
}
