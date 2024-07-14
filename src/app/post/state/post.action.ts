import { createAction, props } from '@ngrx/store';
import { Post } from './post-state';

export const getPosts = createAction('getPosts');

export const addPost = createAction('addPost', props<{ post: Post }>());

export const updatePost = createAction('updatePost', props<{ post: Post }>());

export const deletePostById = createAction(
  'deletePostById',
  props<{ id: string }>()
);
