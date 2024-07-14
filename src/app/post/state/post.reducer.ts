import { createReducer, on } from '@ngrx/store';
import { initialState } from './post-state';
import { addPost, deletePostById, getPosts, updatePost } from './post.action';
export const postReducer = createReducer(
  initialState,
  on(getPosts, (state) => {
    return {
      ...state,
    };
  }),
  on(addPost, (state, action) => {
    let post = { ...action.post };
    post.id = Math.random().toString(36).slice(2, 10);
    return {
      ...state,
      posts: [...state.posts, post],
    };
  }),
  on(updatePost, (state, action) => {
    let updatedPosts = state.posts.map((post) => {
      return post.id === action.post.id ? action.post : post;
    });
    return {
      ...state,
      posts: updatedPosts,
    };
  }),
  on(deletePostById, (state, action) => {
    let updatedPosts = state.posts.filter((post) => {
      return post.id !== action.id;
    });
    return {
      ...state,
      posts: updatedPosts,
    };
  })
);
