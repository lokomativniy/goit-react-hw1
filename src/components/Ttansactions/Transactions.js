import PropTypes from 'prop-types';
import s from './Transaction.module.css';

export default function TransactionHistory({ items }) {
  return (
    <table className={s.transactionHistory}>
      <thead>
        <tr>
          <th className={s.headType}> Type </th>
          <th className={s.head}> Amount </th>
          <th className={s.head}> Currency </th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => (
          <tr key={item.id} className={s.row}>
            <td className={s.type}>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ),
};
