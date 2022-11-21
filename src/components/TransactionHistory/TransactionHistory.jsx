import PropTypes from 'prop-types';

import {
  Transaction,
  TransactionHead,
  TransactionBody,
  Table,
  TableHead,
} from './TransactionHistory.styled.jsx';

export const TransactionHistory = ({ items }) => {
  return (
    <Transaction>
      
      <TransactionHead>
        <tr>
          <TableHead>Type</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Currency</TableHead>
        </tr>
      </TransactionHead>

      <TransactionBody>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <Table>{type}</Table>
            <Table>{amount}</Table>
            <Table>{currency}</Table>
          </tr>
        ))}
      </TransactionBody>

    </Transaction>
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
