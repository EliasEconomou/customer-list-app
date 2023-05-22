import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactPhonesComponent } from './contact-phones.component';

describe('ContactPhonesComponent', () => {
  let component: ContactPhonesComponent;
  let fixture: ComponentFixture<ContactPhonesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactPhonesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactPhonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
