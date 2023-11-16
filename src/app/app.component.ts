import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'; // To import if API call in Child Module
import { RouterOutlet } from '@angular/router';
import { RouterLink } from '@angular/router';
// PAGES COMPONENTS
import {RestapiComponent} from './restapi/restapi.component';
import { PlanetapiComponent } from './childComponents/planetapi/planetapi.component';
import { StarshipapiComponent } from './childComponents/starshipapi/starshipapi.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HttpClientModule, RouterOutlet, RouterLink, RestapiComponent, PlanetapiComponent, StarshipapiComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Swapi Wars';
}
