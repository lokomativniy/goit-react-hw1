import s from './Section.module.css';
import PropTypes from 'prop-types';

function random() {
  return Math.round(Math.random() * 256);
}

export default function Section({ title, stats }) {
  return (
    <section className={s.statistics}>
      <h2 className={s.title}>{title}</h2>
      <ul className={s.statList}>
        {stats.map(stat => (
          <li
            key={stat.id}
            style={{
              backgroundColor: `rgb(${random()}, ${random()}, ${random()})`,
            }}
          >
            <span className={s.label}>{stat.label}</span>
            <span>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Section.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};