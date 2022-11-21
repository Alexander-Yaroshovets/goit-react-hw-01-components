import PropTypes from 'prop-types';

import {
  ListOfFriends,
  FriendItem,
  Picture,
  FriendName,
  IsOnline,
} from './FriendList.styled.jsx';

export const Friendlist = ({ friends }) => {
  return (
    <ListOfFriends>

      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <FriendItem key={id}>
            <IsOnline eventType={isOnline}>{isOnline}</IsOnline>
            <Picture src={avatar} alt="User avatar" width="48" />
            <FriendName>{name}</FriendName>
          </FriendItem>
        );
      })}
      
    </ListOfFriends>
  );
};

Friendlist.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }).isRequired
  ),
};
