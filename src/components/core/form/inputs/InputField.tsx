import { FieldHookConfig, useField } from 'formik';
import { at } from 'lodash';
import React from 'react';
import styled from 'styled-components';

interface InputProps {
    label: string;
}





export default (props: InputProps & FieldHookConfig<string>) => {

    const { label } = props;
    const [field, meta] = useField(props);

    const [touched, error] = at(meta, 'touched', 'error');
    const isError = touched && error && true;
    function _renderHelperText() {
        if (isError)
            return <div style={{ color: 'red' }}>{error}</div>
    }
    return (
        <InputWrapper>
            <div className='input'>
                <label>{label}</label>
                <input {...field} />
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
flex-direction: column ;
}
`