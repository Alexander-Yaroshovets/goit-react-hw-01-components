import PropTypes from 'prop-types';

import {
  StatisticsCard,
  Title,
  StatList,
  StatItem,
  Statslabel,
  StatsPercentage,
} from './Statistics.styled.jsx';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsCard>
      {title && <Title>{title}</Title>}

      <StatList>
        {stats.map(({ id, label, percentage }) => (
          <StatItem
            key={id}
            style={{
              backgroundColor: getRandomHexColor(),
            }}
          >
            <Statslabel>{label}</Statslabel>
            <StatsPercentage>{percentage}</StatsPercentage>
          </StatItem>
        ))}
      </StatList>
    </StatisticsCard>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ),
};
