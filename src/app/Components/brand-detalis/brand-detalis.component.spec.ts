import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandDetalisComponent } from './brand-detalis.component';

describe('BrandDetalisComponent', () => {
  let component: BrandDetalisComponent;
  let fixture: ComponentFixture<BrandDetalisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BrandDetalisComponent]
    });
    fixture = TestBed.createComponent(BrandDetalisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
