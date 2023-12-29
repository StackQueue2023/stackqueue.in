import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendedInternComponent } from './recommended-intern.component';

describe('RecommendedInternComponent', () => {
  let component: RecommendedInternComponent;
  let fixture: ComponentFixture<RecommendedInternComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecommendedInternComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecommendedInternComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
