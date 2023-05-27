import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstudiantesComponent } from './pages/colegio/estudiantes/estudiantes.component';
import { MaestrosComponent } from './pages/colegio/maestros/maestros.component';
import { DirectorComponent } from './pages/colegio/director/director.component';
import { WelcomeComponent } from './pages/home/welcome/welcome.component';
import { AuthComponent } from './pages/auth/auth.component';
import { DashboardComponent } from './pages/colegio/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: 'index', component: WelcomeComponent },
  { path: 'estudiantes', component: EstudiantesComponent },
  { path: 'maestros', component: MaestrosComponent },
  { path: 'director', component: DirectorComponent },
  { path: 'login', component: AuthComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '**', redirectTo: 'index' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
