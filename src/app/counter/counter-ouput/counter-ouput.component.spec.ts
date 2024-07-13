import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterOuputComponent } from './counter-ouput.component';

describe('CounterOuputComponent', () => {
  let component: CounterOuputComponent;
  let fixture: ComponentFixture<CounterOuputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterOuputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CounterOuputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
