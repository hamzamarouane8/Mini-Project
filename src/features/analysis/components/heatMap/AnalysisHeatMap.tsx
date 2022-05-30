import { Box, CircularProgress } from '@material-ui/core';
import React, { useEffect, useMemo, useState } from 'react';
import { useRedux } from '../../../../hooks/useRedux';
import { LabelsContext, LabelsQuestion } from '../../utils/ComponentHelper';
import { SVGProps } from '../../utils/interfaces';
import { IRectProps, Rect } from '../../utils/Rect';
import { existColor, formatData, numberSort } from '../../utils/Utils';
import useController from '../_controller';
import { HeapMapContent } from './_style';

//---------------------------------------------------------------------------------------------------------------------------------------



const XYPlot = (props: SVGProps) => {
    const { value, panelColors = { 0: '#dad6ff', 4: '#aea6ff', 6: '#8e84ff' } } = props;
    const nums = useMemo(() => numberSort(Object.keys(panelColors).map((item) => parseInt(item, 10))), [panelColors]);
    const [numGrid, setNumGrid] = React.useState(0);
    const svgRef = React.createRef<SVGSVGElement>();
    const [rectWidth, setRectWidth] = useState(180);
    const [rectHeight, setRectHeight] = useState(50);
    const [space, setSpace] = useState(10);
    const { result, contextLabels, questionLabels } = useMemo(() => formatData(value), [value]);
    const data = result;
    const [leftPad, setLeftPad] = useState(200);

    React.useEffect(() => {
        if (svgRef.current) {
            const width = svgRef.current?.clientWidth - 5 || 0;
            setNumGrid(Object.keys(data).length);
        }
    }, [svgRef, data])

    function SVGContentG(key: any, idx: any) {
        let tr = [];
        let cidx = 0;
        const list = data[key].content;
        for (let key1 in list) {

            const dummyProps: IRectProps = {
                //...data[key],
                //fill: 'red',
                //count: 1,
                rx: 4,
                count: list[key1].secondContent?.length,
                text: list[key1].company,
                width: rectWidth,
                height: rectHeight,
                x: cidx * (rectWidth + space + space),
                y: (rectHeight + space + (space / 2)) * idx,
                xText: cidx * (rectWidth + space + 10) + 80,
                yText: ((rectHeight + space + 5) * idx) + 35,
            }

            if (list[key1].secondContent && panelColors && Object.keys(panelColors).length > 0) {
                dummyProps.fill = existColor(list[key1].secondContent?.length || 0, nums, panelColors);
            } else if (panelColors && panelColors[0]) {
                dummyProps.fill = panelColors[0];
            }

            const dataProps = {
                row: cidx,
                column: idx,
                index: idx * 2 + cidx
            }
            ++cidx;
            tr.push(<Rect
                {...dummyProps}
                //data-total={10}
                data-row={dataProps.row}
                data-column={dataProps.column}
                data-index={dataProps.index}
            ></Rect>)
        }

        return tr;

    }
    const SVGContent = () => {
        let td = [];
        let idx = 0
        for (let key in data) {
            td.push(<g key={idx} data-row={idx}>
                {SVGContentG(key, idx)}
            </g>)
            ++idx;

        }
        return td;

    }
    return (
        <svg ref={svgRef} height="250px"
            preserveAspectRatio="xMinYMin slice"
            width="100%" >
            <LabelsQuestion topPad={5} rectSize={5} space={60} questionLabels={questionLabels} />
            <LabelsContext leftPad={leftPad} rectSize={180} space={20} contextLabels={contextLabels} colNum={contextLabels.length} />
            <g transform={`translate(${leftPad} , 35)`}>
                {SVGContent()}
            </g>
        </svg>)
}


export const HeatMap = (props: any) => {
    const { data, getDataLoading, isDataFetched } = useController();
    const [fetchedData, setFetchedData] = useState([]);


    useEffect(() => {
        if (isDataFetched) {
            setFetchedData(data);
        }
    }, [isDataFetched])

    if (getDataLoading)
        return (
            <Box style={{ padding: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <CircularProgress />
            </Box>
        )

    if (isDataFetched  && fetchedData.length == 0)
        return <>Result not found.</>


    return (
        <HeapMapContent >
            {isDataFetched && (<>
                <h4>Results :</h4>
                <div className='indicator'>
                    <div className='ind'>0 <div className='content color-1'></div></div>
                    <div className='ind'>{`> 3`}<div className='content color-2'></div></div>
                    <div className='ind'>{`> 6`}<div className='content color-3'></div></div>
                </div>
                <XYPlot value={fetchedData} />
            </>)
            }
        </HeapMapContent>
    )
}





