import axios from 'axios';

export const post = axios.create({
  baseURL: '/snapshare/api/post',
});
