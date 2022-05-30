import { Checkbox } from '@material-ui/core';
import { FieldHookConfig, useField } from 'formik';
import { at } from 'lodash';
import React from 'react';
import styled from 'styled-components';

interface InputProps {
    label: string;
    className? : string;
}





export const CheckboxField= (props: InputProps & FieldHookConfig<string>) => {

    const { label,className } = props;
    const [field, meta] = useField(props);

    const [touched, error] = at(meta, 'touched', 'error');
    const isError = touched && error && true;
    function _renderHelperText() {
        if (isError)
            return <div style={{ color: 'red' }}>{error}</div>
    }
    return (
        <InputWrapper className={className}>
            <div className='input'>

                <Checkbox {...field} />
                <label>{label}</label>

            </div>
            <div>
                {_renderHelperText()}
            </div>
        </InputWrapper>

    )
}

const InputWrapper = styled.div`
display:flex;
flex-direction: column ;
align-items: flex-start ;
.input{
display:flex;
flex-direction: row ;
align-items: center ;
}
margin-bottom: 10px;
margin-top:16px;
`