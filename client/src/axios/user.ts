import axios from 'axios';

export const user = axios.create({
  baseURL: '/snapshare/api/user',
});
