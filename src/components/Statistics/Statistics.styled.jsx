import styled from '@emotion/styled'

export const StatSection = styled.section`
width:320px;
display:flex;
flex-direction:column;
align-items:center;
margin-left:auto;
margin-right:auto;
margin-top:45px;
margin-bottom:45px;

box-shadow: 3px 10px 26px 4px rgba(140,133,133,0.75);`;


export const StatTitle = styled.h2`
font-size:18px;
text-transform:uppercase;
font-weight:500;
color: RGBA(0,0,0,0.57);
margin-bottom:0px;
`

export const StatsList = styled.ul`
display:flex;
padding:0;
list-style:none;
margin-bottom:0;`;

export const StatsItem = styled.li`
display:flex;
flex-direction:column;
align-items: center;
width:62px;
height:60px;
border:1px solid RGBA(0,0,0,0.15);
:nth-of-type(1) {background-color:RGBA(0,188,255,0.66)};
:nth-of-type(2) {background-color:RGBA(236,7,174,1)};
:nth-of-type(3) {background-color:RGBA(136,7,174,1)};
:nth-of-type(4) {background-color:RGBA(0,205,255,1)};
:nth-of-type(5) {background-color:RGBA(0,101,104,1)};
`

export const FromatInfo = styled.span`
font-size:14px;
margin-top:2px;
margin-bottom:8px;
color:white
`
export const PercentRating = styled.span`
font-size:18px;
color:white;
`