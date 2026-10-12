import { Routes } from '@angular/router';
import { Home } from './home/home';
import { ConferanceList } from './conferance-list/conferance-list';

export const routes: Routes = [

{path: 'home',component:Home},
{path: 'list',component:ConferanceList},
{path: '',redirectTo: 'home' , pathMatch:'full'}

];
