import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetapiComponent } from './planetapi.component';

describe('PlanetapiComponent', () => {
  let component: PlanetapiComponent;
  let fixture: ComponentFixture<PlanetapiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanetapiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlanetapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
