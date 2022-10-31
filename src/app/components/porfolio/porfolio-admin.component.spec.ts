import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorfolioAdminComponent } from './porfolio-admin.component';

describe('PorfolioAdminComponent', () => {
  let component: PorfolioAdminComponent;
  let fixture: ComponentFixture<PorfolioAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PorfolioAdminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PorfolioAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
