import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from '../state/counter.action';
import { CounterInterface } from '../state/counter-interface';
import { AppState } from '../../app.config';

@Component({
  selector: 'app-counter-button',
  standalone: true,
  imports: [],
  templateUrl: './counter-button.component.html',
  styleUrl: './counter-button.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterButtonComponent {
  // @Output('increment') increment = new EventEmitter();
  // @Output('decrement') decrement = new EventEmitter();
  // @Output('reset') reset = new EventEmitter();
  // onIncrement() {
  //   this.increment.emit();
  // }

  // onDecrement() {
  //   this.decrement.emit();
  // }

  // onReset() {
  //   this.reset.emit();
  // }

  constructor(private store: Store<AppState>) {}

  onIncrement() {
    this.store.dispatch(increment());
  }

  onDecrement() {
    this.store.dispatch(decrement());
  }

  onReset() {
    this.store.dispatch(reset());
  }
}
