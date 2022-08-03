import React from "react";
import PropTypes from 'prop-types';
import {Wrapper,Description,UserAvatar,UserTitle,UserInfoText,Stats,StatsList,StatsNumbers} from './Card.styled'

export const ProfileCard = ( { username, tag, location, avatar,stats:{ followers,views,likes } })  => {
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

ProfileCard.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.exact({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes:PropTypes.number.isRequired,
        

    })

}