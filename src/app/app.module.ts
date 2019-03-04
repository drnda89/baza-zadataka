import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ZadaciComponent } from './zadaci/zadaci.component';
import { HttpClientModule } from '@angular/common/http';

import { NavbarComponent } from './navbar/navbar.component';
import { ListaZadatakaComponent } from './lista-zadataka/lista-zadataka.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from './material/material.module';

const routes: Routes = [
  { path: '', component: ListaZadatakaComponent },
  { path: 'home', component: ListaZadatakaComponent },
  { path: 'zadatak', component: ZadaciComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    ZadaciComponent,
    NavbarComponent,
    ListaZadatakaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
