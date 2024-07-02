import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdduserlistComponent } from './adduserlist.component';

describe('AdduserlistComponent', () => {
  let component: AdduserlistComponent;
  let fixture: ComponentFixture<AdduserlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdduserlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdduserlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
