import PropTypes from 'prop-types';
import {} from './SectionStyled';

export const Section = ({ title, children }) => (
  <section>
    <h2>{title}</h2>
    {children}
  </section>
);

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.element,
};
