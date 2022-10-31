import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceNewComponent } from './experience-new.component';

describe('ExperienceNewComponent', () => {
  let component: ExperienceNewComponent;
  let fixture: ComponentFixture<ExperienceNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienceNewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExperienceNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
