import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomePageContent } from './welcome-page-content';

describe('WelcomePageContent', () => {
  let component: WelcomePageContent;
  let fixture: ComponentFixture<WelcomePageContent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WelcomePageContent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WelcomePageContent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
