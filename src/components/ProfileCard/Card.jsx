import React from "react";
import PropTypes from 'prop-types';
import {UserAvatar,UserTitle,UserInfoText,Stats,StatsList,StatsNumbers} from './Card.styled'
import { Box } from "components/Box";




export const ProfileCard = ( { username, tag, location, avatar,stats:{ followers,views,likes } })  => {
  return <Box width={320}
    display="flex"
    flexDirection="column"
    alignItems="center"
    ml="auto"
    mr="auto"
  boxShadow="custom">
    <Box display="flex"
      flexDirection="column"
    alignItems="center">
    <UserAvatar src={avatar} alt="avatar"
    />
    <UserTitle> {username}</UserTitle>
    <UserInfoText>{tag}</UserInfoText>
    <UserInfoText>{location}</UserInfoText>
  </Box>
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
</Box>
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