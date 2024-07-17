import { Routes } from '@angular/router';
import { CounterComponent } from './counter/counter/counter.component';
import { PostComponent } from './post/post/post.component';
import { AddPostComponent } from './post/add-post/add-post.component';
import { StoreModule } from '@ngrx/store';
import { counterFeature, postFeature } from './app.config';
import { importProvidersFrom } from '@angular/core';
import { postReducer } from './post/state/post.reducer';
import { counterReducer } from './counter/state/counter.reducer';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { AuthComponent } from './auth/auth/auth.component';
import { authReducer } from './auth/state/auth.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './auth/state/auth.effects';
import { canActivateGuard } from './gurads/can-activate.guard';
import { DummyComponent } from './dummy/dummy.component';
import { AppComponent } from './app.component';
import { UserFormComponent } from './user-form/user-form.component';
import { FrmGFormComponent } from './frm-gform/frm-gform.component';
import { FrmArrFormComponent } from './frm-arr-form/frm-arr-form.component';
import { FrmBuildFormComponent } from './frm-build-form/frm-build-form.component';

export const routes: Routes = [
  {
    path: 'counter',
    loadComponent: () =>
      import('./counter/counter/counter.component').then(
        (c) => c.CounterComponent
      ),
    providers: [
      importProvidersFrom(StoreModule.forFeature('counter', counterReducer)),
    ],
  },
  {
    path: 'posts',
    loadComponent: () =>
      import('./post/post/post.component').then((c) => c.PostComponent),
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
    providers: [
      importProvidersFrom(StoreModule.forFeature('posts', postReducer)),
    ],
  },
  {
    path: 'file',
    component: FileUploadComponent,
  },
  {
    path: 'auth',
    component: AuthComponent,
    providers: [
      importProvidersFrom(
        EffectsModule.forFeature([AuthEffects]),
        StoreModule.forFeature('auth', authReducer)
      ),
    ],
  },
  {
    path: 'dummmy',
    component: DummyComponent,
  },
  {
    path: 'tform',
    component: UserFormComponent,
  },
  {
    path: 'rngform',
    component: FrmGFormComponent,
  },
  {
    path: 'arrform',
    component: FrmArrFormComponent,
  },
  {
    path: 'formBuild',
    component: FrmBuildFormComponent,
  },
  {
    path: '',
    redirectTo: '/posts',
    pathMatch: 'full',
  },
];
