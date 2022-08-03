import React from "react"
import {Wrapper,Description,UserAvatar,UserTitle,UserInfoText,Stats,StatsList,StatsNumbers} from './Card.styled'

export const ProfileCard = ( { username, tag, location, avatar,stats:{followers,views,likes} })  => {
 return <Wrapper>
  <Description>
    <UserAvatar src={avatar} alt="avatar"
    />
    <UserTitle> {username}</UserTitle>
    <UserInfoText>{tag}</UserInfoText>
    <UserInfoText>{location}</UserInfoText>
  </Description>
 <Stats>
    <StatsList>
      <UserInfoText>Followers</UserInfoText>
      <StatsNumbers >{followers}</StatsNumbers>
    </StatsList>
    <StatsList>
      <UserInfoText>Views</UserInfoText>
      <StatsNumbers>{views}</StatsNumbers>
    </StatsList>
    <StatsList>
      <UserInfoText>Likes</UserInfoText>
      <StatsNumbers >{likes}</StatsNumbers>
    </StatsList>
  </Stats>
</Wrapper>
}