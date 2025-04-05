import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackViewerComponent } from './feedback-viewer.component';

describe('FeedbackViewerComponent', () => {
  let component: FeedbackViewerComponent;
  let fixture: ComponentFixture<FeedbackViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeedbackViewerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FeedbackViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
