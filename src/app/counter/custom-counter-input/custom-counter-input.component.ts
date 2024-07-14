import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterInterface } from '../state/counter-interface';
import { customIncrement } from '../state/counter.action';
import { FormsModule } from '@angular/forms';
import { AppState } from '../../app.config';

@Component({
  selector: 'app-custom-counter-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './custom-counter-input.component.html',
  styleUrl: './custom-counter-input.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomCounterInputComponent {
  value: number = 0;
  constructor(private store: Store<AppState>) {}

  setCustomIncrement() {
    this.store.dispatch(customIncrement({ value: +this.value }));
  }
}
