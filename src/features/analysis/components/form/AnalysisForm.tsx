import React from 'react'
import Button from '../../../../components/core/button'
import Form from '../../../../components/core/form/Form'
import { CheckboxField, SelectField } from '../../../../components/core/form/inputs'
import TextAreaField from '../../../../components/core/form/inputs/TextAreaField'
import dataanalysisFromModel from '../form-model/dataAnalysisFromModel'
import { initialValues } from '../form-model/formIntialValues'
import { validationSchema } from '../form-model/validationSchema'
import useController from '../_controller'
import { FormWrapper } from './_style'

//------------------------------------------------------------------------------------------------------------------

const { formId, formField } = dataanalysisFromModel;

export default (props:any) => {
  const { onSubmitForm } = useController();

  return (
    <FormWrapper>
      <Form {...{ validationSchema, onSubmitForm, initialValues, formId }}>
        <TextAreaField {...formField.context} />
        <TextAreaField {...formField.question} />
        <TextAreaField {...formField.company} />
        <CheckboxField {...formField.websiteTitle} />
        <div className='actions'>
          <SelectField {...formField.market} />
          <Button type="button" className="reset" >Reset</Button>
          <Button type="submit" className="primary" >Search</Button>
        </div>

      </Form>
    </FormWrapper>

  )
}