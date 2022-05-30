
import { Checkbox, MenuItem, Select } from '@material-ui/core';
import { FieldHookConfig, useField } from 'formik';
import { at } from 'lodash';
import React from 'react';
import styled from 'styled-components';

interface InputProps {
    label: string;
}

export const SelectField = (props: InputProps & FieldHookConfig<string>) => {

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

                <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    {...field}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </div>
            <div>
                {_renderHelperText()}
            </div>
        </InputWrapper>

    )
}

const InputWrapper = styled.div`
width: fit-content ;
display:flex;
flex-direction: column ;
align-items: flex-start ;
.input{
display:flex;
flex-direction: column ;
width: 450px;
.MuiInput-underline{
    padding: 2px;
    border: 1px solid #d8d8d8;
    border-radius: 6px ;
}
.MuiInput-underline:before{
    border:unset!important ;
}
}
`
/*
 
*/