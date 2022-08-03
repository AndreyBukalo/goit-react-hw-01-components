import styled from '@emotion/styled'

export const Table = styled.table`
width:480px;
margin-left:auto;
margin-right:auto;
margin-top:60px;
padding:0;
box-shadow: 3px 10px 26px 4px rgba(140,133,133,0.75);

`
export const TableHeader = styled.tr`
width:126px;
height:45px;
background-color:#1fb9ff;
`

export const TableTitle = styled.th`
font-size:16px;
color:white;
font-weight:400;

`

export const TransactionRow = styled.tr`

height:35px;
text-align:center;
background-color:white;
:nth-of-type(2n) {
    background-color:RGBA(0,120,124,0.22);
}
`

export const TransactionDetails = styled.td`
font-size:16px;
color:RGBA(0,0,0,0.5)`