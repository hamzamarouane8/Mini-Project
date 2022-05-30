import { Set } from "typescript";
import { HeatMapValues, SVGProps } from "./interfaces";

export type HeatMapValues1 = {
    secondContent?: HeatMapValues[];
    questions: string;
    company?: string;
    count?: number;
}
export function formatData(data: SVGProps['value'] = []) {
    const result: Record<string, HeatMapValues> = {};
    //const result1: Record<string, HeatMapValues1> = {};
    let contextLabels: any[] = []

    data?.forEach((item) => {
        let list :any[]=[]
        const key = item.questions;
        if (result[key]) {
            if (result[key]?.company === item?.company) {
                result[key] = { ...result[key], other: true };
            }
            list.push(...result[key].content, item)

        } else {
           list.push(item)
        }
        contextLabels.push({website:item.website , company:item.company});

        result[key] =  { ...result[key], company: item?.company, questions: item.questions, content: list };

    })
     contextLabels = contextLabels.filter((value, index) => {
        const _value = JSON.stringify(value);
        return index === contextLabels.findIndex(obj => {
          return JSON.stringify(obj) === _value;
        });
      });

    return formatDataContext(result, contextLabels);
}

const formatDataContext = (result: Record<string, HeatMapValues>, contextLabels: any[]) => {
    let questionLabels: any[] = []
    for (let key in result) {

        const result1: Record<string, HeatMapValues1> = {};
        questionLabels.push(result[key].questions)

        if (result[key].other) {
        }
            contextLabels.forEach((context: any) => {
                let list = [];
                const item = result[key].content.filter((item: any) => item.company === context.company) || null;

                const keyC = item?.company || context.company;
                if (result1[keyC] ) {
                    list.push(...(result1[keyC]?.secondContent || []), ...item)
                } else {
                    if (item)
                        list.push(...item)
                }

                result1[keyC] = { company: item?.company, questions: item?.questions, secondContent: list };
            })

        result[key] = { ...result[key], content: result1 }
    }
    return { result, contextLabels, questionLabels };
}

export function existColor(num: number = 0, nums: number[], panelColors: Record<number, string> = {}) {
    let color = '';
    for (let a = 0; a < nums.length; a += 1) {
        

        if (nums[a] >= num) {
            color = panelColors[nums[a]];
            break;
        }
        color = panelColors[nums[a]];
    }
    return color;
}

export function numberSort(keys: number[] = []) {
    return keys.sort((x, y) => {
        if (x < y) return -1;
        else if (x > y) return 1;
        return 0;
    });
}