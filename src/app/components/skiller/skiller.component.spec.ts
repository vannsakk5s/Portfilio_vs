import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillerComponent } from './skiller.component';

describe('SkillerComponent', () => {
  let component: SkillerComponent;
  let fixture: ComponentFixture<SkillerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
