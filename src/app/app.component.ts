import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HttpClient } from '@angular/common/http';
import { DefaultValue } from './decorators/default.decorator';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  @DefaultValue('Ang-NGRX')
  title = undefined;
  constructor(private http: HttpClient) {}
  ngOnInit() {}

  getData() {
    this.http.get('http://localhost:3000/api/v1/test').subscribe((data) => {
      console.log(data);
    });
  }
}
