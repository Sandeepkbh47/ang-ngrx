export interface Post {
  id: string;
  name: string;
  description: string;
}

export interface PostsInterface {
  posts: Post[];
}

export const initialState: PostsInterface = {
  posts: [
    { id: 'an4i03jksx1', name: 'UserA', description: 'Looks Amazing' },
    { id: 'aklvjnk1800', name: 'UserB', description: 'Amazing**' },
  ],
};
