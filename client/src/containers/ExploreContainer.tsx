import { useEffect } from 'react';
import Explore from '../components/pages/Explore';
import { fetchPosts } from '../state/action-creators/postActions';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootState } from '../state/reducers';

const ExploreContainer = () => {
  const dispatch = useDispatch();
  const { posts } = useSelector((state: RootState) => state.posts);

  console.log('posts', posts);
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);
  return <Explore />;
};

export default ExploreContainer;
