
import * as Yup from 'yup';

import formModel from './dataAnalysisFromModel';

const {
    formField:{
        context,
        question,
        company,
        websiteTitle,
        market
    }
}=formModel;

export const validationSchema = Yup.object().shape({
        [context.name]: Yup.string(),
        [question.name]: Yup.string().required(`${question.requireErrorMsg}`),
        [company.name]: Yup.string(),
        [websiteTitle.name]: Yup.boolean(),
        [market.name]: Yup.string(),
    })