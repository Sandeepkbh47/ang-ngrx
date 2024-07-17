import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrmGFormComponent } from './frm-gform.component';

describe('FrmGFormComponent', () => {
  let component: FrmGFormComponent;
  let fixture: ComponentFixture<FrmGFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrmGFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FrmGFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
