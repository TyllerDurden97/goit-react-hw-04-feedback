import React from 'react'
import PropTypes from 'prop-types';
import css from 'components/Section/Section.module.css';


export const Section = ({ title, children }) => {
   return (
      <section>
         {title && <h2 className={css.sectionFeedB}>{title}</h2>}
         {children}
      </section>
   )
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};