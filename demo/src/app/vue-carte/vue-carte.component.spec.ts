import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VueCarteComponent } from './vue-carte.component';

describe('VueCarteComponent', () => {
  let component: VueCarteComponent;
  let fixture: ComponentFixture<VueCarteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VueCarteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VueCarteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
