import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EstudiantesComponent } from './pages/colegio/estudiantes/estudiantes.component';
import { MaestrosComponent } from './pages/colegio/maestros/maestros.component';
import { DirectorComponent } from './pages/colegio/director/director.component';
import { NavigationComponent } from './pages/colegio/navigation/navigation.component';
import { WelcomeComponent } from './pages/home/welcome/welcome.component';
import { NavbarComponent } from './pages/home/navbar/navbar.component';
import { AuthComponent } from './pages/auth/auth.component';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './pages/colegio/dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    EstudiantesComponent,
    MaestrosComponent,
    DirectorComponent,
    NavigationComponent,
    WelcomeComponent,
    NavbarComponent,
    AuthComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
