import PropTypes from 'prop-types';

import css from './Profile.module.css';

export const Profile = ({ username, tag, location, stats, avatar }) => {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img src={avatar} alt="User avatar" className={css.avatar} />
        <p className={css.name}>{username}</p>
        <p className={css.tag}>{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.stats}>
        <li className={css.profile_item}>
          <span className="label">Followers </span>
          <span className="quantity">{stats.followers}</span>
        </li>
        <li className={css.profile_item}>
          <span className="label">Views </span>
          <span className="quantity">{stats.views}</span>
        </li>
        <li className={css.profile_item}>
          <span className={css.label}>Likes </span>
          <span className={css.quantity}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  stats: PropTypes.object,
  avatar: PropTypes.string,
};
