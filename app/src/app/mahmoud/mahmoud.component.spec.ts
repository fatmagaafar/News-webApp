import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MahmoudComponent } from './mahmoud.component';

describe('MahmoudComponent', () => {
  let component: MahmoudComponent;
  let fixture: ComponentFixture<MahmoudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MahmoudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MahmoudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
