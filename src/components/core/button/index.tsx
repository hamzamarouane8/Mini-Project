import classNames from 'classnames';
import React from 'react';
import { ButtonWrapper } from './button.style';

interface PropsButton {
    type:"button" | "submit" | "reset"| undefined;
    children:any;
    onClick?: any;
    disabled?: boolean;
    className?:string;
    loading?:boolean;
}
export default function (props: PropsButton) {
    const { loading,onClick, disabled,children, className ,type} = props;
    return (
        <ButtonWrapper type={type} className={classNames(`btn`,className)} onClick={onClick} disabled={disabled} > {loading ? 'loading...':''} {children}</ButtonWrapper>
    )
}