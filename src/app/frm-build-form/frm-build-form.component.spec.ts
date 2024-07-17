import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrmBuildFormComponent } from './frm-build-form.component';

describe('FrmBuildFormComponent', () => {
  let component: FrmBuildFormComponent;
  let fixture: ComponentFixture<FrmBuildFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrmBuildFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FrmBuildFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
