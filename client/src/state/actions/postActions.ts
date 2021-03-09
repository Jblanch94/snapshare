import { postTypes } from '../action-types/postTypes';

export interface Post {
  id: string;
  created_at: string;
  updated_at: string;
  title: string;
  description: string;
  img: string;
  user_id: string;
}

interface FetchPosts {
  type: postTypes.FETCH_POSTS;
  payload: Post[];
}

export type PostActions = FetchPosts;
