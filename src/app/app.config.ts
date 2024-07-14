import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { createFeature, StoreModule } from '@ngrx/store';
import { counterReducer } from './counter/state/counter.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { postReducer } from './post/state/post.reducer';
import { CounterInterface } from './counter/state/counter-interface';
import { PostsInterface } from './post/state/post-state';
import { provideRouterStore } from '@ngrx/router-store';
export interface AppState {
  counter: CounterInterface;
  posts: PostsInterface;
}

export const counterFeature = createFeature({
  name: 'counter',
  reducer: counterReducer,
});

export const postFeature = createFeature({
  name: 'posts',
  reducer: postReducer,
});

export const storeConfig = {
  counter: counterReducer,
  posts: postReducer,
};
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideRouterStore(),
    importProvidersFrom(
      StoreModule.forRoot({}),
      StoreDevtoolsModule.instrument({
        maxAge: 25,
        logOnly: false,
        autoPause: true,
        features: {
          pause: false,
          lock: true,
          persist: true,
        },
      })
    ),
  ],
};
