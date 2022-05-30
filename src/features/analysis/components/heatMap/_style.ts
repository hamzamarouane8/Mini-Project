import styled from "styled-components";

export const HeapMapContent = styled.div`
border-top: 1px solid #e0e0e0 ;
margin-top: 60px;
padding-top: 40px;
.indicator{
    float: right ;
    display: flex ;
    flex-direction: row ;
    height:20px;
    margin-bottom: 40px ;
    .ind{
        padding: 2px;
        font-size: 12px ;
        text-align: center ;
        .content{
            width: 60px;
            text-align: center ;
            padding: 5px;
            font-size: 10px ;
            color: #fff;
            border-radius: 2px ;
        }
    }
    .color-1{
        background-color:#dad6ff ;
    }
    .color-2{
        background-color:#aea6ff ;
    }
    .color-3{
        background-color:#8e84ff ;
    }
}
table{
    width:100%;
    tr{
        td{
            text-align: center ;
            padding : 3px;
            font-size: 14px ;
            .content{
                border-radius: 8px ;
                width:100%;
                height:50px;
                cursor: pointer;
            }
            .color-1{
                background-color:#d5defe ;
            }
            .color-2{
                background-color:#b8c7fc ;
            }
            .color-3{
                background-color:#4e73f8 ;
            }
        }
        .header{
            font-size:16px ;
        }

    }
}

`