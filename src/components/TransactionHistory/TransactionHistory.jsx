import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';
export const TransactionHistory = ({ items }) => {
  return (
    <table className={css.transaction__history}>
      <thead className={css.transaction__head}>
        <tr>
          <th className={css.table__head}>Type</th>
          <th className={css.table__head}>Amount</th>
          <th className={css.table__head}>Currency</th>
        </tr>
      </thead>

      <tbody className={css.transaction__body}>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <td className={css.table}>{type}</td>
            <td className={css.table}>{amount}</td>
            <td className={css.table}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ),
};
