import React, { useMemo } from 'react';
import styled from 'styled-components';
import { LablesContextProps, LablesQuestionsProps } from './interfaces';

//---------------------------------------------------------------------------------------------------------------------------------------

export const LabelsQuestion = ({ questionLabels, rectSize = 0, topPad = 0, space = 0 }: LablesQuestionsProps) => {
    return (
        <>
            {(questionLabels || []).map((item: any, idx: any) => {
                if (questionLabels && questionLabels[idx]) {
                    return (
                        <TextGWrapper key={idx} x={15} y={topPad} dy={(idx + 1) * (rectSize + space) - 5} className='t'>
                            {questionLabels[idx]}
                        </TextGWrapper>

                    )
                }

            })

            }
        </>
    )
}


export const LabelsContext = ({ contextLabels = [], colNum = 0,
    rectSize = 0, leftPad = 0, space = 0 }: LablesContextProps) => {


    const data = useMemo(() => {
        if (contextLabels === false || colNum < 1) return [];
        return (contextLabels || []).map((item, idx) => {
            return { col: idx + 1, index: idx, text: item?.website };
        });
        ;
    }, [colNum, contextLabels]);

    return useMemo(
        () => (
            <>
                {(data || []).map((item, idx) => {

                    return (
                        <>
                            <TextGWrapper
                                key={idx}
                                data-size={rectSize}
                                x={space + space}
                                y={15}
                                dx={item!.col * (rectSize + space)}
                                textAnchor='start'
                            >
                                {item!.text}
                            </TextGWrapper>
                            <Line
                                key={idx}
                                data-size={rectSize}
                                x={space + space + space}
                                y={10 + space}
                                dx={item!.col * (rectSize + space)}
                                textAnchor='start'
                                stroke='#555555'
                                stroke-width='1'
                            >
                                |
                            </Line>
                        </>

                    );
                })}
            </>
        ),
        [data, leftPad, rectSize, space],
    );
}

const Line = styled.line`
font-size: 16px ;
`

const TextGWrapper = styled.text`
font-size: 16px ;
`



