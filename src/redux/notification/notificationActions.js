import { createAction } from '@reduxjs/toolkit';

const notificationTrue = createAction('notification/notificationTrue');
const notificationFalse = createAction('notification/notificationFalse');

export default {
  notificationTrue,
  notificationFalse,
};
