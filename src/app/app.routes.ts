import { Routes } from '@angular/router';
// PAGES COMPONENTS
import {RestapiComponent} from './restapi/restapi.component';
import { PlanetapiComponent } from './childComponents/planetapi/planetapi.component';
import { StarshipapiComponent } from './childComponents/starshipapi/starshipapi.component';
import { EmpireapiComponent } from './childComponents/empireapi/empireapi.component';

export const routes: Routes = [
    {path: '', component: RestapiComponent }, // Default route
    {path: 'app-planetapi', component: PlanetapiComponent},
    {path: 'app-starshipapi', component: StarshipapiComponent},
    {path: 'app-empireapi', component: EmpireapiComponent},

];
