import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { CursoComponent } from './components/curso/curso.component';

const routes: Routes = [
    { path: 'inicio', component: HomeComponent },
    { path: 'nosotros', component: AboutComponent },
    { path: 'busqueda/:value', component: BuscadorComponent },
    { path: 'curso/:id', component: CursoComponent },
    { path: '**', pathMatch:'full', redirectTo: 'inicio' }
];

export const appRouting = RouterModule.forRoot(routes);