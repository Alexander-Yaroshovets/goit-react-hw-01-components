import PropTypes from 'prop-types';

import {
  ProfileContainer,
  ProfileDiscription,
  Avatar,
  ProfileName,
  Tag,
  Location,
  Statistic,
  StatisticItem,
} from './Profile.styled.jsx';

export const Profile = ({ username, tag, location, stats, avatar }) => {
  return (
    <ProfileContainer>
      <ProfileDiscription>
        <Avatar src={avatar} alt="User avatar" />
        <ProfileName>{username}</ProfileName>
        <Tag>{tag}</Tag>
        <Location>{location}</Location>
      </ProfileDiscription>

      <Statistic>
        <StatisticItem>
          <span> Followers </span>
          <span>{stats.followers}</span>
        </StatisticItem>
        <StatisticItem>
          <span> Views </span>
          <span>{stats.views}</span>
        </StatisticItem>
        <StatisticItem>
          <span> Likes </span>
          <span>{stats.likes}</span>
        </StatisticItem>
      </Statistic>
    </ProfileContainer>
  );
};

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  stats: PropTypes.object,
  avatar: PropTypes.string,
};
