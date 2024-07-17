import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  TemplateRef,
  viewChild,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { Post, PostsInterface } from '../state/post-state';
import { Observable } from 'rxjs';
import { getPost } from '../state/post.selector';
import { CommonModule } from '@angular/common';
import { AppState, TOKEN } from '../../app.config';
import { AddPostComponent } from '../add-post/add-post.component';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { deletePostById } from '../state/post.action';
import { PostDirective } from '../../directives/post-directive.directive';
import { RatingComponent } from '../rating/rating.component';
import { HideCharPipe } from '../../pipes/hide-char.pipe';
import { LengthPipe } from '../../pipes/length.pipe';
import { CounterComponent } from '../../counter/counter/counter.component';

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
    HideCharPipe,
    LengthPipe,
  ],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostComponent {
  @ViewChild('nameTemp', { read: TemplateRef, static: true })
  nameTemp?: TemplateRef<any>;
  @ViewChild('mycounter', { read: ViewContainerRef })
  mycounter?: ViewContainerRef;
  posts$: Observable<Post[]> | undefined;
  constructor(
    private store: Store<AppState>,
    private router: Router,
    @Inject(TOKEN) private base: string
  ) {}

  ngOnInit() {
    console.log(this.base);
    this.posts$ = this.store.select(getPost);
  }

  ngAfterViewInit() {
    // this.mycounter?.createComponent(CounterComponent);
    if (this.nameTemp) {
      this.mycounter?.createEmbeddedView(this.nameTemp);
    }
  }

  deletePost(id: any) {
    this.store.dispatch(deletePostById({ id }));
  }
}
