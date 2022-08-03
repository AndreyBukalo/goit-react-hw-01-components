import styled from "@emotion/styled";

export const FriendListStyle = styled.ul`
width:320px;
display:flex;
flex-direction:column;
align-items:flex-start;
list-style:none;
margin-left:auto;
margin-right:auto;
margin-top:60px;
padding:0;
padding-top:35px;

`

export const FriendAvatar = styled.img`
width: 80px;
border-radius: 100px;
`

export const FriendInfo = styled.li`
display:flex;
width : 100%;
margin-bottom:25px;
align-items: center;
border:1px solid RGBA(0,0,0,0.15);
box-shadow: 3px 10px 26px 4px rgba(140,133,133,0.75);
`
export const FriendStatus = styled.span`
 height: 25px;
  width: 25px;
  margin-left:15px;
  margin-right:15px;
  background-color:red;
  border-radius: 50%;
  display: inline-block;

`
export const FriendsName = styled.p`
font-size:22px;
margin:0;
margin-left:20px;
font-weight:500;
margin-bottom:0px;
`