import styled from "@emotion/styled";



export const FriendAvatar = styled.img`
width: 65px;
background-color:${p=> p.theme.colors.white};
border-radius:${p=> p.theme.radii.round};
`

export const FriendInfo = styled.li`
display:flex;
width:100%;
height:80px;
:not(:last-child) {
margin-bottom:${p=> p.theme.space[5]}px;};
align-items: center;
background-color:${p=> p.theme.colors.friendsCardColor};
border:${p => p.theme.borders.normal} ${p => p.theme.colors.borderColor};
box-shadow: ${p=> p.theme.shadows.custom};
`
export const FriendStatus = styled.span`
 height: 25px;
  width: 25px;
  margin-left:${p=> p.theme.space[4]}px;
  margin-right:${p=> p.theme.space[4]}px;
  border-radius: ${p=> p.theme.radii.round};
  display: inline-block;
   background-color: ${p=> (p.isOnline ? 'green' : 'red')}

`
export const FriendsName = styled.p`
font-size:${p=> p.theme.fontSizes.xml};
margin:${p=> p.theme.space[0]}px;
margin-left:${p=> p.theme.space[5]}px;
font-weight:${p=> p.theme.fontWeights.middle};

`