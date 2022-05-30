
export type HeatMapValues = {
    content?: any | any[];
    questions: string;
    other?: boolean;
    company?: string;
    website?:string;
    count?: number;
}


export interface SVGProps extends React.SVGProps<SVGSVGElement> {
    contextLabels?: string[] | false;
    panelColors?: Record<number, string>;
    value?: Array<HeatMapValues> | null;

}

export interface LablesContextProps extends React.SVGProps<SVGTextElement> {
    contextLabels?:  LablesCompany[] | false;
    rectSize?: number;
    space?: number;
    leftPad:number;
    colNum: number;

}
export type LablesCompany ={
    company?:  string;
    website?: string;

}


export interface LablesQuestionsProps extends React.SVGProps<SVGTextElement> {
    questionLabels?: string[] | false;
    rectSize?: number;
    topPad: number;

    space?: number;

}


export interface IDummy {
    company: string;
    context: string;

}