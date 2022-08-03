import styled from '@emotion/styled'

export const Wrapper = styled.div`
width:320px;
display:flex;
flex-direction:column;
align-items:center;
margin-left:auto;
margin-right:auto;
margin-top:60px;
padding-top:35px;
box-shadow: 3px 10px 26px 4px rgba(140,133,133,0.75);
`

export const Description = styled.div`
display:flex;
flex-direction:column;
align-items:center;
`
export const UserAvatar = styled.img`
width: 120px;
border-radius: 200px;
`

export const UserTitle = styled.p`
font-size:24px;
font-weight:500;
margin-bottom:0px;
`
export const UserInfoText = styled.p`
margin-bottom:0px;
font-size:16px;
color:RGBA(0,0,0,0.37)`;

export const Stats = styled.ul`
display:flex;
padding:0;
list-style:none;
margin-bottom:0;`;

export const StatsList = styled.li`
display:flex;
flex-direction:column;
align-items: center;
width:105px;
height:80px;
border:1px solid RGBA(0,0,0,0.15);
background-color: RGBA(0,0,0,0.06);
`
export const StatsNumbers = styled.span`
font-size: 18px;
font-weight:500;
margin-top:5px;
`