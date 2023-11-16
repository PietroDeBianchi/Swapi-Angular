import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourcharacterComponent } from './yourcharacter.component';

describe('YourcharacterComponent', () => {
  let component: YourcharacterComponent;
  let fixture: ComponentFixture<YourcharacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YourcharacterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(YourcharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
