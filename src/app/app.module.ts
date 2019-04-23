// AngularModules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { appRouting } from './app.router';
// Providers
import { CourseService } from './services/course.service';
import { CartingService } from './services/carting.service';
// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { CursoComponent } from './components/curso/curso.component';
import { CartComponent } from './components/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    BuscadorComponent,
    AboutComponent,
    FooterComponent,
    CursoComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    appRouting
  ],
  providers: [
    CourseService,
    CartingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
