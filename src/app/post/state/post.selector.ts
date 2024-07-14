import {
  createFeature,
  createFeatureSelector,
  createSelector,
  props,
} from '@ngrx/store';
import { PostsInterface } from './post-state';

const getPostState = createFeatureSelector<PostsInterface>('posts');

export const getPost = createSelector(getPostState, (state) => {
  return state.posts;
});

export const getPostById = (props: any) =>
  createSelector(getPostState, (state) => {
    return state.posts.find((post: any) => post.id == props.post_id);
  });
