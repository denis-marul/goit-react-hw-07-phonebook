import { createAction } from '@reduxjs/toolkit';

export const fetchContactsRequest = createAction(
  'contscts/fetschContactsRequest'
);

export const fetchContactsSuccess = createAction(
  'contscts/fetschContactsSuccess'
);

export const fetchContactsError = createAction('contscts/fetschContactsError');
