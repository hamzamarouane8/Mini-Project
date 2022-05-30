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

 export const initialValues= {
     [context.name]:'',
     [question.name]:'',
     [company.name]:'',
     [websiteTitle.name]:'',
     [market.name]:''
 }
