import PropTypes from 'prop-types';
import styles from './Section.module.css';

const Section = ({ title, children }) => (
    <section className={styles.section}>
        <h2>{title}</h2>
        {children}
    </section>
);

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
}

export default Section;