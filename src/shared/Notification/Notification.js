import React from 'react';
import { CSSTransition } from 'react-transition-group';
import styles from '../Notification/Notification.module.css';
import { useSelector } from 'react-redux';
import getNotification from '../../redux/notification/notificationSelectors';
import getError from '../../redux/error/errorSelectors';
import PropTypes from 'prop-types';

const Notification = ({ children }) => {
  const isNotification = useSelector(getNotification);
  const isError = useSelector(getError);
  return (
    <CSSTransition
      in={isNotification}
      appear={true}
      timeout={250}
      classNames={styles}
      unmountOnExit
    >
      <div className={isError ? styles.errorNotification : styles.notification}>
        {children}
      </div>
    </CSSTransition>
  );
};

Notification.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Notification;
