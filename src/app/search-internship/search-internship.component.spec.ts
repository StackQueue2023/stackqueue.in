import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchInternshipComponent } from './search-internship.component';

describe('SearchInternshipComponent', () => {
  let component: SearchInternshipComponent;
  let fixture: ComponentFixture<SearchInternshipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchInternshipComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchInternshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
