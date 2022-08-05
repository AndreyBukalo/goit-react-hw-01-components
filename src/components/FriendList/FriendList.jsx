import React from "react";
import PropTypes from 'prop-types';
import { FriendListItem } from "./FriendListItem";
import { FriendListStyle } from "./FriendList.styled";


export const FriendList = ({ friends }) => {
    return (
        <FriendListStyle>
            {friends.map(friend => (
                <FriendListItem
                    key={friend.id}
                    isOnline={friend.isOnline}
                    avatar={friend.avatar}
                    name={friend.name} />
            ))}
        </FriendListStyle>
    )
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    id:PropTypes.number.isRequired,
    }),
  ),
};
