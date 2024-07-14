import { Component } from '@angular/core';

import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Post } from '../state/post-state';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.config';
import { addPost, updatePost } from '../state/post.action';
import { ActivatedRoute, Router } from '@angular/router';
import { getPostById } from '../state/post.selector';

@Component({
  selector: 'app-add-post',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-post.component.html',
  styleUrl: './add-post.component.css',
})
export class AddPostComponent {
  postForm: FormGroup;
  post_id: string | undefined;
  constructor(
    private store: Store<AppState>,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.postForm = new FormGroup({
      name: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
      description: new FormControl(null, [
        Validators.required,
        Validators.minLength(10),
      ]),
    });
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((data: any) => {
      if (data?.id) {
        this.post_id = data.id;
        this.fetchPostById();
      }
    });
  }

  nameErrors() {
    const nameForm = this.postForm.get('name');
    if (nameForm?.touched && !nameForm?.valid) {
      if (nameForm?.errors?.['required']) {
        return 'Name must must be provided';
      }
      if (nameForm?.errors?.['minLength']) {
        return 'Name must atleast be of 6 characters';
      }
    }
    return null;
  }

  descriptionErrors() {
    const descriptionForm = this.postForm.get('description');
    if (descriptionForm?.touched && !descriptionForm?.valid) {
      if (descriptionForm?.errors?.['required']) {
        return 'Description must must be provided';
      }
      if (descriptionForm?.errors?.['minLength']) {
        return 'Description must atleast be of 10 characters';
      }
    }
    return null;
  }

  submitPost() {
    const post: Post = this.postForm.value as Post;
    if (this.postForm.valid && this.post_id == undefined) {
      this.store.dispatch(addPost({ post }));
      this.router.navigate(['/posts']);
    } else {
      post.id = this.post_id != undefined ? this.post_id : '';
      this.store.dispatch(updatePost({ post }));
      this.router.navigate(['/posts']);
    }
  }

  fetchPostById() {
    this.store
      .select(getPostById({ post_id: this.post_id }))
      .subscribe((data) => {
        this.postForm.reset(data);
      });
  }
}
