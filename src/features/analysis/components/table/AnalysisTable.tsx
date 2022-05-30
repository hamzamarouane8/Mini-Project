import { TablePagination } from '@material-ui/core';
import React, { useEffect } from 'react';
import styled from 'styled-components';


//---------------- IN PROGRESS ---------------------------------------
interface ITable {
    columns?: any;
    data?: any;
}

const columns = [{ text: 'Companies', name: 'company', className: 'company' },
{ text: 'Context', name: 'context' },
{ text: 'Questions', name: 'question' },
{ text: 'Result URL', name: 'website' },
{ text: 'Title', name: 'title' },]

const data = [
    { 'company': 'polaris.com', 'context': 'Clean energy', 'question': 'Hydrogen', 'website': 'www.polaris.com', 'title': 'clean energy cost' },
{ 'company': 'polaris.com', 'context': 'Clean energy', 'question': 'Hydrogen', 'website': 'www.polaris.com', 'title': 'clean energy cost' },
{ 'company': 'polaris.com', 'context': 'Clean energy', 'question': 'Hydrogen', 'website': 'www.polaris.com', 'title': 'clean energy cost' },
{ 'company': 'polaris.com', 'context': 'Clean energy', 'question': 'Hydrogen', 'website': 'www.polaris.com', 'title': 'clean energy cost' },
{ 'company': 'polaris.com', 'context': 'Clean energy', 'question': 'Hydrogen', 'website': 'www.polaris.com', 'title': 'clean energy cost' },
{ 'company': 'polaris.com', 'context': 'Clean energy', 'question': 'Hydrogen', 'website': 'www.polaris.com', 'title': 'clean energy cost' },
{ 'company': 'polaris.com', 'context': 'Clean energy', 'question': 'Hydrogen', 'website': 'www.polaris.com', 'title': 'clean energy cost' },
{ 'company': 'polaris.com', 'context': 'Clean energy', 'question': 'Hydrogen', 'website': 'www.polaris.com', 'title': 'clean energy cost' },
{ 'company': 'polaris.com', 'context': 'Clean energy', 'question': 'Hydrogen', 'website': 'www.polaris.com', 'title': 'clean energy cost' },
{ 'company': 'polaris.com', 'context': 'Clean energy', 'question': 'Hydrogen', 'website': 'www.polaris.com', 'title': 'clean energy cost' },
{ 'company': 'polaris.com', 'context': 'Clean energy', 'question': 'Hydrogen', 'website': 'www.polaris.com', 'title': 'clean energy cost' },
{ 'company': 'polaris.com', 'context': 'Clean energy', 'question': 'Hydrogen', 'website': 'www.polaris.com', 'title': 'clean energy cost' },
{ 'company': 'polaris.com', 'context': 'Clean energy', 'question': 'Hydrogen', 'website': 'www.polaris.com', 'title': 'clean energy cost' },
{ 'company': 'polaris.com', 'context': 'Clean energy', 'question': 'Hydrogen', 'website': 'www.polaris.com', 'title': 'clean energy cost' },
{ 'company': 'polaris.com', 'context': 'Clean energy', 'question': 'Hydrogen', 'website': 'www.polaris.com', 'title': 'clean energy cost' },
{ 'company': 'polaris.com', 'context': 'Clean energy', 'question': 'Hydrogen', 'website': 'www.polaris.com', 'title': 'clean energy cost' },
{ 'company': 'polaris.com', 'context': 'Clean energy', 'question': 'Hydrogen', 'website': 'www.polaris.com', 'title': 'clean energy cost' },
{ 'company': 'polaris.com', 'context': 'Clean energy', 'question': 'Hydrogen', 'website': 'www.polaris.com', 'title': 'clean energy cost' },
{ 'company': 'polaris.com', 'context': 'Clean energy', 'question': 'Hydrogen', 'website': 'www.polaris.com', 'title': 'clean energy cost' },
{ 'company': 'polaris.com', 'context': 'Clean energy', 'question': 'Hydrogen', 'website': 'www.polaris.com', 'title': 'clean energy cost' },
{ 'company': 'polaris.com', 'context': 'Clean energy', 'question': 'Hydrogen', 'website': 'www.polaris.com', 'title': 'clean energy cost' },
{ 'company': 'polaris.com', 'context': 'Clean energy', 'question': 'Hydrogen', 'website': 'www.polaris.com', 'title': 'clean energy cost' },
{ 'company': 'polaris.com', 'context': 'Clean energy', 'question': 'Hydrogen', 'website': 'www.polaris.com', 'title': 'clean energy cost' },
{ 'company': 'polaris.com', 'context': 'Clean energy', 'question': 'Hydrogen', 'website': 'www.polaris.com', 'title': 'clean energy cost' },
{ 'company': 'polaris.com', 'context': 'Clean energy', 'question': 'Hydrogen', 'website': 'www.polaris.com', 'title': 'clean energy cost' },
{ 'company': 'polaris.com', 'context': 'Clean energy', 'question': 'Hydrogen', 'website': 'www.polaris.com', 'title': 'clean energy cost' },
{ 'company': 'polaris.com', 'context': 'Clean energy', 'question': 'Hydrogen', 'website': 'www.polaris.com', 'title': 'clean energy cost' },
{ 'company': 'polaris.com', 'context': 'Clean energy', 'question': 'Hydrogen', 'website': 'www.polaris.com', 'title': 'clean energy cost' },
{ 'company': 'polaris.com', 'context': 'Clean energy', 'question': 'Hydrogen', 'website': 'www.polaris.com', 'title': 'clean energy cost' },
{ 'company': 'polaris.com', 'context': 'Clean energy', 'question': 'Hydrogen', 'website': 'www.polaris.com', 'title': 'clean energy cost' },
{ 'company': 'polaris.com', 'context': 'Clean energy', 'question': 'Hydrogen', 'website': 'www.polaris.com', 'title': 'clean energy cost' },
{ 'company': 'polaris.com', 'context': 'Clean energy', 'question': 'Hydrogen', 'website': 'www.polaris.com', 'title': 'clean energy cost' },
{ 'company': 'polaris.com', 'context': 'Clean energy', 'question': 'Hydrogen', 'website': 'www.polaris.com', 'title': 'clean energy cost' },
{ 'company': 'polaris.com', 'context': 'Clean energy', 'question': 'Hydrogen', 'website': 'www.polaris.com', 'title': 'clean energy cost' },
{ 'company': 'polaris.com', 'context': 'Clean energy', 'question': 'Hydrogen', 'website': 'www.polaris.com', 'title': 'clean energy cost' },
{ 'company': 'polaris.com', 'context': 'Clean energy', 'question': 'Hydrogen', 'website': 'www.polaris.com', 'title': 'clean energy cost' },
{ 'company': 'polaris.com', 'context': 'Clean energy', 'question': 'Hydrogen', 'website': 'www.polaris.com', 'title': 'clean energy cost' },
{ 'company': 'polaris.com', 'context': 'Clean energy', 'question': 'Hydrogen', 'website': 'www.polaris.com', 'title': 'clean energy cost' },
]
export default (props: ITable) => {

    const __columns = React.useMemo(() => {
        return (
            <thead className='header'>
                <tr>
                    {
                        (columns || []).map((col: any, index: number) => (
                            <th key={index} className={`header__cell ${col.className} `} scope="col" >{col.text}</th>
                        ))
                    }
                </tr>
            </thead>
        )
    }, [columns]);

    const __body = React.useMemo(() => {
        return (<tbody>
            {
                (data || []).map((record: any, index: number) => (
                    <tr key={index} className={`body_row`}>
                        {
                            (columns || []).map((col: any, index: number) => (
                                <td key={index} className={`content__cell ${col.className}`}>
                                    <div className='cell'>{col.render ? col.render(record) : record[col.name]}</div>
                                </td>
                            ))
                        }
                    </tr>
                ))
            }

        </tbody>)
    }, [data]);


    const [page, setPage] = React.useState(data.length / 10);

    const [rowsPerPage, setRowsPerPage] = React.useState(10);


    useEffect(() => {
        if (data)
            setPage(data.length / rowsPerPage);
    }, [rowsPerPage, data]);

    const handleChangePage = (
        event: React.MouseEvent<HTMLButtonElement> | null,
        newPage: number,
    ) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <TableWrapper>
            <table className='table'>
                {__columns}
                {__body}
            </table>
            <TablePagination
                component="div"
                count={data.length}
                page={page}
                onPageChange={handleChangePage}
                rowsPerPage={rowsPerPage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </TableWrapper>

    )

}

const TableWrapper = styled.div`
position: relative;
display: flex ;
flex-direction: column ;
table{
    border-collapse: separate;
    width:100%;
    border-spacing: 0 .2em; 
    .header{
        .header__cell{
            padding: 12px 24px;
            color:rgb(114,102,240);
            font-size: ${props => props.theme.fontSizes.base};
            font-weight : ${props => props.theme.fontWeights.medium};
        }
    }
    .body_row{
    margin-bottom: 8px;
    .company{
        padding-right: 10px;
    }
    .content__cell{

        .cell{
            background-color: #7367f029 ;
            font-size: ${props => props.theme.fontSizes.base};
            font-weight : ${props => props.theme.fontWeights.regular};

            padding: 12px 24px;
        }
    }
    }
}

tbody, td, tfoot, th, thead, tr{
    border:unset;
}

.table>:not(:first-child){
    border:unset ;
}
.table>:not(caption)>*>*{
    padding: unset;
}

`