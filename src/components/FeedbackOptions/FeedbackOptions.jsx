import React from 'react';
import PropTypes from 'prop-types';
import css from 'components/FeedbackOptions/FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
      options.map((option) => {
         return (  
            <div className={css.feedBbuttonGroup} key={option}>
               <button name={option} type='button' className={css.feedBbutton} onClick={onLeaveFeedback}>{option}</button>
            </div>
            )   
      })  

)

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};
