import React, { useState } from 'react';

export interface IRectProps extends React.SVGProps<SVGRectElement> {
    children?: any;
    count :number;
    xText?: number;
    yText?: number;
    company?:string;
    text?:string;
}

export const Rect = (props: IRectProps) => {
    const {count, xText, yText,company,text, ...rest } = props;
    const [show, setShow] = useState(false);

    return <g style={{ cursor: 'pointer' }} onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
        <rect {...props} ></rect>
        <text data-column={2}
            data-row={1} x={xText} y={yText} font-size="26" font-weight='600'  fill='#5e5873'>{count}</text>

    </g>
} 