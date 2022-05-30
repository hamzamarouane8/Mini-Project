import styled from "styled-components";

export const ButtonWrapper = styled.button`
background-color: transparent;
border: unset;
&.primary{
    background-color:#7367f0;
    color:#fff;
    &:hover{
        border: 1px solid #7367f0;
        background-color:#fff ;
        color:#7367f0;
    }
}
&.reset{
    color:#7367f0;
    &:hover{
        border-bottom: 1px solid #7367f0;
        background-color:#fff ;
        color:#7367f0;
    }
}
`