import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterButtonComponent } from '../counter-button/counter-button.component';
import { CounterOutputComponent } from '../counter-output/counter-output.component';
import { CustomCounterInputComponent } from '../custom-counter-input/custom-counter-input.component';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [
    CommonModule,
    CounterButtonComponent,
    CounterOutputComponent,
    CustomCounterInputComponent,
  ],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent {
  counter: number = 0;
}
