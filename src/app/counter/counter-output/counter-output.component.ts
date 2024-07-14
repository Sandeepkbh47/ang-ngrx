import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CounterInterface } from '../state/counter-interface';
import { getCounter } from '../state/counter-selector';
import { AppState } from '../../app.config';

@Component({
  selector: 'app-counter-output',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter-output.component.html',
  styleUrl: './counter-output.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterOutputComponent {
  counter$?: Observable<number> | undefined;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.counter$ = this.store.select(getCounter);
  }
}
