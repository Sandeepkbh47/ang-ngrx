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
import { provideHttpClient } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { authReducer } from './auth/state/auth.reducer';
import { LoginSuccessInterface } from './auth/state/auth.state';
export interface AppState {
  counter: CounterInterface;
  posts: PostsInterface;
  auth: LoginSuccessInterface;
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
  auth: authReducer,
};
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    provideRouterStore(),
    importProvidersFrom(
      EffectsModule.forRoot([]),
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
