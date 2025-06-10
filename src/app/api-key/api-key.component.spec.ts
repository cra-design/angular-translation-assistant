import { ComponentFixture, TestBed } from '@angular/core/testing';

import { APIKeyComponent } from './api-key.component';

describe('APIKeyComponent', () => {
  let component: APIKeyComponent;
  let fixture: ComponentFixture<APIKeyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [APIKeyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(APIKeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
