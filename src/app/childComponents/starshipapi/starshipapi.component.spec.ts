import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarshipapiComponent } from './starshipapi.component';

describe('StarshipapiComponent', () => {
  let component: StarshipapiComponent;
  let fixture: ComponentFixture<StarshipapiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StarshipapiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StarshipapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
