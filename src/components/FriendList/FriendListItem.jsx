import React from "react";
import PropTypes from 'prop-types';
import {FriendAvatar,FriendInfo,FriendStatus,FriendsName} from "./FriendList.styled";

export const FriendListItem = ({ avatar, name, isOnline, id} ) => {
  return (
    <FriendInfo key={id}>
      <FriendStatus isOnline={isOnline}></FriendStatus>
      <FriendAvatar src={avatar} /><FriendsName>{name}</FriendsName>
    </FriendInfo>); }


FriendListItem.propTypes = {
  friends:PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    id:PropTypes.number.isRequired,
    }),
};

