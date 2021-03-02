import axios from 'axios';

export const auth = axios.create({
  baseURL: '/snapshare/api/auth',
});
