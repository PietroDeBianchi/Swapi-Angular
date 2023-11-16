import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpireapiComponent } from './empireapi.component';

describe('EmpireapiComponent', () => {
  let component: EmpireapiComponent;
  let fixture: ComponentFixture<EmpireapiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpireapiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmpireapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
