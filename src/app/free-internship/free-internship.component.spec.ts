import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeInternshipComponent } from './free-internship.component';

describe('FreeInternshipComponent', () => {
  let component: FreeInternshipComponent;
  let fixture: ComponentFixture<FreeInternshipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FreeInternshipComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FreeInternshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
