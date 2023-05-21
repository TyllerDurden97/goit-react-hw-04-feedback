import React from 'react'
import PropTypes from 'prop-types';
import css from 'components/NotificationMessage/NotificationMessage.module.css';


export const Notification = ({message }) => {
   return (
      <>
         {message && <h2 className={css.messageTitle}>{message}</h2>}
      </>
   )
}

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};