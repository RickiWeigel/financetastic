import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadmenuComponent } from './headmenu.component';

describe('HeadmenuComponent', () => {
  let component: HeadmenuComponent;
  let fixture: ComponentFixture<HeadmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeadmenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeadmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
