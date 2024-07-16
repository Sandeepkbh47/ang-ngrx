import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Post, PostsInterface } from '../state/post-state';
import { Observable } from 'rxjs';
import { getPost } from '../state/post.selector';
import { CommonModule } from '@angular/common';
import { AppState } from '../../app.config';
import { AddPostComponent } from '../add-post/add-post.component';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { deletePostById } from '../state/post.action';
import { PostDirective } from '../../directives/post-directive.directive';
import { RatingComponent } from '../rating/rating.component';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [
    PostDirective,
    CommonModule,
    RouterModule,
    RouterOutlet,
    RatingComponent,
    AddPostComponent,
  ],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostComponent {
  posts$: Observable<Post[]> | undefined;
  constructor(private store: Store<AppState>, private router: Router) {}

  ngOnInit() {
    this.posts$ = this.store.select(getPost);
  }

  deletePost(id: any) {
    this.store.dispatch(deletePostById({ id }));
  }
}
