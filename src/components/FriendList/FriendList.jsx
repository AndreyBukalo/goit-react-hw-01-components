import React from "react";
import PropTypes from 'prop-types';
import { FriendListStyle,FriendAvatar,FriendInfo,FriendStatus,FriendsName} from "./FriendList.styled";

export const FriendList = ({ friends }) => (<FriendListStyle>{
    friends.map(({ avatar, name, isOnline, id }) =>
    (<FriendInfo key={id}>
        <FriendStatus isOnline = {isOnline}></FriendStatus>
        <FriendAvatar src={avatar} /><FriendsName>{name}</FriendsName>
    </FriendInfo>))
}</FriendListStyle>)


FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    }),
  ),
};