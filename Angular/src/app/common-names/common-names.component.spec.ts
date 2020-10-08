import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonNamesComponent } from './common-names.component';

describe('CommonNamesComponent', () => {
  let component: CommonNamesComponent;
  let fixture: ComponentFixture<CommonNamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommonNamesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonNamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
