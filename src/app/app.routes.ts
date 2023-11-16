import { Routes } from '@angular/router';
// PAGES COMPONENTS
import {RestapiComponent} from './restapi/restapi.component';
import { PlanetapiComponent } from './planetapi/planetapi.component';
import { StarshipapiComponent } from './starshipapi/starshipapi.component';

export const routes: Routes = [
    {path: '', component: RestapiComponent }, // Default route
    {path: 'app-planetapi', component: PlanetapiComponent},
    {path: 'app-starshipapi', component: StarshipapiComponent},
];
