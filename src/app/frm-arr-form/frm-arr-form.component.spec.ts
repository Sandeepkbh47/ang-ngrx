import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrmArrFormComponent } from './frm-arr-form.component';

describe('FrmArrFormComponent', () => {
  let component: FrmArrFormComponent;
  let fixture: ComponentFixture<FrmArrFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrmArrFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FrmArrFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
