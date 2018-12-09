import { BrowserModule } from '@angular/platform-browser';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ZadaciComponent } from './zadaci/zadaci.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { NavbarComponent } from './navbar/navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ListaZadatakaComponent } from './lista-zadataka/lista-zadataka.component';
import {SharedService} from './shared/shared.service';



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
    MatFormFieldModule,
    MatExpansionModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
