import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentAssistantComponent } from './content-assistant.component';

describe('ContentAssistantComponent', () => {
  let component: ContentAssistantComponent;
  let fixture: ComponentFixture<ContentAssistantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentAssistantComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentAssistantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
