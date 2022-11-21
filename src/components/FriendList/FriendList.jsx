import PropTypes from 'prop-types';

import css from './FriendList.module.css';

export const Friendlist = ({ friends }) => {
  return (
    <ul className={css.friendlist}>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <li className={css.friendlist_item} key={id}>
            <span
              className={
                isOnline ? css.friendlist_online : css.friendlist_ofline
              }
            >
              {isOnline}
            </span>
            <img
              className={css.friendlist_avatar}
              src={avatar}
              alt="User avatar"
              width="48"
            />
            <p className={css.friendlist_name}>{name}</p>
          </li>
        );
      })}
    </ul>
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
