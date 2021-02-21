/*
 * @Description: 
 * @Author: Fenghua Zhang
 * @Date: 2021-01-20 10:39:36
 * @LastEditTime: 2021-02-20 16:41:07
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
    onClick?: (e: any) => any;
}

const Button: React.FC<BaseButtonProps> = (props) => {
    const {
        btnType,
        disabled,
        size,
        children,
        href,
        onClick
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
                onClick={onClick}
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