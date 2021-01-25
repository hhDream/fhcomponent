/*
 * @Description: 
 * @Author: Fenghua Zhang
 * @Date: 2021-01-20 10:39:36
 * @LastEditTime: 2021-01-25 14:29:53
 * @LastEditors: Fenghua Zhang
 */
import classNames from 'classnames';
import React from 'react';

export enum ButtonSize {
    Large = 'lg',
    Small = 'sm'
}

export enum ButtonType {
    Primary = 'primary',
    Default = 'default',
    Danger = 'danger',
    Link = 'link'
}

interface BaseButtonProps {
    className?: string;
    disabled?: boolean;
    size?: ButtonSize;
    btnType?: ButtonType;
    children?: React.ReactNode;
    href?: string;
}

const Button: React.FC<BaseButtonProps> = (props) => {
    const {
        btnType,
        disabled,
        size,
        children,
        href
    } = props
    const classes = classNames('btn', {
        [`btn-${btnType}`]: btnType,
        [`btn-${size}`]: size,
        'disabled': (btnType === ButtonType.Link)
    })
    if (btnType === ButtonType.Link && href) {
        return (
            <a
                className={classes}
                href={href}
            >
                {children}
            </a>
        )
    } else {
        return (
            <button
                className={classes}
                disabled={disabled}
            >
                {children}
            </button>
        )
    }
}
Button.defaultProps = {
    disabled: false,
    btnType: ButtonType.Default
}
export default Button