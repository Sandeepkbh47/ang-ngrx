import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter/state/counter.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { postReducer } from './post/state/post.reducer';
import { CounterInterface } from './counter/state/counter-interface';
import { PostsInterface } from './post/state/post-state';
export interface AppState {
  counter: CounterInterface;
  posts: PostsInterface;
}
export const storeConfig = {
  counter: counterReducer,
  posts: postReducer,
};
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    importProvidersFrom(
      StoreModule.forRoot(storeConfig),
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
