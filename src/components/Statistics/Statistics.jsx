import PropTypes from 'prop-types';
import css from './Statistics.module.css';
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}

      <ul className={css.stat_list}>
        {stats.map(({ id, label, percentage }) => (
          <li
            key={id}
            style={{
              backgroundColor: getRandomHexColor(),
            }}
            className={css.statts_item}
          >
            <span className={css.stats_label}>{label}</span>
            <span className={css.stats_percentage}>{percentage}</span>
          </li>
        ))}
      </ul>
    </section>
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
