import { Component } from '@angular/core';
import { LengthPipe } from '../pipes/length.pipe';

@Component({
  selector: 'app-dummy',
  standalone: true,
  imports: [LengthPipe],
  templateUrl: './dummy.component.html',
  styleUrl: './dummy.component.css',
})
export class DummyComponent {
  dummyArray: any[] = [];

  onAdd() {
    this.dummyArray.push(true);
    console.log(this.dummyArray);
  }
}
