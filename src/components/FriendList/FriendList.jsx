import React from "react";
import PropTypes from 'prop-types';
import { FriendListStyle,FriendAvatar,FriendInfo,FriendStatus,FriendsName} from "./FriendList.styled";

export const FriendList = ({friends}) => (<FriendListStyle>{
    friends.map(friend =>
    (<FriendInfo>
        <FriendStatus >{friend.isOnline}</FriendStatus>
        <FriendAvatar src={friend.avatar} /><FriendsName>{friend.name}</FriendsName>
    </FriendInfo>))
}</FriendListStyle>)