import React from "react";
import PropTypes from 'prop-types';
import { FriendListItem } from "./FriendListItem";
import { Box } from "components/Box";

export const FriendList = ({ friends }) => {
    return (
      <Box width={320}
        display="flex"
        flexDirection="column"
        alignItems="flextStart"
        listStyle="none"
        ml="auto"
        mr="auto"
        mt="60px"
        p="0"
      as="ul">
            {friends.map(friend => (
                <FriendListItem
                    key={friend.id}
                    isOnline={friend.isOnline}
                    avatar={friend.avatar}
                    name={friend.name} />
            ))}
        </Box>
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
