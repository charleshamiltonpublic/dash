import React, { PureComponent, ChangeEvent } from 'react';

interface IProps {
    active: boolean;
    applyFocus: boolean;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    value: boolean;
    disabled?: boolean;
}
export default class CellCheckbox extends PureComponent<IProps> {
    render() {
        const {onChange, value, disabled} = this.props;

        return (
            <div
                className='dash-checkbox-cell-value-container dash-cell-value-container'
                onClick={this.handleClick}
            >
                <input
                    type="checkbox"
                    checked={value}
                    onChange={onChange}
                    disabled={disabled}
                    className='cell-checkbox'
                />
            </div>
        );
    }

    componentDidUpdate() {
        this.setFocus();
    }

    componentDidMount() {
        this.setFocus();
    }

    private handleClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    }

    private setFocus() {
        const {active, applyFocus} = this.props;
        if (!active) {
            return;
        }
        const checkbox = this.refs.checkbox as HTMLInputElement;

        if (applyFocus && checkbox && document.activeElement !== checkbox) {
            // Limitation. If React >= 16 --> Use React.createRef instead to pass parent ref to child
            checkbox.focus();
        }
    }
}