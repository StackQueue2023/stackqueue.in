import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopInternshipComponent } from './top-internship.component';

describe('TopInternshipComponent', () => {
  let component: TopInternshipComponent;
  let fixture: ComponentFixture<TopInternshipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopInternshipComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopInternshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
