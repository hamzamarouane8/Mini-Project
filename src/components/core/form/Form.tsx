import React from 'react';
import * as yup from "yup";

import {
    Formik,
    FormikHelpers,
    FormikProps,
    Form,
    Field,
    FieldProps,
} from 'formik';

interface FormInitialValues {
    username: string;
    password: string;
}

interface FromProps {
    formId:string ;
    children:any;
    initialValues :object;
    validationSchema:any;
    onSubmitForm(props:any):void;
}





export default (props:FromProps) => {
const {initialValues,validationSchema , onSubmitForm,formId}=props;
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values) =>{
                console.log('heeee')
                return onSubmitForm(values)
            }
               }
        >
            <Form id={formId}>
                {props.children}
            </Form>
        </Formik>
    )
}