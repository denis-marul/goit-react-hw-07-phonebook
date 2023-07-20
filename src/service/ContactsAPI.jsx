import axios from 'axios';

axios.defaults.baseURL = 'https://64b72deedf0839c97e166fe4.mockapi.io/api/v1/';

export async function fetchContacts() {
  const { data } = await axios.get('contacts');
  return data;
}

export async function addContacts(newContact) {
  await axios.post('contacts', newContact);
}

// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// export const contactsApi = createApi({
//   reducerPath: 'contactsApi',
//   baseQuery: fetchBaseQuery({
//     baseUrl: 'https://64b72deedf0839c97e166fe4.mockapi.io/api/v1/',
//   }),
//   endpoints: builder => ({
//     fetchContacts: builder.query({
//       query: () => '/contacts',
//     }),
//   }),
// });

// export const { useFetchContactsQuery } = contactsApi;
