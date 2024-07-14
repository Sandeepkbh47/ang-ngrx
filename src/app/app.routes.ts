import { Routes } from '@angular/router';
import { CounterComponent } from './counter/counter/counter.component';
import { PostComponent } from './post/post/post.component';
import { AddPostComponent } from './post/add-post/add-post.component';

export const routes: Routes = [
  {
    path: 'counter',
    loadComponent: () =>
      import('./counter/counter/counter.component').then(
        (c) => c.CounterComponent
      ),
  },
  {
    path: 'posts',
    component: PostComponent,
    children: [
      {
        path: 'add',
        component: AddPostComponent,
      },
      {
        path: 'edit/:id',
        component: AddPostComponent,
      },
    ],
  },
];
