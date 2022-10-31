import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillNewComponent } from './skill-new.component';

describe('SkillNewComponent', () => {
  let component: SkillNewComponent;
  let fixture: ComponentFixture<SkillNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillNewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
