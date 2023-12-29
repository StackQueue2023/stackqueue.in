import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealtimeInternshipComponent } from './realtime-internship.component';

describe('RealtimeInternshipComponent', () => {
  let component: RealtimeInternshipComponent;
  let fixture: ComponentFixture<RealtimeInternshipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RealtimeInternshipComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RealtimeInternshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
