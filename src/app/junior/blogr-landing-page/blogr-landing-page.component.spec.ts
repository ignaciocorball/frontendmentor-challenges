import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogrLandingPageComponent } from './blogr-landing-page.component';

describe('BlogrLandingPageComponent', () => {
  let component: BlogrLandingPageComponent;
  let fixture: ComponentFixture<BlogrLandingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogrLandingPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogrLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
